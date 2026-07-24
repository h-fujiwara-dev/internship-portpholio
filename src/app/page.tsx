import { AboutSection } from "@/components/AboutSection";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { DeadlineCalendar } from "@/components/DeadlineCalendar";
import { EventRanking } from "@/components/EventRanking";
import { FeaturedCompanies } from "@/components/FeaturedCompanies";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RecommendedArticles } from "@/components/RecommendedArticles";
import { SidebarBanners } from "@/components/SidebarBanners";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <ClientLogoMarquee />

        <div className="mx-auto max-w-[650px] px-4 md:max-w-[980px]">
          <div className="flex flex-col gap-[30px] md:grid md:grid-cols-[calc(100%-300px)_300px] md:gap-y-12 md:gap-x-0">
            <div className="md:col-start-1 md:row-start-1 flex flex-col gap-12 md:pr-6">
              <DeadlineCalendar />
              <FeaturedCompanies />
              <EventRanking />
              <RecommendedArticles />
            </div>
            <SidebarBanners />

            <div className="md:col-start-1 md:row-start-2 md:pr-6">
              <AboutSection />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
