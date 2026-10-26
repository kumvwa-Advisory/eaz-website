import type { ReactNode } from "react";

/* Field styling mirrors the Association's existing website: 16px system text,
   38px control height, 6px 10px padding, 1px #ccc border and 2px radius. */
export const inputClass =
  "w-full rounded-[4px] border-[1.5px] border-[#d3ddd3] bg-[#fbfdfb] px-3.5 py-[13px] text-[14.5px] text-ink placeholder:text-[#98a2b3] outline-none transition-colors focus:border-[#d3ddd3] focus:bg-white aria-invalid:border-[#dc2626] aria-invalid:bg-[#fef2f2]";

export const textareaClass =
  "w-full rounded-[4px] border-[1.5px] border-[#d3ddd3] bg-[#fbfdfb] px-3.5 py-[13px] text-[14.5px] text-ink placeholder:text-[#98a2b3] outline-none transition-colors focus:border-[#d3ddd3] focus:bg-white aria-invalid:border-[#dc2626] aria-invalid:bg-[#fef2f2] resize-none";

export const selectClass =
  "w-full rounded-[4px] border-[1.5px] border-[#d3ddd3] bg-[#fbfdfb] px-3.5 py-[13px] text-[14.5px] text-ink outline-none transition-colors focus:border-[#d3ddd3] focus:bg-white aria-invalid:border-[#dc2626]";

export const submitClass =
  "inline-flex min-h-[46px] items-center justify-center rounded-[4px] bg-brand px-8 py-3 text-[13px] font-bold uppercase tracking-[0.1em] text-white disabled:opacity-60";

export function Field({
  label,
  htmlFor,
  required,
  hint,
  error,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#6c757d]">
        {label}
        {required ? (
          <span className="ml-0.5 text-[#dc2626]" aria-hidden>
            *
          </span>
        ) : null}
      </label>
      {hint ? <p className="mt-1 text-[14px] leading-snug text-muted">{hint}</p> : null}
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p role="alert" className="mt-1 text-[14px] leading-snug text-[#b42318]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function FormSuccess({
  title,
  children,
  onReset,
  resetLabel = "Submit another response",
}: {
  title: string;
  children: ReactNode;
  onReset?: () => void;
  resetLabel?: string;
}) {
  return (
    <div role="status" className="border border-brand/30 bg-brand-tint p-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
        <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M2.5 8.5l3.5 3.5 7.5-8" />
        </svg>
      </span>
      <h3 className="mt-4 text-[20px] font-semibold text-ink">{title}</h3>
      <div className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink-soft">{children}</div>
      {onReset ? (
        <button
          type="button"
          onClick={onReset}
          className="mt-4 text-[15px] font-medium text-ink underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
        >
          {resetLabel}
        </button>
      ) : null}
    </div>
  );
}

export function FormError({ message }: { message: string }) {
  return (
    <div role="alert" className="border-l-2 border-[#b42318] bg-[#fdf3f2] px-3.5 py-2.5">
      <p className="text-[15px] leading-relaxed text-[#7a1b13]">{message}</p>
    </div>
  );
}
