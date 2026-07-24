import Image from "next/image";
import Link from "next/link";

import type { SidebarBanner } from "@/types/internship";

const SIDEBAR_BANNERS: SidebarBanner[] = [
  { image: "/images/banners/banner-01.jpg", alt: "大学1・2年生もインターンに行こう", href: "#" },
  { image: "/images/banners/banner-02.jpg", alt: "見逃し注意!! 厳選インターンシップ締め切りカレンダー", href: "#" },
  { image: "/images/banners/banner-03.jpg", alt: "就活エントリー締切カレンダー", href: "#" },
  { image: "/images/banners/banner-04.jpg", alt: "適性検査対策の決定版 Webテスト対策問題集&模擬試験", href: "#" },
  { image: "/images/banners/banner-05.jpg", alt: "マンガでわかるインターンシップのすすめ", href: "#" },
  { image: "/images/banners/banner-06.jpg", alt: "就活イベントまとめ", href: "#" },
  { image: "/images/banners/banner-07.jpg", alt: "インターンシップ体験談", href: "#" },
  { image: "/images/banners/banner-08.jpg", alt: "就活!!本選考体験記", href: "#" },
  { image: "/images/banners/banner-09.jpg", alt: "内定者のES", href: "#" },
];

export function SidebarBanners() {
  return (
    // The outer element is the actual grid item and spans both rows
    // (calendar/company/ranking/articles row + AboutSection row), so it's
    // as tall as the whole main column. The inner element is the one that's
    // actually `sticky` — it sticks at top:70px and only unsticks once the
    // tall outer box's bottom edge (i.e. the bottom of AboutSection)
    // scrolls past that offset, so the banners keep following the scroll
    // all the way down instead of stopping after the articles list.
    <div className="md:col-start-2 md:row-start-1 md:row-span-2 md:pl-6">
      <div className="flex flex-col gap-6 md:sticky md:top-[70px] md:gap-0">
        <div className="mt-8 flex flex-col gap-2 md:mt-0">
          {SIDEBAR_BANNERS.map((banner) => (
            <Link
              key={banner.image}
              href={banner.href}
              className="block overflow-hidden rounded-[3px] border border-[#e2e2e2]"
            >
              <Image
                src={banner.image}
                alt={banner.alt}
                width={300}
                height={120}
                className="h-[90px] w-full object-cover"
              />
              <span className="block bg-[#58717d] px-2 py-1.5 text-center text-xs leading-tight font-bold text-white">
                {banner.alt}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
