import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import MenuHighlightsSection from "@/components/sections/MenuHighlightsSection";
import LocationSection from "@/components/sections/LocationSection";
import CtaSection from "@/components/sections/CtaSection";
import InstagramGridSection from "@/components/sections/InstagramGridSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <HeroSection />
      <StorySection />
      <MenuHighlightsSection />
      <LocationSection />
      <CtaSection />
      <InstagramGridSection />
      <Footer />
    </main>
  );
}
