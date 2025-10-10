/* eslint-disable react/prop-types */
import React from "react";

function Topography({ opacity = 0.2, strokeWidth = 2 }) {
  const lines = [
    "M-50 120 C 150 60, 350 140, 560 100 S 980 120, 1100 60",
    "M-50 220 C 160 170, 360 250, 560 210 S 980 220, 1100 170",
    "M-50 320 C 160 270, 360 350, 560 310 S 980 320, 1100 270",
    "M-50 420 C 160 370, 360 450, 560 410 S 980 420, 1100 370",
    "M-50 520 C 160 470, 360 550, 560 510 S 980 520, 1100 470",
    "M-50 620 C 160 570, 360 650, 560 610 S 980 620, 1100 570",
    "M-50 720 C 160 670, 360 750, 560 710 S 980 720, 1100 670",
    "M-50 820 C 160 770, 360 850, 560 810 S 980 820, 1100 770",
    "M-50 920 C 160 870, 360 950, 560 910 S 980 920, 1100 870",
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      aria-hidden
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="tg2" x1="0" x2="1">
          <stop offset="0%" stopColor="#5b6572" />
          <stop offset="100%" stopColor="#3c424a" />
        </linearGradient>
      </defs>
      {lines.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="url(#tg2)" strokeWidth={strokeWidth} />
      ))}
    </svg>
  );
}

// ---- componente em constante + export explícito (default e nomeado)
const InfoBackground = ({ className = "", children }) => {
  return (
    <section
      className={`relative h-full w-full overflow-hidden rounded-[28px] bg-neutral-900 ring-1 ring-white/10 ${className}`}
      aria-label="Informações"
    >
      <Topography opacity={0.22} strokeWidth={2} />
      <div className="relative z-10 h-full w-full p-6">{children}</div>
    </section>
  );
};

export default InfoBackground;
export { InfoBackground };
