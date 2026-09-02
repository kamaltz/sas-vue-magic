import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, Bath, Ruler, Zap, FileText, Check, Info } from "lucide-react";
import rumahImg from "@/assets/rumah-tipe-34.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { houses } from "@/data/houses";
import { waLink } from "@/data/site";

export const Route = createFileRoute("/tipe-rumah")({
  head: () => ({
    meta: [
      { title: "Tipe Rumah 34/60 — SAS Residence Sindangpalay" },
      {
        name: "description",
        content:
          "Spesifikasi tipe 34/60 SAS Residence Sindangpalay: 2 kamar tidur, 1 kamar mandi, listrik 900 watt, SHGB, serta skema KPR bersubsidi FLPP.",
      },
      { property: "og:title", content: "Tipe Rumah 34/60 — SAS Residence Sindangpalay" },
      {
        property: "og:description",
        content: "Detail luas, layout, material, harga, dan pembiayaan hunian subsidi tipe 34/60.",
      },
    ],
  }),
  component: HouseTypes,
});

function HouseTypes() {
  const house = houses[0];

  return (
    <>
      <PageHero
        eyebrow="Tipe Hunian"
        title="Satu tipe, informasi selengkap mungkin"
        description="Data penelitian mendukung satu tipe hunian utama di SAS Residence Sindangpalay. Rincian di bawah disajikan apa adanya, termasuk poin yang masih perlu divalidasi."
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-lift)] lg:sticky lg:top-28">
              <img
                src={rumahImg}
                alt="Tampak depan rumah tipe 34/60 SAS Residence"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              {house.category}
            </span>
            <h2 className="display-2 mt-4">{house.name}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{house.description}</p>

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { icon: Ruler, label: "Luas bangunan", value: house.buildingArea },
                { icon: Ruler, label: "Luas tanah", value: house.landArea },
                { icon: BedDouble, label: "Kamar tidur", value: `${house.bedrooms}` },
                { icon: Bath, label: "Kamar mandi", value: `${house.bathrooms}` },
                { icon: Zap, label: "Daya listrik", value: house.electricity },
                { icon: FileText, label: "Sertifikat", value: house.certificate },
              ].map((s) => (
                <li key={s.label} className="surface-card px-4 py-4 hover:-translate-y-1">
                  <s.icon className="h-4 w-4 text-accent" />
                  <p className="mt-3 font-display text-lg font-semibold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </li>
              ))}
            </ul>

            <h3 className="display-3 mt-12">Tata ruang</h3>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {house.layout.map((l) => (
                <li
                  key={l.label}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    {l.label}
                    {l.needsValidation && (
                      <span className="ml-2 rounded-full bg-secondary px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                        perlu validasi
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="display-3 mt-12">Spesifikasi bangunan</h3>
            <dl className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {house.specs.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <dt className="w-44 shrink-0 text-sm font-semibold">{s.label}</dt>
                  <dd className="text-sm text-muted-foreground">
                    {s.value}
                    {s.needsValidation && (
                      <span className="ml-2 rounded-full bg-secondary px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide">
                        perlu validasi
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow text-accent">
              <span className="h-px w-8 bg-accent" />
              Harga & pembiayaan
            </p>
            <h2 className="display-2 mt-5">Mulai {house.price.display}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{house.price.note}</p>
            <a
              href={waLink(`Halo, saya ingin menanyakan ketersediaan unit ${house.name} di SAS Residence Sindangpalay.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-all duration-500 hover:shadow-[var(--shadow-lift)]"
            >
              Tanya ketersediaan unit
            </a>
          </Reveal>

          <Reveal delay={140}>
            <dl className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {house.financing.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-6 px-6 py-5">
                  <dt className="text-sm font-semibold">{f.label}</dt>
                  <dd className="text-right text-sm text-muted-foreground">
                    {f.value}
                    {f.indicative && (
                      <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-accent-foreground">
                        indikatif
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 flex gap-3 rounded-2xl border border-border bg-background px-5 py-4 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {house.financingNote}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
