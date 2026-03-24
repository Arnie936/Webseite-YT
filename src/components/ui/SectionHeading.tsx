interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function SectionHeading({
  children,
  className = "",
  glow,
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${glow ? "gradient-text glow-text-cyan" : "text-text-primary"} ${className}`}
    >
      {children}
    </h2>
  );
}
