# KAKU Marketing Manga — Codex Brief

A 6-panel marketing manga that turns the KAKU brand story into editorial content for the LP. Targets working women in their 20s–30s in Tokyo, anchored on the four pilot stores: 原宿 / 東京駅 八重洲口 / 浅草 / 上野.

The LP already has the stage built. Drop the rendered panels into `public/manga/01.jpg` … `06.jpg`, flip `MANGA_READY` in `src/components/Story.tsx` to `true`, and the placeholders are replaced everywhere automatically — no other code change required.

---

## How to use this brief

Paste sections **1 (Brand & Style)** and **2 (Character)** at the **top of every prompt**, then append the **single panel** from section **3** you want to render. Keep style + character constant across all 6 calls so Aoi looks like Aoi and the linework stays coherent.

---

## 1. Brand & Style (always include)

- Palette: ivory background `#F5EFE3`, deep navy `#06152A` for ink and text, gold `#C8A24B` for accents only.
- Style: clean modern *josei* manga with a luxury editorial feel — fine pen lines, careful screentones, magazine-grade framing. Think *Honey and Clover* meets *Vogue Japan*. Avoid chibi, no over-stylised shōnen lines.
- Aspect ratio: **4:3** per panel. Full layout: 3 columns × 2 rows on A4 portrait.
- Sushi cubes are exactly **30 mm**, with a visible **五穀米** (five-grain) rice texture. Six core flavours (top colour in parentheses):
  - 01 Salmon Classic (coral)
  - 02 Spicy Tuna (vivid red)
  - 03 Teriyaki Chicken (edamame green)
  - 04 Miso Mushroom (tofu ivory)
  - 05 Vegan Umami Cube (roasted paprika)
  - 06 Aburi Shrimp Mango-Lime (mango yellow)
- Japanese signage and speech bubbles are **hand-lettered**. English / 中文 variants are a second deliverable, same composition.

---

## 2. Character (always include)

**葵 (Aoi)** — 28 years old, marketing analyst in Marunouchi. Subtle chin-length bob, dark hair with a single highlight. Navy blazer over an ivory blouse, with a small gold KAKU cube pin on the lapel. Thin gold ring. Calm, focused expression — not bubbly. Carries an iPhone in a navy leather case.

---

## 3. Storyboard

### Panel 01 — 12:25 PM, Marunouchi office
Aoi at her desk in mid-afternoon light through window blinds. Spreadsheet on the laptop. Phone (face up beside the laptop) shows a tiny gold cube glyph as a notification. Small sound effect **「ピコン」** near the phone. Aoi's internal monologue bubble: **「あ、もうこんな時間。」** Caption box (top-right, narrow): **12:25 PM · Marunouchi.**

### Panel 02 — Underground arcade, Tokyo Station Yaesu
Wide establishing shot. Aoi walks past silhouetted commuters toward a small luminous shopfront. The sign reads **KAKU** in a gold serif. Through the glass, rows of cubes are displayed like jewellery, lit warm from above. Caption (bottom-left, thin gold frame): **「東京駅 八重洲口店 — Pilot · 2026.」**

### Panel 03 — Close-up: the showcase
Tilt-shift on six perfect 30 mm cubes arranged in a row inside the case, each topped with a tiny gold pick. Aoi's reflection is visible faintly in the glass top-left. Focus on the centre cube (Salmon Classic). Caption (small, italic): **「30 mm。ジュエリーの精度で。」**

### Panel 04 — Pickup counter
Medium shot. Aoi holds up her iPhone showing a QR code. A smiling KAKU staff member (navy apron with a gold cube embroidered on the chest) at the counter holds a black gift box with a gold ribbon. A menu board behind them mirrors the styling of `public/kaku-menu-board.svg`. No queue. Speech (Aoi): **「予約していました、葵です。」** Staff: **「KAKU BOX 9 ですね。」**

### Panel 05 — Open box, top-down
Bird's-eye view of the opened KAKU BOX 9 on a clean ivory desk: 9 cubes in 3 flavours arranged in a 3×3 grid like a jewellery tray. Tiny sparkles on the cubes. Aoi's hand at the edge of frame with chopsticks. Caption (centred, bottom): **「次の活力を、ひとくちずつ。」**

### Panel 06 — End card
Centred on ivory: the **KAKU** wordmark in display serif (gold) above the tagline **Sushi, Squared.** A thin gold rule beneath. Below the rule, four small city tags in a row: **原宿 · 東京駅 · 浅草 · 上野**. A small QR code in the corner linking to `/reserve`. Caption: **「あなたの箱を、先に予約。」**

---

## 4. Deliverables

| # | File | Spec |
|---|------|------|
| 1 | `public/manga/01.jpg` … `06.jpg` | Individual panels, 1600 × 1200 px (4:3), sRGB JPEG, ≤ 400 KB each |
| 2 | `public/manga/full.jpg` | Combined 3 × 2 page export, 3000 × 4200 px (A4 portrait, 300 DPI) |
| 3 | `kaku-manga.psd` | Layer groups: line art / screentone / text / gold accents / background |
| 4 | EN + ZH variants | Panels 01 / 04 / 05 / 06 retranslated in English and 中文 for the `en` and `zh` LPs |

---

## 5. LP wiring

- The Story section already renders six panel cards under `Landing.tsx` → `<Story />` (section anchor `#story`).
- Until assets land, each card shows a brand-styled placeholder (gold panel number + scene title).
- When all six JPEGs are in `public/manga/`, set `MANGA_READY = true` in `src/components/Story.tsx`. The same component will swap each placeholder for the real artwork using `next/image`.
- Locale-specific assets can be added under `public/manga/en/` and `public/manga/zh/` with a small `locale` switch in the same component if needed.
