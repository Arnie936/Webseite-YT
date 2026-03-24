"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function VideoSection() {
  return (
    <section id="video" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading glow className="mb-16">
          Die Zukunft ist jetzt
        </SectionHeading>

        <div className="flex justify-center mb-12">
          <video
            controls
            preload="metadata"
            playsInline
            className="w-full max-w-4xl rounded-2xl border border-white/10"
          >
            <source src="/video/video.mp4" type="video/mp4" />
            Dein Browser unterstuetzt kein Video.
          </video>
        </div>

        <Button variant="primary" href="#kontakt" size="large">
          Bereit fuer die Zukunft? Lass uns sprechen
        </Button>
      </div>
    </section>
  );
}
