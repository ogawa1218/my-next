import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const STORES = new Set([
  "singapore-cbd",
  "kuala-lumpur-suria",
]);
const SET_TYPES = new Set([
  "kaku-6",
  "kaku-mix-6",
  "kaku-box-9",
  "kaku-gift-12",
]);
const FLAVOR_SLUGS = new Set([
  "salmon-classic",
  "spicy-tuna",
  "teriyaki-chicken",
  "miso-mushroom",
  "vegan-umami-cube",
  "aburi-shrimp",
]);
const LOCALES = new Set(["ja", "en", "zh"]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FlavorPick = { slug: string; qty: number };

function asNonEmptyString(v: unknown, max = 500): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim();
  if (!s || s.length > max) return null;
  return s;
}

export async function POST(req: Request) {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Reservation service is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const b = body as Record<string, unknown>;

  const store = asNonEmptyString(b.store);
  const pickupAt = asNonEmptyString(b.pickup_at);
  const setType = asNonEmptyString(b.set_type);
  const guestName = asNonEmptyString(b.guest_name, 120);
  const guestEmail = asNonEmptyString(b.guest_email, 200);
  const guestPhone =
    typeof b.guest_phone === "string" && b.guest_phone.trim()
      ? b.guest_phone.trim().slice(0, 40)
      : null;
  const notes =
    typeof b.notes === "string" && b.notes.trim()
      ? b.notes.trim().slice(0, 1000)
      : null;
  const locale =
    typeof b.locale === "string" && LOCALES.has(b.locale) ? b.locale : "ja";

  if (!store || !STORES.has(store)) {
    return NextResponse.json({ error: "Unknown store." }, { status: 400 });
  }
  if (!setType || !SET_TYPES.has(setType)) {
    return NextResponse.json({ error: "Unknown set type." }, { status: 400 });
  }
  if (!pickupAt || Number.isNaN(Date.parse(pickupAt))) {
    return NextResponse.json(
      { error: "Invalid pickup time." },
      { status: 400 },
    );
  }
  const pickupMs = Date.parse(pickupAt);
  if (pickupMs < Date.now() - 60_000) {
    return NextResponse.json(
      { error: "Pickup time must be in the future." },
      { status: 400 },
    );
  }
  if (!guestName) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!guestEmail || !EMAIL_RE.test(guestEmail)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }

  const rawPicks = Array.isArray(b.flavor_selection) ? b.flavor_selection : [];
  const flavors: FlavorPick[] = [];
  for (const raw of rawPicks) {
    if (!raw || typeof raw !== "object") continue;
    const r = raw as Record<string, unknown>;
    const slug = typeof r.slug === "string" ? r.slug : "";
    const qty = typeof r.qty === "number" ? Math.floor(r.qty) : 0;
    if (FLAVOR_SLUGS.has(slug) && qty > 0 && qty <= 24) {
      flavors.push({ slug, qty });
    }
  }

  const { data, error } = await supabase
    .from("reservations")
    .insert({
      store,
      pickup_at: new Date(pickupMs).toISOString(),
      set_type: setType,
      flavor_selection: flavors,
      guest_name: guestName,
      guest_email: guestEmail,
      guest_phone: guestPhone,
      notes,
      locale,
    })
    .select("id, created_at")
    .single();

  if (error) {
    console.error("reserve insert error", error);
    return NextResponse.json(
      { error: "Could not save reservation." },
      { status: 500 },
    );
  }

  return NextResponse.json({ id: data.id, created_at: data.created_at });
}
