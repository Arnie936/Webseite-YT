import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CommunitySection from "@/components/CommunitySection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ShaderBackground from "@/components/ui/ShaderBackground";

export default function Home() {
  return (
    <>
      <ShaderBackground />

      {/* Skip Link */}
      <a
        href="#leistungen"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-neon-cyan focus:text-background focus:px-4 focus:py-2 focus:rounded-full"
      >
        Zum Inhalt springen
      </a>

      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <CommunitySection />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
