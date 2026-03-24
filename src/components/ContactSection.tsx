import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { LINKS } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading className="mb-6">Lass uns sprechen</SectionHeading>
        <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
          Vereinbare ein unverbindliches Erstgespraech fuer individuelle
          KI-Loesungen oder Workshops.
        </p>

        <Button variant="primary" href={LINKS.mailtoHref} size="large">
          E-Mail schreiben
        </Button>
        <p className="mt-4 text-text-secondary text-sm">{LINKS.email}</p>
      </div>
    </section>
  );
}
