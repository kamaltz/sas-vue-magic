import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-deep pb-16 pt-32 text-brand-foreground md:pb-24 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-[-6rem] h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-float-slow"
      />
      <div className="container-page relative">
        <p className="eyebrow text-accent">
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </p>
        <h1 className="display-2 mt-5 max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-foreground/75">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
