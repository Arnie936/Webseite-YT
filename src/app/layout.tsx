import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI mit Arnie | KI-Agenten, Automatisierung & Schulungen",
  description:
    "KI-Agenten und Automatisierungsloesungen fuer Unternehmen. Schulungen zu LLMs, n8n, Claude Code und ComfyUI. Premium-Community fuer KI-Enthusiasten.",
  keywords: [
    "KI-Agenten",
    "Automatisierung",
    "KI-Schulung",
    "LLM",
    "n8n",
    "Claude Code",
    "ComfyUI",
  ],
  authors: [{ name: "Arnold Oberleiter" }],
  openGraph: {
    title: "AI mit Arnie | KI-Loesungen & Schulungen",
    description:
      "Massgeschneiderte KI-Agenten, Automatisierung und praxisnahe Workshops.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
