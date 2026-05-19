# KAKU ランディングページ — Codex 引き継ぎドキュメント

> 本ドキュメントは、Claude Code セッションで実施した作業を Codex（または他AI/開発者）へ引き継ぐためのものです。
> 最終更新: 2026-05-19

---

## 1. プロジェクト概要

- **対象**: 海外向けプレミアム・テイクアウト寿司ブランド「**KAKU**」のマーケティング用ランディングページ（LP）
- **ブランドタグライン**: `Sushi, Squared.`
- **コンセプト**: 寿司をキューブ（立方体）に再定義し、ジュエリーボックス型パッケージで提供する「ラグジュアリー Grab & Go」
- **ターゲット**: 20〜30代の働く女性（都市型ホワイトカラー）／起点市場はシンガポール・クアラルンプール
- **元情報**: 別途共有された「KAKU プロジェクト 完全議事録」（市場分析・商品設計・価格・立地・マーケ戦略）。LP のコピー・数値はこの議事録に準拠。

### ブランドアイデンティティ（実装に反映済み）

| 項目 | 値 |
|---|---|
| ブランド名 | KAKU（角＝キューブ） |
| タグライン | Sushi, Squared.（全言語で英語のまま固定） |
| カラー | ディープネイビー `#0B1F3A` / 深ネイビー `#06152A` / ゴールド `#C8A24B` / クリーム `#F5EFE3` |
| ポジション | プレミアム Grab & Go 寿司 |

---

## 2. 技術スタック

| 項目 | 内容 |
|---|---|
| フレームワーク | **Next.js 16.2.6**（App Router, Turbopack, `src/` ディレクトリ） |
| 言語 | TypeScript 5 |
| React | 19.2.4 |
| スタイル | **Tailwind CSS v4**（`@tailwindcss/postcss`、設定は CSS の `@theme` で管理。`tailwind.config.*` は無し） |
| フォント | `next/font/google`：Cormorant Garamond（英字ディスプレイ）/ Inter（英字本文）/ Noto Sans JP・Noto Serif JP（日本語・中国語グリフのフォールバック） |
| Lint | ESLint 9 + `eslint-config-next`（`npm run lint`） |
| ホスティング前提 | 静的プリレンダリング（`/` は Static） |

> ⚠️ リポジトリ直下 `AGENTS.md` に「これは通常の Next.js ではない、`node_modules/next/dist/docs/` を読んでから書け」という指示あり。APIや規約が学習データと異なる可能性に注意。今回の実装範囲では問題は発生していない。

---

## 3. 実装済みの内容

### ページ構成（1ページLP・全セクション辞書ベース）

1. **Hero** — ブランドワードマーク、`Sushi, / Squared.` 見出し、インラインSVGのジュエリーボックス（2×3キューブ、議事録の `viewBox 0 0 680 760` 仕様準拠）、フロートアニメ、2つのCTA
2. **Marquee** — 健康／映え／利便性／都市名のキーワード帯
3. **Concept** — 「箱を変えた」ナラティブ＋5つの設計柱（キューブ／雑穀シャリ／6つの宝石／ボックス／8時間鮮度）
4. **Menu** — 6コアSKU＋4セット（KAKU BOX 9 を featured）＋サイドメニュー
5. **Why KAKU** — 健康×映え×利便性のポジショニング＋市場統計4指標
6. **Locations** — シンガポール／クアラルンプールのパイロット＋次都市
7. **Social / CTA** — `#KAKUChallenge` のUGC訴求＋CTA
8. **Footer**

### 多言語対応（日本語・英語・中国語）

- **デフォルトロケール: 日本語 (`ja`)**。`en` / `zh` に切替可能
- 辞書ベース。全コピーは `src/i18n/dictionaries.ts` に型付きで集約
- 言語状態は `useSyncExternalStore` + `localStorage`（キー: `kaku-locale`）で永続化。SSR安全（サーバー＆初期描画は `ja`、ハイドレーション後にクライアント値へ）
- 言語切替UIはナビ右側（PC）とモバイルメニュー内に配置
- 選択言語に応じて `<html lang>` を更新
- タグライン `Sushi, Squared.` とメニューのブランド名（Salmon Classic 等）は全言語共通。`note`（説明）・`rice`（シャリ種別）・価格表記の単位語などはローカライズ

### モーション

- `Reveal` コンポーネント（IntersectionObserver でスクロール表示アニメ）
- `prefers-reduced-motion` は **CSS側で** 完全フォールバック（`globals.css`）。JSではreduced-motion分岐を持たない（ESLintの `react-hooks/set-state-in-effect` 回避のため意図的にこの設計）

---

## 4. ファイル構成（主要ファイル）

```
src/
├── app/
│   ├── globals.css        # Tailwind v4 @theme（カラー/フォント/アニメ）+ reveal/reduced-motion
│   ├── layout.tsx         # フォント読込、メタデータ（日本語）、lang="ja"
│   └── page.tsx           # <LanguageProvider><Landing/></LanguageProvider> のみ
├── components/
│   ├── Landing.tsx        # ★LP本体（client）。useI18n で辞書を消費
│   ├── Nav.tsx            # 固定ナビ（client）。スクロール追従＋モバイルメニュー＋言語切替
│   ├── LanguageSwitcher.tsx
│   ├── Reveal.tsx         # スクロール表示アニメ（client, IntersectionObserver）
│   └── KakuBox.tsx        # ジュエリーボックスのインラインSVG（純粋なpresentational）
└── i18n/
    ├── dictionaries.ts    # ★ja/en/zh 全コピー＋型定義（Dict, Locale, locales, localeNames）
    └── LanguageProvider.tsx # Context + useSyncExternalStore + localStorage
```

### 設計上の要点（変更時の注意）

- **コピー追加・修正は必ず `dictionaries.ts` の3言語すべてに反映**。`Dict` 型があるため、キー追加時は型エラーで漏れを検知できる
- `Landing.tsx` はすべて `t.*`（辞書）経由でテキストを描画。ハードコード文字列を足さないこと
- Tailwind のカラーは `@theme` 定義により `bg-navy` / `text-gold` / `text-cream` / `bg-navy-deep` / `text-gradient-gold`（ユーティリティクラス `.text-gradient-gold` は `globals.css` 定義）等で参照
- `KakuBox.tsx` のキューブ配色は6 SKU に対応した配列。SKU増減時はここも調整

---

## 5. 品質状態

- `npm run build` … ✅ 成功（`/` は Static プリレンダリング）
- `npm run lint` … ✅ クリーン（エラー0）
- ローカル `next start` スモークテスト … ✅ HTTP 200、デフォルト日本語表示、3言語スイッチャー表示を確認
- **未実施**: ブラウザでの実機ビジュアルQA（この実行環境にブラウザが無いため）。デザイン崩れ・言語切替の見た目・レスポンシブは要目視確認

---

## 6. Git / PR 状態

- 開発ブランチ: **`claude/kaku-landing-page-G0Z9D`**
- リポジトリは元々空（コミットなし）だった
- ユーザー承認のもと、`main` を「空の初期化コミット (`Initialize repository`)」として作成し、開発ブランチをその上に rebase（共通履歴を持たせるため）
- ドラフトPR: **[ogawa1218/my-next#1](https://github.com/ogawa1218/my-next/pull/1)**（base: `main` / head: `claude/kaku-landing-page-G0Z9D`）
- 主要コミット:
  1. `Build KAKU premium landing page`（初期英語版LP + Next.jsスキャフォールド）
  2. `Add Japanese/English/Chinese language switcher to landing page`（i18n化、デフォルトを日本語に）
- CI: リポジトリにCI未設定（check runs 0件）。レビューコメントなし
- PRアクティビティは購読中（CI失敗・レビューコメントがあれば自動で調査・対応する運用）

> 注: `main` は実体のあるベースが無かったため空コミット。将来 `main` に他の履歴を載せる場合はこの経緯を踏まえること。

---

## 7. 経緯メモ（誤解と修正の記録）

- 当初「説明文を日本語にして」はチャット返信を日本語にしてほしいという意図だったが、LPコピーの日本語化と解釈して実装 → その後ユーザーが意図を訂正
- ただし別途「LPは日本語・英語・中国語に翻訳できるように」という明示要求があり、これは有効。結果として i18n（ja/en/zh、デフォルトja）として実装・確定
- 以降、Claude側のチャット応答は日本語で実施

---

## 8. 未対応・次のアクション候補（Codexへの引き継ぎタスク）

優先度の目安付き。要件は別資料「KAKUプロジェクト完全議事録」も参照。

1. **(高) ブラウザ実機QA**: 3言語×PC/モバイルでの表示崩れ・フォント・言語切替UXの目視確認と微調整
2. **(高) SEO/メタ多言語化**: 現状 `layout.tsx` のメタデータは日本語固定・`lang="ja"` 固定。`hreflang`、OGP画像、言語別メタの検討（必要なら `[locale]` ルーティングへの移行も選択肢）
3. **(中) 画像・ビジュアル**: 現状キービジュアルはインラインSVGのみ。実写商品撮影が入った際の差し替え設計
4. **(中) お持ち帰り予約システム**: 議事録の別タスク。Supabase + Prisma + NextAuth + Resend 想定（本LPとは別スコープ）
5. **(中) アナリティクス**: GA4 / PostHog / Plausible 等の選定・組込
6. **(低) ドメイン**: `kaku.sushi` / `kaku-sushi.com` 等の取得（事業側タスク）
7. **(低) 言語自動判定**: `Accept-Language` による初期ロケール推定（現状は常に `ja` 起動 + localStorage 復元）

### 実装規約（Codex向け）

- コピー変更は `src/i18n/dictionaries.ts` の **ja/en/zh 3言語すべて** に反映（`Dict` 型で漏れ検知）
- ブランド名・タグライン `Sushi, Squared.` は翻訳しない
- ブランド毀損回避原則（議事録 16.4）を厳守：低価格訴求にしない／ラグジュアリーGrab&Goのトーンを維持
- 変更後は必ず `npm run lint` と `npm run build` を通すこと
- `prefers-reduced-motion` フォールバックはCSS側で維持（JSにreduced-motion分岐を戻さない）
- コミットは開発ブランチ `claude/kaku-landing-page-G0Z9D` へ。PR #1 を更新する運用

---

## 9. クイックスタート

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

言語切替はナビ右側の「日本語 / English / 中文」ボタン。選択は `localStorage` に保存される。
