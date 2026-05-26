export const locales = ["ja", "en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ja";

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  zh: "中文",
};

type Pillar = { k: string; t: string; d: string };
type MenuItem = { slug: string; name: string; note: string; rice: string };
type SetItem = {
  id: string;
  name: string;
  detail: string;
  price: string;
  featured?: boolean;
};
type Stat = { n: string; l: string };
type City = { city: string; tag: string; d: string };
type Step = { k: string; t: string; d: string };
type Promise = { k: string; t: string; d: string };
type Store = { id: string; city: string; venue: string };
type BudgetBand = { id: string; label: string };

export type Dict = {
  nav: {
    concept: string;
    menu: string;
    why: string;
    locations: string;
    reserve: string;
    newsletter: string;
    franchise: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    lead: string;
    ctaMenu: string;
    ctaConcept: string;
    pilotBadge: string;
    teamEyebrow: string;
    teamCopy: string;
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
    promises: Promise[];
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
  footer: {
    tagline: string;
    reserve: string;
    newsletter: string;
    franchise: string;
  };
  stores: Store[];
  reservePage: {
    eyebrow: string;
    title: string;
    lead: string;
    stepLabels: { pickup: string; selection: string; details: string };
    pickup: {
      title: string;
      storeLabel: string;
      storeHelper: string;
      pickupAtLabel: string;
      pickupHelper: string;
    };
    selection: {
      title: string;
      setLabel: string;
      flavorsLabel: string;
      flavorsHelper: string;
      countLabel: string;
    };
    details: {
      title: string;
      name: string;
      email: string;
      phone: string;
      phoneOptional: string;
      notes: string;
      notesOptional: string;
    };
    summary: {
      title: string;
      store: string;
      pickupAt: string;
      set: string;
      flavors: string;
      guest: string;
    };
    buttons: {
      next: string;
      back: string;
      submit: string;
      submitting: string;
      another: string;
      backHome: string;
    };
    success: { title: string; lead: string; idLabel: string };
    errors: {
      required: string;
      invalidEmail: string;
      futureTime: string;
      quantity: string;
      network: string;
    };
  };
  franchisePage: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaInquire: string;
    ctaEconomics: string;
    opportunityTitle: string;
    opportunityLead: string;
    stats: Stat[];
    economicsTitle: string;
    economicsLead: string;
    economics: string[];
    systemTitle: string;
    systemLead: string;
    system: Step[];
    targetTitle: string;
    target: string[];
    timelineTitle: string;
    timeline: Step[];
    inquiryTitle: string;
    inquiryLead: string;
    form: {
      name: string;
      company: string;
      companyOptional: string;
      email: string;
      phone: string;
      phoneOptional: string;
      country: string;
      city: string;
      budget: string;
      budgets: BudgetBand[];
      message: string;
      messageOptional: string;
      submit: string;
      submitting: string;
      success: string;
      errors: {
        required: string;
        invalidEmail: string;
        network: string;
      };
    };
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
      franchise: "フランチャイズ",
      cta: "箱を予約",
    },
    hero: {
      eyebrow: "押し寿司 × 健康 × ラグジュアリー",
      title1: "Sushi,",
      title2: "Squared.",
      lead: "押し寿司を、ジュエリーの精度で。30mm角のキューブに五穀米と6つのフレーバー。健康とラグジュアリーを、次の活力へ。",
      ctaMenu: "メニューを見る",
      ctaConcept: "コンセプト",
      pilotBadge: "Pilot · 2026",
      teamEyebrow: "Our Team",
      teamCopy: "和の職人 × デザイン主導のサービス。2026年、4店舗で迎えます。",
    },
    marquee: ["押し寿司", "·", "五穀米", "·", "健康", "·", "ショーケース", "·", "次の活力へ"],
    concept: {
      eyebrow: "Concept",
      title: "寿司を、押し寿司に。棚を、ショーケースに。",
      lead: "世界はスーパーの冷蔵棚からロールを売る。KAKU が売るのは「次の活力」。五穀米の押し寿司を30mm角のキューブに仕上げ、ショーケースに一個ずつ。20〜30代の働く女性のための、健康とラグジュアリー。",
      pillars: [
        { k: "01", t: "ザ・キューブ", d: "精緻な30mm角。誰も食べたことのない形、そして忘れられない形。" },
        { k: "02", t: "五穀米シャリ", d: "全SKU共通の五穀米。1個シャリ30g、トッピング込み38〜42gで標準化。" },
        { k: "03", t: "6つの宝石", d: "6つのコアフレーバー。彩り・バランス・色差を設計。" },
        { k: "04", t: "ショーケース", d: "ジュエリーのように一個ずつ陳列。開ける前に、目で食べる。" },
        { k: "05", t: "8時間", d: "冷蔵で8時間の鮮度ウィンドウ。Grab & Go のリズムのために。" },
      ],
    },
    menu: {
      eyebrow: "Menu",
      title: "6つの宝石。無限の箱。",
      items: [
        { slug: "salmon-classic", name: "Salmon Classic", note: "サーモン・アボカド・ゴマ", rice: "五穀米" },
        { slug: "spicy-tuna", name: "Spicy Tuna", note: "マグロ・スパイシーマヨ・青ねぎ", rice: "五穀米" },
        { slug: "teriyaki-chicken", name: "Teriyaki Chicken", note: "照り焼きチキン・枝豆", rice: "五穀米" },
        { slug: "miso-mushroom", name: "Miso Mushroom", note: "味噌マッシュルーム・豆腐", rice: "五穀米" },
        { slug: "vegan-umami-cube", name: "Vegan Umami Cube", note: "大豆ミートそぼろ・バルサミコ味噌", rice: "五穀米" },
        { slug: "aburi-shrimp", name: "Aburi Shrimp Mango-Lime", note: "炙り海老・マンゴーライムグレーズ", rice: "五穀米" },
      ],
      sets: [
        { id: "kaku-6", name: "KAKU 6", detail: "6個 ・ 1フレーバー", price: "¥1,180" },
        { id: "kaku-mix-6", name: "KAKU MIX 6", detail: "6個 ・ 2フレーバー", price: "¥1,380" },
        { id: "kaku-box-9", name: "KAKU BOX 9", detail: "9個 ・ 3フレーバー", price: "¥1,980", featured: true },
        { id: "kaku-gift-12", name: "KAKU GIFT 12", detail: "12個 ・ 4フレーバー ・ プレミアムBOX", price: "¥2,580" },
      ],
      featuredLabel: "人気No.1",
      sides: [],
    },
    why: {
      eyebrow: "Why KAKU",
      title: "健康と精度を、ひとつのキューブに。",
      lead: "余計な装飾を捨て、必要なものだけを残しました。五穀米統一、30mm精密成形、8時間以内の鮮度設計。あなたの「次の活力」のための寿司。",
      bullets: [
        "全SKU五穀米。雑穀の食感と栄養を、軽やかに。",
        "30mm角の精密成形。手のひらに収まる、ジュエリーのような寿司。",
        "製造後8時間以内の鮮度管理。ピーク前に出して、ピーク後に下げる。",
      ],
      promises: [
        { k: "01", t: "五穀米100%", d: "全SKU共通。白米なし。" },
        { k: "02", t: "30mm精密成形", d: "シャリ30g、総量38〜42g。" },
        { k: "03", t: "8h冷蔵販売", d: "製造時刻シール／タイム廃棄管理。" },
        { k: "04", t: "Veg/Vegan常設", d: "豆腐味噌、大豆ミート 2SKU。" },
      ],
    },
    locations: {
      eyebrow: "Locations",
      title: "東京4拠点から、日本中へ。",
      cities: [
        { city: "原宿", tag: "旗艦店 ・ 2026", d: "Z世代と海外観光客が交差する、KAKUのフラッグシップ。竹下通り至近。" },
        { city: "東京駅 八重洲口", tag: "パイロット ・ 2026", d: "新幹線・在来線・地下街が集まる日本最大級のラッシュタイム。Grab & Goの中心地。" },
        { city: "浅草", tag: "パイロット ・ 2026", d: "雷門・仲見世通り徒歩圏。インバウンド需要と手土産需要の双方を捉える。" },
        { city: "上野", tag: "パイロット ・ 2026", d: "上野駅・公園・アメ横が集まる多目的エリア。ビジネス・観光・地元客が混在。" },
      ],
      nextLabel: "次の展開：関西・名古屋・福岡",
      next: ["関西・名古屋・福岡 → 2027〜", "海外都市 → 2028〜"],
    },
    reserveCta: {
      eyebrow: "Reserve",
      title: "あなたの箱を、先に予約。",
      lead: "オフィスのランチも、特別な手土産も。KAKU の予約システムで、受け取り時間を選んで並ばずに。",
      cta: "予約ページへ",
      note: "原宿・東京駅八重洲口・浅草・上野（パイロット拠点）",
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
      franchise: "フランチャイズ",
    },
    stores: [
      { id: "harajuku", city: "原宿", venue: "旗艦店" },
      { id: "tokyo-yaesu", city: "東京駅", venue: "八重洲口店" },
      { id: "asakusa", city: "浅草", venue: "浅草店" },
      { id: "ueno", city: "上野", venue: "上野店" },
    ],
    reservePage: {
      eyebrow: "Reservation",
      title: "並ばない。待たせない。",
      lead: "受け取り店舗・時間・セットを事前に指定。ピーク前に予約して、ピークでも、あなたの箱はすでに用意されています。",
      stepLabels: { pickup: "受け取り", selection: "セット", details: "ご連絡先" },
      pickup: {
        title: "受け取り情報",
        storeLabel: "店舗",
        storeHelper: "パイロット拠点を選択",
        pickupAtLabel: "受け取り日時",
        pickupHelper: "現在より先の日時を指定してください。",
      },
      selection: {
        title: "セットとフレーバー",
        setLabel: "セット",
        flavorsLabel: "フレーバー（数量）",
        flavorsHelper: "セットの合計個数に合わせて数量を調整してください。",
        countLabel: "合計",
      },
      details: {
        title: "ご連絡先",
        name: "お名前",
        email: "メールアドレス",
        phone: "電話番号",
        phoneOptional: "任意",
        notes: "備考",
        notesOptional: "任意",
      },
      summary: {
        title: "ご予約内容の確認",
        store: "店舗",
        pickupAt: "受け取り",
        set: "セット",
        flavors: "フレーバー",
        guest: "お客様",
      },
      buttons: {
        next: "次へ",
        back: "戻る",
        submit: "予約を確定する",
        submitting: "送信中…",
        another: "別の予約を作成",
        backHome: "トップへ戻る",
      },
      success: {
        title: "ご予約ありがとうございます。",
        lead: "受け取り時に下記の予約IDをご提示ください。確認メールは現在準備中です。",
        idLabel: "予約ID",
      },
      errors: {
        required: "必須項目です。",
        invalidEmail: "有効なメールアドレスを入力してください。",
        futureTime: "未来の日時を指定してください。",
        quantity: "フレーバーの合計をセットの個数に合わせてください。",
        network: "送信に失敗しました。しばらくしてから再度お試しください。",
      },
    },
    franchisePage: {
      eyebrow: "Franchise",
      title: "次の都市を、あなたと。",
      lead: "押し寿司 × 健康 × ラグジュアリーを、まず東京4拠点（原宿・東京駅・浅草・上野）で実証します。標準化されたモデルを、関西・名古屋・福岡、そして海外都市へとFC展開していくパートナーを募集します。",
      ctaInquire: "問い合わせる",
      ctaEconomics: "ユニットエコノミクス",
      opportunityTitle: "市場機会",
      opportunityLead: "グラブ&ゴーは健康・スピード・ビジュアルが交差する成長カテゴリーです。",
      stats: [
        { n: "$13.5B", l: "2035年のグローバル寿司市場規模" },
        { n: "7.9%", l: "2035年までのカテゴリー年平均成長率" },
        { n: "+64%", l: "デスクランチ需要の伸び" },
        { n: "<28%", l: "全SKUの目標フードコスト" },
      ],
      economicsTitle: "ユニットエコノミクス",
      economicsLead: "標準化されたメニューと工程設計で、立ち上げから黒字化までの時間を短く。",
      economics: [
        "全SKU フードコスト ≤ 28%（標準化シミュレーション）",
        "1拠点 投資回収目安 6〜8ヶ月（パイロット想定）",
        "1個 38〜42g／シャリ30g／6コアSKU＋4セット構成",
        "製造後8時間の冷蔵販売を前提とした廃棄・回転設計",
      ],
      systemTitle: "私たちが提供するもの",
      systemLead: "ブランドからサプライまで、開店に必要なすべて。",
      system: [
        { k: "01", t: "ブランド & VI", d: "Deep Navy / Gold / Ivory のブランドガイド、ロゴ、什器デザイン。" },
        { k: "02", t: "レシピ & SOP", d: "6SKUのレシピ・工程表、HACCPベースの SOP。" },
        { k: "03", t: "ショーケース什器", d: "一個ずつ陳列する専用ケース、POP、ピック。" },
        { k: "04", t: "トレーニング", d: "成形・盛り付け・廃棄管理までの店長／クルー研修。" },
        { k: "05", t: "サプライ", d: "五穀米ブレンド、合わせ酢、主要食材の供給／指定。" },
        { k: "06", t: "マーケ支援", d: "オープンキャンペーン、SNS素材、3言語の POP／メニュー。" },
      ],
      targetTitle: "想定パートナー",
      target: [
        "ASEAN／日本／香港／豪州主要都市での F&B 経験。",
        "ショッピングモール、空港、駅ナカでの出店ネットワーク。",
        "20〜30代女性向け体験ブランドの運営に関心。",
      ],
      timelineTitle: "オープンまでの流れ",
      timeline: [
        { k: "01", t: "資料請求／問い合わせ", d: "本ページのフォームから1分で送信。" },
        { k: "02", t: "オンライン面談", d: "事業計画・候補立地・タイムラインを共有。" },
        { k: "03", t: "契約・トレーニング", d: "MFA／FCA 締結、CK・店舗準備、研修。" },
        { k: "04", t: "オープン", d: "6〜8ヶ月以内に開店、KAKU 全国展開へ。" },
      ],
      inquiryTitle: "問い合わせ",
      inquiryLead: "下記フォームにご記入ください。3営業日以内に担当よりご返信します。",
      form: {
        name: "お名前",
        company: "会社名",
        companyOptional: "任意",
        email: "メールアドレス",
        phone: "電話番号",
        phoneOptional: "任意",
        country: "国",
        city: "想定エリア／都市",
        budget: "投資想定",
        budgets: [
          { id: "under-45m", label: "¥4,500万 未満" },
          { id: "45m-90m", label: "¥4,500万 – ¥9,000万" },
          { id: "90m-150m", label: "¥9,000万 – ¥1.5億" },
          { id: "over-150m", label: "¥1.5億 以上" },
        ],
        message: "ご質問・補足",
        messageOptional: "任意",
        submit: "送信する",
        submitting: "送信中…",
        success: "ありがとうございます。担当より3営業日以内にご連絡します。",
        errors: {
          required: "必須項目です。",
          invalidEmail: "有効なメールアドレスを入力してください。",
          network: "送信に失敗しました。しばらくしてから再度お試しください。",
        },
      },
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
      franchise: "Franchise",
      cta: "Reserve a Box",
    },
    hero: {
      eyebrow: "Pressed Sushi × Health × Luxury",
      title1: "Sushi,",
      title2: "Squared.",
      lead: "Pressed sushi, cut with the precision of jewellery. A 30mm cube of five-grain rice and six flavours — health and luxury, for your next surge.",
      ctaMenu: "Explore the Menu",
      ctaConcept: "The Concept",
      pilotBadge: "Pilot · 2026",
      teamEyebrow: "Our Team",
      teamCopy: "Sushi craftsmen × design-led service. We open the doors at all four stores in 2026.",
    },
    marquee: ["Pressed Sushi", "·", "Five-Grain", "·", "Health", "·", "Showcase", "·", "Your Next Surge"],
    concept: {
      eyebrow: "Concept",
      title: "We turned sushi into pressed cubes — and the fridge into a showcase.",
      lead: "The world sells rolls from supermarket fridges. KAKU sells your next surge of energy — five-grain pressed sushi in a 30mm cube, displayed one by one in a showcase. Health and luxury, for the working woman in her twenties and thirties.",
      pillars: [
        { k: "01", t: "The Cube", d: "A precise 30mm cube. Geometry you have never eaten — and never forget." },
        { k: "02", t: "Five-Grain Core", d: "One five-grain rice across every SKU. 30g rice base, 38–42g with topping — standardised." },
        { k: "03", t: "Six Jewels", d: "Six core flavours, engineered for colour, balance and contrast." },
        { k: "04", t: "Showcase", d: "Displayed one by one, like jewellery. You eat with your eyes first." },
        { k: "05", t: "Eight Hours", d: "Chilled, eight-hour freshness window. Built for the Grab & Go rhythm." },
      ],
    },
    menu: {
      eyebrow: "Menu",
      title: "Six jewels. Endless boxes.",
      items: [
        { slug: "salmon-classic", name: "Salmon Classic", note: "Salmon · avocado · sesame", rice: "Five-grain" },
        { slug: "spicy-tuna", name: "Spicy Tuna", note: "Tuna · spicy mayo · scallion", rice: "Five-grain" },
        { slug: "teriyaki-chicken", name: "Teriyaki Chicken", note: "Teriyaki chicken · edamame", rice: "Five-grain" },
        { slug: "miso-mushroom", name: "Miso Mushroom", note: "Miso mushroom · tofu", rice: "Five-grain" },
        { slug: "vegan-umami-cube", name: "Vegan Umami Cube", note: "Soy-meat soboro · balsamic miso", rice: "Five-grain" },
        { slug: "aburi-shrimp", name: "Aburi Shrimp Mango-Lime", note: "Aburi shrimp · mango-lime glaze", rice: "Five-grain" },
      ],
      sets: [
        { id: "kaku-6", name: "KAKU 6", detail: "6 pc · 1 flavour", price: "¥1,180" },
        { id: "kaku-mix-6", name: "KAKU MIX 6", detail: "6 pc · 2 flavours", price: "¥1,380" },
        { id: "kaku-box-9", name: "KAKU BOX 9", detail: "9 pc · 3 flavours", price: "¥1,980", featured: true },
        { id: "kaku-gift-12", name: "KAKU GIFT 12", detail: "12 pc · 4 flavours · premium box", price: "¥2,580" },
      ],
      featuredLabel: "Most loved",
      sides: [],
    },
    why: {
      eyebrow: "Why KAKU",
      title: "Health and precision, in a single cube.",
      lead: "We took out the noise and kept only what matters: one five-grain rice, one 30mm form, one eight-hour window. Sushi made for your next surge.",
      bullets: [
        "One five-grain rice across every SKU — texture and nutrition, lightly.",
        "A precise 30mm cube. Jewellery-grade sushi, palm-sized.",
        "Eight-hour chilled freshness. We bring it out before the rush, take it down after.",
      ],
      promises: [
        { k: "01", t: "100% Five-Grain", d: "Across every SKU. No white rice." },
        { k: "02", t: "30mm Precision", d: "30g of rice, 38–42g total." },
        { k: "03", t: "8h Cold Sales", d: "Time-stickered, time-discarded." },
        { k: "04", t: "Veg & Vegan", d: "Two plant-based SKUs, always." },
      ],
    },
    locations: {
      eyebrow: "Locations",
      title: "Four Tokyo pilots, then the rest of Japan.",
      cities: [
        { city: "Harajuku", tag: "Flagship · 2026", d: "Where Gen Z and global tourists cross — our flagship steps from Takeshita Street." },
        { city: "Tokyo Station — Yaesu", tag: "Pilot · 2026", d: "Shinkansen, JR and the largest underground arcade in Japan — peak Grab & Go." },
        { city: "Asakusa", tag: "Pilot · 2026", d: "Steps from Kaminari-mon and Nakamise — inbound demand and the gifting market in one." },
        { city: "Ueno", tag: "Pilot · 2026", d: "Station, park and Ameyoko — business, tourism and local commuters all in one stop." },
      ],
      nextLabel: "Next: Kansai · Nagoya · Fukuoka",
      next: ["Kansai · Nagoya · Fukuoka → 2027+", "Overseas cities → 2028+"],
    },
    reserveCta: {
      eyebrow: "Reserve",
      title: "Reserve your box, ahead of time.",
      lead: "Office lunch or a special gift — pick your pickup time with KAKU's reservation system and skip the queue.",
      cta: "Go to Reservations",
      note: "Harajuku · Tokyo Yaesu · Asakusa · Ueno (pilot sites)",
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
      franchise: "Franchise",
    },
    stores: [
      { id: "harajuku", city: "Harajuku", venue: "Flagship" },
      { id: "tokyo-yaesu", city: "Tokyo Station", venue: "Yaesu Exit" },
      { id: "asakusa", city: "Asakusa", venue: "Asakusa Store" },
      { id: "ueno", city: "Ueno", venue: "Ueno Store" },
    ],
    reservePage: {
      eyebrow: "Reservation",
      title: "No queue. No wait.",
      lead: "Pick your store, time and set in advance. Even at the lunch peak, your box is already waiting.",
      stepLabels: { pickup: "Pickup", selection: "Selection", details: "Details" },
      pickup: {
        title: "Pickup details",
        storeLabel: "Store",
        storeHelper: "Choose a pilot location",
        pickupAtLabel: "Pickup date & time",
        pickupHelper: "Please choose a time in the future.",
      },
      selection: {
        title: "Set & flavours",
        setLabel: "Set",
        flavorsLabel: "Flavours (qty)",
        flavorsHelper: "Adjust quantities to match the set total.",
        countLabel: "Total",
      },
      details: {
        title: "Your details",
        name: "Full name",
        email: "Email address",
        phone: "Phone",
        phoneOptional: "optional",
        notes: "Notes",
        notesOptional: "optional",
      },
      summary: {
        title: "Confirm your reservation",
        store: "Store",
        pickupAt: "Pickup",
        set: "Set",
        flavors: "Flavours",
        guest: "Guest",
      },
      buttons: {
        next: "Next",
        back: "Back",
        submit: "Confirm reservation",
        submitting: "Submitting…",
        another: "Make another reservation",
        backHome: "Back to Home",
      },
      success: {
        title: "Reservation confirmed.",
        lead: "Please show your reservation ID at pickup. Confirmation email is coming soon.",
        idLabel: "Reservation ID",
      },
      errors: {
        required: "This field is required.",
        invalidEmail: "Please enter a valid email address.",
        futureTime: "Please choose a time in the future.",
        quantity: "Total flavours must match the set size.",
        network: "Submission failed. Please try again shortly.",
      },
    },
    franchisePage: {
      eyebrow: "Franchise",
      title: "Open the next city with us.",
      lead: "KAKU is being proven first in Tokyo — Harajuku, Tokyo Station, Asakusa and Ueno. The standardised model then rolls out across Japan and into overseas cities. We are now meeting partners for the next wave: Kansai, Nagoya, Fukuoka and abroad.",
      ctaInquire: "Get in touch",
      ctaEconomics: "Unit economics",
      opportunityTitle: "The opportunity",
      opportunityLead: "Grab & Go sits where health, speed and visual collide — the highest-growth corner of food.",
      stats: [
        { n: "$13.5B", l: "Global sushi market by 2035" },
        { n: "7.9%", l: "Category CAGR through 2035" },
        { n: "+64%", l: "Growth in desk-lunch demand" },
        { n: "<28%", l: "Target food cost across every SKU" },
      ],
      economicsTitle: "Unit economics",
      economicsLead: "A standardised menu and process designed to shorten the path from open to profit.",
      economics: [
        "≤ 28% target food cost across every SKU (standardised model).",
        "6–8 month payback per site (pilot model).",
        "38–42g per cube · 30g rice · 6 core SKUs + 4 set sizes.",
        "Operations designed for 8-hour chilled sales with strict time-discard.",
      ],
      systemTitle: "What we provide",
      systemLead: "Everything you need to open — brand to supply.",
      system: [
        { k: "01", t: "Brand & VI", d: "Deep Navy / Gold / Ivory brand guide, logo, fixture design." },
        { k: "02", t: "Recipes & SOP", d: "Six SKUs with full process and HACCP-based SOPs." },
        { k: "03", t: "Showcase fixtures", d: "Bespoke display case, POP cards, picks." },
        { k: "04", t: "Training", d: "Manager and crew training across forming, plating and time discard." },
        { k: "05", t: "Supply", d: "Five-grain blend, vinegar, key ingredients — sourced or specified." },
        { k: "06", t: "Marketing", d: "Opening campaign, social assets, trilingual POP and menu." },
      ],
      targetTitle: "Ideal partner",
      target: [
        "F&B experience in ASEAN, Japan, Hong Kong or Australia.",
        "Access to mall, airport, transit-hub locations.",
        "An interest in experience brands for working women in their 20s–30s.",
      ],
      timelineTitle: "From inquiry to open",
      timeline: [
        { k: "01", t: "Inquiry", d: "Send this form in under a minute." },
        { k: "02", t: "Online meeting", d: "We share the model, sites and timeline." },
        { k: "03", t: "Contract & training", d: "MFA / FCA, central kitchen, staff training." },
        { k: "04", t: "Open", d: "Open within 6–8 months and roll out nationally." },
      ],
      inquiryTitle: "Get in touch",
      inquiryLead: "Fill in the form below. A team member will reply within three business days.",
      form: {
        name: "Full name",
        company: "Company",
        companyOptional: "optional",
        email: "Email",
        phone: "Phone",
        phoneOptional: "optional",
        country: "Country",
        city: "Target city / area",
        budget: "Investment band",
        budgets: [
          { id: "under-45m", label: "Under ¥45M" },
          { id: "45m-90m", label: "¥45M – ¥90M" },
          { id: "90m-150m", label: "¥90M – ¥150M" },
          { id: "over-150m", label: "Over ¥150M" },
        ],
        message: "Questions / notes",
        messageOptional: "optional",
        submit: "Send inquiry",
        submitting: "Sending…",
        success: "Thank you — a team member will reply within three business days.",
        errors: {
          required: "This field is required.",
          invalidEmail: "Please enter a valid email address.",
          network: "Submission failed. Please try again shortly.",
        },
      },
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
      franchise: "加盟",
      cta: "预约盒子",
    },
    hero: {
      eyebrow: "押寿司 × 健康 × 奢华",
      title1: "Sushi,",
      title2: "Squared.",
      lead: "押寿司，以珠宝般的精度切割。30mm 立方，五谷米与六款风味——健康与奢华，为你的下一份活力。",
      ctaMenu: "查看菜单",
      ctaConcept: "了解理念",
      pilotBadge: "试点 · 2026",
      teamEyebrow: "Our Team",
      teamCopy: "日式职人 × 设计为先的服务。2026 年，4 家门店与你相见。",
    },
    marquee: ["押寿司", "·", "五谷米", "·", "健康", "·", "展示柜", "·", "下一份活力"],
    concept: {
      eyebrow: "Concept",
      title: "把寿司压成立方，把冰柜变成展示柜。",
      lead: "世界从超市冰柜里售卖寿司卷。KAKU 售卖的是你的下一份活力——五谷米押寿司，制成 30mm 立方，于展示柜中逐颗陈列。健康与奢华，为二三十岁的职场女性而生。",
      pillars: [
        { k: "01", t: "立方体", d: "精准的 30mm 立方。前所未尝、过目不忘的几何。" },
        { k: "02", t: "五谷米芯", d: "全 SKU 统一五谷米。每件米饭 30g，含配料 38–42g，标准化。" },
        { k: "03", t: "六颗宝石", d: "六款核心风味，皆为色彩、平衡与对比而设计。" },
        { k: "04", t: "展示柜", d: "像珠宝般逐颗陈列。先用眼睛吃。" },
        { k: "05", t: "八小时", d: "冷藏八小时鲜度窗口。为即取即走的节奏而生。" },
      ],
    },
    menu: {
      eyebrow: "Menu",
      title: "六颗宝石。无限的盒子。",
      items: [
        { slug: "salmon-classic", name: "Salmon Classic", note: "三文鱼 · 牛油果 · 芝麻", rice: "五谷米" },
        { slug: "spicy-tuna", name: "Spicy Tuna", note: "金枪鱼 · 香辣蛋黄酱 · 青葱", rice: "五谷米" },
        { slug: "teriyaki-chicken", name: "Teriyaki Chicken", note: "照烧鸡肉 · 毛豆", rice: "五谷米" },
        { slug: "miso-mushroom", name: "Miso Mushroom", note: "味噌蘑菇 · 豆腐", rice: "五谷米" },
        { slug: "vegan-umami-cube", name: "Vegan Umami Cube", note: "大豆素肉松 · 黑醋味噌", rice: "五谷米" },
        { slug: "aburi-shrimp", name: "Aburi Shrimp Mango-Lime", note: "炙烤虾 · 芒果青柠酱", rice: "五谷米" },
      ],
      sets: [
        { id: "kaku-6", name: "KAKU 6", detail: "6 件 · 1 种风味", price: "¥1,180" },
        { id: "kaku-mix-6", name: "KAKU MIX 6", detail: "6 件 · 2 种风味", price: "¥1,380" },
        { id: "kaku-box-9", name: "KAKU BOX 9", detail: "9 件 · 3 种风味", price: "¥1,980", featured: true },
        { id: "kaku-gift-12", name: "KAKU GIFT 12", detail: "12 件 · 4 种风味 · 高端礼盒", price: "¥2,580" },
      ],
      featuredLabel: "人气第一",
      sides: [],
    },
    why: {
      eyebrow: "Why KAKU",
      title: "健康与精度，凝于一颗立方。",
      lead: "我们去掉冗余，只留下重要的：五谷米、30mm 立方、八小时新鲜窗口——为你的下一份活力。",
      bullets: [
        "全 SKU 五谷米。杂粮的口感与营养，轻盈呈现。",
        "30mm 精准立方。掌心大小的珠宝级寿司。",
        "出品后 8 小时鲜度管理。高峰前出，高峰后撤。",
      ],
      promises: [
        { k: "01", t: "100% 五谷米", d: "全 SKU 统一。无白米。" },
        { k: "02", t: "30mm 精准", d: "米饭 30g，总重 38–42g。" },
        { k: "03", t: "八小时冷售", d: "时间贴标 / 时间废弃。" },
        { k: "04", t: "Veg & Vegan", d: "始终设两款植物性 SKU。" },
      ],
    },
    locations: {
      eyebrow: "Locations",
      title: "从东京 4 店起步，再到全日本。",
      cities: [
        { city: "原宿", tag: "旗舰店 · 2026", d: "Z 世代与全球游客交汇之地——KAKU 旗舰店紧邻竹下通。" },
        { city: "东京站 八重洲口", tag: "试点 · 2026", d: "新干线、JR 与日本最大地下商业街——即取即走的高峰中心。" },
        { city: "浅草", tag: "试点 · 2026", d: "雷门、仲见世通近在咫尺——入境客流与伴手礼需求一并兼得。" },
        { city: "上野", tag: "试点 · 2026", d: "上野站、公园、阿美横丁——商务、观光与本地客流齐聚的多元枢纽。" },
      ],
      nextLabel: "下一站：关西·名古屋·福冈",
      next: ["关西·名古屋·福冈 → 2027+", "海外城市 → 2028+"],
    },
    reserveCta: {
      eyebrow: "Reserve",
      title: "提前，预约你的盒子。",
      lead: "无论是办公室午餐还是特别伴手礼——用 KAKU 预约系统选好取餐时间，免排队。",
      cta: "前往预约页",
      note: "原宿·东京站八重洲口·浅草·上野（试点门店）",
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
      franchise: "加盟",
    },
    stores: [
      { id: "harajuku", city: "原宿", venue: "旗舰店" },
      { id: "tokyo-yaesu", city: "东京站", venue: "八重洲口店" },
      { id: "asakusa", city: "浅草", venue: "浅草店" },
      { id: "ueno", city: "上野", venue: "上野店" },
    ],
    reservePage: {
      eyebrow: "Reservation",
      title: "不排队。不等待。",
      lead: "提前指定取餐门店、时间与套餐。即使在午餐高峰，你的盒子也已备好。",
      stepLabels: { pickup: "取餐", selection: "套餐", details: "联系方式" },
      pickup: {
        title: "取餐信息",
        storeLabel: "门店",
        storeHelper: "选择试点门店",
        pickupAtLabel: "取餐日期与时间",
        pickupHelper: "请选择未来的时间。",
      },
      selection: {
        title: "套餐与风味",
        setLabel: "套餐",
        flavorsLabel: "风味（数量）",
        flavorsHelper: "请调整数量以匹配套餐总数。",
        countLabel: "合计",
      },
      details: {
        title: "您的联系方式",
        name: "姓名",
        email: "电子邮箱",
        phone: "电话",
        phoneOptional: "选填",
        notes: "备注",
        notesOptional: "选填",
      },
      summary: {
        title: "确认预约内容",
        store: "门店",
        pickupAt: "取餐",
        set: "套餐",
        flavors: "风味",
        guest: "顾客",
      },
      buttons: {
        next: "下一步",
        back: "返回",
        submit: "确认预约",
        submitting: "发送中…",
        another: "再来一笔预约",
        backHome: "返回首页",
      },
      success: {
        title: "预约已确认。",
        lead: "取餐时请出示下方预约编号。确认邮件功能正在准备中。",
        idLabel: "预约编号",
      },
      errors: {
        required: "此项为必填。",
        invalidEmail: "请输入有效的电子邮箱。",
        futureTime: "请选择未来的时间。",
        quantity: "风味总数需与套餐数量一致。",
        network: "提交失败，请稍后再试。",
      },
    },
    franchisePage: {
      eyebrow: "Franchise",
      title: "下一座城市，与你共启。",
      lead: "KAKU 首先在东京 4 店——原宿、东京站、浅草、上野——验证模型。随后将标准化的模型推向全日本，再走向海外。我们正在为关西、名古屋、福冈与海外的下一波扩张寻找合作伙伴。",
      ctaInquire: "联系我们",
      ctaEconomics: "单店经济",
      opportunityTitle: "市场机会",
      opportunityLead: "即取即走是健康、速度与视觉交汇的高增长赛道。",
      stats: [
        { n: "$13.5B", l: "2035 年全球寿司市场规模" },
        { n: "7.9%", l: "至 2035 年品类年均增长率" },
        { n: "+64%", l: "办公室午餐需求增长" },
        { n: "<28%", l: "全部 SKU 的目标成本率" },
      ],
      economicsTitle: "单店经济",
      economicsLead: "以标准化菜单与流程设计，缩短从开业到盈利的路径。",
      economics: [
        "全 SKU 目标成本率 ≤ 28%（标准化模型）。",
        "单店投资回收 6–8 个月（试点模型）。",
        "每件 38–42g / 米饭 30g / 6 款核心 SKU + 4 种套餐。",
        "为出品后 8 小时冷藏销售设计的废弃与周转。",
      ],
      systemTitle: "我们提供什么",
      systemLead: "从品牌到供应，开业所需的一切。",
      system: [
        { k: "01", t: "品牌与 VI", d: "Deep Navy / Gold / Ivory 品牌指南、Logo、器具设计。" },
        { k: "02", t: "配方与 SOP", d: "6 款 SKU 的配方与工艺，基于 HACCP 的 SOP。" },
        { k: "03", t: "展示器具", d: "用于逐颗陈列的专用展示柜、POP、装饰签。" },
        { k: "04", t: "培训", d: "成形、摆盘、废弃管理的店长与员工培训。" },
        { k: "05", t: "供应", d: "五谷米拼配、寿司醋、关键食材供应或指定。" },
        { k: "06", t: "营销", d: "开业活动、社交素材、三语 POP 与菜单。" },
      ],
      targetTitle: "理想合作伙伴",
      target: [
        "在东盟、日本、香港或澳洲拥有餐饮经验。",
        "可进入购物中心、机场、轨交枢纽等优质场所。",
        "关注面向 20–30 代女性的体验型品牌。",
      ],
      timelineTitle: "从咨询到开业",
      timeline: [
        { k: "01", t: "提交咨询", d: "通过本页表单一分钟提交。" },
        { k: "02", t: "线上会议", d: "对接商业计划、候选选址与时间表。" },
        { k: "03", t: "签约与培训", d: "签订 MFA / FCA，中央厨房与培训准备。" },
        { k: "04", t: "开业", d: "6–8 个月内开业，进入 KAKU 全国扩张。" },
      ],
      inquiryTitle: "联系我们",
      inquiryLead: "请填写下列表单，我们将在 3 个工作日内回复。",
      form: {
        name: "姓名",
        company: "公司",
        companyOptional: "选填",
        email: "电子邮箱",
        phone: "电话",
        phoneOptional: "选填",
        country: "国家",
        city: "目标城市 / 区域",
        budget: "投资规模",
        budgets: [
          { id: "under-45m", label: "¥4,500 万 以下" },
          { id: "45m-90m", label: "¥4,500 万 – ¥9,000 万" },
          { id: "90m-150m", label: "¥9,000 万 – ¥1.5 亿" },
          { id: "over-150m", label: "¥1.5 亿 以上" },
        ],
        message: "问题 / 备注",
        messageOptional: "选填",
        submit: "提交咨询",
        submitting: "发送中…",
        success: "感谢联系——我们将在 3 个工作日内回复。",
        errors: {
          required: "此项为必填。",
          invalidEmail: "请输入有效的电子邮箱。",
          network: "提交失败，请稍后再试。",
        },
      },
    },
  },
};
