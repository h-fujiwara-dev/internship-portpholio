import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "インターンコンパス-大学生のインターンシップ総合サイト",
  description:
    "インターンシップを探すならインターンコンパス！全国のインターン募集情報を多数掲載。長期インターンシップ、サマーインターンだけでなく内定者のエントリーシートや就活イベント等の情報も充実。大学生の就活生はもちろん、1年生から使えるインターンシップ総合サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
