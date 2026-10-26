"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/summit-2025-keynote.jpg",
    alt: "EAZ National Economic Summit 2025",
    title: "Become the Economics Expert Employers Want",
    detail:
      "When economic policy is under pressure, employers trust EAZ-certified professionals to navigate uncertainty and lead with confidence.",
    cta: "Explore EAZ Membership",
    href: "/membership",
  },
  {
    src: "/images/media-briefing.jpg",
    alt: "EAZ media briefing on national economic affairs",
    title: "Advancing Economic Research & Policy Dialogue",
    detail:
      "The Economics Association of Zambia brings together economists and allied professionals to shape Zambia's economic future.",
    cta: "Learn More About Us",
    href: "/about-us",
  },
  {
    src: "/images/boardroom.jpg",
    alt: "EAZ National Economic Summit 2024",
    title: "EAZ National Economic Summit",
    detail:
      "Two days of presentations and panel discussions bringing together policymakers, private sector and development partners.",
    cta: "View Conferences",
    href: "/conferences",
  },
  {
    src: "/images/members-meeting.webp",
    alt: "EAZ members meeting",
    title: "Join a Network of Zambia's Leading Economists",
    detail:
      "Connect with professionals in economics, finance, business administration and allied fields across Zambia and beyond.",
    cta: "Join EAZ Today",
    href: "/members/register",
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 7000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setActive((a) => (a - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setActive((a) => (a + 1) % SLIDES.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="EAZ highlights"
      className="relative isolate h-[480px] w-full overflow-hidden sm:h-[520px] lg:h-[560px]"
    >
      {SLIDES.map((s, i) => {
        const isActive = i === active;
        return (
          <div
            key={s.src}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none", zIndex: isActive ? 1 : 0 }}
            aria-hidden={!isActive}
          >
            <Image src={s.src} alt={s.alt} fill priority={i === 0} sizes="100vw" className="object-cover" />
            {/* Dark gradient overlay on left */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            <div className="absolute bottom-14 left-0 right-0 px-6 sm:px-10 lg:px-16 xl:px-24">
              <div className="max-w-[620px]">
                <h2 className="text-[32px] font-bold leading-[1.15] text-white sm:text-[44px] lg:text-[54px]">
                  {s.title}
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-white/90 sm:text-[19px]">
                  {s.detail}
                </p>
                <div className="mt-6">
                  {/* ASCM-style angled button */}
                  <Link
                    href={s.href}
                    className="group relative inline-flex items-center gap-0 overflow-hidden border border-white text-white"
                  >
                    <span className="px-6 py-3.5 text-[15px] font-bold uppercase tracking-[0.06em] transition-colors group-hover:bg-white group-hover:text-brand-deep">
                      {s.cta}
                    </span>
                    <span className="flex h-full items-center bg-brand px-3 py-3 transition-colors group-hover:bg-brand-dark">
                      <svg viewBox="0 0 10 14" className="h-3.5 w-2.5" fill="currentColor" aria-hidden>
                        <path d="M1 1l7 6-7 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Arrows */}
      <button type="button" onClick={prev} aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 grid h-10 w-10 place-items-center bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-brand">
        &#8249;
      </button>
      <button type="button" onClick={next} aria-label="Next slide"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 grid h-10 w-10 place-items-center bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-brand">
        &#8250;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-6 z-30 flex items-center gap-2">
        {SLIDES.map((s, d) => (
          <button key={s.src} type="button" onClick={() => setActive(d)} aria-label={`Go to slide ${d + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${d === active ? "w-8 bg-brand" : "w-2 bg-white/50 hover:bg-white/80"}`} />
        ))}
      </div>
    </section>
  );
}
