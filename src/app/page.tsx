import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import KakuBox from "@/components/KakuBox";

const menu = [
  {
    name: "Salmon Classic",
    note: "Salmon · avocado · toasted sesame",
    rice: "Multigrain",
  },
  {
    name: "Spicy Tuna",
    note: "Tuna · spicy mayo · scallion",
    rice: "Multigrain",
  },
  {
    name: "Teriyaki Chicken",
    note: "Glazed chicken · edamame",
    rice: "Multigrain",
  },
  {
    name: "Miso Mushroom",
    note: "Miso mushroom · silken tofu",
    rice: "Brown rice",
  },
  {
    name: "Inari Bomb",
    note: "Inari pocket · bulgogi-style",
    rice: "White rice",
  },
  {
    name: "Tropical Shrimp",
    note: "Tempura shrimp · mango",
    rice: "Multigrain",
  },
];

const sets = [
  { name: "KAKU 6", detail: "6 pc · 1 flavour", price: "$7.90" },
  { name: "KAKU MIX 6", detail: "6 pc · 2 flavours", price: "$8.90" },
  {
    name: "KAKU BOX 9",
    detail: "9 pc · 3 flavours",
    price: "$12.90",
    featured: true,
  },
  {
    name: "KAKU GIFT 12",
    detail: "12 pc · 4 flavours · premium box",
    price: "$16.90",
  },
];

const pillars = [
  {
    k: "01",
    t: "The Cube",
    d: "A precise 30mm cube. Geometry you have never eaten — and never forget.",
  },
  {
    k: "02",
    t: "Multigrain Core",
    d: "A house blend of 60% white rice and 40% ancient grains. Lighter, with intent.",
  },
  {
    k: "03",
    t: "Six Jewels",
    d: "Six core flavours, each engineered for colour, balance and a sub-28% food cost.",
  },
  {
    k: "04",
    t: "The Box",
    d: "A magnet-lid jewellery box. The unboxing is the marketing.",
  },
  {
    k: "05",
    t: "Eight Hours",
    d: "Chilled, eight-hour freshness window. Built for the Grab & Go rhythm.",
  },
];

const stats = [
  { n: "$13.5B", l: "Global sushi market by 2035" },
  { n: "7.9%", l: "Category CAGR through 2035" },
  { n: "+64%", l: "Growth in desk-lunch demand" },
  { n: "<28%", l: "Food cost across every SKU" },
];

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pt-32 pb-24 lg:px-10">
        <div
          className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]"
          aria-hidden
        />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="animate-fade text-xs font-medium uppercase tracking-[0.4em] text-gold">
              Premium Grab &amp; Go Sushi
            </p>
            <h1 className="mt-8 font-display text-[clamp(3.5rem,9vw,7.5rem)] font-semibold leading-[0.95] text-cream">
              Sushi,
              <br />
              <span className="text-gradient-gold">Squared.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/70">
              KAKU reimagines sushi as a cube — six jewelled flavours, a
              multigrain core, and a box that was made to be opened.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <a
                href="#menu"
                className="rounded-full bg-gold px-9 py-4 text-sm font-medium uppercase tracking-[0.2em] text-navy-deep transition-transform hover:scale-[1.03]"
              >
                Explore the Menu
              </a>
              <a
                href="#concept"
                className="text-sm font-medium uppercase tracking-[0.2em] text-cream/70 underline-offset-8 transition-colors hover:text-gold hover:underline"
              >
                The Concept
              </a>
            </div>
          </div>

          <div className="animate-rise">
            <div className="animate-float mx-auto max-w-md drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
              <KakuBox className="h-auto w-full" />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.35em] text-cream/40 lg:block"
          aria-hidden
        >
          Scroll
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-gold/15 bg-navy-deep py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-xs uppercase tracking-[0.3em] text-cream/40">
          {[
            "Health",
            "·",
            "Visual",
            "·",
            "Convenience",
            "·",
            "Singapore",
            "·",
            "Kuala Lumpur",
          ].map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </div>
      </div>

      {/* CONCEPT */}
      <section id="concept" className="px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              The Concept
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-cream">
              We did not change the sushi. We changed the box.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/65">
              The world sells rolls from supermarket fridges. KAKU sells a
              moment — a cube of sushi set in a jewellery box, designed for the
              twenty- and thirty-something who eats with her phone first.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-gold/15 bg-gold/15 md:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p, i) => (
              <Reveal
                key={p.k}
                delay={i * 80}
                className="group bg-navy p-8 transition-colors hover:bg-navy-deep"
              >
                <span className="font-display text-3xl text-gold/40 transition-colors group-hover:text-gold">
                  {p.k}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-cream">
                  {p.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/55">
                  {p.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        className="border-y border-gold/15 bg-navy-deep px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              The Menu
            </p>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-cream">
              Six jewels. Endless boxes.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 70}
                className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-navy p-8 transition-all hover:border-gold/50"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-2xl font-semibold text-cream">
                    {m.name}
                  </h3>
                  <span className="rounded-full border border-gold/30 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-gold/80">
                    {m.rice}
                  </span>
                </div>
                <p className="mt-4 text-sm text-cream/55">{m.note}</p>
                <div
                  className="mt-8 h-px w-full hairline opacity-50 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {sets.map((s, i) => (
              <Reveal
                key={s.name}
                delay={i * 70}
                className={`rounded-2xl p-8 text-center transition-transform hover:-translate-y-1 ${
                  s.featured
                    ? "bg-gold text-navy-deep"
                    : "border border-gold/15 bg-navy text-cream"
                }`}
              >
                {s.featured && (
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em]">
                    Most loved
                  </span>
                )}
                <h3
                  className={`font-display text-2xl font-semibold ${s.featured ? "mt-2" : ""}`}
                >
                  {s.name}
                </h3>
                <p
                  className={`mt-2 text-xs uppercase tracking-[0.18em] ${
                    s.featured ? "text-navy-deep/70" : "text-cream/45"
                  }`}
                >
                  {s.detail}
                </p>
                <p className="mt-6 font-display text-4xl font-semibold">
                  {s.price}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-cream/45">
            <span>Miso Soup Cup — $2.50</span>
            <span className="text-gold/40">·</span>
            <span>Edamame Cup — $2.90</span>
            <span className="text-gold/40">·</span>
            <span>Matcha Latte — $4.50</span>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              Why KAKU
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-cream">
              Health, visual and convenience — finally in one box.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-cream/65">
              The market is full of cheap rolls and quiet fridges. It is empty
              of a sushi that is good for you, made to be photographed, and
              built to be carried. KAKU is engineered for that gap.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "A multigrain core that earns its place in a wellness feed.",
                "A box whose unboxing becomes its own content engine.",
                "Sub-28% food cost and a 6–8 month payback per site.",
              ].map((t) => (
                <li key={t} className="flex gap-4 text-cream/70">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-px self-center overflow-hidden rounded-2xl border border-gold/15 bg-gold/15">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 90} className="bg-navy p-10">
                <p className="font-display text-5xl font-semibold text-gradient-gold">
                  {s.n}
                </p>
                <p className="mt-3 text-sm leading-snug text-cream/55">
                  {s.l}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section
        id="locations"
        className="border-y border-gold/15 bg-navy-deep px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              Where to find us
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-cream">
              Launching in the cities that move fastest.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                city: "Singapore",
                tag: "Pilot · 2026",
                d: "Among the densest office districts on earth — and the disposable income to match a $10–14 ticket.",
              },
              {
                city: "Kuala Lumpur",
                tag: "Pilot · 2026",
                d: "ASEAN's second city for purchasing power, our halal-validation hub, with rent 30–40% below Singapore.",
              },
            ].map((c, i) => (
              <Reveal
                key={c.city}
                delay={i * 100}
                className="group relative overflow-hidden rounded-3xl border border-gold/20 bg-navy p-10 lg:p-14"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-gold/70">
                  {c.tag}
                </span>
                <h3 className="mt-4 font-display text-4xl font-semibold text-cream lg:text-5xl">
                  {c.city}
                </h3>
                <p className="mt-6 max-w-sm text-cream/60">{c.d}</p>
                <div className="mt-10 h-px w-full hairline" aria-hidden />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream/45">
            <span>Next: Bangkok</span>
            <span className="text-gold/40">·</span>
            <span>Hong Kong</span>
            <span className="text-gold/40">·</span>
            <span>Sydney CBD</span>
          </Reveal>
        </div>
      </section>

      {/* SOCIAL / CTA */}
      <section className="relative px-6 py-28 lg:px-10 lg:py-44">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
          aria-hidden
        />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Join the box
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[1.02] text-cream">
            Open it. <span className="text-gradient-gold">Share it.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/65">
            Every box is a piece of content waiting to happen. Post your
            unboxing with{" "}
            <span className="text-gold">#KAKUChallenge</span> and help vote the
            next flavour into existence.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="#menu"
              className="rounded-full bg-gold px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-navy-deep transition-transform hover:scale-[1.03]"
            >
              Build Your Box
            </a>
            <a
              href="#top"
              className="rounded-full border border-gold/40 px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10"
            >
              Back to Top
            </a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/15 bg-navy-deep px-6 py-14 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <span className="font-display text-xl font-semibold tracking-[0.45em] text-cream">
            KAKU
          </span>
          <p className="text-xs uppercase tracking-[0.2em] text-cream/40">
            Sushi, Squared. — Premium Grab &amp; Go
          </p>
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} KAKU. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
