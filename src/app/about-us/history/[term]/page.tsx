import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowWedgeButton } from "@/components/site/button-wedge";
import { Organogram } from "@/components/site/organogram";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { TERMS, termBySlug } from "@/data/history";

type Params = { term: string };

export function generateStaticParams(): Params[] {
  return TERMS.map((term) => ({ term: term.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { term: slug } = await params;
  const term = termBySlug(slug);
  if (!term) return { title: "Term not found" };
  return {
    title: `EAZ Leadership ${term.label}`,
    description: `Leadership organogram and accomplishments of the Economics Association of Zambia for the ${term.label} term.`,
  };
}

export default async function TermPage({ params }: { params: Promise<Params> }) {
  const { term: slug } = await params;
  const term = termBySlug(slug);
  if (!term) notFound();

  const index = TERMS.findIndex((item) => item.slug === term.slug);
  const previous = index > 0 ? TERMS[index - 1] : undefined;
  const next = index < TERMS.length - 1 ? TERMS[index + 1] : undefined;

  return (
    <>
      <PageHeader
        title={`EAZ Leadership ${term.label}`}
        parents={[
          { label: "About Us", href: "/about-us" },
          { label: "History", href: "/about-us/history" },
        ]}
        lead={term.theme}
      />

      {/* ── Organogram ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow={term.status === "Current" ? "Current term" : `${term.status} term`}
            title="National Executive Committee"
            note={term.summary}
          />
          <Organogram leaders={term.leaders} label={term.label} />

          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-muted">
            Seats shown as &ldquo;To be confirmed&rdquo; are awaiting the Secretariat&rsquo;s
            confirmed record for this term.
          </p>
        </div>
      </section>

      {/* ── Accomplishments ── */}
      <section className="waves-bg relative isolate overflow-hidden py-16 lg:py-20">
        <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

        <div className="container-page relative">
          <SectionHeading
            title="Accomplishments"
            note={`What the ${term.label} National Executive Committee delivered for the Association and its members.`}
          />

          {term.accomplishments.length ? (
            <ol className="mt-10 grid gap-5 md:grid-cols-2">
              {term.accomplishments.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center bg-brand text-[15px] font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[17px] leading-[1.7] text-[#4b4f58]">{item}</p>
                </li>
              ))}
            </ol>
          ) : (
            <div className="mt-10 max-w-[760px] border-2 border-brand-bright bg-white p-8">
              <div className="flex items-start gap-5">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-1 h-9 w-9 shrink-0 text-brand-bright"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M9 11l2 2 4-4" />
                  <path d="M20 12a8 8 0 1 1-3.1-6.3" />
                  <path d="M20 4v5h-5" />
                </svg>
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand">
                    Being compiled
                  </p>
                  <p className="mt-2 text-[21px] font-bold leading-snug text-ink">
                    The record for this term is being compiled
                  </p>
                  <p className="mt-3 text-[17px] leading-[1.75] text-[#5c6b77]">
                    The Secretariat is assembling the {term.label} achievements. They will be
                    published here in full once confirmed, alongside the leadership team shown above.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Term navigation ── */}
      <section className="border-t border-[#e8ebe8] bg-white py-12">
        <div className="container-page flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {previous ? (
              <Link
                href={`/about-us/history/${previous.slug}`}
                className="text-[16px] font-bold text-brand hover:text-brand-dark"
              >
                <span aria-hidden>← </span>Previous term: {previous.label}
              </Link>
            ) : null}
            {next ? (
              <Link
                href={`/about-us/history/${next.slug}`}
                className="text-[16px] font-bold text-brand hover:text-brand-dark"
              >
                Next term: {next.label} <span aria-hidden>→</span>
              </Link>
            ) : null}
          </div>
          <ArrowWedgeButton href="/about-us/history">All terms</ArrowWedgeButton>
        </div>
      </section>
    </>
  );
}
