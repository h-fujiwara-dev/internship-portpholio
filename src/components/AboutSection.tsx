import { ChevronRightIcon } from "@/components/icons"

export function AboutSection() {
  return (
    <div className="w-full border border-[var(--ig-frame-border)] p-[1em]">
      <h2 className="mx-auto w-[95%] max-w-[450px] px-[1em] text-center text-xl font-bold text-black">
        インターンシップガイドとは
      </h2>
      <div className="mt-[1em] space-y-4 text-[#333]">
        <p>
          インターンシップガイドは、日本全国の企業の情報を掲載したインターンシップ総合サイトです。
        </p>
        <p>
          就活生向けの情報はもちろんのこと、お金がもらえてアルバイト代わりにもなる有給インターン、大学1年生や2年生も参加可能で経験とビジネススキルが身につく長期インターンシップ、企業研究や職業研究するのに適した1day仕事体験、短期やサマーインターンなど、大企業からベンチャー企業まで様々な種類の求人を掲載しています。都道府県別に探すだけでなく、エンジニア・営業・企画・マーケティングなどの職種から検索したり、締切順、新着順や人気順での並び替え、金融・IT・メーカー・コンサルなど業種から検索することもできます。
        </p>
        <p>
          また1年生から参加出来る就活イベント情報や人気企業の内定者のES(エントリーシート)や就活体験談などの会員限定コンテンツを始め、企業とのメールや電話の仕方や、服装のマナー、面接対策など、就活にも役立つコラムも多数掲載しています。インターンシップガイドを利用して大学生活をもっと有意義にしよう！
        </p>
      </div>
      <div className="mt-[1em]">
        <a
          href="#"
          className="flex w-full items-center justify-center gap-1 rounded-[3px] bg-[var(--ig-pink)] p-[10px] font-bold tracking-[2px] text-white transition-colors hover:bg-[var(--ig-pink-hover)]"
        >
          今すぐインターンシップを探す
          <ChevronRightIcon className="size-4" />
        </a>
      </div>
    </div>
  )
}
