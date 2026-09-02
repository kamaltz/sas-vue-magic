import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Globe } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-deep text-brand-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr] md:py-20">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">SAS Residence</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-brand-foreground/60">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-foreground/70">
            {siteConfig.description}
          </p>
          <p className="mt-6 text-xs leading-relaxed text-brand-foreground/50">
            Media penelitian akademik — bukan situs korporat resmi. Situs resmi:{" "}
            <a
              href={siteConfig.officialWebsite}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-accent"
            >
              sasresidence.com
            </a>
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <p className="eyebrow text-brand-foreground/50">Halaman</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-brand-foreground/75 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-brand-foreground/50">Kontak Pemasaran</p>
          <ul className="mt-5 space-y-4 text-sm text-brand-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{siteConfig.marketingAddress}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${siteConfig.whatsapp}`} className="hover:text-accent">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-accent">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">
                @sasresidence
              </a>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>ID Proyek SiKumbang {siteConfig.projectId}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-brand-foreground/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.developer} · {siteConfig.association}</p>
          <p>
            Prototipe penelitian {siteConfig.research.researcher} — {siteConfig.research.institution}
          </p>
        </div>
      </div>
    </footer>
  );
}
