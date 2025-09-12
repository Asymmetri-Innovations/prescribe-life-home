export function Title({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return <div className={`text-3xl font-medium ${className}`}>{text}</div>;
}
