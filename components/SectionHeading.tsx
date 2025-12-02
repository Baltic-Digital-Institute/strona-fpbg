type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: Props) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const HeadingTag = as;

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      {/* Elastyczny poziom nagłówka poprawia hierarchię semantyczną stron */}
      <HeadingTag className="font-serif text-3xl leading-tight text-primary md:text-4xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="max-w-3xl text-base text-primary/80">{description}</p>
      ) : null}
    </div>
  );
}
