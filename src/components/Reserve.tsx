"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/LanguageProvider";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SET_CAPACITY: Record<string, number> = {
  "kaku-6": 6,
  "kaku-mix-6": 6,
  "kaku-box-9": 9,
  "kaku-gift-12": 12,
};

type Step = 1 | 2 | 3;
type FormState = {
  store: string;
  pickupAt: string;
  setType: string;
  flavors: Record<string, number>;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

function minDateTimeLocal(): string {
  const d = new Date(Date.now() + 60 * 60 * 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function Reserve() {
  const { t, locale } = useI18n();
  const r = t.reservePage;

  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<{
    id: string;
    state: FormState;
  } | null>(null);
  const [minPickup] = useState(minDateTimeLocal());

  const [form, setForm] = useState<FormState>(() => ({
    store: t.stores[0]?.id ?? "",
    pickupAt: "",
    setType: t.menu.sets[2]?.id ?? t.menu.sets[0]?.id ?? "",
    flavors: {},
    name: "",
    email: "",
    phone: "",
    notes: "",
  }));

  const setSize = SET_CAPACITY[form.setType] ?? 6;
  const totalFlavors = useMemo(
    () => Object.values(form.flavors).reduce((a, b) => a + b, 0),
    [form.flavors],
  );

  const storeLabel = (id: string) => {
    const s = t.stores.find((x) => x.id === id);
    return s ? `${s.city} — ${s.venue}` : id;
  };
  const setLabel = (id: string) =>
    t.menu.sets.find((s) => s.id === id)?.name ?? id;
  const flavorLabel = (slug: string) =>
    t.menu.items.find((i) => i.slug === slug)?.name ?? slug;

  function bumpFlavor(slug: string, delta: number) {
    setForm((f) => {
      const next = { ...f.flavors };
      const cur = next[slug] ?? 0;
      const proposed = Math.max(0, cur + delta);
      const otherTotal = Object.entries(f.flavors)
        .filter(([k]) => k !== slug)
        .reduce((a, [, v]) => a + v, 0);
      if (proposed + otherTotal > setSize) return f;
      if (proposed === 0) delete next[slug];
      else next[slug] = proposed;
      return { ...f, flavors: next };
    });
  }

  function onSelectSet(id: string) {
    setForm((f) => ({ ...f, setType: id, flavors: {} }));
  }

  function validateStep(s: Step): string | null {
    if (s === 1) {
      if (!form.store) return r.errors.required;
      if (!form.pickupAt) return r.errors.required;
      if (Number.isNaN(Date.parse(form.pickupAt))) return r.errors.futureTime;
      if (Date.parse(form.pickupAt) <= Date.now()) return r.errors.futureTime;
    }
    if (s === 2) {
      if (!form.setType) return r.errors.required;
      if (totalFlavors !== setSize) return r.errors.quantity;
    }
    if (s === 3) {
      if (!form.name.trim()) return r.errors.required;
      if (!EMAIL_RE.test(form.email.trim())) return r.errors.invalidEmail;
    }
    return null;
  }

  function goNext() {
    const err = validateStep(step);
    if (err) {
      setErrorMsg(err);
      return;
    }
    setErrorMsg(null);
    setStep((s) => (s < 3 ? ((s + 1) as Step) : s));
  }

  function goBack() {
    setErrorMsg(null);
    setStep((s) => (s > 1 ? ((s - 1) as Step) : s));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const err = validateStep(3);
    if (err) {
      setErrorMsg(err);
      return;
    }
    setSubmitting(true);
    setErrorMsg(null);
    try {
      const flavorPicks = Object.entries(form.flavors).map(([slug, qty]) => ({
        slug,
        qty,
      }));
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          store: form.store,
          pickup_at: new Date(form.pickupAt).toISOString(),
          set_type: form.setType,
          flavor_selection: flavorPicks,
          guest_name: form.name.trim(),
          guest_email: form.email.trim(),
          guest_phone: form.phone.trim() || null,
          notes: form.notes.trim() || null,
          locale,
        }),
      });
      if (!res.ok) {
        setErrorMsg(r.errors.network);
        return;
      }
      const data = (await res.json()) as { id: string };
      setConfirmed({ id: data.id, state: form });
    } catch {
      setErrorMsg(r.errors.network);
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setConfirmed(null);
    setStep(1);
    setForm({
      store: t.stores[0]?.id ?? "",
      pickupAt: "",
      setType: t.menu.sets[2]?.id ?? t.menu.sets[0]?.id ?? "",
      flavors: {},
      name: "",
      email: "",
      phone: "",
      notes: "",
    });
  }

  return (
    <main id="top" className="relative overflow-hidden">
      <Nav />

      <section className="relative px-6 pt-32 pb-16 lg:px-10">
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            {r.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] text-cream">
            {r.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
            {r.lead}
          </p>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-10">
        <div className="mx-auto max-w-2xl">
          {confirmed ? (
            <SuccessPanel
              id={confirmed.id}
              state={confirmed.state}
              storeLabel={storeLabel}
              setLabel={setLabel}
              flavorLabel={flavorLabel}
              onAnother={resetForm}
              t={r}
            />
          ) : (
            <Reveal>
              <Stepper step={step} labels={r.stepLabels} />

              <form
                onSubmit={onSubmit}
                className="mt-10 rounded-2xl border border-gold/20 bg-navy-deep p-7 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-10"
              >
                {step === 1 && (
                  <fieldset className="space-y-7">
                    <legend className="font-display text-2xl text-cream">
                      {r.pickup.title}
                    </legend>

                    <Field label={r.pickup.storeLabel} helper={r.pickup.storeHelper}>
                      <select
                        value={form.store}
                        onChange={(e) =>
                          setForm({ ...form, store: e.target.value })
                        }
                        className="w-full rounded-xl border border-gold/25 bg-navy px-4 py-3 text-cream outline-none focus:border-gold/70"
                      >
                        {t.stores.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.city} — {s.venue}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label={r.pickup.pickupAtLabel}
                      helper={r.pickup.pickupHelper}
                    >
                      <input
                        type="datetime-local"
                        min={minPickup}
                        value={form.pickupAt}
                        onChange={(e) =>
                          setForm({ ...form, pickupAt: e.target.value })
                        }
                        className="w-full rounded-xl border border-gold/25 bg-navy px-4 py-3 text-cream outline-none focus:border-gold/70"
                      />
                    </Field>
                  </fieldset>
                )}

                {step === 2 && (
                  <fieldset className="space-y-7">
                    <legend className="font-display text-2xl text-cream">
                      {r.selection.title}
                    </legend>

                    <Field label={r.selection.setLabel}>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {t.menu.sets.map((s) => {
                          const selected = form.setType === s.id;
                          return (
                            <button
                              type="button"
                              key={s.id}
                              onClick={() => onSelectSet(s.id)}
                              className={`rounded-xl border p-4 text-left transition-colors ${
                                selected
                                  ? "border-gold bg-gold/15"
                                  : "border-gold/20 bg-navy hover:border-gold/50"
                              }`}
                            >
                              <p className="font-display text-lg text-cream">
                                {s.name}
                              </p>
                              <p className="mt-1 text-xs text-cream/55">
                                {s.detail}
                              </p>
                              <p className="mt-3 font-display text-xl text-gold">
                                {s.price}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </Field>

                    <Field
                      label={r.selection.flavorsLabel}
                      helper={r.selection.flavorsHelper}
                    >
                      <div className="rounded-xl border border-gold/20 bg-navy">
                        {t.menu.items.map((m, i) => {
                          const qty = form.flavors[m.slug] ?? 0;
                          const remaining = setSize - totalFlavors;
                          return (
                            <div
                              key={m.slug}
                              className={`flex items-center justify-between gap-4 px-4 py-3 ${
                                i > 0 ? "border-t border-gold/15" : ""
                              }`}
                            >
                              <div className="min-w-0">
                                <p className="truncate text-sm text-cream">
                                  {m.name}
                                </p>
                                <p className="truncate text-xs text-cream/45">
                                  {m.note}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  aria-label="−"
                                  onClick={() => bumpFlavor(m.slug, -1)}
                                  disabled={qty === 0}
                                  className="h-8 w-8 rounded-full border border-gold/30 text-cream disabled:opacity-30"
                                >
                                  −
                                </button>
                                <span className="w-6 text-center font-display text-cream">
                                  {qty}
                                </span>
                                <button
                                  type="button"
                                  aria-label="+"
                                  onClick={() => bumpFlavor(m.slug, +1)}
                                  disabled={remaining <= 0}
                                  className="h-8 w-8 rounded-full border border-gold/30 text-cream disabled:opacity-30"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <p
                        className={`mt-3 text-right text-xs tracking-[0.1em] ${
                          totalFlavors === setSize
                            ? "text-gold"
                            : "text-cream/50"
                        }`}
                      >
                        {r.selection.countLabel} {totalFlavors} / {setSize}
                      </p>
                    </Field>
                  </fieldset>
                )}

                {step === 3 && (
                  <fieldset className="space-y-6">
                    <legend className="font-display text-2xl text-cream">
                      {r.details.title}
                    </legend>

                    <Field label={r.details.name}>
                      <TextInput
                        value={form.name}
                        onChange={(v) => setForm({ ...form, name: v })}
                        autoComplete="name"
                      />
                    </Field>
                    <Field label={r.details.email}>
                      <TextInput
                        type="email"
                        value={form.email}
                        onChange={(v) => setForm({ ...form, email: v })}
                        autoComplete="email"
                      />
                    </Field>
                    <Field
                      label={`${r.details.phone}（${r.details.phoneOptional}）`}
                    >
                      <TextInput
                        type="tel"
                        value={form.phone}
                        onChange={(v) => setForm({ ...form, phone: v })}
                        autoComplete="tel"
                      />
                    </Field>
                    <Field
                      label={`${r.details.notes}（${r.details.notesOptional}）`}
                    >
                      <textarea
                        rows={3}
                        value={form.notes}
                        onChange={(e) =>
                          setForm({ ...form, notes: e.target.value })
                        }
                        className="w-full rounded-xl border border-gold/25 bg-navy px-4 py-3 text-cream outline-none focus:border-gold/70"
                      />
                    </Field>

                    <SummaryPanel
                      state={form}
                      storeLabel={storeLabel}
                      setLabel={setLabel}
                      flavorLabel={flavorLabel}
                      t={r}
                    />
                  </fieldset>
                )}

                {errorMsg && (
                  <p className="mt-6 rounded-lg border border-red-300/40 bg-red-300/10 px-4 py-3 text-sm text-red-200">
                    {errorMsg}
                  </p>
                )}

                <div className="mt-8 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 1 || submitting}
                    className="rounded-full px-6 py-3 text-sm tracking-[0.08em] text-cream/70 transition-colors hover:text-gold disabled:opacity-30"
                  >
                    {r.buttons.back}
                  </button>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      className="rounded-full bg-gold px-8 py-3 text-sm font-medium tracking-[0.08em] text-navy-deep transition-transform hover:scale-[1.03]"
                    >
                      {r.buttons.next}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={submitting}
                      className="rounded-full bg-gold px-8 py-3 text-sm font-medium tracking-[0.08em] text-navy-deep transition-transform hover:scale-[1.03] disabled:opacity-60"
                    >
                      {submitting ? r.buttons.submitting : r.buttons.submit}
                    </button>
                  )}
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Stepper({
  step,
  labels,
}: {
  step: Step;
  labels: { pickup: string; selection: string; details: string };
}) {
  const items = [
    { n: 1, label: labels.pickup },
    { n: 2, label: labels.selection },
    { n: 3, label: labels.details },
  ];
  return (
    <ol className="flex items-center justify-center gap-4 text-xs tracking-[0.16em]">
      {items.map((it, i) => (
        <li key={it.n} className="flex items-center gap-4">
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full border font-display text-xs ${
              step >= it.n
                ? "border-gold bg-gold text-navy-deep"
                : "border-gold/30 text-cream/50"
            }`}
          >
            {it.n}
          </span>
          <span className={step >= it.n ? "text-cream" : "text-cream/40"}>
            {it.label}
          </span>
          {i < items.length - 1 && (
            <span className="h-px w-8 bg-gold/30" aria-hidden />
          )}
        </li>
      ))}
    </ol>
  );
}

function Field({
  label,
  helper,
  children,
}: {
  label: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-[0.2em] text-cream/70">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {helper && <span className="mt-2 block text-xs text-cream/45">{helper}</span>}
    </label>
  );
}

function TextInput({
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      autoComplete={autoComplete}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-gold/25 bg-navy px-4 py-3 text-cream outline-none focus:border-gold/70"
    />
  );
}

type SummaryT = {
  summary: {
    title: string;
    store: string;
    pickupAt: string;
    set: string;
    flavors: string;
    guest: string;
  };
};

function SummaryPanel({
  state,
  storeLabel,
  setLabel,
  flavorLabel,
  t,
}: {
  state: FormState;
  storeLabel: (id: string) => string;
  setLabel: (id: string) => string;
  flavorLabel: (slug: string) => string;
  t: SummaryT;
}) {
  const flavors = Object.entries(state.flavors)
    .map(([slug, qty]) => `${flavorLabel(slug)} × ${qty}`)
    .join(" / ");
  const pickup = state.pickupAt
    ? new Date(state.pickupAt).toLocaleString()
    : "—";
  return (
    <div className="mt-4 rounded-xl border border-gold/25 bg-navy p-5 text-sm">
      <p className="font-display text-lg text-cream">{t.summary.title}</p>
      <dl className="mt-4 grid grid-cols-[7rem_1fr] gap-y-2 text-cream/70">
        <dt className="text-cream/45">{t.summary.store}</dt>
        <dd>{storeLabel(state.store)}</dd>
        <dt className="text-cream/45">{t.summary.pickupAt}</dt>
        <dd>{pickup}</dd>
        <dt className="text-cream/45">{t.summary.set}</dt>
        <dd>{setLabel(state.setType)}</dd>
        <dt className="text-cream/45">{t.summary.flavors}</dt>
        <dd>{flavors || "—"}</dd>
        <dt className="text-cream/45">{t.summary.guest}</dt>
        <dd>
          {state.name} ({state.email})
        </dd>
      </dl>
    </div>
  );
}

function SuccessPanel({
  id,
  state,
  storeLabel,
  setLabel,
  flavorLabel,
  onAnother,
  t,
}: {
  id: string;
  state: FormState;
  storeLabel: (id: string) => string;
  setLabel: (id: string) => string;
  flavorLabel: (slug: string) => string;
  onAnother: () => void;
  t: {
    success: { title: string; lead: string; idLabel: string };
    buttons: { another: string; backHome: string };
  } & SummaryT;
}) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-gold/30 bg-navy-deep p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-12">
        <p className="font-display text-xs tracking-[0.3em] text-gold">
          ✓ CONFIRMED
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">
          {t.success.title}
        </h2>
        <p className="mt-4 text-cream/70">{t.success.lead}</p>

        <div className="mt-8 rounded-xl border border-gold/30 bg-navy p-6">
          <p className="text-xs tracking-[0.2em] text-cream/50">
            {t.success.idLabel}
          </p>
          <p className="mt-2 break-all font-display text-xl text-gold">{id}</p>
        </div>

        <div className="mt-8 text-left">
          <SummaryPanel
            state={state}
            storeLabel={storeLabel}
            setLabel={setLabel}
            flavorLabel={flavorLabel}
            t={t}
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={onAnother}
            className="rounded-full bg-gold px-8 py-3 text-sm font-medium tracking-[0.08em] text-navy-deep transition-transform hover:scale-[1.03]"
          >
            {t.buttons.another}
          </button>
          <Link
            href="/"
            className="rounded-full border border-gold/40 px-8 py-3 text-sm tracking-[0.08em] text-cream/80 transition-colors hover:text-gold"
          >
            {t.buttons.backHome}
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
