"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS, LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-neon-cyan font-bold text-xl">
          AI mit Arnie
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-text-secondary hover:text-neon-cyan transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* YouTube Icon */}
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-text-secondary hover:text-neon-cyan transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          <Button variant="primary" href="#kontakt">
            Erstgespraech buchen
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-text-primary focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Menu oeffnen"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-text-secondary hover:text-neon-cyan transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-xl text-text-secondary hover:text-neon-cyan transition-colors"
          >
            YouTube
          </a>
          <Button
            variant="primary"
            href="#kontakt"
            className="w-64 text-center"
          >
            Erstgespraech buchen
          </Button>
        </div>
      )}
    </header>
  );
}
