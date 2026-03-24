import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-neon-cyan"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <circle cx="9" cy="10" r="1.5" />
        <circle cx="15" cy="10" r="1.5" />
        <path d="M9 15h6" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
    title: "KI-Agenten & Automatisierung",
    badge: "Fuer Unternehmen ab 4 Mio. EUR Umsatz",
    description:
      "Massgeschneiderte KI-Agenten und Automatisierungsloesungen, die deine Geschaeftsprozesse transformieren.",
    tags: ["Workflow-Automation", "Intelligente Agenten", "Prozessoptimierung"],
    cta: { label: "Erstgespraech buchen", href: "#kontakt" },
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-neon-violet"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      </svg>
    ),
    title: "Schulungen & Workshops",
    badge: null,
    description:
      "Praxisnahe Workshops zu den neuesten KI-Technologien fuer dein Team.",
    tags: ["LLMs", "Diffusion Models", "n8n", "Claude Code", "ComfyUI", "Automation"],
    cta: { label: "Anfrage senden", href: "#kontakt" },
  },
];

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading className="text-center mb-16">
          Leistungen
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:border-neon-blue/30"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                {service.title}
              </h3>
              {service.badge && (
                <span className="inline-block text-sm bg-neon-violet/10 text-neon-violet border border-neon-violet/20 rounded-full px-3 py-1 mb-4">
                  {service.badge}
                </span>
              )}
              <p className="text-text-secondary mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-surface-light text-text-secondary border border-white/10 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="primary" href={service.cta.href}>
                {service.cta.label}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
