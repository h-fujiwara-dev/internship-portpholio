import Image from "next/image";

import { ChevronRightIcon } from "@/components/icons";
import type { RecommendedArticle } from "@/types/internship";

const RECOMMENDED_ARTICLES: RecommendedArticle[] = [
  {
    title: "大学１・２年生もインターンに行こう！",
    href: "#",
    thumbnail: "/images/articles/about-intern_mini.jpg",
  },
  {
    title: "インターンシップとアルバイトの違いは？",
    href: "#",
    thumbnail: "/images/articles/intern-parttime-difference_mini.jpg",
  },
  {
    title: "長期インターンのメリット・デメリット",
    href: "#",
    thumbnail: "/images/articles/long-term-internship_mini.jpg",
  },
  {
    title: "就活の時期はいつから？28卒・29卒学生の動き方を解説",
    href: "#",
    thumbnail: "/images/articles/what-is-internship-mini.jpg",
  },
];

export function RecommendedArticles() {
  return (
    <section>
      <h2 className="border-b-[3px] border-[#63dbff] px-[0.5em] pt-0 pb-[0.4em] text-center text-[18px] font-bold tracking-[0.02em] text-[#58717d]">
        大学生おすすめ記事
      </h2>
      <div>
        <ul className="mt-[-1em] list-none">
          {RECOMMENDED_ARTICLES.map((article) => (
            <li
              key={article.title}
              className="border-b border-dotted border-[#63dbff] py-[1em]"
            >
              <a
                href={article.href}
                className="flex items-center font-bold text-[#333]"
              >
                <span className="relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    sizes="50px"
                    className="object-cover"
                  />
                </span>
                <span className="flex-grow text-center">{article.title}</span>
                <ChevronRightIcon className="ml-auto h-5 w-5 shrink-0 text-[#63dbff]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
