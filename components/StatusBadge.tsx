type Props = {
  label: string;
  tone?: "success" | "info";
};

export function StatusBadge({ label, tone = "info" }: Props) {
  const styles =
    tone === "success"
      ? "bg-sage/15 text-sage border-sage/40"
      : "bg-accent/15 text-accent border-accent/40";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles}`}>
      {label}
    </span>
  );
}
