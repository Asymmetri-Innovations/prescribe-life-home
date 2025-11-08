import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function HoverGlowContainer({
  children,
  className = "",
}: Props) {
  return (
    <div
      style={
        {
          // boxShadow: "inset 0px 0px 0px transparent",
        }
      }
      onMouseEnter={(e) => {
        // e.currentTarget.style.boxShadow = "inset 0px 0px 25px #d557ad";
      }}
      onMouseLeave={(e) => {
        // e.currentTarget.style.boxShadow = "inset 0px 0px 0px transparent";
      }}
      className={` border-2 border-white/30 hover:border-theme/50 rounded-3xl p-6 md:p-8  transition-all hover:bg-foreground/5  duration-300 cursor-grab backdrop-blur-3xl ${className}`}
    >
      {children}
    </div>
  );
}
