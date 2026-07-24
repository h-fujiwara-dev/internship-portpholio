import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "インターンシップガイド-大学生のインターンシップ総合サイト",
  description:
    "インターンシップを探すならインターンシップガイド！全国のインターン募集情報を44,900件以上掲載。長期インターンシップ、サマーインターンだけでなく内定者のエントリーシートや就活イベント等の情報も充実。大学生の就活生はもちろん、1年生から使えるインターンシップ総合サイトです。",
  icons: {
    icon: "/seo/favicon.ico",
    apple: "/seo/apple-touch-icon.png",
  },
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
