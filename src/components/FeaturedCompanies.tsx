import Link from "next/link";

import { CompanyCard } from "@/components/CompanyCard";
import { ChevronRightIcon } from "@/components/icons";
import type { CompanyCard as CompanyCardData } from "@/types/internship";

const FEATURED_COMPANIES: CompanyCardData[] = [
  {
    title: "伊藤忠エネクス株式会社",
    href: "#",
    image: "/images/companies/0002_1009.png",
    tags: [{ label: "短期", variant: "short-term" }],
    location: "東京都：虎ノ門駅、霞が関駅",
    description: "【夏期オープンカンパニー/対面】エネルギーの未来を考える3DAYS OPENCOMPANY",
  },
  {
    title: "株式会社キーエンス　営業職インターンシップ",
    href: "#",
    image: "/images/companies/0002_0539.png",
    tags: [
      { label: "1day", variant: "1day" },
      { label: "オンライン", variant: "online" },
    ],
    location: "浜松町・新大阪",
    description: "「営業職のリアル」を知る ～営業利益率50％超！期待を超える営業力の「謎」に迫る！～",
  },
  {
    title: "キャリアを共に考えよう！選べる！就業体験コース",
    href: "#",
    image: "/images/companies/0002_0599.png",
    tags: [
      { label: "1day", variant: "1day" },
      { label: "オンライン", variant: "online" },
    ],
    location: "オンライン、東京、大阪",
    description: "5つのシゴト体験を通じて、自分の可能性の扉を開けよう！",
  },
  {
    title:
      "Bandai Namco Filmworks Presents SUMMER FESTIVAL 2026 ～アニメ制作から商品化・プロモーションまでを網羅する1dayビジネス体験～",
    href: "#",
    image: "/images/companies/0002_0977.png",
    tags: [
      { label: "1day", variant: "1day" },
      { label: "オンライン", variant: "online" },
    ],
    location: "オンラインでの開催となります",
    description: "【8月27日開催予定！】28新卒向け・バンダイナムコフィルムワークス 夏の大型イベント！",
  },
  {
    title: "【28卒】Ｓｋｙ株式会社　好働力！体感1DAYイベント",
    href: "#",
    image: "/images/companies/0002_1319.png",
    tags: [{ label: "1day", variant: "1day" }],
    location: "北海道、福岡",
    description: "札幌・福岡で開催！先輩社員座談会もセットで開催！",
  },
  {
    title: "キーエンス S職(事務職) インターンシップ",
    href: "#",
    image: "/images/companies/0002_1476.png",
    tags: [
      { label: "1day", variant: "1day" },
      { label: "オンライン", variant: "online" },
    ],
    location: "東京：浜松町駅 大阪：新大阪駅",
    description: "高収益を支える、事務領域のスペシャリストの仕事を体験！",
  },
];

export function FeaturedCompanies() {
  return (
    <section className="mt-[3em]">
      <h2 className="border-b-[3px] border-[#63dbff] px-[0.5em] pt-0 pb-[0.4em] text-center text-[18px] font-bold tracking-[0.02em] text-[#58717d]">
        注目のインターンシップ企業
      </h2>
      <div className="mt-8 px-4">
        <ul className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-x-[3%] md:gap-y-8">
          {FEATURED_COMPANIES.map((card) => (
            <CompanyCard key={card.title} card={card} />
          ))}
        </ul>
        <Link
          href="#"
          className="mt-6 flex items-center justify-center gap-1 rounded-[3px] border border-[#5e9fb5] bg-[#5e9fb5] p-[10px] font-bold tracking-[2px] text-white hover:opacity-60"
        >
          注目のインターンをもっと見る
          <ChevronRightIcon className="size-4" />
        </Link>
      </div>
    </section>
  );
}
