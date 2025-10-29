type Props = {
  title: string;
  secondaryLine?: React.ReactNode; // ✅ can be text, JSX, or fragments
  titleCn?: string;
};

export function GlassmorphicCard({ title, secondaryLine, titleCn }: Props) {
  return (
    <div className="bg-black flex items-center justify-center w-full">
      <div
        className={`flex flex-col items-start p-6 gap-16 rounded-2xl ${
          titleCn ?? "w-full min-h-[132px]"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 125.17%)",
          boxShadow: "inset 0px 4px 25px #D557AD",
        }}
      >
        <div className="flex flex-col items-start w-full ">
          <h2 className="text-md md:text-2xl font-bold text-white text-center w-full leading-relaxed tracking-wide">
            {title}
          </h2>
          {secondaryLine && (
            <p className="text-base font-medium text-white text-center w-full leading-relaxed tracking-wide opacity-80">
              {secondaryLine}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
