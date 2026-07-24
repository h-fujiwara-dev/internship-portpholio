# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/internshipguide.jp/desktop-top.jpg` (top strip)
- **Interaction model:** static sticky container; mobile nav is click-driven (hamburger toggles a
  full-screen slide panel)

## DOM Structure
```
div.l-body__header (sticky wrapper)
  div.p-header
    div.p-header__inner (max-width 980px, centered, flex row on desktop)
      div.p-header__logo -> <a><img logo/></a>
      div.p-header__menu
        nav.p-header-navi--pc (desktop only, horizontal link row)
          ul.p-header-navi__list
            li > a (icon + label) x4
        button.p-header-navi-button (mobile only, hamburger, top-right)
        nav.p-header-navi--sp (mobile only, full-screen overlay panel, hidden by default)
          div.p-header-navi__close_base (top bar with close button)
          ul.p-header-navi__list (same 4 links, full-width rows)
```

## Computed Styles (exact values)

### `.l-body__header` (outer sticky wrapper)
- position: sticky; top: 0; z-index: 10000
- **No scroll-triggered style change** — confirmed via live scroll test. Do not add a shrink/shadow effect.

### `.p-header`
- width: 100%
- background-color: rgba(255,255,255,.95)
- border-bottom: 1px solid #e2e2e2

### `.p-header__inner`
- max-width: 980px; margin: 0 auto; padding: 1em 1em 0.5em 1em (mobile)
- Desktop (≥769px): display:flex; align-items:center; justify-content:space-between; padding stays 1em/0.5em sides removed (use `md:flex md:items-center md:justify-between`)

### `.p-header__logo`
- width: 145px; margin: 0 auto (mobile, centered)
- Desktop (≥769px): flex: 0 0 145px; margin: 0 (left-aligned)
- logo image: `/images/logo.png`, natural aspect ~145×39, `width:100%; height:auto`
- `a:hover { opacity: .6 }`

### Desktop nav — `.p-header-navi--pc`
- `display:none` on mobile; `display:block` at ≥769px
- link row: `display:flex; gap:0.3em; align-items:center; justify-content:center` per item
- `a`: padding: 1em 0.5em; font-weight:bold; color:#686859; font-size:14px; letter-spacing:1px
- `a:hover` (desktop only): background:#e2e2e2
- icon: 16×16px, mask-image of the SVG, background-color `#5e9fb5` (i.e. render icon as solid teal, not literal img colors) — use the 4 extracted SVGs from `src/components/icons.tsx`: `ExternalLinkIcon`, `BookIcon`, `UserPlusIcon`, `LoginIcon`, colored `text-[#5e9fb5]`/`fill-[#5e9fb5]`, size 16×16.
- Order + labels + icon:
  1. 採用担当者様はこちら — `ExternalLinkIcon`
  2. お役立ち情報 — `BookIcon`
  3. 新規会員登録 — `UserPlusIcon`
  4. ログイン — `LoginIcon`

### Mobile hamburger — `.p-header-navi-button`
- position:absolute; top:1em; right:1em; min-width:40px; color:#58717d; font-size:12px
- `display:none` at ≥769px
- Icon (use `MenuIcon`) stacked above a small label span (font-size:10px) — label text can be
  omitted/optional if not critical; icon size ~200% (≈24px)

### Mobile nav panel — `.p-header-navi--sp`
- `display:none` at ≥769px (i.e., mobile-only)
- `.p-header-navi__close_base`: width:100%; height:5em; background:#58717d; border-bottom:2px solid #798d95
- `.p-header-navi__close-button`: position:absolute; top:50%; right:1em; translateY(-50%); font-size:200%(≈24px); color:#fff (use `CloseIcon`)
- `ul.p-header-navi__list`: min-height:100vh; background:#58717d (mobile only — desktop resets to `background:inherit; display:flex; min-height:auto`)
- `li`: margin:0 1em; `li + li`: border-top:2px solid #fff (mobile only, none on desktop)
- `a`: padding:1.5em 2em 1.5em 0.5em; color:#fff; font-size:12px; has a chevron `::after` positioned
  right (`ChevronRightIcon`, translateY(-50%), hidden at ≥769px)

## States & Behaviors

### Mobile menu open/close
- **Trigger:** click on hamburger button (`.p-header-navi-button`)
- **State A (closed):** panel not rendered / translated off-screen
- **State B (open):** panel covers full viewport (`min-height:100vh`, slate `#58717d` background),
  close (✕) button visible top-left/right, nav links stacked full-width
- **Transition:** not precisely captured on the source (minified JS); implement as a simple 250ms
  slide-in-from-right or fade+scale using CSS transition on `transform`/`opacity`. Do not over-engineer.
- **Implementation approach:** React `useState` boolean + conditional render/class, CSS transition.

### Hover (desktop only, ≥769px)
- Logo link, nav links: `opacity:.6` on hover EXCEPT nav links which instead get `background:#e2e2e2`
  (no opacity change) per the CSS above.

## Assets
- `/images/logo.png` (header logo)
- Icons: `ExternalLinkIcon`, `BookIcon`, `UserPlusIcon`, `LoginIcon`, `MenuIcon`, `CloseIcon`,
  `ChevronRightIcon` from `src/components/icons.tsx` (already built — import, don't recreate)

## Text Content (verbatim)
- 採用担当者様はこちら
- お役立ち情報
- 新規会員登録
- ログイン

## Responsive Behavior
- **Desktop (≥769px):** single row, logo left, horizontal nav right, no hamburger, no overlay.
- **Mobile (<769px):** logo centered, hamburger top-right absolute, nav hidden until hamburger opens
  full-screen slate overlay.
- **Breakpoint:** 769px (single breakpoint site-wide, see BEHAVIORS.md)
