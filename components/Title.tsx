export function Title({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={`text-3xl max-md:text-2xl font-semibold ${className}`}>
      {text}
    </div>
  );
}
