type Props = {
  classname?: string;
};
export default function CTA({ classname }: Props) {
  return (
    <a
      href="https://calendly.com/d/cswq-pmr-xzn/discovery-call"
      target="_blank"
      rel="noopener noreferrer"
      className={`${classname} flex items-center justify-center relative group bg-gradient-to-r from-theme to-pink-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-theme/30 transition-all`}
    >
      <span className="relative z-10">Request a Demo Call</span>
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
    </a>
  );
}
