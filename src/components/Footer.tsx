import { LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-neon-cyan font-bold text-lg">
              AI mit Arnie
            </span>
            <p className="mt-2 text-sm text-text-secondary">
              KI-Agenten, Automatisierung & Schulungen
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-neon-cyan transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={LINKS.skool}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-neon-cyan transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href={LINKS.mailtoHref}
                  className="text-text-secondary hover:text-neon-cyan transition-colors"
                >
                  E-Mail
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text-primary mb-3">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/impressum"
                  className="text-text-secondary hover:text-neon-cyan transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/datenschutz"
                  className="text-text-secondary hover:text-neon-cyan transition-colors"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-text-secondary">
          &copy; 2026 Arnold Oberleiter
        </div>
      </div>
    </footer>
  );
}
