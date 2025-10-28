import React from "react";

interface GlowingCardProps {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
}

export default function GlowCard({
  children,
  glow = false,
  className = "",
}: GlowingCardProps) {
  return (
    <div
      className={`relative rounded-2xl px-6 py-4 text-center bg-black/60 text-white backdrop-blur-sm border border-white/10 overflow-hidden ${className}`}
    >
      {/* blurred border glow */}
      {glow && (
        <div className="absolute inset-0 -z-10 rounded-2xl blur-3xl opacity-70 bg-theme" />
      )}

      {children}
    </div>
  );
}
