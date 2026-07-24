// Downloads real assets captured from https://internshipguide.jp/ during extraction.
// See docs/research/internshipguide.jp/ for the extraction notes these paths come from.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ASSETS = [
  // Header / brand
  ["https://internshipguide.jp/img/logo.png", "public/images/logo.png"],
  [
    "https://internshipguide.jp/img/icon-up-right-from-square-solid-full.svg",
    "public/images/icons/icon-up-right-from-square.svg",
  ],
  [
    "https://internshipguide.jp/img/icon-book-solid-full.svg",
    "public/images/icons/icon-book.svg",
  ],
  [
    "https://internshipguide.jp/img/icon-user-plus-solid-full.svg",
    "public/images/icons/icon-user-plus.svg",
  ],
  [
    "https://internshipguide.jp/img/icon-right-to-bracket-solid-full.svg",
    "public/images/icons/icon-right-to-bracket.svg",
  ],
  // Hero background
  ["https://internshipguide.jp/img/main_bg.jpg", "public/images/hero/main_bg.jpg"],
  ["https://internshipguide.jp/img/main_bg_mob.jpg", "public/images/hero/main_bg_mob.jpg"],
  // Recommended article thumbnails
  ["https://internshipguide.jp/img/about-intern_mini.jpg", "public/images/articles/about-intern_mini.jpg"],
  ["https://internshipguide.jp/img/what-is-internship-mini.jpg", "public/images/articles/what-is-internship-mini.jpg"],
  ["https://internshipguide.jp/img/long-term-internship_mini.jpg", "public/images/articles/long-term-internship_mini.jpg"],
  ["https://internshipguide.jp/img/intern-parttime-difference_mini.jpg", "public/images/articles/intern-parttime-difference_mini.jpg"],
  // Company / event card thumbnails (intern_pic)
  ["https://internshipguide.jp/img/intern_pic/0002_1009/SHpsWBf0.png", "public/images/companies/0002_1009.png"],
  ["https://internshipguide.jp/img/intern_pic/0002_0539/_Nb0XMyH.png", "public/images/companies/0002_0539.png"],
  ["https://internshipguide.jp/img/intern_pic/0002_0599/_WLFtsRe.png", "public/images/companies/0002_0599.png"],
  ["https://internshipguide.jp/img/intern_pic/0002_0977/U_2lIGcC.png", "public/images/companies/0002_0977.png"],
  ["https://internshipguide.jp/img/intern_pic/0002_1319/3YP6Ix59.png", "public/images/companies/0002_1319.png"],
  ["https://internshipguide.jp/img/intern_pic/0002_1476/VhX9hM6k.png", "public/images/companies/0002_1476.png"],
  ["https://internshipguide.jp/img/intern_pic/0002_0743/82guad81.png", "public/images/companies/0002_0743.png"],
  ["https://internshipguide.jp/img/intern_pic/0002_1075/SHpsWBf0.png", "public/images/companies/0002_1075.png"],
  ["https://internshipguide.jp/img/intern_pic/0002_0603/f2rLEkc6.png", "public/images/companies/0002_0603.png"],
  ["https://internshipguide.jp/img/intern_pic/0002_1948/CcG2PKvu.png", "public/images/companies/0002_1948.png"],
  ["https://internshipguide.jp/img/intern_pic/0002_0885/NSOLfDGs.png", "public/images/companies/0002_0885.png"],
  ["https://internshipguide.jp/img/intern_pic/0002_2053/fXCd5UnT.png", "public/images/companies/0002_2053.png"],
  // Sidebar banners
  ["https://img.internshipguide.jp/banner/20260208025300.png", "public/images/banners/banner-01.png"],
  ["https://img.internshipguide.jp/banner/20260208031853.png", "public/images/banners/banner-02.png"],
  ["https://img.internshipguide.jp/banner/20260208031953.png", "public/images/banners/banner-03.png"],
  ["https://img.internshipguide.jp/banner/20260208032016.jpg", "public/images/banners/banner-04.jpg"],
  ["https://img.internshipguide.jp/banner/20260208032037.png", "public/images/banners/banner-05.png"],
  ["https://img.internshipguide.jp/banner/20260208032056.png", "public/images/banners/banner-06.png"],
  ["https://img.internshipguide.jp/banner/20260208032125.png", "public/images/banners/banner-07.png"],
  ["https://img.internshipguide.jp/banner/20260208032149.jpg", "public/images/banners/banner-08.jpg"],
  ["https://img.internshipguide.jp/banner/20260208032209.png", "public/images/banners/banner-09.png"],
  // Client logo marquee
  ["https://img.internshipguide.jp/top_logo/20260410125755/644c81171544a33437e3982522086a15.png", "public/images/logos/recruit.png"],
  ["https://img.internshipguide.jp/top_logo/20260410141526/95e77430c2d79cc6d1aee227d9438bc2.png", "public/images/logos/toyota.png"],
  ["https://img.internshipguide.jp/top_logo/20260410141627/87b291142057f15a54f6fa0136702775.png", "public/images/logos/dentsu.png"],
  ["https://img.internshipguide.jp/top_logo/20260410141757/70c8e1c7fe79a2f59755c616c73cc808.png", "public/images/logos/sky.png"],
  ["https://img.internshipguide.jp/top_logo/20260410141859/21b3df5134ea4dda0a296796b0648b8c.png", "public/images/logos/mufg.png"],
  ["https://img.internshipguide.jp/top_logo/20260410142229/5275451d781e6fab863a8975afe82ac7.png", "public/images/logos/ms-ad.png"],
  ["https://img.internshipguide.jp/top_logo/20260410142522/0a9a4b65242525cbe1d468651f6bccda.png", "public/images/logos/rakuten.png"],
  ["https://img.internshipguide.jp/top_logo/20260410142857/d63eeabd52f73caac809e6dbe897d007.png", "public/images/logos/ichijo.png"],
  ["https://img.internshipguide.jp/top_logo/20260410143121/81aca60b73ebbdecc05557bb279143d1.png", "public/images/logos/hankyu-hanshin.png"],
  ["https://img.internshipguide.jp/top_logo/20260410143328/dfac101b25cf427c549807c8fd6d9183.png", "public/images/logos/yomiuri.png"],
  ["https://img.internshipguide.jp/top_logo/20260411055001/50f979440f56daf75005373a1f8b2431.png", "public/images/logos/softbank.png"],
  ["https://img.internshipguide.jp/top_logo/20260410144523/43f5481bc5f784141b6e7f473dbb625d.png", "public/images/logos/tepco.png"],
  ["https://img.internshipguide.jp/top_logo/20260410144618/d10df3788d9280917d26e2f29846e045.png", "public/images/logos/cygames.png"],
  ["https://img.internshipguide.jp/top_logo/20260410144810/7f97fc45f66979db18ea268bd88772c2.png", "public/images/logos/mynavi.png"],
  ["https://img.internshipguide.jp/top_logo/20260410150755/a5bc2c03d9fb10aad89877f7f622b329.png", "public/images/logos/mercari.png"],
  ["https://img.internshipguide.jp/top_logo/20260410150920/9c69bb2850f779a6e3c68a4326ec54c7.png", "public/images/logos/aoyama.png"],
  ["https://img.internshipguide.jp/top_logo/20260410151008/1f5eb6d538204cc0c5a8177b852d601d.png", "public/images/logos/meti.png"],
  ["https://img.internshipguide.jp/top_logo/20260410151709/0b5dec4801da0381ab5fd9df07e4d9ce.png", "public/images/logos/simplex.png"],
  ["https://img.internshipguide.jp/top_logo/20260410151841/f260e375a6ad00e135436759edcec8d3.png", "public/images/logos/dwango.png"],
];

const CONCURRENCY = 4;

async function download([url, dest]) {
  const destPath = path.join(process.cwd(), dest);
  await mkdir(path.dirname(destPath), { recursive: true });
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; asset-downloader/1.0)" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(destPath, buf);
    console.log(`OK   ${dest} (${buf.length}b)`);
  } catch (err) {
    console.error(`FAIL ${url} -> ${dest}: ${err.message}`);
  }
}

async function main() {
  const queue = [...ASSETS];
  async function worker() {
    while (queue.length) {
      const item = queue.shift();
      if (item) await download(item);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log("Done.");
}

main();
