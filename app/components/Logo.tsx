/** The AI Photo Journey brandmark — an aperture drawn from the app spectrum. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="apj-mark" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="0.35" stopColor="#818cf8" />
            <stop offset="0.65" stopColor="#d946ef" />
            <stop offset="1" stopColor="#fb7185" />
          </linearGradient>
        </defs>
        <rect
          x="1.25"
          y="1.25"
          width="29.5"
          height="29.5"
          rx="8.5"
          stroke="url(#apj-mark)"
          strokeWidth="2.5"
        />
        <circle
          cx="16"
          cy="16"
          r="6.5"
          stroke="url(#apj-mark)"
          strokeWidth="2.5"
        />
        <circle cx="16" cy="16" r="2.4" fill="url(#apj-mark)" />
      </svg>
      <span className="font-semibold tracking-tight text-[1.02rem]">
        AI Photo Journey
      </span>
    </span>
  );
}
