# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Screenshot:** `docs/design-references/internshipguide.jp/desktop-top.jpg` (top section, below header)
- **Interaction model:** static; mobile renders a genuinely different sub-element (CTA button) than
  desktop (login form) — not a resize of the same markup

## DOM Structure
```
section.key-visual (full-bleed background photo)
  div.key-visual__inner (dark scrim overlay, flex row on desktop)
    div.key-visual__copy
      h1.catchphrase
        span.catchphrase__main-text  "インターンシップを大学生が探すなら\nインターンシップガイド"
        p.catchphrase__sub-text (3 lines, see Text Content)
      div.key-visual__cta (MOBILE ONLY — CTA button, hidden ≥769px)
    div.key-visual__form (desktop only, contains the login card)
      div.form
        [email input, password input]
        div.login-box (checkbox left, ログイン button right)
        div.line-login (LINE login button)
        div.entry-box (divider + red notice + email input + register button)
```

## Computed Styles (exact values)

### `.key-visual`
- background-image: mobile-first `/images/hero/main_bg_mob.jpg`; at ≥769px swap to `/images/hero/main_bg.jpg`
- background-repeat:no-repeat; background-position:center; background-size:cover
- Use a `<picture>`/CSS approach: mobile bg via base class, desktop bg via `md:` variant (Tailwind
  arbitrary background-image utilities), or a plain `<div>` with inline style swapped by a `useEffect`
  media query is overkill — prefer pure CSS (`background-image` set via a Tailwind arbitrary-value
  utility for the base and `md:` variants).

### `.key-visual__inner`
- padding: 2em; background-color: rgba(0,0,0,.4) (mobile)
- Desktop (≥769px): display:flex; align-items:flex-start; justify-content:center; min-height:400px; padding:3em

### `.key-visual__copy`
- flex: 0 1 600px; margin-right: 1em (desktop)

### `.catchphrase` (h1)
- color: #fff
- `.catchphrase__main-text`: font-weight:bold; font-size:24px (mobile) → 30px (≥769px); letter-spacing:0.5px; spans wrap with `display:inline-block`
- `.catchphrase__sub-text`: margin-top:1em; font-size:14px (mobile) → line-height:1.8; font-size:18px; letter-spacing:3px (≥769px)

### `.key-visual__cta` (MOBILE ONLY)
- `display:flex; gap:8px; align-items:center; justify-content:center; border-radius:0`
- `display:none` at ≥769px — this element must not render at all on desktop (not just visually hidden)
- Style it as a solid button (reuse `.c-button--entry` pink `#de5485` look) prompting toward
  registration/login, text e.g. "無料会員登録してインターンを探す" (paraphrase acceptable — exact mobile
  CTA copy wasn't captured, keep tone consistent with the desktop card).

### `.key-visual__form` / `.form` (DESKTOP ONLY, ≥769px)
- `.form`: `display:none` by default; `display:block; padding:2em; color:#e2e2e2; background-color:rgba(0,0,0,.75)` at ≥769px only
- `.key-visual__form`: flex: 0 0 350px

### Form fields
- `.form__textfield` (email/password inputs): width:100%; padding:0.3em; margin-top:0.5em; line-height:2; background-color:#fff
- `.login-box`: display:flex; justify-content:space-between; margin-top:1em
  - `.login-box__checkbox`: flex:1 0 auto (checkbox + "ログイン情報を記憶する" label, white text)
  - `.login-box__button`: flex:0 0 130px → button uses `.c-button--login` (bg `#5ab9dd`, border `#5ab9dd`, hover bg `#52abcd`, white text, bold, letter-spacing:2px, padding:10px, border-radius:3px) with trailing chevron
- `.line-login`: margin:24px 0 0; text-align:center — green LINE button (`#00c300` background per
  `.social .fa-line` color reference), full width, rounded, white "LINEでログイン" label + `LineIcon`
- `.entry-box`: padding-top:0.5em; margin-top:1em; border-top:1px solid #999
  - `.entry-box__copy`: text-align:center; the word "非公開求人" wrapped in `<em>` is red (`color:red`), rest is default `#e2e2e2`; text: "非公開求人掲載！1分で簡単登録！"
  - Another `.form__textfield` email input
  - `.entry-box__button`: width:100%; padding-top/bottom:0.5em; margin-top:0.5em; font-size:16px → uses `.c-button--entry` (bg `#de5485`, hover `#cb3b6e`, white bold text) label "会員登録（無料）" + chevron

## States & Behaviors
- No scroll/hover animation beyond the shared global button hover (`opacity:.6` for `.c-button`, but
  `.c-button--entry`/`.c-button--login` instead swap to a darker solid color on hover per globals.css —
  reuse those exact hover colors, don't just dim to 60%).
- Inputs: plain native focus ring is fine; no custom focus style was captured.

## Assets
- `/images/hero/main_bg.jpg` (desktop background)
- `/images/hero/main_bg_mob.jpg` (mobile background)
- `LineIcon`, `ChevronRightIcon` from `src/components/icons.tsx`

## Text Content (verbatim)
- Main heading: "インターンシップを大学生が探すならインターンシップガイド" (wraps to 2 lines: line 1
  "インターンシップを大学生が探すなら", line 2 "インターンシップガイド")
- Subcopy (3 lines): "全国47都道府県、日本最大の掲載企業数！" / "長期も短期も探せる、日本唯一のインターンシップ総合サイト。" / "就活生も1,2年生も大学生なら今からインターン！"
- Login form placeholders: "メールアドレス" / "パスワード"
- Checkbox label: "ログイン情報を記憶する"
- Login button: "ログイン"
- LINE button: "LINEでログイン"
- Entry notice: "非公開求人掲載！1分で簡単登録！" (「非公開求人」in red)
- Entry email placeholder: "メールアドレス"
- Register button: "会員登録（無料）"

## Responsive Behavior
- **Desktop (≥769px):** flex row — copy left (`flex:0 1 600px`), login form card right (`flex:0 0 350px`), `min-height:400px`, `padding:3em`.
- **Mobile (<769px):** copy only, stacked, `padding:2em`, form is NOT rendered, CTA button shown instead
  under the subcopy.
- **Breakpoint:** 769px
