import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusBadge } from "@/components/StatusBadge";
import { projects } from "@/content/data";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6 md:py-16">
      <SectionHeading
        eyebrow="Projekty"
        title="Dowody sprawczości FPbG"
        description="Każdy projekt jest cyfrowym artefaktem audytowym: zawiera metryki, partnerów i odnośniki do źródeł zewnętrznych."
      />
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-sand px-4 py-3 text-sm text-primary/80">
        <span>Case studies zrealizowanych inicjatyw znajdziesz w dedykowanej sekcji.</span>
        <Link
          href="/projekty/zrealizowane"
          className="font-semibold text-accent hover:text-accent-hover"
        >
          Zrealizowane projekty →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex h-full flex-col rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5"
          >
            <div className="flex items-center justify-between gap-3">
              <StatusBadge
                label={project.status}
                tone={project.status === "Zrealizowany" ? "success" : "info"}
              />
              <p className="text-sm font-semibold text-primary/70">
                {project.period}
              </p>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-primary">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-primary/80">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-sand px-3 py-2 text-xs font-semibold text-primary"
                >
                  {metric.label}: {metric.value}
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between pt-4">
              <p className="text-sm font-semibold text-accent">
                {project.strategicPillar}
              </p>
              <Link
                href={`/projekty/${project.slug}`}
                className="text-sm font-semibold text-accent hover:text-accent-hover"
              >
                Karta projektu →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
