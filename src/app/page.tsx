import ServicesGrid from "./Award/page";
import AwardBanner from "./awardbanner/page";
import PartnerSection from "./Banner1/page";
import BookServicesSection from "./Banner2/page";
import Banner3 from "./Banner3/page";
import Banner5 from "./Banner5/page";
import PublishingSteps from "./Banner6/page";
import BookFilter from "./Books/page";
import ServicesSection from "./Discount/page";
import FaqSection from "./Faq/page";
import Footer from "./footer/page";
import GhostwritingSection from "./Ghost/page";
import HeroSection from "./Hero/Herosection";
import TestimonialsPage from "./Testonomial/page";

export default function Home() {
  return (
    <>
    <HeroSection />
    <PartnerSection />
    <Banner3 />
    <BookServicesSection />
    <Banner5 />
    <PublishingSteps />
    <BookFilter />
    <GhostwritingSection />
    <AwardBanner />
    <ServicesGrid />
    <FaqSection />
    <TestimonialsPage />
    <ServicesSection />
    </>
  );
}
