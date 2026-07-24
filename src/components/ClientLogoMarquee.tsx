import type { ClientLogo } from "@/types/internship"

/**
 * 19 fictional client companies (no real brands) spanning the same mix of
 * industries as the source site's logo strip, rendered as text wordmarks.
 */
const CLIENT_LOGOS: ClientLogo[] = [
  { name: "キャリアブリッジ", color: "#2563eb" },
  { name: "サクラ自動車", color: "#dc2626" },
  { name: "セントラル広告", color: "#111827" },
  { name: "クラウドナイン", color: "#0ea5e9" },
  { name: "太陽みらい銀行", color: "#ea580c" },
  { name: "あんしん損害保険", color: "#059669" },
  { name: "ハーモニーモール", color: "#e11d48" },
  { name: "グリーンホーム工務店", color: "#16a34a" },
  { name: "関西鉄道HD", color: "#7c3aed" },
  { name: "日本タイムズ社", color: "#1f2937" },
  { name: "コネクトモバイル", color: "#f97316" },
  { name: "首都電力HD", color: "#0369a1" },
  { name: "スターライトゲームス", color: "#9333ea" },
  { name: "しごとナビ", color: "#2563eb" },
  { name: "そよかぜマーケット", color: "#db2777" },
  { name: "銀座スーツ", color: "#1e3a8a" },
  { name: "未来産業省", color: "#374151" },
  { name: "フロンティアHD", color: "#0891b2" },
  { name: "ネオウェーブ", color: "#4338ca" },
]

function LogoTrack() {
  return (
    <ul className="ig-marquee-track c-company__list flex min-w-full shrink-0">
      {CLIENT_LOGOS.map((logo) => (
        <li
          key={logo.name}
          className="c-company__item flex w-[180px] shrink-0 items-center justify-center pr-[80px]"
        >
          <span
            className="max-w-[160px] truncate text-lg font-bold tracking-tight"
            style={{ color: logo.color }}
          >
            {logo.name}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function ClientLogoMarquee() {
  return (
    <div className="company-section my-4 overflow-hidden md:mt-8 md:mb-14">
      {/* Two identical tracks placed side by side (matching the source's
          two `.c-company__list` siblings, not one doubled list) — each
          animates translateX(0 -> -100%) of ITS OWN width over 60s, so as
          the first track slides fully offscreen the second (already
          positioned right after it) lands exactly where the first started,
          making the loop seamless without doubling the scroll speed. */}
      <div className="c-company flex overflow-hidden bg-white">
        <LogoTrack />
        <LogoTrack />
      </div>
    </div>
  )
}
