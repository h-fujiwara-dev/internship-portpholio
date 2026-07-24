import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon, LocationDotIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { CompanyCard as CompanyCardData, TagVariant } from "@/types/internship";

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

export function CompanyCard({ card }: { card: CompanyCardData }) {
  return (
    <li
      className={cn(
        "relative flex justify-between text-[14px] break-words",
        "md:flex-col md:pb-8"
      )}
    >
      {card.rank && (
        <div className="absolute -top-2 -left-2 z-10 inline-block bg-[#5e9fb5] px-4 py-[0.2em] font-bold text-white">
          {card.rank}
        </div>
      )}

      <div className="relative shrink-0 basis-[38%] overflow-hidden md:basis-[130px]">
        <Link href={card.href}>
          <Image
            src={card.image}
            alt={card.title}
            width={260}
            height={130}
            className="h-auto w-full md:h-[130px] md:object-cover"
          />
        </Link>
      </div>

      <div className="flex basis-[60%] flex-col md:mt-2 md:flex-1 md:basis-auto">
        <div className="flex-none border-b border-dotted border-[#63dbff] font-bold">
          <p className="max-h-[5em] overflow-hidden border-none text-[#5e9fb5]">
            <Link href={card.href}>{card.title}</Link>
          </p>
        </div>

        <div className="mt-2 flex-1">
          <ul className="flex flex-wrap items-center gap-0">
            {card.tags.map((tag) => (
              <li
                key={tag.label}
                className={cn(
                  "mt-[0.3em] mr-[0.3em] inline-block px-[0.4em] text-[11px] leading-none font-bold text-white",
                  TAG_COLOR[tag.variant]
                )}
              >
                {tag.label}
              </li>
            ))}
          </ul>
          <p className="mt-2 flex items-center gap-1 text-[12px] font-bold text-[#58717d]">
            <LocationDotIcon className="h-3 w-3 text-[#63dbff]" />
            {card.location}
          </p>
          <p className="mt-2">{card.description}</p>
        </div>

        <Link
          href={card.href}
          className="mt-2 flex items-center justify-end gap-1 tracking-wide text-[#5e9fb5] md:mt-0"
        >
          詳細をみる
          <ChevronRightIcon className="h-4 w-4 text-[#63dbff]" />
        </Link>
      </div>
    </li>
  );
}
