import { type ReactNode } from "react";

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
  py = "py-20 md:py-24",
}: SectionProps) {
  return (
    <section id={id} className={`${py} ${className}`}>
      <div
        className={`mx-auto max-w-5xl px-6 md:px-8 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
}: {
  title: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mb-12 md:mb-14 ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
