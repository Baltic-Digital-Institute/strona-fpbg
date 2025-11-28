import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusBadge } from "@/components/StatusBadge";
import { projects } from "@/content/data";

export default function CompletedProjectsPage() {
  const completed = projects.filter((project) => project.status === "Zrealizowany");

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6 md:py-16">
      <SectionHeading
        eyebrow="Case studies"
        title="Zrealizowane projekty FPbG"
        description="Udokumentowane działania, które stanowią cyfrowe dowody naszej skuteczności i transparentności."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {completed.map((project) => (
          <article
            key={project.slug}
            className="flex h-full flex-col rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5"
          >
            <StatusBadge label={project.status} tone="success" />
            <h3 className="mt-3 text-xl font-semibold text-primary">{project.title}</h3>
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
            <div className="mt-auto pt-4">
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

      <div className="rounded-2xl border border-dashed border-primary/20 bg-sand px-4 py-3 text-sm text-primary/80">
        Szukasz projektów w toku? Zobacz stronę główną sekcji:{" "}
        <Link href="/projekty" className="font-semibold text-accent hover:text-accent-hover">
          Wszystkie projekty
        </Link>
        .
      </div>
    </div>
  );
}
