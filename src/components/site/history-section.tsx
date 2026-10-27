import { ArrowWedgeButton } from "./button-wedge";
import { CARD, GREEN_BAR, SectionHeading } from "./section-heading";
import { TERMS, type Term } from "@/data/history";

function TermCard({ term }: { term: Term }) {
  const president = term.leaders.find((leader) => leader.role === "President");
  const vice = term.leaders.find((leader) => leader.role === "Vice President");

  return (
    <article className={`${CARD} flex h-full flex-col`}>
      <div className="h-[6px] w-full bg-gradient-to-r from-brand to-brand-bright" />
      <div className="flex flex-1 flex-col p-7 lg:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-[30px] font-bold leading-none text-[#0f3d25] lg:text-[34px]">
            {term.label}
          </h3>
          <span
            className={`inline-flex items-center px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${
              term.status === "Current"
                ? "bg-brand text-white"
                : "bg-brand-tint text-brand"
            }`}
          >
            {term.status === "Current" ? "Current term" : term.status}
          </span>
        </div>

        <p className="mt-4 text-[18px] font-bold leading-snug text-[#3f9d5a]">{term.theme}</p>
        <p className="mt-3 text-[17px] leading-[1.75] text-[#5c6b77]">{term.summary}</p>

        <dl className="mt-6 space-y-3 border-t border-[#e8ebe8] pt-5">
          {[president, vice].filter(Boolean).map((leader) => (
            <div key={leader!.role} className="flex items-start gap-3">
              <span className="mt-1.5 h-3.5 w-3.5 shrink-0 border-2 border-brand-bright" aria-hidden />
              <div>
                <dt className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#5c6b77]">
                  {leader!.role}
                </dt>
                <dd
                  className={`text-[17px] leading-snug ${
                    leader!.name ? "font-bold text-ink" : "italic text-muted"
                  }`}
                >
                  {leader!.name ?? "To be confirmed"}
                </dd>
              </div>
            </div>
          ))}
        </dl>

        <p className="mt-5 text-[14px] text-muted">
          {term.leaders.length} officers &middot; organogram &middot; accomplishments
        </p>

        <div className="mt-6">
          <ArrowWedgeButton href={`/about-us/history/${term.slug}`}>View term</ArrowWedgeButton>
        </div>
      </div>
      <div className={GREEN_BAR} />
    </article>
  );
}

export function HistorySection() {
  return (
    <section id="history" className="waves-bg relative isolate scroll-mt-28 overflow-hidden py-16 lg:py-20">
      <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

      <div className="container-page relative">
        <SectionHeading
          title="History of EAZ"
          note="Each National Executive Committee serves a two-year term. Open a term to see its leadership organogram and the record of what it accomplished."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {TERMS.map((term) => (
            <TermCard key={term.slug} term={term} />
          ))}
        </div>
      </div>
    </section>
  );
}
