export default function CoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="max-w-3xl mx-auto px-3 relative max-lg:max-w-2xl max-md:max-w-xl max-md:px-1">
      {children}
    </main>
  );
}
export default function Button({
  children,
  onClick,
  noDebounce,
}: Readonly<{ children: React.ReactNode; onClick: any; noDebounce: boolean }>) {
  return (
    <button
      onClick={() => {
        if (noDebounce) {
          onClick();
        }
        DEBOUNCE(onClick());
      }}
      className="bg-theme border-2 border-theme/50 font-semibold p-4 rounded-lg"
    >
      {children}
    </button>
  );
}

<CoreLayout>
  <div></div>
</CoreLayout>;
