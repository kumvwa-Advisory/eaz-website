import Link from "next/link";
import { ArrowWedgeButton } from "@/components/site/button-wedge";

const LINKS = [
  { label: "About us", href: "/about-us" },
  { label: "Membership", href: "/membership" },
  { label: "Conferences", href: "/conferences" },
  { label: "News", href: "/news" },
  { label: "Articles", href: "/articles" },
  { label: "Notices", href: "/notices" },
  { label: "Contact us", href: "/contact-us" },
];

/** Lost-page illustration: a torn report with a broken trend line, under a magnifier. */
function LostPageArt() {
  return (
    <svg
      viewBox="0 0 520 400"
      className="h-auto w-full max-w-[520px]"
      role="img"
      aria-label="Illustration of a report page with a broken chart line under a magnifying glass"
    >
      {/* Backdrop */}
      <circle cx="250" cy="196" r="164" fill="#f2f8ee" />
      <circle
        cx="250"
        cy="196"
        r="120"
        fill="none"
        stroke="#d7e8cd"
        strokeWidth="2"
        strokeDasharray="6 10"
      />

      {/* Document */}
      <path
        d="M140 62h150l78 78v196a10 10 0 0 1-10 10H140a10 10 0 0 1-10-10V72a10 10 0 0 1 10-10Z"
        fill="#ffffff"
        stroke="#c9dcc2"
        strokeWidth="3"
      />
      <path d="M290 62v68a10 10 0 0 0 10 10h68" fill="#f2f8ee" stroke="#c9dcc2" strokeWidth="3" />
      <rect x="164" y="104" width="120" height="10" rx="5" fill="#e0efd7" />
      <rect x="164" y="126" width="86" height="10" rx="5" fill="#edf4e8" />

      {/* Chart panel with a break in the trend */}
      <rect
        x="164"
        y="160"
        width="192"
        height="130"
        rx="4"
        fill="#fbfdf9"
        stroke="#e8ebe8"
        strokeWidth="2"
      />
      <path
        d="M182 268l38-34 34 20 30-46"
        fill="none"
        stroke="#198900"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M292 196l26 22 22-30"
        fill="none"
        stroke="#b9c7b3"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="8 9"
      />
      <circle cx="284" cy="208" r="7" fill="#ffffff" stroke="#198900" strokeWidth="4" />
      <path d="M170 280h18" stroke="#dfe6da" strokeWidth="3" strokeLinecap="round" />

      {/* Magnifier */}
      <circle cx="372" cy="292" r="56" fill="#ffffff" fillOpacity="0.65" stroke="#198900" strokeWidth="9" />
      <circle
        cx="372"
        cy="292"
        r="56"
        fill="none"
        stroke="#61ce70"
        strokeWidth="3"
        strokeDasharray="10 12"
      />
      <line
        x1="412"
        y1="332"
        x2="456"
        y2="376"
        stroke="#198900"
        strokeWidth="14"
        strokeLinecap="round"
      />

      {/* Accents */}
      <circle cx="90" cy="120" r="6" fill="#61ce70" />
      <circle cx="444" cy="100" r="8" fill="#e0efd7" />
      <circle cx="466" cy="176" r="5" fill="#198900" fillOpacity="0.35" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <section className="waves-bg relative isolate overflow-hidden py-16 lg:py-24">
      <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 flex justify-center lg:order-1">
          <LostPageArt />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[14px] font-bold uppercase tracking-[0.14em] text-brand">Error 404</p>
          <h1 className="mt-3 text-[36px] font-bold leading-[1.15] text-[#0f3d25] lg:text-[46px]">
            This page has left the ledger
          </h1>
          <div className="mt-5 h-[3px] w-56 bg-gradient-to-r from-brand to-brand-bright" />
          <p className="mt-5 max-w-lg text-[18px] leading-[1.8] text-[#5c6b77]">
            The address may have changed, or the page has been retired. Head back to the homepage,
            or pick up one of the sections below.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ArrowWedgeButton href="/">Back to home</ArrowWedgeButton>
            <Link
              href="/contact-us"
              className="border border-[#0f3d25] px-6 py-3.5 text-[16px] font-bold text-[#0f3d25] transition-colors hover:bg-[#0f3d25] hover:text-white"
            >
              Contact us
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center border border-brand-bright px-4 py-2 text-[15px] font-bold text-[#0f3d25] transition-colors hover:bg-brand hover:border-brand hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
