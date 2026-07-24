import Image from "next/image"

import type { ClientLogo } from "@/types/internship"

/**
 * The 19 unique client logos, in source order.
 * Rendered twice back-to-back so the CSS marquee loop is seamless.
 */
const CLIENT_LOGOS: ClientLogo[] = [
  { name: "リクルート", image: "/images/logos/recruit.png" },
  { name: "トヨタ自動車", image: "/images/logos/toyota.png" },
  { name: "電通", image: "/images/logos/dentsu.png" },
  { name: "Ｓｋｙ", image: "/images/logos/sky.png" },
  { name: "三菱UFJ銀行", image: "/images/logos/mufg.png" },
  { name: "三井住友海上火災保険", image: "/images/logos/ms-ad.png" },
  { name: "楽天", image: "/images/logos/rakuten.png" },
  { name: "一条工務店", image: "/images/logos/ichijo.png" },
  { name: "阪急阪神HG", image: "/images/logos/hankyu-hanshin.png" },
  { name: "読売新聞社", image: "/images/logos/yomiuri.png" },
  { name: "ソフトバンク", image: "/images/logos/softbank.png" },
  { name: "東京電力ホールディングス", image: "/images/logos/tepco.png" },
  { name: "株式会社Cygames", image: "/images/logos/cygames.png" },
  { name: "マイナビ", image: "/images/logos/mynavi.png" },
  { name: "メルカリ", image: "/images/logos/mercari.png" },
  { name: "青山商事", image: "/images/logos/aoyama.png" },
  { name: "経済産業省", image: "/images/logos/meti.png" },
  { name: "シンプレクス・ホールディングス株式会社", image: "/images/logos/simplex.png" },
  { name: "ドワンゴ", image: "/images/logos/dwango.png" },
]

// Duplicated once, back-to-back, so translateX(-100%) on the doubled
// track lands back at the visual start for a seamless loop.
const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS]

export function ClientLogoMarquee() {
  return (
    <div className="company-section my-4 overflow-hidden md:mt-8 md:mb-14">
      <div className="c-company flex overflow-hidden">
        <ul className="ig-marquee-track c-company__list flex gap-8">
          {MARQUEE_LOGOS.map((logo, index) => (
            <li
              key={`${logo.name}-${index}`}
              className="c-company__item flex shrink-0 items-center"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                width={100}
                height={48}
                className="h-[48px] w-[100px] object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
