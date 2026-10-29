import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowWedgeButton } from "@/components/site/button-wedge";
import { SectionHeading } from "@/components/site/section-heading";
import { RESOURCES, type Resource } from "@/data/resources";
import { ORG } from "@/data/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Download notices, nomination forms, newsletters, papers and other documents published by the Economics Association of Zambia.",
};

function DownloadIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3.5v11M7.5 10 12 14.5 16.5 10" />
      <path d="M4.5 19.5h15" />
    </svg>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="group flex flex-col bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
      <div className="h-[6px] w-full bg-gradient-to-r from-brand to-brand-bright" />

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand">
            {resource.group}
          </p>
          <span className="grid h-12 w-10 shrink-0 place-items-center border border-[#dfe5da] bg-white text-[#0f3d25]">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M7 3h7l5 5v13H7z" />
              <path d="M14 3v5h5" />
              <path d="M10.5 13h5M10.5 16.5h5" />
            </svg>
          </span>
        </div>

        <h3 className="mt-3 text-[21px] font-bold leading-snug text-ink lg:text-[23px]">
          {resource.title}
        </h3>
        <p className="mt-3 flex-1 text-[17px] leading-[1.65] text-[#5c6b77]">
          {resource.description}
        </p>

        <p className="mt-5 text-[14px] font-medium text-muted">
          {resource.date} &middot; {resource.meta}
        </p>

        <a
          href={resource.file}
          download
          className="mt-5 inline-flex w-fit items-stretch overflow-hidden text-[16px] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
        >
          <span className="flex items-center gap-2 bg-brand px-5 py-2.5 text-white transition-colors hover:bg-brand-dark">
            <DownloadIcon />
            Download PDF
          </span>
          <span
            aria-hidden
            className="flex w-[46px] items-center justify-center bg-brand-bright text-brand-dark"
            style={{ clipPath: "polygon(32% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <DownloadIcon className="h-4 w-4 translate-x-1" />
          </span>
        </a>
      </div>

      <div className="h-[6px] w-full bg-gradient-to-r from-brand to-brand-bright" />
    </article>
  );
}

export default function ResourcesPage() {
  return (
    <>
      {/* ── Hero band — photo behind the title, like the home page ── */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/boardroom.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f3d25]/85" />

        <div className="container-page relative py-20 lg:py-28">
          <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-brand-bright">
            Resources
          </p>
          <h1 className="mt-3 max-w-[860px] text-[40px] font-bold leading-[1.1] text-white lg:text-[58px]">
            Download the Association&rsquo;s documents
          </h1>
          <div className="mt-5 h-[3px] w-56 bg-gradient-to-r from-brand to-brand-bright" />
          <p className="mt-6 max-w-[720px] text-[18px] leading-[1.8] text-white/85 lg:text-[20px]">
            General meeting notices, nomination forms, newsletters and economic papers — all in one
            place, free to download.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#documents"
              className="group inline-flex w-fit items-stretch overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
            >
              <span className="flex items-center bg-brand px-6 py-3.5 text-[16px] font-bold text-white transition-colors group-hover:bg-brand-dark">
                Browse documents
              </span>
              <span
                aria-hidden
                className="relative flex w-[72px] items-center justify-center bg-brand-bright transition-colors group-hover:bg-brand"
                style={{ clipPath: "polygon(32% 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                <svg viewBox="0 0 12 14" className="h-3.5 w-3" fill="currentColor" aria-hidden>
                  <path d="M2 1l9 6-9 6z" />
                </svg>
              </span>
            </Link>
            <p className="text-[16px] font-medium text-white/75">
              {RESOURCES.length} documents &middot; PDF format
            </p>
          </div>
        </div>
      </section>

      {/* ── Document library ── */}
      <section id="documents" className="scroll-mt-32 bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            title="Document library"
            note="Every document below is published as a PDF. Where a document accompanies a notice or article, the same file is attached to that page as well."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource) => (
              <ResourceCard key={resource.file} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How to use the library — wave texture + green-bordered checklist ── */}
      <section className="waves-bg relative isolate overflow-hidden py-16 lg:py-24">
        <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

        <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-[34px] font-bold leading-[1.15] text-[#0f3d25] lg:text-[42px]">
              Working with our documents
            </h2>
            <div className="mt-4 h-[3px] w-56 bg-gradient-to-r from-brand to-brand-bright" />
            <p className="mt-6 max-w-[580px] text-[17px] leading-[1.8] text-[#5c6b77] lg:text-[18px]">
              Forms and notices are the official record of the Association&rsquo;s governance. Before
              you submit anything, check that you are working from the current version on this page.
            </p>
            <div className="mt-8">
              <ArrowWedgeButton href="/contact-us">Ask the Secretariat</ArrowWedgeButton>
            </div>
          </div>

          <div className="rounded-[2px] border-2 border-brand-bright bg-white p-8">
            <ul className="space-y-6">
              {[
                { bold: "Download and keep the file", rest: " — links open the PDF published with the related notice." },
                { bold: "Complete forms in full", rest: " and attach the documents each notice requires." },
                { bold: "Meet the stated deadline", rest: " — late submissions may not be considered." },
                { bold: "Confirm before you send", rest: " by calling the Secretariat on " + ORG.phone + "." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-3.5 w-3.5 shrink-0 border-2 border-brand-bright" aria-hidden />
                  <p className="text-[18px] leading-[1.6] text-[#4b4f58]">
                    <strong className="font-bold text-[#0f3d25]">{item.bold}</strong>
                    {item.rest}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="bg-gradient-to-br from-brand to-[#2db800] py-14 lg:py-16">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[30px] font-bold leading-tight text-white lg:text-[38px]">
              Looking for another document?
            </h2>
            <p className="mt-3 max-w-[640px] text-[18px] leading-[1.7] text-white/85">
              Older circulars, summit reports and research publications can be requested from the
              Secretariat, who will send them to you directly.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href={`mailto:${ORG.email}`}
              className="inline-flex items-center gap-2 bg-white px-7 py-3.5 text-[16px] font-bold text-brand-dark transition-colors hover:bg-brand-tint"
            >
              <DownloadIcon className="h-4 w-4" />
              {ORG.email}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
