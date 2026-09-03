import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Navigation, Info } from "lucide-react";
import kawasanImg from "@/assets/kawasan-jalan.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/lokasi")({
  head: () => ({
    meta: [
      { title: "Lokasi & Akses — SAS Residence Sindangpalay" },
      {
        name: "description",
        content:
          "Alamat dan akses menuju SAS Residence Sindangpalay, Karangpawitan, Kabupaten Garut, lengkap dengan kontak pemasaran.",
      },
      { property: "og:title", content: "Lokasi & Akses — SAS Residence Sindangpalay" },
      {
        property: "og:description",
        content: "Alamat, akses, dan kontak pemasaran SAS Residence Sindangpalay Garut.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationPage,
});

const contacts = [
  { icon: MapPin, label: "Alamat pemasaran", value: siteConfig.marketingAddress },
  { icon: Phone, label: "Telepon / WhatsApp", value: siteConfig.phoneDisplay },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Navigation, label: "Wilayah", value: siteConfig.location },
];

function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Lokasi"
        title="Berada di Sindangpalay, Karangpawitan, Garut"
        description="Informasi lokasi disajikan sesuai data resmi pengembang. Jarak ke fasilitas umum sebaiknya dikonfirmasi langsung sebelum kunjungan."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <ul className="grid gap-4">
              {contacts.map((c) => (
                <li key={c.label} className="surface-card flex gap-4 p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-brand">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1 leading-relaxed">{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex gap-3 rounded-2xl border border-border bg-secondary/60 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Peta interaktif akan ditampilkan setelah titik koordinat resmi kawasan divalidasi.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-lift)]">
              {siteConfig.mapEmbedUrl ? (
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  title="Peta lokasi SAS Residence Sindangpalay"
                  loading="lazy"
                  className="h-[420px] w-full border-0"
                />
              ) : (
                <img
                  src={kawasanImg}
                  alt="Suasana jalan lingkungan kawasan SAS Residence Sindangpalay"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-[420px] w-full object-cover"
                />
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
