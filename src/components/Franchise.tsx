"use client";

import { useState, type FormEvent } from "react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/LanguageProvider";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Franchise() {
  const { t } = useI18n();
  const f = t.franchisePage;

  return (
    <main id="top" className="relative overflow-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-24 lg:px-10 lg:pt-40 lg:pb-32">
        <div
          className="pointer-events-none absolute right-0 top-1/4 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="animate-fade text-xs font-medium uppercase tracking-[0.4em] text-gold">
            {f.eyebrow}
          </p>
          <h1 className="mt-8 font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.98] text-navy-deep">
            {f.title}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-navy-deep/70">
            {f.lead}
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#inquiry"
              className="rounded-full bg-gold px-9 py-4 text-sm font-medium tracking-[0.08em] text-navy-deep transition-transform hover:scale-[1.03]"
            >
              {f.ctaInquire}
            </a>
            <a
              href="#economics"
              className="text-sm font-medium tracking-[0.08em] text-navy-deep/70 underline-offset-8 transition-colors hover:text-gold hover:underline"
            >
              {f.ctaEconomics}
            </a>
          </div>
        </div>
      </section>

      {/* OPPORTUNITY */}
      <section className="border-y border-gold/15 bg-cream px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              {f.opportunityTitle}
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.05] text-navy-deep">
              {f.opportunityLead}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/15 bg-gold/15 sm:grid-cols-2 lg:grid-cols-4">
            {f.stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 80} className="bg-cream-dim p-8 lg:p-10">
                <p className="font-display text-4xl font-semibold text-gradient-gold lg:text-5xl">
                  {s.n}
                </p>
                <p className="mt-3 text-sm leading-snug text-navy-deep/55">
                  {s.l}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ECONOMICS */}
      <section id="economics" className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              {f.economicsTitle}
            </p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] text-navy-deep">
              {f.economicsLead}
            </h2>
          </Reveal>
          <Reveal>
            <ul className="space-y-5">
              {f.economics.map((b) => (
                <li key={b} className="flex gap-4 text-lg text-navy-deep/75">
                  <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="border-y border-gold/15 bg-cream px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              {f.systemTitle}
            </p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] text-navy-deep">
              {f.systemLead}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/15 bg-gold/15 md:grid-cols-2 lg:grid-cols-3">
            {f.system.map((s, i) => (
              <Reveal key={s.k} delay={i * 70} className="bg-cream-dim p-8">
                <span className="font-display text-2xl text-gold/40">
                  {s.k}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-deep">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-deep/55">
                  {s.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET + TIMELINE */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              {f.targetTitle}
            </p>
            <ul className="mt-8 space-y-4">
              {f.target.map((b) => (
                <li key={b} className="flex gap-4 text-navy-deep/75">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              {f.timelineTitle}
            </p>
            <ol className="mt-8 space-y-6">
              {f.timeline.map((s) => (
                <li key={s.k} className="flex gap-5">
                  <span className="font-display text-2xl text-gold/40">
                    {s.k}
                  </span>
                  <div>
                    <p className="font-display text-lg text-navy-deep">{s.t}</p>
                    <p className="mt-1 text-sm text-navy-deep/55">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <InquirySection />

      <Footer />
    </main>
  );
}

function InquirySection() {
  const { t, locale } = useI18n();
  const f = t.franchisePage;
  const form = f.form;
  const [state, setState] = useState({
    full_name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    budget_band: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function update<K extends keyof typeof state>(
    key: K,
    value: (typeof state)[K],
  ) {
    setState((s) => ({ ...s, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    if (!state.full_name.trim()) {
      setErrorMsg(form.errors.required);
      return;
    }
    if (!EMAIL_RE.test(state.email.trim())) {
      setErrorMsg(form.errors.invalidEmail);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/franchise-inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...state,
          full_name: state.full_name.trim(),
          email: state.email.trim(),
          locale,
        }),
      });
      if (!res.ok) {
        setErrorMsg(form.errors.network);
        return;
      }
      setDone(true);
    } catch {
      setErrorMsg(form.errors.network);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="inquiry"
      className="border-y border-gold/15 bg-cream px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            {f.inquiryTitle}
          </p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] text-navy-deep">
            {f.inquiryLead}
          </h2>
        </Reveal>

        {done ? (
          <Reveal className="mt-10 rounded-2xl border border-gold/30 bg-gold/10 p-8 text-center">
            <p className="font-display text-xs tracking-[0.3em] text-gold">
              ✓ SENT
            </p>
            <p className="mt-4 text-navy-deep/80">{form.success}</p>
          </Reveal>
        ) : (
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="mt-10 grid gap-5 rounded-2xl border border-gold/20 bg-cream-dim p-7 sm:grid-cols-2 sm:p-10"
            >
              <Row label={form.name} required>
                <Input
                  value={state.full_name}
                  onChange={(v) => update("full_name", v)}
                  autoComplete="name"
                />
              </Row>
              <Row label={`${form.company}（${form.companyOptional}）`}>
                <Input
                  value={state.company}
                  onChange={(v) => update("company", v)}
                  autoComplete="organization"
                />
              </Row>
              <Row label={form.email} required>
                <Input
                  type="email"
                  value={state.email}
                  onChange={(v) => update("email", v)}
                  autoComplete="email"
                />
              </Row>
              <Row label={`${form.phone}（${form.phoneOptional}）`}>
                <Input
                  type="tel"
                  value={state.phone}
                  onChange={(v) => update("phone", v)}
                  autoComplete="tel"
                />
              </Row>
              <Row label={form.country}>
                <Input
                  value={state.country}
                  onChange={(v) => update("country", v)}
                  autoComplete="country-name"
                />
              </Row>
              <Row label={form.city}>
                <Input
                  value={state.city}
                  onChange={(v) => update("city", v)}
                />
              </Row>
              <Row label={form.budget} full>
                <select
                  value={state.budget_band}
                  onChange={(e) => update("budget_band", e.target.value)}
                  className="w-full rounded-xl border border-gold/25 bg-cream px-4 py-3 text-navy-deep outline-none focus:border-gold/70"
                >
                  <option value="">—</option>
                  {form.budgets.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </Row>
              <Row
                label={`${form.message}（${form.messageOptional}）`}
                full
              >
                <textarea
                  rows={4}
                  value={state.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full rounded-xl border border-gold/25 bg-cream px-4 py-3 text-navy-deep outline-none focus:border-gold/70"
                />
              </Row>

              {errorMsg && (
                <div className="sm:col-span-2">
                  <p className="rounded-lg border border-red-300/40 bg-red-300/10 px-4 py-3 text-sm text-red-200">
                    {errorMsg}
                  </p>
                </div>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-[0.08em] text-navy-deep transition-transform hover:scale-[1.01] disabled:opacity-60"
                >
                  {submitting ? form.submitting : form.submit}
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Row({
  label,
  required,
  full,
  children,
}: {
  label: string;
  required?: boolean;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="block text-xs font-medium uppercase tracking-[0.2em] text-navy-deep/70">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Input({
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
      className="w-full rounded-xl border border-gold/25 bg-cream px-4 py-3 text-navy-deep outline-none focus:border-gold/70"
    />
  );
}
