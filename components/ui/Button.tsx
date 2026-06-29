import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href: string;
  external?: boolean;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-600/25",
  secondary:
    "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50",
  ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
};

export function Button({
  children,
  variant = "primary",
  href,
  external = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

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
