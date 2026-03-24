interface ButtonProps {
  variant: "primary" | "secondary" | "gradient";
  href: string;
  external?: boolean;
  children: React.ReactNode;
  size?: "default" | "large";
  className?: string;
}

const variantStyles = {
  primary:
    "bg-neon-cyan text-background hover:brightness-110",
  secondary:
    "border border-neon-violet text-neon-violet hover:bg-neon-violet/10",
  gradient:
    "bg-gradient-to-r from-neon-violet to-neon-cyan text-white",
};

const sizeStyles = {
  default: "px-6 py-3 text-base",
  large: "px-10 py-4 text-lg",
};

export default function Button({
  variant,
  href,
  external,
  children,
  size = "default",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </a>
  );
}
