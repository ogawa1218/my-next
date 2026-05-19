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
type Step = { k: string; t: string; d: string };

export type Dict = {
  nav: {
    concept: string;
    menu: string;
    why: string;
    locations: string;
    reserve: string;
    newsletter: string;
    cta: string;
  };
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
  reserveCta: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: string;
    note: string;
  };
  newsletter: {
    eyebrow: string;
    title: string;
    lead: string;
    placeholder: string;
    button: string;
    success: string;
    invalid: string;
    privacy: string;
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
  footer: { tagline: string; reserve: string; newsletter: string };
  reservePage: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaPrimaryNote: string;
    ctaSecondary: string;
    stepsTitle: string;
    steps: Step[];
    benefitsTitle: string;
    benefits: string[];
    backHome: string;
  };
};

export const dictionaries: Record<Locale, Dict> = {
  ja: {
    nav: {
      concept: "コンセプト",
      menu: "メニュー",
      why: "KAKUとは",
      locations: "店舗",
      reserve: "予約",
      newsletter: "メルマガ",
      cta: "箱を予約",
    },
    hero: {
      eyebrow: "押し寿司 × 健康 × ラグジュアリー",
      title1: "Sushi,",
      title2: "Squared.",
      lead: "押し寿司を、ジュエリーの精度で。30mm角のキューブに五穀米と6つのフレーバー。健康とラグジュアリーを、次の活力へ。",
      ctaMenu: "メニューを見る",
      ctaConcept: "コンセプト",
    },
    marquee: ["押し寿司", "·", "五穀米", "·", "健康", "·", "ショーケース", "·", "次の活力へ"],
    concept: {
      eyebrow: "Concept",
      title: "寿司を、押し寿司に。棚を、ショーケースに。",
      lead: "世界はスーパーの冷蔵棚からロールを売る。KAKU が売るのは「次の活力」。五穀米の押し寿司を30mm角のキューブに仕上げ、ショーケースに一個ずつ。20〜30代の働く女性のための、健康とラグジュアリー。",
      pillars: [
        { k: "01", t: "ザ・キューブ", d: "精緻な30mm角。誰も食べたことのない形、そして忘れられない形。" },
        { k: "02", t: "五穀米シャリ", d: "全SKU共通の五穀米。1個シャリ30g、トッピング込み38〜42gで標準化。" },
        { k: "03", t: "6つの宝石", d: "6つのコアフレーバー。彩り・バランス・原価率28%以下を設計。" },
        { k: "04", t: "ザ・ボックス", d: "マグネット蓋のジュエリーボックス。開封体験そのものが広告になる。" },
        { k: "05", t: "8時間", d: "冷蔵で8時間の鮮度ウィンドウ。Grab & Go のリズムのために。" },
      ],
    },
    menu: {
      eyebrow: "Menu",
      title: "6つの宝石。無限の箱。",
      items: [
        { name: "Salmon Classic", note: "サーモン・アボカド・ゴマ", rice: "五穀米" },
        { name: "Spicy Tuna", note: "マグロ・スパイシーマヨ・青ねぎ", rice: "五穀米" },
        { name: "Teriyaki Chicken", note: "照り焼きチキン・枝豆", rice: "五穀米" },
        { name: "Miso Mushroom", note: "味噌マッシュルーム・豆腐", rice: "五穀米" },
        { name: "Vegan Umami Cube", note: "大豆ミートそぼろ・バルサミコ味噌", rice: "五穀米" },
        { name: "Aburi Shrimp Mango-Lime", note: "炙り海老・マンゴーライムグレーズ", rice: "五穀米" },
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
        "全SKU五穀米。ウェルネスのフィードに置ける一品。",
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
    reserveCta: {
      eyebrow: "Reserve",
      title: "あなたの箱を、先に予約。",
      lead: "オフィスのランチも、特別な手土産も。KAKU の予約管理システムで、受け取り時間を選んで並ばずに。",
      cta: "予約ページへ",
      note: "シンガポール・クアラルンプール（パイロット拠点）",
    },
    newsletter: {
      eyebrow: "Newsletter",
      title: "オープンを、誰より早く。",
      lead: "新フレーバー投票、限定 KAKU of the Month、各都市のオープン情報をいち早くお届けします。",
      placeholder: "メールアドレス",
      button: "登録する",
      success: "ご登録ありがとうございます。最新情報をお届けします。",
      invalid: "有効なメールアドレスを入力してください。",
      privacy: "登録はいつでも解除できます。スパムは送りません。",
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
    footer: {
      tagline: "Sushi, Squared. — プレミアム Grab & Go",
      reserve: "予約",
      newsletter: "メルマガ登録",
    },
    reservePage: {
      eyebrow: "Reservation",
      title: "並ばない。待たせない。",
      lead: "KAKU の予約管理システムは、受け取り店舗・時間・セットを事前に指定できます。ランチのピークでも、あなたの箱はすでに用意されています。",
      ctaPrimary: "オンライン予約（近日公開）",
      ctaPrimaryNote: "予約システムは現在準備中です。",
      ctaSecondary: "オープン通知を受け取る",
      stepsTitle: "予約の流れ",
      steps: [
        { k: "01", t: "店舗と時間を選ぶ", d: "最寄りのKAKU拠点と受け取り時間を指定。" },
        { k: "02", t: "箱を組む", d: "セットとフレーバーを選んで事前決済。" },
        { k: "03", t: "受け取るだけ", d: "予約レーンで、並ばず受け取り。" },
      ],
      benefitsTitle: "予約のメリット",
      benefits: [
        "ピークタイムでも待ち時間ゼロ。",
        "限定・季節フレーバーを確実に確保。",
        "オフィスへのまとめ注文・手土産にも最適。",
      ],
      backHome: "トップへ戻る",
    },
  },

  en: {
    nav: {
      concept: "Concept",
      menu: "Menu",
      why: "Why KAKU",
      locations: "Locations",
      reserve: "Reserve",
      newsletter: "Newsletter",
      cta: "Reserve a Box",
    },
    hero: {
      eyebrow: "Pressed Sushi × Health × Luxury",
      title1: "Sushi,",
      title2: "Squared.",
      lead: "Pressed sushi, cut with the precision of jewellery. A 30mm cube of five-grain rice and six flavours — health and luxury, for your next surge.",
      ctaMenu: "Explore the Menu",
      ctaConcept: "The Concept",
    },
    marquee: ["Pressed Sushi", "·", "Five-Grain", "·", "Health", "·", "Showcase", "·", "Your Next Surge"],
    concept: {
      eyebrow: "Concept",
      title: "We turned sushi into pressed cubes — and the fridge into a showcase.",
      lead: "The world sells rolls from supermarket fridges. KAKU sells your next surge of energy — five-grain pressed sushi in a 30mm cube, displayed one by one in a showcase. Health and luxury, for the working woman in her twenties and thirties.",
      pillars: [
        { k: "01", t: "The Cube", d: "A precise 30mm cube. Geometry you have never eaten — and never forget." },
        { k: "02", t: "Five-Grain Core", d: "One five-grain rice across every SKU. 30g rice base, 38–42g with topping — standardised." },
        { k: "03", t: "Six Jewels", d: "Six core flavours, each engineered for colour, balance and a sub-28% food cost." },
        { k: "04", t: "The Box", d: "A magnet-lid jewellery box. The unboxing is the marketing." },
        { k: "05", t: "Eight Hours", d: "Chilled, eight-hour freshness window. Built for the Grab & Go rhythm." },
      ],
    },
    menu: {
      eyebrow: "Menu",
      title: "Six jewels. Endless boxes.",
      items: [
        { name: "Salmon Classic", note: "Salmon · avocado · sesame", rice: "Five-grain" },
        { name: "Spicy Tuna", note: "Tuna · spicy mayo · scallion", rice: "Five-grain" },
        { name: "Teriyaki Chicken", note: "Teriyaki chicken · edamame", rice: "Five-grain" },
        { name: "Miso Mushroom", note: "Miso mushroom · tofu", rice: "Five-grain" },
        { name: "Vegan Umami Cube", note: "Soy-meat soboro · balsamic miso", rice: "Five-grain" },
        { name: "Aburi Shrimp Mango-Lime", note: "Aburi shrimp · mango-lime glaze", rice: "Five-grain" },
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
        "One five-grain rice across every SKU — a dish that earns its place in a wellness feed.",
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
    reserveCta: {
      eyebrow: "Reserve",
      title: "Reserve your box, ahead of time.",
      lead: "Office lunch or a special gift — pick your pickup time with KAKU's reservation system and skip the queue.",
      cta: "Go to Reservations",
      note: "Singapore & Kuala Lumpur (pilot sites)",
    },
    newsletter: {
      eyebrow: "Newsletter",
      title: "Be first through the door.",
      lead: "Flavour votes, the limited KAKU of the Month, and city opening news — delivered before anyone else.",
      placeholder: "Email address",
      button: "Subscribe",
      success: "Thank you — you're on the list. We'll be in touch.",
      invalid: "Please enter a valid email address.",
      privacy: "Unsubscribe anytime. No spam, ever.",
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
    footer: {
      tagline: "Sushi, Squared. — Premium Grab & Go",
      reserve: "Reserve",
      newsletter: "Newsletter",
    },
    reservePage: {
      eyebrow: "Reservation",
      title: "No queue. No wait.",
      lead: "KAKU's reservation system lets you set your pickup store, time and set in advance. Even at the lunch peak, your box is already waiting.",
      ctaPrimary: "Reserve Online (Coming Soon)",
      ctaPrimaryNote: "The reservation system is currently in development.",
      ctaSecondary: "Get Opening Updates",
      stepsTitle: "How it works",
      steps: [
        { k: "01", t: "Pick store & time", d: "Choose your nearest KAKU site and a pickup time." },
        { k: "02", t: "Build your box", d: "Select your set and flavours, pay in advance." },
        { k: "03", t: "Just collect", d: "Skip the line at the reservation lane." },
      ],
      benefitsTitle: "Why reserve",
      benefits: [
        "Zero wait, even at peak hours.",
        "Lock in limited and seasonal flavours.",
        "Perfect for office bulk orders and gifts.",
      ],
      backHome: "Back to Home",
    },
  },

  zh: {
    nav: {
      concept: "理念",
      menu: "菜单",
      why: "为何选择 KAKU",
      locations: "门店",
      reserve: "预约",
      newsletter: "订阅",
      cta: "预约盒子",
    },
    hero: {
      eyebrow: "押寿司 × 健康 × 奢华",
      title1: "Sushi,",
      title2: "Squared.",
      lead: "押寿司，以珠宝般的精度切割。30mm 立方，五谷米与六款风味——健康与奢华，为你的下一份活力。",
      ctaMenu: "查看菜单",
      ctaConcept: "了解理念",
    },
    marquee: ["押寿司", "·", "五谷米", "·", "健康", "·", "展示柜", "·", "下一份活力"],
    concept: {
      eyebrow: "Concept",
      title: "把寿司压成立方，把冰柜变成展示柜。",
      lead: "世界从超市冰柜里售卖寿司卷。KAKU 售卖的是你的下一份活力——五谷米押寿司，制成 30mm 立方，于展示柜中逐颗陈列。健康与奢华，为二三十岁的职场女性而生。",
      pillars: [
        { k: "01", t: "立方体", d: "精准的 30mm 立方。前所未尝、过目不忘的几何。" },
        { k: "02", t: "五谷米芯", d: "全 SKU 统一五谷米。每件米饭 30g，含配料 38–42g，标准化。" },
        { k: "03", t: "六颗宝石", d: "六款核心风味，皆为色彩、平衡与 28% 以下成本而设计。" },
        { k: "04", t: "盒子", d: "磁吸盖珠宝盒。开箱本身即是营销。" },
        { k: "05", t: "八小时", d: "冷藏八小时鲜度窗口。为即取即走的节奏而生。" },
      ],
    },
    menu: {
      eyebrow: "Menu",
      title: "六颗宝石。无限的盒子。",
      items: [
        { name: "Salmon Classic", note: "三文鱼 · 牛油果 · 芝麻", rice: "五谷米" },
        { name: "Spicy Tuna", note: "金枪鱼 · 香辣蛋黄酱 · 青葱", rice: "五谷米" },
        { name: "Teriyaki Chicken", note: "照烧鸡肉 · 毛豆", rice: "五谷米" },
        { name: "Miso Mushroom", note: "味噌蘑菇 · 豆腐", rice: "五谷米" },
        { name: "Vegan Umami Cube", note: "大豆素肉松 · 黑醋味噌", rice: "五谷米" },
        { name: "Aburi Shrimp Mango-Lime", note: "炙烤虾 · 芒果青柠酱", rice: "五谷米" },
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
        "全 SKU 五谷米，可登上健康生活信息流的一品。",
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
    reserveCta: {
      eyebrow: "Reserve",
      title: "提前，预约你的盒子。",
      lead: "无论是办公室午餐还是特别伴手礼——用 KAKU 预约系统选好取餐时间，免排队。",
      cta: "前往预约页",
      note: "新加坡 & 吉隆坡（试点门店）",
    },
    newsletter: {
      eyebrow: "Newsletter",
      title: "比所有人更早进门。",
      lead: "新风味票选、限定 KAKU of the Month、各城市开业资讯——抢先送达。",
      placeholder: "电子邮箱",
      button: "订阅",
      success: "感谢订阅——你已在名单中，我们会保持联系。",
      invalid: "请输入有效的电子邮箱。",
      privacy: "可随时退订。绝不发送垃圾邮件。",
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
    footer: {
      tagline: "Sushi, Squared. — 高端即取即走",
      reserve: "预约",
      newsletter: "订阅",
    },
    reservePage: {
      eyebrow: "Reservation",
      title: "不排队。不等待。",
      lead: "KAKU 预约系统让你提前指定取餐门店、时间与套餐。即使在午餐高峰，你的盒子也已备好。",
      ctaPrimary: "在线预约（即将开放）",
      ctaPrimaryNote: "预约系统正在开发中。",
      ctaSecondary: "获取开业通知",
      stepsTitle: "预约流程",
      steps: [
        { k: "01", t: "选择门店与时间", d: "指定最近的 KAKU 门店与取餐时间。" },
        { k: "02", t: "组合你的盒子", d: "选择套餐与风味，提前付款。" },
        { k: "03", t: "直接取走", d: "在预约专道，免排队取餐。" },
      ],
      benefitsTitle: "预约的好处",
      benefits: [
        "高峰时段也零等待。",
        "锁定限定与季节风味。",
        "适合办公室批量订购与送礼。",
      ],
      backHome: "返回首页",
    },
  },
};
