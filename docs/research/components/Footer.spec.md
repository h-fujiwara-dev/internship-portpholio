# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/internshipguide.jp/desktop-top.jpg` (bottom of page)
- **Interaction model:** static, hover-only

## DOM Structure
```
footer.l-body__footer
  div.p-footer (margin-top:3em)
    div.p-footer-navi (dark slate background)
      div.p-footer-navi__inner (max-width 980px desktop / 650px mobile, centered, padding-top:4em, padding-bottom:2em)
        div.p-footer-gotop (top-right) -> a "トップへ戻る" (chevron-up above, underlined text)
        div.p-footer-sitemap (3 columns desktop, stacked mobile)
          ul.p-footer-sitemap__list x3 (columns, see Text Content for link groups)
        div.p-footer-sns (centered row)
          a x2 (X icon, Facebook icon — circular white buttons)
    div.p-footer-copyright (lighter section below)
      div.p-footer-copyright__logo -> img (small site logo, centered)
      div.p-footer-copyright__text
        p "COPYRIGHT © 2014 futurelabo,Inc. ALL RIGHTS RESERVED."
        p "インターンシップガイドは株式会社futurelaboの登録商標です。"
        p "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply."
```

## Computed Styles (exact values)

### `.p-footer-navi`
- background-color: #58717d (dark slate — applies to the whole nav block incl. sitemap area)

### `.p-footer-navi__inner`
- max-width:650px (mobile) → 980px (≥769px); margin:0 auto; padding: 4em 1em 2em 1em (top/sides/bottom)
- position:relative (for the absolutely-positioned gotop link)

### `.p-footer-gotop`
- position:absolute; top:10px; right:0; width:100%; text-align:center (mobile)
- Desktop (≥769px): right:1em; text-align:right
- `a`: position:relative; display:inline-block; padding:0 0.5em 0.2em; color:#fff; letter-spacing:1px;
  border-bottom:1px solid #fff; font-size:12px
- `a::before`: block, full-width, FontAwesome chevron-up icon above the text, font-size:150% (≈18px)
  → use `ChevronUpIcon` stacked above the "トップへ戻る" label
- Hover (≥769px only): opacity:.6

### `.p-footer-sitemap`
- Desktop (≥769px): display:flex; justify-content:space-between
- Mobile: stacks the 3 `ul` blocks vertically (default block flow)

### `.p-footer-sitemap__list`
- letter-spacing:1px; list-style:none; font-size:12px
- Desktop (≥769px): width: calc(33.3333% - 1em) per column
- `li`: border-bottom:1px solid #6c8d9c; hover (≥769px): opacity:.6
- `a`: position:relative; display:block; padding:1.5em 2em 1.5em 0.5em; color:#fff
- `a::after`: chevron, absolute top:50% right:0.5em, translateY(-50%), color:#6c8d9c, font-size:150%
  → use `ChevronRightIcon` sized ~18px, color `#6c8d9c`, positioned right of each link row.

### `.p-footer-sns`
- display:flex; justify-content:center; margin-top:2em
- `a`: display:block; width:2em; height:2em; line-height:2; color:#58717d; text-align:center;
  background-color:#fff; border-radius:4em (fully round); font-size:20px
- `a + a`: margin-left:0.3em
- Hover (≥769px): opacity:.6
- Icons: `XIcon`, `FacebookIcon` from `src/components/icons.tsx`, colored `#58717d` on white circle.

### `.p-footer-copyright`
- max-width:980px; margin:0 auto; padding:1em (top/bottom), 1em (sides)
- `__logo`: width:30% (mobile) → 120px (≥769px); margin:auto; hover (≥769px): opacity:.6
- `__text`: color:#58717d; text-align:center; letter-spacing:1px; font-size:11px; each `p` has
  margin-top:0.5em

## Text Content (verbatim)

### Column 1
トップページ / 会社概要 / お問い合わせ / 会員登録（無料） / 全国のインターン・インターンシップ / Webテスト対策

### Column 2
企業ログイン / 多くの企業様に支持される理由 / インターンシップの掲載無料 / 説明会、インターンの掲載・採用無料 / IG学生集客サービス

### Column 3
インターンシップガイドとは / インターン生募集 / 利用規約 / プライバシーポリシー / 注目のキーワード一覧 / 一般常識一問一答.com(外部)

### Gotop link
トップへ戻る

### Copyright block
COPYRIGHT © 2014 futurelabo,Inc. ALL RIGHTS RESERVED.
インターンシップガイドは株式会社futurelaboの登録商標です。
This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.

All footer links: `href="#"` (mock).

## Assets
- `/images/logo.png` (reused, small copyright-strip logo)
- `ChevronUpIcon`, `ChevronRightIcon`, `XIcon`, `FacebookIcon` from `src/components/icons.tsx`

## Responsive Behavior
- **Desktop (≥769px):** 3-column sitemap (`flex; justify-between`), gotop link right-aligned,
  980px max-width, logo shrinks to fixed 120px.
- **Mobile (<769px):** sitemap columns stack vertically, gotop link centered, 650px max-width,
  logo scales to 30% container width.
- **Breakpoint:** 769px
