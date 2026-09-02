import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, MousePointer2, Volume2, Maximize2, Smartphone, ArrowRight } from "lucide-react";
import interiorImg from "@/assets/rumah-contoh-interior.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/virtual-tour")({
  head: () => ({
    meta: [
      { title: "Virtual Tour 360° — SAS Residence Sindangpalay" },
      {
        name: "description",
        content:
          "Jelajahi panorama 360° kawasan SAS Residence Sindangpalay Garut: gerbang, jalan lingkungan, dan rumah contoh, lengkap dengan narasi Text-to-Speech.",
      },
      { property: "og:title", content: "Virtual Tour 360° — SAS Residence Sindangpalay" },
      {
        property: "og:description",
        content: "Panorama interaktif kawasan perumahan subsidi SAS Residence Sindangpalay Garut.",
      },
    ],
  }),
  component: VirtualTour,
});

const guides = [
  {
    icon: MousePointer2,
    title: "Geser untuk menjelajah",
    text: "Klik dan geser untuk melihat ke segala arah dalam panorama 360°.",
  },
  {
    icon: Compass,
    title: "Gunakan hotspot",
    text: "Klik tanda panah atau ikon hotspot untuk berpindah antar titik kawasan.",
  },
  {
    icon: Volume2,
    title: "Kontrol audio / TTS",
    text: "Aktifkan narasi suara di dalam tour untuk mendengarkan informasi tiap titik.",
  },
  {
    icon: Maximize2,
    title: "Mode layar penuh",
    text: "Gunakan tombol fullscreen agar panorama terasa lebih imersif.",
  },
  {
    icon: Smartphone,
    title: "Nyaman di ponsel",
    text: "Tour berjalan langsung di browser, tanpa perlu memasang aplikasi tambahan.",
  },
];

function VirtualTour() {
  const hasTour = siteConfig.tourUrl.trim().length > 0;

  return (
    <>
      <PageHero
        eyebrow="Virtual Tour"
        title="Panorama 360° kawasan SAS Residence Sindangpalay"
        description="Media informasi interaktif untuk mengenal gerbang, jalan lingkungan, ruang terbuka, dan rumah contoh secara virtual — dilengkapi narasi Text-to-Speech."
      />

      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]">
              <div className="aspect-[16/10] w-full md:aspect-[16/8]">
                {hasTour ? (
                  <iframe
                    src={siteConfig.tourUrl}
                    title="Virtual Tour 360° SAS Residence Sindangpalay"
                    className="h-full w-full border-0"
                    allow="fullscreen; accelerometer; gyroscope; magnetometer; vr; xr; xr-spatial-tracking; autoplay"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative grid h-full w-full place-items-center overflow-hidden">
                    <img
                      src={interiorImg}
                      alt="Pratinjau panorama rumah contoh SAS Residence"
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full scale-105 object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{ background: "var(--gradient-veil)" }}
                    />
                    <div className="relative max-w-md px-6 text-center text-brand-foreground">
                      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground animate-pulse-ring">
                        <Compass className="h-7 w-7" />
                      </span>
                      <p className="mt-6 font-display text-xl font-semibold">
                        Panorama 360° siap ditampilkan di area ini
                      </p>
                      <p className="mt-2 text-sm text-brand-foreground/75">
                        Tambahkan tautan tour 3DVista pada <code>tourUrl</code> di data situs untuk
                        menayangkan panorama interaktif.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g, i) => (
              <Reveal as="li" key={g.title} delay={(i % 3) * 100}>
                <div className="surface-card group flex h-full gap-4 p-5 hover:-translate-y-1 hover:border-accent/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-brand-foreground">
                    <g.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{g.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-secondary/60 px-6 py-5">
              <p className="text-sm text-muted-foreground">
                Ingin tahu detail hunian yang Anda lihat dalam tour?
              </p>
              <Link
                to="/tipe-rumah"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand"
              >
                Lihat tipe rumah
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
