"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const menuItems = [
  {
    id: "01",
    name: "Salmon Classic",
    jp: "サーモンアボカド",
    tag: "定番",
    price: "単品 ¥200",
    image: "/products/salmon-classic.png",
  },
  {
    id: "02",
    name: "Spicy Tuna",
    jp: "スパイシーツナ",
    tag: "ピリ辛",
    price: "単品 ¥200",
    image: "/products/spicy-tuna.png",
  },
  {
    id: "03",
    name: "Teriyaki Chicken",
    jp: "照り焼きチキン",
    tag: "旨味",
    price: "単品 ¥200",
    image: "/products/teriyaki-chicken.png",
  },
  {
    id: "04",
    name: "Miso Mushroom",
    jp: "味噌マッシュルーム",
    tag: "植物性",
    price: "単品 ¥200",
    image: "/products/miso-mushroom.png",
  },
  {
    id: "05",
    name: "Vegan Umami Cube",
    jp: "ヴィーガン旨味",
    tag: "ヴィーガン",
    price: "単品 ¥200",
    image: "/products/vegan-umami-cube.png",
  },
  {
    id: "06",
    name: "Aburi Shrimp",
    jp: "炙りシュリンプ",
    tag: "魚介",
    price: "単品 ¥200",
    image: "/products/aburi-shrimp.png",
  },
];

const promises = [
  {
    title: "Pressed Sushi",
    text: "美しさを突き詰めた、プレス製法。",
    icon: "□",
  },
  {
    title: "Healthy Luxury",
    text: "五穀米と厳選素材で、心も体もやさしく満たす。",
    icon: "⌁",
  },
  {
    title: "Energy for What's Next",
    text: "忙しい午後を軽やかに、次の一歩を力強く。",
    icon: "↯",
  },
];

const grains = ["もち麦", "発芽玄米", "黒米", "きび", "アマランサス"];

const pricePlans = [
  { name: "単品", detail: "最低3個から", price: "¥200 / 個" },
  { name: "KAKU 6", detail: "6個 / 1フレーバー", price: "¥1,100" },
  { name: "KAKU 12", detail: "12個 / シェア向け", price: "¥2,200" },
  { name: "Family 18", detail: "18個 / 差し入れ向け", price: "¥3,300" },
];

const giftItems = [
  { name: "KAKU 6", detail: "6個入り / ランチ標準", price: "¥1,100", image: "/kaku-logo.png" },
  { name: "KAKU MIX 6", detail: "6個入り / 2フレーバー", price: "¥1,280", image: "/story/kaku-store-staff.png" },
  { name: "KAKU BOX 9", detail: "9個入り / 3フレーバー", price: "¥1,680", image: "/p1/six-sku-official-lineup.png" },
  { name: "KAKU GIFT 12", detail: "12個入り / ギフト箱", price: "¥2,200", image: "/story/kaku-story-manga.png" },
];

const navItems = [
  { label: "メニュー", href: "#menu" },
  { label: "コンセプト", href: "#concept" },
  { label: "こだわり", href: "#promise" },
  { label: "ギフト", href: "#gift" },
  { label: "Instagram", href: "#instagram" },
  { label: "予約", href: "#reserve" },
];

export default function Landing() {
  const [open, setOpen] = useState(false);

  return (
    <main id="top" className="relative overflow-hidden bg-cream text-navy-deep">
      <section className="ambient-grid relative overflow-hidden bg-navy-deep text-cream">
        <div className="pointer-events-none absolute inset-3 animate-gold-breath border border-gold/70" />
        <div className="pointer-events-none absolute left-6 right-6 top-3 z-10 h-px overflow-hidden">
          <span className="block h-full w-1/3 animate-luxury-sheen bg-gradient-to-r from-transparent via-gold-soft to-transparent" />
        </div>
        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8 lg:px-10">
          <Link href="#top" className="block w-32 md:w-40" aria-label="KAKU top">
            <Image
              src="/kaku-logo-transparent.png"
              alt="KAKU Sushi, Squared."
              width={1015}
              height={276}
              priority
              className="h-auto w-full brightness-[1.8]"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-[0.72rem] font-semibold tracking-[0.18em] text-cream/80 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-gold">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/reserve"
              className="luxury-button bg-gold px-7 py-3 text-xs font-bold tracking-[0.16em] text-navy-deep transition hover:-translate-y-0.5 hover:bg-cream"
            >
              予約する
            </Link>
          </div>

          <button
            type="button"
            aria-label="メニューを開く"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-gold/40 md:hidden"
          >
            <span className="h-px w-6 bg-gold" />
            <span className="h-px w-6 bg-gold" />
            <span className="h-px w-6 bg-gold" />
          </button>
        </header>

        {open && (
          <div className="relative z-30 mx-5 mb-5 border border-gold/40 bg-navy px-5 py-5 md:hidden">
            <div className="grid gap-4 text-sm tracking-[0.12em]">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <Link href="/reserve" className="luxury-button bg-gold px-5 py-3 text-center font-bold text-navy">
                予約する
              </Link>
            </div>
          </div>
        )}

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-8 md:px-8 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="order-2 animate-rise lg:order-1">
            <p className="text-xs font-semibold tracking-[0.28em] text-gold">
              PRESSED SUSHI / HEALTHY LUXURY
            </p>
            <h1 className="mt-8 font-display text-[clamp(3.1rem,7.5vw,6.8rem)] font-semibold leading-[1.03]">
              美しさを、
              <span className="block">一口の中に。</span>
            </h1>
            <p className="mt-8 max-w-md font-display text-xl leading-9 text-cream/90">
              五穀米で仕立てた、
              <br />
              プレミアム・キューブ寿司。
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-cream/62">
              Elevated Sushi, Healthy Luxury.
              <br />
              Energy for What&apos;s Next.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="luxury-button bg-gold px-7 py-4 text-sm font-bold tracking-[0.18em] text-navy-deep transition hover:-translate-y-1 hover:bg-cream md:px-10"
              >
                予約する
              </Link>
              <a
                href="#instagram"
                className="luxury-button border border-gold px-6 py-4 text-sm font-bold tracking-[0.12em] text-gold transition hover:-translate-y-1 hover:bg-gold/10 md:px-8"
              >
                Instagramで見る
              </a>
            </div>
          </div>

          <div className="relative order-1 animate-fade lg:order-2">
            <div className="luxury-panel relative overflow-hidden rounded-tl-[4rem] border border-gold/45 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <Image
                src="/products/salmon-classic.png"
                alt="KAKU Salmon Avocado pressed sushi cube"
                width={1600}
                height={2000}
                priority
                className="h-[280px] w-full animate-slow-zoom object-cover md:h-[520px] lg:h-[620px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid border-y border-gold/30 bg-cream lg:grid-cols-[0.98fr_1.02fr]">
        <Reveal className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <h2 className="font-display text-[clamp(2rem,4vw,3.8rem)] leading-[1.15]">
            忙しい午後こそ、
            <br />
            重たいランチはいらない。
          </h2>
          <p className="mt-8 max-w-md leading-8 text-navy/65">
            午後のパフォーマンスを支えるのは、軽やかで、満たされる、覚えてもらえる一食。
            KAKUは「ちゃんと食べたい」と「美しく選びたい」を同時に満たします。
          </p>
        </Reveal>
        <div className="luxury-panel relative min-h-[340px] overflow-hidden border-t border-gold/30 lg:border-l lg:border-t-0">
          <Image
            src="/p1/kaku-unboxing-desk-lunch.png"
            alt="KAKU unboxing desk lunch"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section id="promise" className="bg-navy-deep px-6 py-18 text-cream md:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold tracking-[0.28em] text-gold">KAKUの約束</p>
          </Reveal>
          <div className="mt-10 grid gap-px border-y border-gold/30 bg-gold/30 md:grid-cols-3">
            {promises.map((item) => (
              <Reveal key={item.title} className="card-lift bg-navy-deep px-8 py-10 text-center hover:bg-navy">
                <p className="font-display text-5xl text-gold">{item.icon}</p>
                <h3 className="mt-5 font-display text-2xl text-gold">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-cream/70">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="concept" className="grid border-y border-gold/30 bg-cream lg:grid-cols-[0.42fr_0.58fr]">
        <Reveal className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <p className="text-xs font-bold tracking-[0.26em] text-gold">CONCEPT</p>
          <h2 className="mt-8 font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.15]">
            ケーキのように選ぶ、
            <br />
            寿司。
          </h2>
          <p className="mt-7 max-w-md leading-8 text-navy/65">
            ひとつひとつ、職人の手で丁寧に。口に入れた瞬間に、ほどける感覚と、
            からだにやさしい満足感を実感できる、上質なテイクアウト体験です。
          </p>
          <a
            href="#menu"
            className="luxury-button mt-10 inline-flex border border-gold px-7 py-3 text-sm font-semibold tracking-[0.12em] text-gold transition hover:bg-gold hover:text-navy"
          >
            詳しくはこちら
          </a>
        </Reveal>
        <div className="luxury-panel relative min-h-[360px] overflow-hidden border-t border-gold/30 lg:border-l lg:border-t-0">
          <Image
            src="/story/kaku-store-staff.png"
            alt="KAKU showcase experience"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section id="menu" className="bg-navy-deep px-5 py-16 text-cream md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col gap-3 text-center md:flex-row md:items-end md:justify-center md:gap-6">
            <h2 className="font-display text-4xl text-gold md:text-5xl">Core Menu</h2>
            <p className="pb-2 text-sm font-semibold tracking-[0.24em] text-gold/80">
              コアメニュー6種
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <Reveal
                key={item.id}
                className="card-lift group grid grid-cols-[0.92fr_1fr] overflow-hidden border border-gold/45 bg-navy hover:-translate-y-1 hover:border-gold"
              >
                <div className="relative min-h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 18vw, 45vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-lg text-gold">{item.id}</p>
                  <h3 className="mt-2 font-display text-xl">{item.name}</h3>
                  <p className="mt-1 text-sm text-cream/65">{item.jp}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <p className="inline-flex items-center border border-gold/50 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-gold">
                      {item.tag}
                    </p>
                    <p className="inline-flex items-center bg-gold px-3 py-1 text-xs font-bold tracking-[0.08em] text-navy-deep">
                      {item.price}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 grid gap-px border-y border-gold/35 bg-gold/35 md:grid-cols-4">
            {pricePlans.map((plan) => (
               <div key={plan.name} className="card-lift bg-navy-deep px-5 py-6 text-center hover:bg-navy">
                <p className="font-display text-xl text-gold">{plan.name}</p>
                <p className="mt-2 text-xs tracking-[0.12em] text-cream/55">{plan.detail}</p>
                <p className="mt-5 font-display text-3xl text-cream">{plan.price}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="luxury-panel mt-12 overflow-hidden border border-gold/40">
            <Image
              src="/p1/six-sku-official-lineup.png"
              alt="KAKU official six SKU lineup"
              width={1792}
              height={1024}
              className="h-auto w-full"
            />
          </Reveal>
        </div>
      </section>

      <section id="why" className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[0.46fr_0.54fr] lg:py-24">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.26em] text-gold">WHY KAKU</p>
            <h2 className="mt-8 font-display text-[clamp(2rem,4vw,3.8rem)] leading-[1.12]">
              五穀米で、
              <br />
              軽やかに満たす。
            </h2>
            <p className="mt-7 max-w-md leading-8 text-navy/65">
              KAKUのキューブ寿司は、五穀米を採用。食物繊維と自然な食感、
              そして素材の香りを、ひと口の中に閉じ込めます。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {grains.map((grain) => (
                <span
                  key={grain}
                  className="border border-gold/50 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-gold"
                >
                  {grain}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="luxury-panel overflow-hidden border border-gold/35 bg-cream-dim p-2">
            <Image
              src="/p1/why-kaku-proof.png"
              alt="Why KAKU proof: five-grain rice, 30mm cube, healthy prep, showcase"
              width={1792}
              height={1024}
              className="h-auto w-full"
            />
          </Reveal>
        </div>
      </section>

      <section id="reserve" className="bg-navy-deep text-cream">
        <div className="mx-auto grid max-w-7xl gap-px border-y border-gold/30 bg-gold/30 lg:grid-cols-3">
          <Reveal className="bg-navy-deep px-6 py-16 md:px-10">
            <p className="text-xs font-bold tracking-[0.26em] text-gold">RESERVATION</p>
            <h2 className="mt-8 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.15]">
              ご予約で、
              <br />
              もっとスマートに。
            </h2>
            <p className="mt-7 max-w-sm leading-8 text-cream/68">
              事前予約なら待たせません。ランチ会議や特別な差し入れを、スムーズに、上質に。
            </p>
          </Reveal>

          <Reveal className="bg-navy px-6 py-12 md:px-10">
            <div className="card-lift border border-gold/55 p-6 hover:border-gold">
              <p className="text-center font-display text-xl text-gold">ご予約はこちら</p>
              <div className="mt-6 grid gap-4">
                <label className="grid gap-2 text-xs tracking-[0.16em] text-cream/70">
                  ご来店日時
                  <select className="border border-gold/45 bg-navy-deep px-4 py-3 text-cream">
                    <option>2026/06/14（土）12:30</option>
                    <option>2026/06/14（土）13:00</option>
                  </select>
                </label>
                <label className="grid gap-2 text-xs tracking-[0.16em] text-cream/70">
                  人数
                  <select className="border border-gold/45 bg-navy-deep px-4 py-3 text-cream">
                    <option>2名</option>
                    <option>4名</option>
                  </select>
                </label>
                <Link
                  href="/reserve"
                  className="luxury-button bg-gold px-5 py-4 text-center text-sm font-bold tracking-[0.18em] text-navy-deep transition hover:bg-cream"
                >
                  予約を確定する
                </Link>
                <Link href="/reserve" className="text-center text-xs text-cream/55 underline-offset-4 hover:underline">
                  予約の確認・変更はこちら
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="luxury-panel relative min-h-[420px] bg-navy">
            <Image
              src="/p1/kaku-mobile-reservation-flow.png"
              alt="KAKU mobile reservation flow"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="ambient-grid relative overflow-hidden bg-navy-deep px-6 py-16 text-cream md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.72fr_1fr]">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.26em] text-gold">NEXT ENERGY</p>
            <h2 className="mt-8 font-display text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.08]">
              次の活力を、
              <br />
              ひと口で。
            </h2>
            <p className="mt-7 max-w-md leading-8 text-cream/70">
              美しさや少しの喜びに、KAKUで、軽やかな毎日を始めよう。
            </p>
            <Link
              href="/reserve"
              className="luxury-button mt-10 inline-flex border border-gold px-8 py-4 text-sm font-bold tracking-[0.16em] text-gold transition hover:bg-gold hover:text-navy"
            >
              今すぐ注文する
            </Link>
          </Reveal>
          <Reveal className="luxury-panel relative min-h-[360px] overflow-hidden">
            <Image
              src="/p1/kaku-store-facade-harajuku.png"
              alt="KAKU Harajuku storefront concept"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section id="gift" className="bg-cream px-5 py-12 md:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <h2 className="font-display text-4xl md:text-5xl">Box & Gift</h2>
            <p className="mt-3 text-sm tracking-[0.18em] text-navy/55">
              大切な人へ、上質なギフトを。
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {giftItems.map((item) => (
              <Reveal key={item.name} className="card-lift border border-gold/35 bg-cream-dim p-4 hover:border-gold/70">
                <div className="luxury-panel relative h-36 overflow-hidden bg-cream">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <p className="text-xs text-navy/55">{item.detail}</p>
                  </div>
                  <p className="font-display text-xl text-gold">{item.price}</p>
                </div>
                <Link
                  href="/reserve"
                  className="luxury-button mt-4 inline-flex w-full justify-center border border-gold px-4 py-3 text-xs font-semibold tracking-[0.12em] text-gold transition hover:bg-gold hover:text-navy"
                >
                  詳細を見る
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="instagram" className="bg-navy-deep px-6 py-12 text-cream md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl">
              美しい一枚が、
              <br />
              もう一歩の喜びに。
            </h2>
            <p className="mt-5 max-w-lg leading-8 text-cream/65">
              #KAKU を付けて投稿すると、次のフレーバー投票にも参加できます。
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-3 gap-px border-y border-gold/30 bg-gold/30 text-center">
            {["FOLLOW", "SHOOT", "POST"].map((step) => (
              <div key={step} className="card-lift bg-navy-deep px-4 py-8 hover:bg-navy">
                <p className="font-display text-2xl text-gold">{step}</p>
                <p className="mt-3 text-xs text-cream/60">@kaku_sushi_squared</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-gold/30 bg-navy-deep px-6 py-8 text-cream md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link href="#top" className="block w-32">
            <Image
              src="/kaku-logo-transparent.png"
              alt="KAKU Sushi, Squared."
              width={1015}
              height={276}
              className="h-auto w-full brightness-[1.8]"
            />
          </Link>
          <div className="flex flex-wrap gap-5 text-xs tracking-[0.16em] text-cream/60">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold">
                {item.label}
              </a>
            ))}
          </div>
          <Link
            href="/reserve"
            className="luxury-button bg-gold px-7 py-3 text-center text-xs font-bold tracking-[0.16em] text-navy"
          >
            予約する
          </Link>
        </div>
      </footer>
    </main>
  );
}
