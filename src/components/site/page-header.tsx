import Link from "next/link";

export function PageHeader({
  title,
  parents = [],
  lead,
  meta,
}: {
  title: string;
  parents?: { label: string; href: string }[];
  lead?: string;
  meta?: string;
}) {
  return (
    <section className="border-b border-rule bg-white">
      <div className="container-page py-10 lg:py-14">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-[12px] text-muted">
          <ol className="flex flex-wrap items-center gap-x-2">
            <li>
              <Link href="/" className="hover:text-brand">Home</Link>
            </li>
            {parents.map((parent) => (
              <li key={parent.href} className="flex items-center gap-2">
                <span aria-hidden className="text-rule">/</span>
                <Link href={parent.href} className="hover:text-brand">{parent.label}</Link>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <span aria-hidden className="text-rule">/</span>
              <span className="text-ink-soft">{title}</span>
            </li>
          </ol>
        </nav>

        {/* Title block */}
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex gap-5">
            {/* Left accent bar */}
            <div className="mt-1 w-1 shrink-0 self-stretch bg-brand" aria-hidden />
            <div>
              <h1 className="rise text-[36px] font-bold leading-[1.15] text-[#0f3d25] sm:text-[46px]">
                {title}
              </h1>
              {lead ? (
                <p className="rise-late mt-4 max-w-2xl text-[18px] leading-[1.7] text-[#5c6b77]">
                  {lead}
                </p>
              ) : null}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
