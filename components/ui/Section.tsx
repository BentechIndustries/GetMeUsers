import { type ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  py?: string;
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  py = "py-24 md:py-32",
}: SectionProps) {
  return (
    <section id={id} className={`${py} ${className}`}>
      <Reveal className={`mx-auto max-w-6xl px-6 md:px-10 ${containerClassName}`}>
        {children}
      </Reveal>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <div className="mb-5 flex items-center gap-3 text-ink-soft">
          <span className="h-2 w-2 rounded-[1px] bg-accent" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-4xl font-normal leading-[1.05] text-ink text-balance md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {subtitle}
        </p>
      )}
    </div>
  );
}
