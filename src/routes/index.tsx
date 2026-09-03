import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Volume2,
  MousePointer2,
  BedDouble,
  Bath,
  Ruler,
  Zap,
  Sparkles,
  MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero-kawasan.jpg";
import rumahImg from "@/assets/rumah-tipe-34.jpg";
import interiorImg from "@/assets/rumah-contoh-interior.jpg";
import { Reveal } from "@/components/site/Reveal";
import { highlights, siteConfig, waLink } from "@/data/site";
import { houses } from "@/data/houses";
import { facilities } from "@/data/facilities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAS Residence Sindangpalay — Virtual Tour 360° Perumahan Garut" },
      {
        name: "description",
        content:
          "Jelajahi SAS Residence Sindangpalay Karangpawitan Garut lewat Virtual Tour 360° interaktif dengan narasi Text-to-Speech: tipe 34/60, fasilitas kawasan, dan skema KPR FLPP.",
      },
      { property: "og:title", content: "SAS Residence Sindangpalay — Virtual Tour 360°" },
      {
        property: "og:description",
        content:
          "Media informasi interaktif perumahan subsidi SAS Residence Sindangpalay: tour 360°, tipe hunian, fasilitas, dan lokasi.",
      },
    ],
  }),
  component: Home,
});

const tourSteps = [
  {
    icon: MousePointer2,
    title: "Geser & Jelajahi",
    text: "Klik lalu geser panorama untuk melihat kawasan ke segala arah, 360 derajat penuh.",
  },
  {
    icon: Compass,
    title: "Lompat Antar Titik",
    text: "Ikuti hotspot navigasi untuk berpindah dari gerbang, jalan lingkungan, hingga rumah contoh.",
  },
  {
    icon: Volume2,
    title: "Dengarkan Narasi",
    text: "Integrasi Text-to-Speech membacakan informasi tiap titik tanpa perlu membaca panjang.",
  },
];

function Home() {
  const house = houses[0]!;

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Kawasan perumahan SAS Residence Sindangpalay dari udara saat matahari terbenam"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />
        <div aria-hidden className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
        <div className="container-page relative pb-16 pt-36 md:pb-24">
          <div className="max-w-3xl text-brand-foreground">
            <Reveal>
              <p className="eyebrow text-accent">
                <span className="h-px w-8 bg-accent" />
                {siteConfig.tagline}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display-1 mt-6">
                Kenali hunian Anda
                <span className="block text-accent">sebelum melangkah ke lokasi.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-foreground/80 md:text-lg">
                Virtual Tour 360° interaktif dengan narasi suara untuk mengenal kawasan, fasilitas,
                dan rumah contoh {siteConfig.projectName} dari mana saja.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/virtual-tour"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-glow)] transition-transform duration-500 hover:-translate-y-0.5"
                >
                  Mulai Virtual Tour
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/tipe-rumah"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/30 bg-brand-foreground/10 px-7 py-3.5 text-sm font-semibold text-brand-foreground backdrop-blur-sm transition-colors duration-400 hover:bg-brand-foreground/20"
                >
                  Lihat Tipe Rumah
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={480}>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-brand-foreground/15 bg-brand-foreground/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h) => (
                <div key={h.label} className="bg-brand-deep/40 px-6 py-6 transition-colors duration-500 hover:bg-brand-deep/60">
                  <dt className="font-display text-3xl font-semibold text-accent">{h.value}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-brand-foreground">{h.label}</dd>
                  <dd className="mt-0.5 text-xs text-brand-foreground/60">{h.hint}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* HOW THE TOUR WORKS */}
      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-accent">
              <span className="h-px w-8 bg-accent" />
              Media interaktif
            </p>
            <h2 className="display-2 mt-5">
              Tiga cara sederhana menjelajahi kawasan secara virtual
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              Tour dirancang agar mudah dipakai siapa saja — tanpa aplikasi tambahan, langsung dari
              browser di ponsel maupun komputer.
            </p>
            <ol className="mt-10 space-y-4">
              {tourSteps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 120}>
                  <div className="surface-card group flex gap-5 p-5 hover:-translate-y-1 hover:border-accent/40">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-brand-foreground">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-lift)]">
                <img
                  src={interiorImg}
                  alt="Panorama interior rumah contoh SAS Residence"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
                />
              </div>
              <div className="surface-card absolute -bottom-6 left-6 flex items-center gap-3 px-5 py-4 md:-left-8">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-accent">
                  <Volume2 className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Narasi Text-to-Speech</p>
                  <p className="text-xs text-muted-foreground">Informasi dibacakan otomatis</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOUSE TYPE */}
      <section className="relative overflow-hidden bg-secondary/60 section-y">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-lift)]">
              <img
                src={rumahImg}
                alt="Tampak depan rumah tipe 34/60 SAS Residence"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-background/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur">
                {house.category}
              </span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="eyebrow text-accent">
              <span className="h-px w-8 bg-accent" />
              Tipe hunian
            </p>
            <h2 className="display-2 mt-5">{house.name}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{house.description}</p>

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Ruler, label: "Bangunan", value: house.buildingArea },
                { icon: Ruler, label: "Tanah", value: house.landArea },
                { icon: BedDouble, label: "Kamar tidur", value: `${house.bedrooms}` },
                { icon: Bath, label: "Kamar mandi", value: `${house.bathrooms}` },
              ].map((s) => (
                <li key={s.label} className="surface-card px-4 py-4 hover:-translate-y-1">
                  <s.icon className="h-4 w-4 text-accent" />
                  <p className="mt-3 font-display text-xl font-semibold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Harga mulai
                </p>
                <p className="font-display text-3xl font-semibold text-brand">{house.price.display}</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-xs font-semibold text-accent-foreground">
                <Zap className="h-3.5 w-3.5" /> KPR FLPP 5% fixed
              </div>
            </div>

            <Link
              to="/tipe-rumah"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-all duration-500 hover:shadow-[var(--shadow-lift)]"
            >
              Detail spesifikasi & pembiayaan
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FACILITIES PREVIEW */}
      <section className="section-y">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-accent">
              <span className="h-px w-8 bg-accent" />
              Kawasan
            </p>
            <h2 className="display-2 mt-5">Titik informasi di dalam tour</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Setiap titik menyajikan informasi kawasan secara netral dan disertai catatan bila data
              masih perlu divalidasi di lapangan.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.slice(0, 6).map((f, i) => (
              <Reveal as="li" key={f.id} delay={(i % 3) * 100}>
                <div className="surface-card group h-full p-6 hover:-translate-y-1.5 hover:border-accent/40">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-brand transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <p className="mt-5 font-display text-lg font-semibold">{f.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200}>
            <div className="mt-10">
              <Link
                to="/fasilitas"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand"
              >
                Lihat seluruh informasi kawasan
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-page">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-3xl px-8 py-14 text-brand-foreground md:px-16 md:py-20"
              style={{ background: "var(--gradient-brand)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-float-slow"
              />
              <div className="relative max-w-2xl">
                <p className="eyebrow text-accent">
                  <MapPin className="h-3.5 w-3.5" />
                  Kunjungi atau tanya langsung
                </p>
                <h2 className="display-2 mt-5">
                  Sudah menjelajah? Lanjutkan dengan pertanyaan Anda.
                </h2>
                <p className="mt-5 text-brand-foreground/80">
                  Tim pemasaran siap membantu memastikan harga terbaru, ketersediaan unit, dan proses
                  KPR bersubsidi.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-500 hover:-translate-y-0.5"
                  >
                    Chat WhatsApp
                  </a>
                  <Link
                    to="/lokasi"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors duration-400 hover:bg-brand-foreground/15"
                  >
                    Lihat Lokasi
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
