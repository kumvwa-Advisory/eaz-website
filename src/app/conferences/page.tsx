import { PageHeader } from "@/components/site/page-header";
import { CARD, CardHeading, GREEN_BAR, SectionHeading } from "@/components/site/section-heading";
import { EVENTS } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conferences",
  description:
    "Conferences and summits of the Economics Association of Zambia, including the National Economic Summit and the Annual General Meeting.",
};

const AGM_NOTICES = [
  {
    label: "Notice of the 2026 Annual General Meeting",
    href: "/notices/notice-2026-agm",
    date: "2 July 2026",
  },
  {
    label: "Call for nominations — 2026 Elective Extra-Ordinary General Meeting",
    href: "/notices/2026-egm-call-for-nominations",
    date: "27 July 2026",
  },
  {
    label: "2026 Nomination Application Form",
    href: "/notices/2026-nomination-application-form",
    date: "1 August 2026",
  },
];

export default function ConferencesPage() {
  return (
    <>
      <PageHeader
        title="Conferences"
        lead="The Association's conferences and summits, with dates, venues and the officer to contact for each."
      />

      {/* ── Conferences & Summits — wavy watermark background ── */}
      <section className="waves-bg relative isolate overflow-hidden py-16 lg:py-20">
        <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

        <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">

          <div>
            <SectionHeading title="Conferences & Summits" />

            {/* Event cards */}
            <ul className="flex flex-col gap-8">
              {EVENTS.map((event) => (
                <li key={event.title} className={`${CARD} flex flex-col overflow-hidden`}>
                  <div className="grid flex-1 sm:grid-cols-[1fr_220px]">
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-3">
                        <span className="bg-brand px-2 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                          {event.status}
                        </span>
                        <span className="tabular text-[14px] font-medium text-[#5c6b77]">{event.date}</span>
                      </div>
                      <h3 className="mt-4 text-[21px] font-bold leading-snug text-ink">
                        {event.title}
                      </h3>
                      <p className="mt-2.5 text-[16px] leading-[1.65] text-[#5c6b77]">
                        {event.summary}
                      </p>

                      <dl className="mt-5 grid gap-x-8 gap-y-4 border-t border-[#e8ebe8] pt-5 sm:grid-cols-2">
                        {[
                          { dt: "Dates", dd: event.dates, tabular: false },
                          { dt: "Venue", dd: event.venue, tabular: false },
                          { dt: "Contact person", dd: event.contact, tabular: false },
                          { dt: "Contact phone", dd: event.contactPhone, tabular: true },
                        ].map((field) => (
                          <div key={field.dt}>
                            <dt className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#5c6b77]">{field.dt}</dt>
                            <dd className={`mt-0.5 text-[16px] font-medium text-ink ${field.tabular ? "tabular" : ""}`}>{field.dd}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="relative hidden sm:block">
                      <Image
                        src={event.image}
                        alt={event.imageAlt}
                        fill
                        sizes="220px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={GREEN_BAR} />
                </li>
              ))}
            </ul>

            {/* General meetings */}
            <div className="mt-14">
              <SectionHeading title="General Meetings" />
              <p className="max-w-2xl text-[16px] leading-[1.75] text-[#5c6b77]">
                The Annual General Meeting and any Extra-Ordinary General Meeting are convened by
                notice to members. The notices for 2026 are published in full, together with the
                nomination documents, in the notices section.
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {AGM_NOTICES.map((item) => (
                  <li key={item.href} className={`${CARD} group flex gap-5 p-5 transition duration-300 hover:shadow-[0_10px_28px_-12px_rgba(0,0,0,0.2)]`}>
                    <time className="tabular shrink-0 text-[14px] font-bold text-brand">
                      {item.date}
                    </time>
                    <Link
                      href={item.href}
                      className="text-[17px] font-bold leading-snug text-ink transition-colors hover:text-brand"
                    >
                      {item.label}
                    </Link>
                    <span aria-hidden className="ml-auto shrink-0 self-center text-[#c9c9c9] transition-colors group-hover:text-brand">→</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">

            {/* Brown bag */}
            <div className={CARD}>
              <div className="p-6">
                <CardHeading eyebrow="Virtual sessions" title="Brown Bag Discussions" />
                <p className="mt-4 text-[16px] leading-[1.65] text-[#5c6b77]">
                  The Association convenes regular brown bag meetings, held virtually, on national
                  economic questions. Reports from past sessions are published as articles.
                </p>
                <Link href="/articles" className="mt-4 inline-flex items-center gap-1.5 text-[16px] font-bold text-brand hover:text-brand-dark">
                  Read articles <span aria-hidden>→</span>
                </Link>
              </div>
              <div className={GREEN_BAR} />
            </div>

            {/* Media */}
            <div className={CARD}>
              <div className="p-6">
                <CardHeading eyebrow="Press" title="Media" />
                <p className="mt-4 text-[16px] leading-[1.65] text-[#5c6b77]">
                  Media representatives wishing to cover a conference should write to the Secretariat
                  in advance for accreditation.
                </p>
                <Link href="/contact-us" className="mt-4 inline-flex items-center gap-1.5 text-[16px] font-bold text-brand hover:text-brand-dark">
                  Contact us <span aria-hidden>→</span>
                </Link>
              </div>
              <div className={GREEN_BAR} />
            </div>

          </aside>
        </div>
      </section>
    </>
  );
}
