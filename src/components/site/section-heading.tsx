import type { ReactNode } from "react";

/** Shared card treatment: white tile, soft shadow, hairline ring and a green gradient base bar. */
export const CARD =
  "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-black/5";

/** Green gradient base bar used at the bottom (or top) of styled cards. */
export const GREEN_BAR = "h-[6px] w-full bg-gradient-to-r from-brand to-brand-bright";

export function SectionHeading({
  title,
  id,
  eyebrow,
  note,
  center,
}: {
  title: string;
  id?: string;
  eyebrow?: string;
  note?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "text-center" : ""} ${id ? "" : ""}`}>
      {eyebrow ? (
        <p className="mb-2 text-[14px] font-bold uppercase tracking-[0.12em] text-brand">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className={`text-[34px] font-bold leading-tight text-[#0f3d25] lg:text-[42px] ${id ? "scroll-mt-28" : ""}`}
      >
        {title}
      </h2>
      <div className={`mt-4 ${center ? "mx-auto" : ""} h-[3px] w-56 bg-gradient-to-r from-brand to-brand-bright`} />
      {note ? (
        <div className="mt-4 text-[17px] leading-relaxed text-[#5c6b77] lg:text-[18px]">{note}</div>
      ) : null}
    </div>
  );
}

/** Small card heading: green eyebrow + bold card title with hairline divider. */
export function CardHeading({ eyebrow, title }: { eyebrow?: string; title?: string }) {
  return (
    <div className="border-b border-[#e8ebe8] pb-4">
      {eyebrow ? (
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand">{eyebrow}</p>
      ) : null}
      {title ? <h2 className="mt-1.5 text-[21px] font-bold leading-snug text-ink">{title}</h2> : null}
    </div>
  );
}
