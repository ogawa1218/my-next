export const locales = ["ja", "en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ja";

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  zh: "中文",
};

type Pillar = { k: string; t: string; d: string };
type MenuItem = { name: string; note: string; rice: string };
type SetItem = {
  name: string;
  detail: string;
  price: string;
  featured?: boolean;
};
type Stat = { n: string; l: string };
type City = { city: string; tag: string; d: string };

export type Dict = {
  nav: { concept: string; menu: string; why: string; locations: string; cta: string };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    lead: string;
    ctaMenu: string;
    ctaConcept: string;
  };
  marquee: string[];
  concept: { eyebrow: string; title: string; lead: string; pillars: Pillar[] };
  menu: {
    eyebrow: string;
    title: string;
    items: MenuItem[];
    sets: SetItem[];
    featuredLabel: string;
    sides: string[];
  };
  why: {
    eyebrow: string;
    title: string;
    lead: string;
    bullets: string[];
    stats: Stat[];
  };
  locations: {
    eyebrow: string;
    title: string;
    cities: City[];
    nextLabel: string;
    next: string[];
  };
  social: {
    eyebrow: string;
    title1: string;
    title2: string;
    leadPre: string;
    leadPost: string;
    ctaBuild: string;
    ctaTop: string;
  };
  footer: { tagline: string };
};

export const dictionaries: Record<Locale, Dict> = {
  ja: {
    nav: {
      concept: "コンセプト",
      menu: "メニュー",
      why: "KAKUとは",
      locations: "店舗",
      cta: "箱を探す",
    },
    hero: {
      eyebrow: "プレミアム Grab & Go 寿司",
      title1: "Sushi,",
      title2: "Squared.",
      lead: "KAKU は寿司をキューブに再定義します。宝石のような6つのフレーバー、雑穀ブレンドのシャリ、そして開けるために生まれた箱。",
      ctaMenu: "メニューを見る",
      ctaConcept: "コンセプト",
    },
    marquee: ["健康", "·", "映え", "·", "利便性", "·", "シンガポール", "·", "クアラルンプール"],
    concept: {
      eyebrow: "Concept",
      title: "寿司は変えていない。箱を変えた。",
      lead: "世界はスーパーの冷蔵棚からロールを売る。KAKU が売るのは「瞬間」。ジュエリーボックスに納まったキューブ寿司は、まずスマホで食べる20〜30代の彼女のためにある。",
      pillars: [
        { k: "01", t: "ザ・キューブ", d: "精緻な30mm角。誰も食べたことのない形、そして忘れられない形。" },
        { k: "02", t: "雑穀シャリ", d: "白米60%＋雑穀40%の独自ブレンド。意志を持って、軽やかに。" },
        { k: "03", t: "6つの宝石", d: "6つのコアフレーバー。彩り・バランス・原価率28%以下を設計。" },
        { k: "04", t: "ザ・ボックス", d: "マグネット蓋のジュエリーボックス。開封体験そのものが広告になる。" },
        { k: "05", t: "8時間", d: "冷蔵で8時間の鮮度ウィンドウ。Grab & Go のリズムのために。" },
      ],
    },
    menu: {
      eyebrow: "Menu",
      title: "6つの宝石。無限の箱。",
      items: [
        { name: "Salmon Classic", note: "サーモン・アボカド・煎りごま", rice: "雑穀米" },
        { name: "Spicy Tuna", note: "まぐろ・スパイシーマヨ・葱", rice: "雑穀米" },
        { name: "Teriyaki Chicken", note: "照り焼きチキン・枝豆", rice: "雑穀米" },
        { name: "Miso Mushroom", note: "味噌マッシュルーム・絹ごし豆腐", rice: "玄米" },
        { name: "Inari Bomb", note: "いなり包み・プルコギ風", rice: "白米" },
        { name: "Tropical Shrimp", note: "海老天・マンゴー", rice: "雑穀米" },
      ],
      sets: [
        { name: "KAKU 6", detail: "6個 ・ 1フレーバー", price: "$7.90" },
        { name: "KAKU MIX 6", detail: "6個 ・ 2フレーバー", price: "$8.90" },
        { name: "KAKU BOX 9", detail: "9個 ・ 3フレーバー", price: "$12.90", featured: true },
        { name: "KAKU GIFT 12", detail: "12個 ・ 4フレーバー ・ プレミアムBOX", price: "$16.90" },
      ],
      featuredLabel: "人気No.1",
      sides: ["味噌汁カップ — $2.50", "枝豆カップ — $2.90", "抹茶ラテ — $4.50"],
    },
    why: {
      eyebrow: "Why KAKU",
      title: "健康・映え・利便性を、ひとつの箱に。",
      lead: "市場は安価なロールと静かな冷蔵棚で溢れている。一方で、体に良く、撮りたくなり、持ち運べる寿司は存在しない。KAKU はその空白のために設計された。",
      bullets: [
        "ウェルネスのフィードに置ける雑穀シャリ。",
        "開封がそのままコンテンツになる箱。",
        "原価率28%以下、1拠点6〜8ヶ月の投資回収。",
      ],
      stats: [
        { n: "$13.5B", l: "2035年のグローバル寿司市場規模" },
        { n: "7.9%", l: "2035年までのカテゴリー年平均成長率" },
        { n: "+64%", l: "デスクランチ需要の伸び" },
        { n: "<28%", l: "全SKUの原価率" },
      ],
    },
    locations: {
      eyebrow: "Locations",
      title: "最も速く動く都市から。",
      cities: [
        { city: "シンガポール", tag: "パイロット ・ 2026", d: "世界有数のオフィス街密度。$10〜14の客単価が成立する可処分所得。" },
        { city: "クアラルンプール", tag: "パイロット ・ 2026", d: "ASEAN第2位の購買力。ハラル検証の拠点であり、家賃はシンガポールより30〜40%低い。" },
      ],
      nextLabel: "次の展開：バンコク",
      next: ["香港", "シドニーCBD"],
    },
    social: {
      eyebrow: "Join the Box",
      title1: "開けて。",
      title2: "シェアして。",
      leadPre: "すべての箱は、生まれる前のコンテンツ。",
      leadPost: " で開封を投稿し、次のフレーバーを一緒に決めよう。",
      ctaBuild: "箱をつくる",
      ctaTop: "トップへ戻る",
    },
    footer: { tagline: "Sushi, Squared. — プレミアム Grab & Go" },
  },

  en: {
    nav: {
      concept: "Concept",
      menu: "Menu",
      why: "Why KAKU",
      locations: "Locations",
      cta: "Find a Box",
    },
    hero: {
      eyebrow: "Premium Grab & Go Sushi",
      title1: "Sushi,",
      title2: "Squared.",
      lead: "KAKU reimagines sushi as a cube — six jewelled flavours, a multigrain core, and a box that was made to be opened.",
      ctaMenu: "Explore the Menu",
      ctaConcept: "The Concept",
    },
    marquee: ["Health", "·", "Visual", "·", "Convenience", "·", "Singapore", "·", "Kuala Lumpur"],
    concept: {
      eyebrow: "Concept",
      title: "We did not change the sushi. We changed the box.",
      lead: "The world sells rolls from supermarket fridges. KAKU sells a moment — a cube of sushi set in a jewellery box, designed for the twenty- and thirty-something who eats with her phone first.",
      pillars: [
        { k: "01", t: "The Cube", d: "A precise 30mm cube. Geometry you have never eaten — and never forget." },
        { k: "02", t: "Multigrain Core", d: "A house blend of 60% white rice and 40% ancient grains. Lighter, with intent." },
        { k: "03", t: "Six Jewels", d: "Six core flavours, each engineered for colour, balance and a sub-28% food cost." },
        { k: "04", t: "The Box", d: "A magnet-lid jewellery box. The unboxing is the marketing." },
        { k: "05", t: "Eight Hours", d: "Chilled, eight-hour freshness window. Built for the Grab & Go rhythm." },
      ],
    },
    menu: {
      eyebrow: "Menu",
      title: "Six jewels. Endless boxes.",
      items: [
        { name: "Salmon Classic", note: "Salmon · avocado · toasted sesame", rice: "Multigrain" },
        { name: "Spicy Tuna", note: "Tuna · spicy mayo · scallion", rice: "Multigrain" },
        { name: "Teriyaki Chicken", note: "Glazed chicken · edamame", rice: "Multigrain" },
        { name: "Miso Mushroom", note: "Miso mushroom · silken tofu", rice: "Brown rice" },
        { name: "Inari Bomb", note: "Inari pocket · bulgogi-style", rice: "White rice" },
        { name: "Tropical Shrimp", note: "Tempura shrimp · mango", rice: "Multigrain" },
      ],
      sets: [
        { name: "KAKU 6", detail: "6 pc · 1 flavour", price: "$7.90" },
        { name: "KAKU MIX 6", detail: "6 pc · 2 flavours", price: "$8.90" },
        { name: "KAKU BOX 9", detail: "9 pc · 3 flavours", price: "$12.90", featured: true },
        { name: "KAKU GIFT 12", detail: "12 pc · 4 flavours · premium box", price: "$16.90" },
      ],
      featuredLabel: "Most loved",
      sides: ["Miso Soup Cup — $2.50", "Edamame Cup — $2.90", "Matcha Latte — $4.50"],
    },
    why: {
      eyebrow: "Why KAKU",
      title: "Health, visual and convenience — finally in one box.",
      lead: "The market is full of cheap rolls and quiet fridges. It is empty of a sushi that is good for you, made to be photographed, and built to be carried. KAKU is engineered for that gap.",
      bullets: [
        "A multigrain core that earns its place in a wellness feed.",
        "A box whose unboxing becomes its own content engine.",
        "Sub-28% food cost and a 6–8 month payback per site.",
      ],
      stats: [
        { n: "$13.5B", l: "Global sushi market by 2035" },
        { n: "7.9%", l: "Category CAGR through 2035" },
        { n: "+64%", l: "Growth in desk-lunch demand" },
        { n: "<28%", l: "Food cost across every SKU" },
      ],
    },
    locations: {
      eyebrow: "Locations",
      title: "Launching in the cities that move fastest.",
      cities: [
        { city: "Singapore", tag: "Pilot · 2026", d: "Among the densest office districts on earth — and the disposable income to match a $10–14 ticket." },
        { city: "Kuala Lumpur", tag: "Pilot · 2026", d: "ASEAN's second city for purchasing power, our halal-validation hub, with rent 30–40% below Singapore." },
      ],
      nextLabel: "Next: Bangkok",
      next: ["Hong Kong", "Sydney CBD"],
    },
    social: {
      eyebrow: "Join the Box",
      title1: "Open it.",
      title2: "Share it.",
      leadPre: "Every box is a piece of content waiting to happen. Post your unboxing with",
      leadPost: " and help vote the next flavour into existence.",
      ctaBuild: "Build Your Box",
      ctaTop: "Back to Top",
    },
    footer: { tagline: "Sushi, Squared. — Premium Grab & Go" },
  },

  zh: {
    nav: {
      concept: "理念",
      menu: "菜单",
      why: "为何选择 KAKU",
      locations: "门店",
      cta: "寻找盒子",
    },
    hero: {
      eyebrow: "高端即取即走寿司",
      title1: "Sushi,",
      title2: "Squared.",
      lead: "KAKU 将寿司重新定义为立方体——六种珠宝般的风味、杂粮米芯，以及一个为开启而生的盒子。",
      ctaMenu: "查看菜单",
      ctaConcept: "了解理念",
    },
    marquee: ["健康", "·", "出片", "·", "便利", "·", "新加坡", "·", "吉隆坡"],
    concept: {
      eyebrow: "Concept",
      title: "我们没有改变寿司，而是改变了盒子。",
      lead: "世界从超市冰柜里售卖寿司卷。KAKU 售卖的是一个瞬间——置于珠宝盒中的立方体寿司，为先用手机「吃」的二三十岁女性而生。",
      pillars: [
        { k: "01", t: "立方体", d: "精准的 30mm 立方。前所未尝、过目不忘的几何。" },
        { k: "02", t: "杂粮米芯", d: "60% 白米＋40% 杂粮的独家配比。轻盈，且有意图。" },
        { k: "03", t: "六颗宝石", d: "六款核心风味，皆为色彩、平衡与 28% 以下成本而设计。" },
        { k: "04", t: "盒子", d: "磁吸盖珠宝盒。开箱本身即是营销。" },
        { k: "05", t: "八小时", d: "冷藏八小时鲜度窗口。为即取即走的节奏而生。" },
      ],
    },
    menu: {
      eyebrow: "Menu",
      title: "六颗宝石。无限的盒子。",
      items: [
        { name: "Salmon Classic", note: "三文鱼 · 牛油果 · 烤芝麻", rice: "杂粮米" },
        { name: "Spicy Tuna", note: "金枪鱼 · 香辣蛋黄酱 · 葱", rice: "杂粮米" },
        { name: "Teriyaki Chicken", note: "照烧鸡肉 · 毛豆", rice: "杂粮米" },
        { name: "Miso Mushroom", note: "味噌蘑菇 · 嫩豆腐", rice: "糙米" },
        { name: "Inari Bomb", note: "豆皮包 · 韩式烤肉风味", rice: "白米" },
        { name: "Tropical Shrimp", note: "天妇罗虾 · 芒果", rice: "杂粮米" },
      ],
      sets: [
        { name: "KAKU 6", detail: "6 件 · 1 种风味", price: "$7.90" },
        { name: "KAKU MIX 6", detail: "6 件 · 2 种风味", price: "$8.90" },
        { name: "KAKU BOX 9", detail: "9 件 · 3 种风味", price: "$12.90", featured: true },
        { name: "KAKU GIFT 12", detail: "12 件 · 4 种风味 · 高端礼盒", price: "$16.90" },
      ],
      featuredLabel: "人气第一",
      sides: ["味噌汤杯 — $2.50", "毛豆杯 — $2.90", "抹茶拿铁 — $4.50"],
    },
    why: {
      eyebrow: "Why KAKU",
      title: "健康、出片与便利——终于装进同一个盒子。",
      lead: "市场充斥着廉价寿司卷与沉默的冰柜，却缺少一款既健康、又上镜、还能随身带走的寿司。KAKU 正是为这一空白而设计。",
      bullets: [
        "可登上健康生活信息流的杂粮米芯。",
        "开箱即化为内容的盒子。",
        "成本率低于 28%，单店 6–8 个月回本。",
      ],
      stats: [
        { n: "$13.5B", l: "2035 年全球寿司市场规模" },
        { n: "7.9%", l: "至 2035 年品类年均增长率" },
        { n: "+64%", l: "办公室午餐需求增长" },
        { n: "<28%", l: "全部 SKU 的成本率" },
      ],
    },
    locations: {
      eyebrow: "Locations",
      title: "从节奏最快的城市启程。",
      cities: [
        { city: "新加坡", tag: "试点 · 2026", d: "全球办公区密度最高的城市之一，可支撑 $10–14 客单价的可支配收入。" },
        { city: "吉隆坡", tag: "试点 · 2026", d: "东盟购买力第二的城市，清真验证枢纽，租金较新加坡低 30–40%。" },
      ],
      nextLabel: "下一站：曼谷",
      next: ["香港", "悉尼 CBD"],
    },
    social: {
      eyebrow: "Join the Box",
      title1: "打开它。",
      title2: "分享它。",
      leadPre: "每一个盒子，都是一段等待诞生的内容。用",
      leadPost: " 发布你的开箱，一起票选下一款风味。",
      ctaBuild: "定制你的盒子",
      ctaTop: "返回顶部",
    },
    footer: { tagline: "Sushi, Squared. — 高端即取即走" },
  },
};
