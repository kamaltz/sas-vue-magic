import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Building2, ShieldCheck, Info } from "lucide-react";
import interiorImg from "@/assets/rumah-contoh-interior.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang Proyek — SAS Residence Sindangpalay" },
      {
        name: "description",
        content:
          "Latar belakang media informasi interaktif SAS Residence Sindangpalay: pengembang, konteks penelitian Virtual Tour 360° dengan Text-to-Speech, dan batasan data.",
      },
      { property: "og:title", content: "Tentang Proyek — SAS Residence Sindangpalay" },
      {
        property: "og:description",
        content: "Profil pengembang dan konteks penelitian di balik Virtual Tour SAS Residence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const facts = [
    { icon: Building2, label: "Pengembang", value: siteConfig.developer },
    { icon: ShieldCheck, label: "Status & asosiasi", value: `${siteConfig.status} · ${siteConfig.association}` },
    { icon: GraduationCap, label: "Peneliti", value: `${siteConfig.research.researcher} — ${siteConfig.research.institution}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Tentang"
        title="Media informasi interaktif berbasis penelitian"
        description={siteConfig.description}
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="display-2">Konteks penelitian</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {siteConfig.research.title} ({siteConfig.research.year}).
            </p>
            <ul className="mt-8 grid gap-4">
              {facts.map((f) => (
                <li key={f.label} className="surface-card flex gap-4 p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-brand">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {f.label}
                    </p>
                    <p className="mt-1 leading-relaxed">{f.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex gap-3 rounded-2xl border border-border bg-secondary/60 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Data situs merupakan snapshot per {siteConfig.researchSnapshotDate} dan dapat berubah
              sesuai kebijakan pengembang.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-lift)]">
              <img
                src={interiorImg}
                alt="Interior rumah contoh SAS Residence Sindangpalay"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
