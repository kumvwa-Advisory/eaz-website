import Link from "next/link";

/**
 * ASCM-style wedge CTA button: solid brand-green label with a bright-green
 * angled "play flag" tail carrying the arrow glyph.
 */
export function ArrowWedgeButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex w-fit items-stretch overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.12)] ${className}`}
    >
      <span className="flex items-center bg-brand px-6 py-3.5 text-[16px] font-bold text-white transition-colors group-hover:bg-brand-dark">
        {children}
      </span>
      <span
        aria-hidden
        className="relative flex w-[72px] items-center justify-center bg-brand-bright transition-colors group-hover:bg-brand"
        style={{ clipPath: "polygon(32% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <svg
          viewBox="0 0 12 14"
          className="h-3.5 w-3 translate-x-0.5 text-brand-dark"
          fill="currentColor"
        >
          <path d="M2 1l9 6-9 6z" />
        </svg>
      </span>
    </Link>
  );
}
