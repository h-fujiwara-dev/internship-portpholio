import Link from "next/link";

import { CompanyCard } from "@/components/CompanyCard";
import { ChevronRightIcon } from "@/components/icons";
import type { CompanyCard as CompanyCardData } from "@/types/internship";

const EVENT_RANKING: CompanyCardData[] = [
  {
    rank: "1位",
    title: "グランドキャリアフォーラム 東京開催",
    href: "#",
    image: "/images/companies/event-1.jpg",
    tags: [
      { label: "イベント", variant: "event" },
      { label: "特典あり", variant: "benefit" },
    ],
    location: "中央駅：東京グランドホール",
    description: "【8/3@東京】日本最大級！コスメティックグループ、文英社、東西映画、サンエナジー商事などが出展！",
  },
  {
    rank: "2位",
    title: "グロースキャリアEXPO'26 夏",
    href: "#",
    image: "/images/companies/event-2.jpg",
    tags: [
      { label: "イベント", variant: "event" },
      { label: "特典あり", variant: "benefit" },
    ],
    location: "東京コンベンションセンター 西1ホール",
    description: "【8/22(土)@東京コンベンションセンター】成長企業125社が集まる大規模就活イベント",
  },
  {
    rank: "3位",
    title: "グランドキャリアフォーラム 大阪開催",
    href: "#",
    image: "/images/companies/event-3.jpg",
    tags: [
      { label: "イベント", variant: "event" },
      { label: "特典あり", variant: "benefit" },
    ],
    location: "大阪府：大阪セントラルタワー",
    description: "【8/1-2@大阪】関西データ株式会社、近畿急行鉄道、サンエナジー商事など約190社が参加予定！",
  },
];

export function EventRanking() {
  return (
    <section className="mt-[3em]">
      <h2 className="border-b-[3px] border-[#63dbff] px-[0.5em] pt-0 pb-[0.4em] text-center text-[18px] font-bold tracking-[0.02em] text-[#58717d]">
        大学生・就活生イベントランキング
      </h2>
      <div className="mt-8 px-4">
        <ul className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-x-[3%] md:gap-y-8">
          {EVENT_RANKING.map((card) => (
            <CompanyCard key={card.title} card={card} />
          ))}
        </ul>
        <Link
          href="#"
          className="mt-6 flex items-center justify-center gap-1 rounded-[3px] border border-[#5e9fb5] bg-[#5e9fb5] p-[10px] font-bold tracking-[2px] text-white hover:opacity-60"
        >
          大学生・就活生イベントをもっと見る
          <ChevronRightIcon className="size-4" />
        </Link>
      </div>
    </section>
  );
}
