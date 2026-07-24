import Image from "next/image";
import Link from "next/link";

import type { SidebarBanner } from "@/types/internship";

const SIDEBAR_BANNERS: SidebarBanner[] = [
  { image: "/images/banners/banner-01.png", alt: "大学1・2年生もインターンに行こう", href: "#" },
  { image: "/images/banners/banner-02.png", alt: "見逃し注意!! 厳選インターンシップ締め切りカレンダー", href: "#" },
  { image: "/images/banners/banner-03.png", alt: "就活エントリー締切カレンダー", href: "#" },
  { image: "/images/banners/banner-04.jpg", alt: "適性検査・SPI対策の決定版 Webテスト対策問題集&模擬試験", href: "#" },
  { image: "/images/banners/banner-05.png", alt: "マンガでわかるインターンシップのすすめ", href: "#" },
  { image: "/images/banners/banner-06.png", alt: "就活イベントまとめ", href: "#" },
  { image: "/images/banners/banner-07.png", alt: "インターンシップ体験談", href: "#" },
  { image: "/images/banners/banner-08.jpg", alt: "就活!!本選考体験記", href: "#" },
  { image: "/images/banners/banner-09.png", alt: "内定者のES", href: "#" },
];

export function SidebarBanners() {
  return (
    <div className="flex flex-col gap-6 md:sticky md:top-[70px] md:gap-0 md:pl-6">
      <div className="mt-8 flex flex-col gap-2 md:mt-0">
        {SIDEBAR_BANNERS.map((banner) => (
          <Link key={banner.image} href={banner.href}>
            <Image
              src={banner.image}
              alt={banner.alt}
              width={300}
              height={120}
              className="h-auto w-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
