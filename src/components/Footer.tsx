import Link from "next/link";

import { ChevronRightIcon, ChevronUpIcon, FacebookIcon, XIcon } from "@/components/icons";
import { SiteLogo } from "@/components/SiteLogo";

const SITEMAP_COLUMNS: { label: string; href: string }[][] = [
  [
    { label: "トップページ", href: "#" },
    { label: "会社概要", href: "#" },
    { label: "お問い合わせ", href: "#" },
    { label: "会員登録（無料）", href: "#" },
    { label: "全国のインターン・インターンシップ", href: "#" },
    { label: "Webテスト対策", href: "#" },
  ],
  [
    { label: "企業ログイン", href: "#" },
    { label: "多くの企業様に支持される理由", href: "#" },
    { label: "インターンシップの掲載無料", href: "#" },
    { label: "説明会、インターンの掲載・採用無料", href: "#" },
    { label: "IC学生集客サービス", href: "#" },
  ],
  [
    { label: "インターンコンパスとは", href: "#" },
    { label: "インターン生募集", href: "#" },
    { label: "利用規約", href: "#" },
    { label: "プライバシーポリシー", href: "#" },
    { label: "注目のキーワード一覧", href: "#" },
    { label: "一般教養クイズ集(外部)", href: "#" },
  ],
];

export function Footer() {
  return (
    <footer className="mt-[3em]">
      <div className="bg-[#58717d]">
        <div className="relative mx-auto max-w-[650px] px-4 pt-[4em] pb-[2em] md:max-w-[980px]">
          <div className="absolute top-[10px] right-0 w-full text-center md:right-[1em] md:w-auto md:text-right">
            <a
              href="#top"
              className="relative inline-block border-b border-white px-[0.5em] pb-[0.2em] text-[12px] tracking-[1px] text-white transition-opacity md:hover:opacity-60"
            >
              <ChevronUpIcon className="mx-auto mb-1 h-[18px] w-[18px]" />
              トップへ戻る
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between">
            {SITEMAP_COLUMNS.map((column, i) => (
              <ul
                key={i}
                className="tracking-[1px] text-[12px] md:w-[calc(33.3333%-1em)]"
              >
                {column.map((item) => (
                  <li
                    key={item.label}
                    className="border-b border-[#6c8d9c] md:transition-opacity md:hover:opacity-60"
                  >
                    <Link
                      href={item.href}
                      className="relative flex items-center justify-between py-[1.5em] pr-[2em] pl-[0.5em] text-white"
                    >
                      {item.label}
                      <ChevronRightIcon className="h-[18px] w-[18px] text-[#6c8d9c]" />
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-[0.3em]">
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#58717d] transition-opacity md:hover:opacity-60"
            >
              <XIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#58717d] transition-opacity md:hover:opacity-60"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[980px] px-4 py-[1em]">
        <div className="flex justify-center">
          <a href="#" className="inline-block text-base transition-opacity md:hover:opacity-60">
            <SiteLogo />
          </a>
        </div>
        <div className="mt-4 text-center text-[11px] tracking-[1px] text-[#58717d]">
          <p className="mt-2">COPYRIGHT © 2014 NextLab, Inc. ALL RIGHTS RESERVED.</p>
          <p className="mt-2">インターンコンパスは株式会社ネクストラボの登録商標です。</p>
          <p className="mt-2">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
