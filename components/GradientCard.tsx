import Image from "next/image";

type GradientCardProps = {
  title: string;
  description: string;
  classname?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function GradientCard({
  title,
  description,
  classname,
  imageSrc,
  imageAlt,
}: GradientCardProps) {
  const highlightedDescription = description.replace(
    /(Oli Johnson|Dr\. Neetu Johnson)/g,
    '<span class="text-theme">$1</span>'
  );

  return (
    <div
      className={`rounded-2xl p-8 max-md:p-6 bg-gradient-to-b from-zinc-900/70 to-black/80 border border-white/10 ring-1 ring-white/10 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.6)] flex items-start space-x-4 ${classname}`}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          width={80}
          height={80}
          className="w-20 h-20 object-cover rounded-full"
        />
      )}
      <div className="flex flex-col">
        <h3 className="text-white text-3xl max-md:text-2xl font-bold leading-snug">
          {title}
        </h3>
        {description && (
          <p
            className="text-zinc-300 mt-4 leading-relaxed text-sm max-md:text-xs"
            dangerouslySetInnerHTML={{ __html: highlightedDescription }}
          />
        )}
      </div>
    </div>
  );
}
