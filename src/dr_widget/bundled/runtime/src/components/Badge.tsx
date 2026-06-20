type BadgeProps = {
  label?: string;
  className?: string;
};

export function Badge({ label, className }: BadgeProps) {
  const text = label?.trim() ?? '';
  return <span className={className}>{text}</span>;
}
