import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { EVENTS } from "@/data/content";
import { ORG } from "@/data/site";

export const metadata: Metadata = {
  title: "Conferences",
  description:
    "Conferences and summits of the Economics Association of Zambia, including the National Economic Summit and the Annual General Meeting.",
};

const RULE = "border-[#eaeaea]";
const CHIP =
  "inline-flex items-center gap-1.5 rounded-[5px] border border-[#cad4e5] bg-white px-3.5 py-1.5 text-[13px] font-bold text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white";

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

      {/* ── Conferences & Summits ── */}
      <section className="bg-white py-14 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-12">

          <div>
            {/* Section head */}
            <div className={`mb-8 flex flex-wrap items-end justify-between gap-4 border-b pb-4 ${RULE}`}>
              <div>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                  Events
                </p>
                <div className="mt-2 h-[3px] w-8 bg-brand" />
                <h2 className="mt-4 text-[26px] font-semibold leading-[1.2] text-ink sm:text-[28.8px]">
                  Conferences &amp; Summits
                </h2>
              </div>
            </div>

            {/* Event cards */}
            <ul className="space-y-6">
              {EVENTS.map((event) => (
                <li key={event.title} className={`rounded-[6px] border ${RULE} bg-white overflow-hidden`}>
                  <div className="grid sm:grid-cols-[1fr_220px]">
                    <div className="p-6">
                      <div className="flex items-center gap-2">
                        <span className="inline-block rounded-[3px] bg-gold-bright px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-ink">
                          {event.status}
                        </span>
                        <span className="tabular text-[12px] text-[#6c757d]">{event.date}</span>
                      </div>
                      <h3 className="mt-3 text-[19px] font-bold leading-snug text-ink">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-[#6c757d]">
                        {event.summary}
                      </p>

                      <dl className={`mt-4 grid gap-x-6 gap-y-3 border-t pt-4 text-[13.5px] sm:grid-cols-2 ${RULE}`}>
                        <div>
                          <dt className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#6c757d]">Dates</dt>
                          <dd className="mt-0.5 font-medium text-ink">{event.dates}</dd>
                        </div>
                        <div>
                          <dt className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#6c757d]">Venue</dt>
                          <dd className="mt-0.5 font-medium text-ink">{event.venue}</dd>
                        </div>
                        <div>
                          <dt className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#6c757d]">Contact person</dt>
                          <dd className="mt-0.5 font-medium text-ink">{event.contact}</dd>
                        </div>
                        <div>
                          <dt className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#6c757d]">Contact phone</dt>
                          <dd className="tabular mt-0.5 font-medium text-ink">{event.contactPhone}</dd>
                        </div>
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
                </li>
              ))}
            </ul>

            {/* General meetings */}
            <div className={`mt-10 border-b pb-4 ${RULE}`}>
              <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                Governance
              </p>
              <div className="mt-2 h-[3px] w-8 bg-brand" />
              <h2 className="mt-4 text-[26px] font-semibold leading-[1.2] text-ink sm:text-[28.8px]">
                General Meetings
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6c757d]">
              The Annual General Meeting and any Extra-Ordinary General Meeting are convened by
              notice to members. The notices for 2026 are published in full, together with the
              nomination documents, in the notices section.
            </p>
            <ul className="mt-5 space-y-3">
              {AGM_NOTICES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex gap-5 rounded-[6px] border border-[#eaeaea] bg-white p-4 transition duration-300 hover:border-brand/30 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]"
                  >
                    <time className="tabular mt-0.5 shrink-0 text-[12px] font-semibold text-gold-ink">
                      {item.date}
                    </time>
                    <span className="text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                      {item.label}
                    </span>
                    <span aria-hidden className="ml-auto shrink-0 text-[#ccc] transition-colors group-hover:text-brand">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">

      

            {/* Brown bag */}
            <div className={`rounded-[6px] border ${RULE} bg-white p-5`}>
              <div className={`border-b pb-3 ${RULE}`}>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                  Virtual sessions
                </p>
                <h2 className="mt-1 text-[18px] font-semibold text-ink">Brown Bag Discussions</h2>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-[#6c757d]">
                The Association convenes regular brown bag meetings, held virtually, on national
                economic questions. Reports from past sessions are published as articles.
              </p>
              <Link href="/articles" className={`mt-4 ${CHIP}`}>
                Read articles <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Media */}
            <div className={`rounded-[6px] border ${RULE} bg-white p-5`}>
              <div className={`border-b pb-3 ${RULE}`}>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                  Press
                </p>
                <h2 className="mt-1 text-[18px] font-semibold text-ink">Media</h2>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-[#6c757d]">
                Media representatives wishing to cover a conference should write to the Secretariat
                in advance for accreditation.
              </p>
              <Link href="/contact-us" className={`mt-4 ${CHIP}`}>
                Contact us <span aria-hidden>→</span>
              </Link>
            </div>

          </aside>
        </div>
      </section>
    </>
  );
}
