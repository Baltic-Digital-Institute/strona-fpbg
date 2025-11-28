import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { newsPosts } from "@/content/data";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export default function NewsArticlePage({ params }: Props) {
  const post = newsPosts.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-12 md:px-6 md:py-16">
      <SectionHeading
        eyebrow={post.category}
        title={post.title}
        description={`Data: ${post.date}`}
      />
      <article className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/5">
        {post.body.split("\n").map((paragraph) => (
          <p key={paragraph} className="mb-4 text-sm text-primary/85">
            {paragraph}
          </p>
        ))}
      </article>
    </div>
  );
}
