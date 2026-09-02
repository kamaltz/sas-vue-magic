import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Compass } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isHome = pathname === "/";
  const onHero = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        onHero
          ? "bg-transparent py-2"
          : "border-b border-border/70 bg-background/85 backdrop-blur-xl",
      )}
      style={{ transitionTimingFunction: "var(--ease-out-soft)" }}
    >
      <nav
        className="container-page flex h-16 items-center justify-between gap-4 md:h-20"
        aria-label="Navigasi utama"
      >
        <Link to="/" aria-label="SAS Residence — Beranda">
          <Logo tone={onHero ? "light" : "dark"} />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    onHero
                      ? active
                        ? "text-brand-foreground"
                        : "text-brand-foreground/70 hover:text-brand-foreground"
                      : active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-500",
                      active && "scale-x-100",
                    )}
                    style={{ transitionTimingFunction: "var(--ease-out-soft)" }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/virtual-tour"
          className={cn(
            "group hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-400 lg:inline-flex",
            onHero
              ? "bg-brand-foreground/12 text-brand-foreground ring-1 ring-brand-foreground/35 hover:bg-brand-foreground/20"
              : "bg-brand text-brand-foreground hover:shadow-[var(--shadow-lift)]",
          )}
        >
          <Compass className="h-4 w-4 transition-transform duration-700 group-hover:rotate-180" />
          Jelajahi Tour
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
            onHero ? "text-brand-foreground" : "text-foreground",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/70 bg-background transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
        )}
        style={{ transitionTimingFunction: "var(--ease-out-soft)" }}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
