import { createFileRoute } from "@tanstack/react-router";
import {
  DoorOpen,
  Route as RouteIcon,
  Waves,
  Zap,
  Droplets,
  Trees,
  ShieldCheck,
  Home,
  Building2,
  Info,
  type LucideIcon,
} from "lucide-react";
import kawasanImg from "@/assets/kawasan-jalan.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { facilities } from "@/data/facilities";

export const Route = createFileRoute("/fasilitas")({
  head: () => ({
    meta: [
      { title: "Fasilitas & Kawasan — SAS Residence Sindangpalay" },
      {
        name: "description",
        content:
          "Informasi kawasan SAS Residence Sindangpalay: gerbang, jalan lingkungan beton, drainase, jaringan listrik dan air bersih, ruang terbuka, serta rumah contoh.",
      },
      { property: "og:title", content: "Fasilitas & Kawasan — SAS Residence Sindangpalay" },
      {
        property: "og:description",
        content: "Titik-titik informasi kawasan yang disajikan dalam Virtual Tour 360°.",
      },
    ],
  }),
  component: Facilities,
});

const icons: Record<string, LucideIcon> = {
  DoorOpen,
  Route: RouteIcon,
  Waves,
  Zap,
  Droplets,
  Trees,
  ShieldCheck,
  Home,
  Building2,
};

function Facilities() {
  return (
    <>
      <PageHero
        eyebrow="Kawasan"
        title="Informasi lingkungan yang disajikan dalam tour"
        description="Daftar berikut adalah kategori informasi kawasan yang ditampilkan dalam Virtual Tour, bukan daftar jaminan fasilitas on-site. Poin yang belum tervalidasi ditandai secara eksplisit."
      />

      <section className="section-y">
        <div className="container-page">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => {
              const Icon = icons[f.icon] ?? Building2;
              return (
                <Reveal as="li" key={f.id} delay={(i % 3) * 100}>
                  <div className="surface-card group relative h-full overflow-hidden p-6 hover:-translate-y-1.5 hover:border-accent/40">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-brand transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-5 font-display text-lg font-semibold">{f.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                    {f.needsValidation && (
                      <span className="mt-4 inline-flex rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                        perlu validasi lapangan
                      </span>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-lift)]">
              <img
                src={kawasanImg}
                alt="Jalan lingkungan beton di dalam kawasan perumahan"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="display-2">Disajikan secara jujur dan terukur</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Klaim pemasaran yang belum terverifikasi sengaja tidak ditampilkan. Deskripsi hanya
              ditingkatkan setelah divalidasi di lapangan atau melalui dokumen resmi pengembang.
            </p>
            <p className="mt-6 flex gap-3 rounded-2xl border border-border bg-secondary/60 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Untuk kepastian fasilitas, jam operasional keamanan, dan jarak fasilitas umum, silakan
              konfirmasi langsung kepada pihak pemasaran SAS Residence.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
