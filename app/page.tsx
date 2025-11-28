import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusBadge } from "@/components/StatusBadge";
import {
  foundationInfo,
  strategyPillars,
  values,
  projects,
} from "@/content/data";

export default function Home() {
  const featuredProject = projects[0];

  // Strona główna prezentuje esencję FPbG: misję mostów, wartości i filary strategii.
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-16 right-4 h-52 w-52 rounded-full bg-sand/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 md:px-6 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">
            {foundationInfo.name}
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Fundacja Przyjaźń bez Granic. Pomorski Hub współpracy międzynarodowej
            i działań humanitarnych.
          </h1>
          <p className="max-w-3xl text-lg text-white/85">
            Budujemy dwukierunkowe mosty między Pomorzem a światem, łącząc
            empatię z audytowalnymi rezultatami. Każdy projekt traktujemy jako
            dowód sprawczości, a każdą relację jako element systemowej odporności.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/kontakt"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-accent-hover"
            >
              Skontaktuj się z nami
            </Link>
            <Link
              href="/strategia"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Poznaj strategię 2025-2028
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-white/80">
            <StatusBadge label="Ekosystem BDI" tone="info" />
            <StatusBadge label="Statyczny eksport SSG" tone="info" />
            <StatusBadge label="Transparentność grantowa" tone="success" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading
          eyebrow="Nasze wartości"
          title="Wartości, które prowadzą nasze działania"
          description="Empatyczny, sprawczy i zorganizowany sposób działania FPbG opiera się na czterech filarach wartościowych, zdefiniowanych w specyfikacji wdrożeniowej."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {value.accent}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-primary">
                {value.title}
              </h3>
              <p className="mt-2 text-primary/80">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {featuredProject ? (
        <section className="mx-auto max-w-6xl rounded-3xl bg-white px-4 py-10 shadow-lg shadow-primary/10 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Aktualnie realizowane projekty
              </p>
              <h3 className="font-serif text-2xl leading-tight text-primary md:text-3xl">
                {featuredProject.title}
              </h3>
              <p className="max-w-2xl text-primary/80">
                {featuredProject.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {featuredProject.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-primary/10 bg-sand px-4 py-3 text-sm font-semibold text-primary"
                >
                  <p className="text-xs font-medium text-primary/70">
                    {metric.label}
                  </p>
                  <p className="text-lg">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <StatusBadge label={featuredProject.status} tone="success" />
            <Link
              href={`/projekty/${featuredProject.slug}`}
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-md shadow-accent/30 transition hover:bg-accent-hover"
            >
              Zobacz kartę projektu
            </Link>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading
          eyebrow="Strategia 2025-2028"
          title="Trzy filary odpowiadające na wyzwania regionu i partnerów"
          description="Strategia łączy misję społeczną z mierzalnymi celami. Każdy filar ma jasno określone KPI i inicjatywy opisane w Specyfikacji Wdrożeniowej."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {strategyPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="flex h-full flex-col rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {pillar.subtitle}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-primary">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-primary/75">{pillar.description}</p>
              <div className="mt-4 space-y-2">
                {pillar.kpis.map((kpi) => (
                  <div
                    key={kpi}
                    className="rounded-2xl bg-sand px-4 py-3 text-sm font-semibold text-primary"
                  >
                    {kpi}
                  </div>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-primary/75">
                {pillar.initiatives.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <Link
                  href="/strategia"
                  className="text-sm font-semibold text-accent hover:text-accent-hover"
                >
                  Zobacz szczegóły filarów →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
