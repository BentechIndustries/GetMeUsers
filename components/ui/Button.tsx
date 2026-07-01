import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "invert";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href: string;
  external?: boolean;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-paper hover:bg-accent-ink",
  secondary:
    "border border-ink/20 text-ink hover:border-ink/45 hover:bg-ink/[0.04]",
  ghost: "text-ink-soft hover:text-ink",
  invert: "bg-paper text-ink hover:bg-white",
};

export function Button({
  children,
  variant = "primary",
  href,
  external = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium tracking-tight transition-all duration-200 ease-out";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
