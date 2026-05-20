"use client";

import { useState, type FormEvent } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  // No backend yet: validate client-side and show a confirmation state.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("done");
  };

  if (status === "done") {
    return (
      <p className="mx-auto max-w-md rounded-2xl border border-gold/30 bg-gold/10 px-6 py-5 text-center text-sm text-navy-deep/80">
        {t.newsletter.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mx-auto max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          {t.newsletter.placeholder}
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={t.newsletter.placeholder}
          aria-invalid={status === "error"}
          className="w-full rounded-full border border-gold/25 bg-cream px-6 py-4 text-sm text-navy-deep placeholder:text-navy-deep/35 outline-none transition-colors focus:border-gold/70"
        />
        <button
          type="submit"
          className="rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-[0.08em] text-navy-deep transition-transform hover:scale-[1.03]"
        >
          {t.newsletter.button}
        </button>
      </div>
      <p
        className={`mt-3 text-center text-xs ${
          status === "error" ? "text-red-300" : "text-navy-deep/40"
        }`}
      >
        {status === "error" ? t.newsletter.invalid : t.newsletter.privacy}
      </p>
    </form>
  );
}
