type Props = {
  label: string;
  tone?: "success" | "info";
};

export function StatusBadge({ label, tone = "info" }: Props) {
  const styles =
    tone === "success"
      ? "bg-sand text-sage-strong border-sage-strong/30"
      : "bg-sand text-accent border-accent/30";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles}`}>
      {label}
    </span>
  );
}
