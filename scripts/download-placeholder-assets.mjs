// Replaces the real internshipguide.jp photo assets with royalty-free
// Lorem Picsum placeholders (deterministic via seed) to avoid redistributing
// copyrighted third-party photography. Client logos were switched to
// text-based wordmarks instead (no images needed for those).
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ASSETS = [
  // Hero backgrounds
  ["https://picsum.photos/seed/intern-hero-desktop/1600/900", "public/images/hero/main_bg.jpg"],
  ["https://picsum.photos/seed/intern-hero-mobile/800/1000", "public/images/hero/main_bg_mob.jpg"],

  // Company / event card thumbnails (9 used across FeaturedCompanies + EventRanking)
  ["https://picsum.photos/seed/intern-company-1/400/300", "public/images/companies/company-1.jpg"],
  ["https://picsum.photos/seed/intern-company-2/400/300", "public/images/companies/company-2.jpg"],
  ["https://picsum.photos/seed/intern-company-3/400/300", "public/images/companies/company-3.jpg"],
  ["https://picsum.photos/seed/intern-company-4/400/300", "public/images/companies/company-4.jpg"],
  ["https://picsum.photos/seed/intern-company-5/400/300", "public/images/companies/company-5.jpg"],
  ["https://picsum.photos/seed/intern-company-6/400/300", "public/images/companies/company-6.jpg"],
  ["https://picsum.photos/seed/intern-event-1/400/300", "public/images/companies/event-1.jpg"],
  ["https://picsum.photos/seed/intern-event-2/400/300", "public/images/companies/event-2.jpg"],
  ["https://picsum.photos/seed/intern-event-3/400/300", "public/images/companies/event-3.jpg"],

  // Sidebar banners
  ["https://picsum.photos/seed/intern-banner-1/300/120", "public/images/banners/banner-01.jpg"],
  ["https://picsum.photos/seed/intern-banner-2/300/120", "public/images/banners/banner-02.jpg"],
  ["https://picsum.photos/seed/intern-banner-3/300/120", "public/images/banners/banner-03.jpg"],
  ["https://picsum.photos/seed/intern-banner-4/300/120", "public/images/banners/banner-04.jpg"],
  ["https://picsum.photos/seed/intern-banner-5/300/120", "public/images/banners/banner-05.jpg"],
  ["https://picsum.photos/seed/intern-banner-6/300/120", "public/images/banners/banner-06.jpg"],
  ["https://picsum.photos/seed/intern-banner-7/300/120", "public/images/banners/banner-07.jpg"],
  ["https://picsum.photos/seed/intern-banner-8/300/120", "public/images/banners/banner-08.jpg"],
  ["https://picsum.photos/seed/intern-banner-9/300/120", "public/images/banners/banner-09.jpg"],

  // Recommended article thumbnails
  ["https://picsum.photos/seed/intern-article-1/300/300", "public/images/articles/article-1.jpg"],
  ["https://picsum.photos/seed/intern-article-2/300/300", "public/images/articles/article-2.jpg"],
  ["https://picsum.photos/seed/intern-article-3/300/300", "public/images/articles/article-3.jpg"],
  ["https://picsum.photos/seed/intern-article-4/300/300", "public/images/articles/article-4.jpg"],
];

const CONCURRENCY = 4;

async function download([url, dest]) {
  const destPath = path.join(process.cwd(), dest);
  await mkdir(path.dirname(destPath), { recursive: true });
  try {
    const res = await fetch(url, { redirect: "follow" });
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
