import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { QuickInfo } from "@/components/quick-info";
import { DestinationCards } from "@/components/destination-cards";
import { MallNumbers } from "@/components/mall-numbers";
import { Brands } from "@/components/brands";
import { ArchitecturalBreak } from "@/components/architectural-break";
import { ShopEatPlay } from "@/components/shop-eat-play";
import { Dining } from "@/components/dining";
import { Entertainment } from "@/components/entertainment";
import { Events } from "@/components/events";
import { Offers } from "@/components/offers";
import { BatumiStory } from "@/components/batumi-story";
import { MallMapPreview } from "@/components/mall-map-preview";
import { PlanVisit } from "@/components/plan-visit";
import { SocialLifestyle } from "@/components/social-lifestyle";
import { Footer } from "@/components/footer";
export default function Home() {
    const t = useCopy();
    return (<>
      <Link className="skip-link" href="#main">{t("Skip to content")}</Link>
      <Header />
      <main id="main">
        <Hero />
        <QuickInfo />
        <DestinationCards />
        <MallNumbers />
        <Brands />
        <ArchitecturalBreak />
        <ShopEatPlay />
        <Dining />
        <Entertainment />
        <Events />
        <Offers />
        <BatumiStory />
        <MallMapPreview />
        <PlanVisit />
        <SocialLifestyle />
      </main>
      <Footer />
    </>);
}
