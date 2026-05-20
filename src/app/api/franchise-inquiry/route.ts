import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const LOCALES = new Set(["ja", "en", "zh"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function trimOrNull(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim();
  if (!s) return null;
  return s.slice(0, max);
}

export async function POST(req: Request) {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Inquiry service is not configured." },
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

  const fullName = trimOrNull(b.full_name, 120);
  const email = trimOrNull(b.email, 200);
  const company = trimOrNull(b.company, 200);
  const phone = trimOrNull(b.phone, 40);
  const country = trimOrNull(b.country, 80);
  const city = trimOrNull(b.city, 80);
  const budgetBand = trimOrNull(b.budget_band, 40);
  const message = trimOrNull(b.message, 2000);
  const locale =
    typeof b.locale === "string" && LOCALES.has(b.locale) ? b.locale : "ja";

  if (!fullName) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }

  const { data, error } = await supabase
    .from("franchise_inquiries")
    .insert({
      full_name: fullName,
      email,
      company,
      phone,
      country,
      city,
      budget_band: budgetBand,
      message,
      locale,
    })
    .select("id, created_at")
    .single();

  if (error) {
    return NextResponse.json(
      { error: "Could not save inquiry." },
      { status: 500 },
    );
  }

  return NextResponse.json({ id: data.id, created_at: data.created_at });
}
