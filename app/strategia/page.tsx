import { SectionHeading } from "@/components/SectionHeading";
import { StatusBadge } from "@/components/StatusBadge";
import { strategyPillars } from "@/content/data";

export default function StrategyPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 md:px-6 md:py-16">
      <SectionHeading
        eyebrow="Strategia 2025-2028"
        title="Skuteczność i skalowalność w trzech filarach"
        as="h1"
        description="Strategia FPbG łączy misję społeczną z mierzalnymi KPI. Każdy filar ma określone inicjatywy i rezultaty zgodne ze Specyfikacją Wdrożeniową."
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
            <h2 className="mt-2 text-xl font-semibold text-primary">
              {pillar.title}
            </h2>
            <p className="mt-2 text-sm text-primary/80">{pillar.description}</p>
            <div className="mt-4 space-y-2 text-sm font-semibold text-primary">
              {pillar.kpis.map((kpi) => (
                <div key={kpi} className="rounded-2xl bg-sand px-4 py-3">
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
              <StatusBadge label="Strategiczny filar" tone="info" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
