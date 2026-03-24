import Image from "next/image";
import Button from "@/components/ui/Button";
import NeonLine from "@/components/ui/NeonLine";
import { LINKS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Neon Streaks Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <NeonLine color="#00aaff" delay={0} duration={7} top="10%" left="15%" />
        <NeonLine color="#8b5cf6" delay={2} duration={9} top="20%" left="45%" />
        <NeonLine color="#00e5ff" delay={4} duration={6} top="40%" left="70%" />
        <NeonLine color="#a855f7" delay={1} duration={10} top="60%" left="25%" />
        <NeonLine color="#00aaff" delay={3} duration={8} top="70%" left="55%" />
        <NeonLine color="#8b5cf6" delay={5} duration={7} top="30%" left="85%" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="gradient-text">KI-Loesungen</span>{" "}
              <span className="text-text-primary">die dein Business transformieren</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0">
              Massgeschneiderte KI-Agenten, Automatisierung und praxisnahe
              Workshops — von der Strategie bis zur Umsetzung.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" href="#kontakt">
                Erstgespraech buchen
              </Button>
              <Button variant="secondary" href={LINKS.skool} external>
                Community beitreten
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-3xl scale-75" />
            <div className="relative z-10 bg-surface/80 backdrop-blur-sm border border-white/5 rounded-2xl p-4 overflow-hidden">
              <Image
                src="/images/ich1.png"
                alt="Arnold Oberleiter - KI-Experte"
                width={500}
                height={500}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full max-w-md lg:max-w-lg rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
