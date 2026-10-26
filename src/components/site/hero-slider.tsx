"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/summit-2025-keynote.jpg",
    alt: "EAZ National Economic Summit 2025",
    title: "EAZ National Economic Summit 2025",
    detail: "Bringing together policymakers, private sector and development partners.",
    href: "/conferences",
  },
  {
    src: "/images/media-briefing.jpg",
    alt: "EAZ media briefing on national economic affairs",
    title: "Media Briefing on National Economic Affairs",
    detail: "An open briefing on Zambia's economic landscape, challenges and opportunities.",
    href: "/news/media-briefing-national-economic-affairs",
  },
  {
    src: "/images/boardroom.jpg",
    alt: "EAZ National Economic Summit 2024",
    title: "EAZ National Economic Summit 2024",
    detail: "Two days of presentations and panel discussions at Ciêla Resort, Lusaka.",
    href: "/conferences",
  },
  {
    src: "/images/members-meeting.webp",
    alt: "EAZ members meeting",
    title: "EAZ Members Meeting",
    detail: "Networking, dialogue and professional development for EAZ members.",
    href: "/membership",
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
    <div className="bg-white px-4 py-4">
      <section
        aria-roledescription="carousel"
        aria-label="EAZ highlights"
        className="relative isolate mx-auto h-[440px] max-w-[1320px] overflow-hidden rounded-[6px] sm:h-[420px] lg:h-[430px]"
      >
        {SLIDES.map((s, i) => {
          const isActive = i === active;

          return (
            <div
              key={s.src}
              className="absolute inset-0 transition-opacity duration-700 ease-out"
              style={{
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? "auto" : "none",
                zIndex: isActive ? 1 : 0,
              }}
              aria-hidden={!isActive}
            >
              {/* Full image — no overlay */}
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />

              {/* Text sits bottom-left, bg only behind the text */}
              <div className="absolute bottom-10 left-8 z-20 max-w-[480px]">
                <h2 className="inline bg-[#198900] px-2 py-1 text-[20px] font-bold leading-[1.5] text-white box-decoration-clone sm:text-[22px] lg:text-[26px]">
                  {s.title}
                </h2>
                <p className="mt-2 inline-block bg-[rgba(25,137,0,0.85)] px-2 py-1 text-[13px] leading-relaxed text-white/90">
                  {s.detail}
                </p>
                <div className="mt-3">
                  <Link
                    href={s.href}
                    className="inline-block bg-white px-4 py-2 text-[13px] font-semibold text-brand-ink transition-colors hover:bg-gold-bright"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-30 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/30 text-[20px] text-white backdrop-blur-sm transition-colors hover:bg-gold-bright hover:text-brand-ink"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-30 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/30 text-[20px] text-white backdrop-blur-sm transition-colors hover:bg-gold-bright hover:text-brand-ink"
        >
          &#8250;
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 right-6 z-30 flex items-center gap-1.5">
          {SLIDES.map((s, d) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(d)}
              aria-label={`Go to slide ${d + 1}`}
              aria-current={d === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                d === active ? "w-8 bg-gold-bright" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
