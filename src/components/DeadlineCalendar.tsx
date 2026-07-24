import Link from "next/link";

import { ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { CalendarItem, TagVariant } from "@/types/internship";

// Mirrors CompanyCard.tsx's TAG_COLOR map (not exported from that file) —
// duplicated here with the exact same hex values so this component stays
// self-contained. Keep in sync if the shared map ever changes.
const TAG_COLOR: Record<TagVariant, string> = {
  "pre-entry": "bg-red-600",
  "long-term": "bg-[#09c]",
  "short-term": "bg-[#6cf]",
  event: "bg-[#f96]",
  exam: "bg-[#3f9877]",
  direct: "bg-[#fc370b]",
  "1day": "bg-[#fc0]",
  briefing: "bg-[#f7f]",
  video: "bg-[#434da2]",
  online: "bg-[#00bb85]",
  "recruit-agent": "bg-[maroon]",
  benefit: "bg-[#c00]",
  soon: "bg-[#c00]",
  grade1: "bg-[#5e9fb5]",
  grade2: "bg-[#e97787]",
  grade3: "bg-[#d9ad60]",
};

const CALENDAR_ITEMS: CalendarItem[] = [
  {
    month: "07月",
    day: "24",
    deadlineLabel: "締切当日",
    tags: [
      { label: "28卒", variant: "grade1" },
      { label: "ES", variant: "event" },
    ],
    title:
      "【はやぶさ自動車株式会社】 夏季オープンカンパニー 生産・開発・事務技術職",
    href: "#",
  },
  {
    month: "07月",
    day: "24",
    deadlineLabel: "締切当日",
    tags: [
      { label: "28卒", variant: "grade1" },
      { label: "応募フォーム", variant: "direct" },
    ],
    title: "【大地建設株式会社】 機電系 2DAYSインターンシップ 北海道開催",
    href: "#",
  },
  {
    month: "07月",
    day: "24",
    deadlineLabel: "締切当日",
    tags: [{ label: "その他", variant: "soon" }],
    title: "【都心建設株式会社】 機電ワーキングセミナー 東京対面開催",
    href: "#",
  },
  {
    month: "07月",
    day: "24",
    deadlineLabel: "締切当日",
    tags: [
      { label: "既卒", variant: "grade3" },
      { label: "28卒以降", variant: "grade2" },
      { label: "その他", variant: "soon" },
    ],
    title: "【都心建設株式会社】 設備ワーキングセミナー　東京開催",
    href: "#",
  },
  {
    month: "07月",
    day: "24",
    deadlineLabel: "締切当日",
    tags: [
      { label: "28卒", variant: "grade1" },
      { label: "応募フォーム", variant: "direct" },
    ],
    title:
      "【コンビニエンスマート株式会社】 東北限定開催 課題解決プログラム「マートキャリアスクール」",
    href: "#",
  },
  {
    month: "07月",
    day: "26",
    deadlineLabel: "締切まであと2日",
    tags: [
      { label: "28卒", variant: "grade1" },
      { label: "ES", variant: "event" },
    ],
    title:
      "【はやぶさ自動車株式会社】 開発職夏季就業体験型インターンシップ　神奈川開催",
    href: "#",
  },
  {
    month: "07月",
    day: "27",
    deadlineLabel: "締切まであと3日",
    tags: [
      { label: "短期", variant: "short-term" },
      { label: "オンライン", variant: "online" },
    ],
    title: "ドリームアニメーションスタジオ 夏季1dayイベント",
    href: "#",
  },
  {
    month: "07月",
    day: "28",
    deadlineLabel: "締切まであと4日",
    tags: [
      { label: "1day", variant: "1day" },
      { label: "オンライン", variant: "online" },
    ],
    title: "テクノセンサー株式会社　営業職インターンシップ",
    href: "#",
  },
  {
    month: "07月",
    day: "30",
    deadlineLabel: "締切まであと6日",
    tags: [
      { label: "1day", variant: "1day" },
      { label: "オンライン", variant: "online" },
    ],
    title: "くらしの家具株式会社　就業体験コース",
    href: "#",
  },
  {
    month: "08月",
    day: "03",
    deadlineLabel: "締切まであと10日",
    tags: [
      { label: "イベント", variant: "event" },
      { label: "特典あり", variant: "benefit" },
    ],
    title: "グランドキャリアフォーラム 東京開催",
    href: "#",
  },
];

export function DeadlineCalendar() {
  return (
    <section>
      <h2 className="border-b-[3px] border-[#63dbff] px-[0.5em] pt-0 pb-[0.4em] text-center text-lg font-bold tracking-[0.02em] text-[#58717d]">
        厳選短期インターンシップ締切カレンダー
      </h2>
      <div className="mt-8 px-4">
        <ul className="relative z-[1] h-[190px] list-none overflow-y-auto">
          {CALENDAR_ITEMS.map((item, index) => (
            <li
              key={`${item.month}-${item.day}-${item.title}`}
              className={cn(
                "flex items-start gap-4 border-b border-dotted border-[#63dbff] p-[1em]",
                index === 0 && "pt-0",
              )}
            >
              <div className="flex flex-[0_0_50px] flex-col">
                <div className="flex flex-col justify-center">
                  <span className="rounded-t-[5px] bg-[#c00] px-[0.5em] py-[0.2em] text-center text-xs font-bold text-white">
                    {item.month}
                  </span>
                  <span className="border border-[#ccc] bg-white py-px text-center text-xl leading-[1.1] font-bold">
                    {item.day}
                  </span>
                </div>
                <span className="text-center text-xs leading-[1.2] text-[#c00]">
                  {item.deadlineLabel}
                </span>
              </div>
              <div className="mt-[0.5em] flex flex-col gap-2 text-sm">
                <ul className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <li
                      key={tag.label}
                      className={cn(
                        "p-[0.4em] text-[11px] font-bold text-white",
                        TAG_COLOR[tag.variant],
                      )}
                    >
                      {tag.label}
                    </li>
                  ))}
                </ul>
                <Link href={item.href} className="text-[#333] underline">
                  {item.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="#"
          className="flex items-center justify-center gap-1 rounded-[3px] border border-[#5e9fb5] bg-[#5e9fb5] p-[10px] font-bold tracking-[2px] text-white hover:opacity-60"
        >
          もっと見る
          <ChevronRightIcon className="size-4" />
        </Link>
      </div>
    </section>
  );
}
