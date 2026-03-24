import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { LINKS } from "@/lib/constants";

const benefits = [
  "Direkter Zugang zu Arnie",
  "Aktiver Community-Austausch",
  "Praxisnahe Anleitungen & Tutorials",
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-neon-violet/20 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-glow-violet bg-surface/60 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/ich2.png"
                alt="Arnold Oberleiter"
                width={350}
                height={350}
                sizes="(max-width: 768px) 80vw, 350px"
                className="w-64 lg:w-80"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <SectionHeading className="mb-6">
                Werde Teil der Community
              </SectionHeading>
              <p className="text-lg text-text-secondary mb-8 max-w-lg mx-auto lg:mx-0">
                Tritt der exklusiven Skool-Community bei und erhalte Zugang zu
                KI-Wissen, Praxis-Tutorials und direktem Austausch.
              </p>

              <ul className="space-y-3 mb-10">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-text-secondary justify-center lg:justify-start"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="flex-shrink-0 text-neon-cyan"
                    >
                      <path
                        d="M16.667 5L7.5 14.167 3.333 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button
                variant="gradient"
                href={LINKS.skool}
                external
                size="large"
              >
                Jetzt Community beitreten
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
