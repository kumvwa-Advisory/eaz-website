"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { POSTS, type Post } from "@/data/content";
import { HeroSlider } from "@/components/site/hero-slider";
import { HistorySection } from "@/components/site/history-section";

/* ── Partners (EAZ equivalent of "Who We Work With") ── */
const PARTNERS = [
  { name: "Zambia Development Agency", abbr: "ZDA", color: "#0f3d25", logo: "/partners/zda.png" },
  { name: "Solar Panda", abbr: "Solar Panda", color: "#0f3d25", logo: "/partners/solorpanda.png" },
  { name: "Bank of Zambia", abbr: "BOZ", color: "#8a1538", logo: "/partners/boz.png" },
  { name: "Zambia Revenue Authority", abbr: "ZRA", color: "#b31b1b", logo: "/partners/zra.png" },
  { name: "Zanaco", abbr: "Zanaco", color: "#0f3d25", logo: "/partners/zanaco.png" },
];

/* ── What We Do cards ── */
const WHAT_WE_DO = [
  {
    title: "Research & Publications",
    blurb: "Access evidence-based economic research and policy papers",
    image: "/images/imf-paper.jpg",
    href: "/articles",
  },
  {
    title: "National Economic Summit",
    blurb: "Annual summit uniting policymakers, private sector and academia",
    image: "/images/summit-2024.jpg",
    href: "/conferences",
  },
  {
    title: "Professional Membership",
    blurb: "Join a network of economists and allied professionals in Zambia",
    image: "/images/members-meeting.webp",
    href: "/membership",
  },
  {
    title: "Policy Dialogue",
    blurb: "Shaping Zambia's economic policy through expert engagement",
    image: "/images/boardroom.jpg",
    href: "/about-us",
  },
];

/* ── Testimonials ── */
const TESTIMONIALS = [
  {
    quote:
      "Being part of EAZ has opened doors to networks and opportunities I never imagined. The Association truly champions economic professionalism in Zambia.",
    name: "Dr. Oswald Mungule",
    title: "President, Economics Association of Zambia",
  },
  {
    quote:
      "EAZ's brown bag discussions and national summits have been invaluable for staying current with economic policy developments in Zambia.",
    name: "Mbanji Milambo",
    title: "Vice President, Economics Association of Zambia",
  },
  {
    quote:
      "The Association provides a credible platform for economists to contribute meaningfully to national development through research and policy advocacy.",
    name: "Dr. Chabuka Kawesha",
    title: "Board Chairperson, Economics Association of Zambia",
  },
];

function InsightsCarousel({ posts }: { posts: Post[] }) {
  const [offset, setOffset] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisibleCount(w < 640 ? 1 : w < 1024 ? 2 : 4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const max = Math.max(0, posts.length - visibleCount);
  const safeOffset = Math.min(offset, max);

  return (
    <div>
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] text-ink sm:text-[34px] lg:text-[38px]">
            Latest Insights
          </h2>
          <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#5c6b77]">
            Stay informed with the latest reports, expert articles, events and economic news.
          </p>
        </div>
        <div className="flex shrink-0 gap-2 pt-1">
          <button type="button" onClick={() => setOffset((o) => Math.max(0, o - 1))} disabled={safeOffset === 0}
            className="grid h-10 w-10 place-items-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-white disabled:opacity-30">
            &#8249;
          </button>
          <button type="button" onClick={() => setOffset((o) => Math.min(max, o + 1))} disabled={safeOffset >= max}
            className="grid h-10 w-10 place-items-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-white disabled:opacity-30">
            &#8250;
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {posts.slice(safeOffset, safeOffset + visibleCount).map((post) => (
          <Link key={post.slug}
            href={post.type === "article" ? `/articles/${post.slug}` : post.type === "news" ? `/news/${post.slug}` : `/notices/${post.slug}`}
            className="group flex flex-col">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#e8e8e8]">
              {post.image ? (
                <Image src={post.image} alt={post.imageAlt ?? ""} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="h-full w-full bg-brand-soft" />
              )}
            </div>
            <p className="mt-3 text-[16px] font-bold leading-snug text-brand transition-colors group-hover:text-brand-dark">
              {post.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const insights = POSTS.filter((p) => p.type !== "notice").slice(0, 8);
  const t = TESTIMONIALS[testimonialIdx];

  return (
    <>
      {/* ── Hero ── */}
      <HeroSlider />

      {/* ── Who We Are — arrow watermark + green-bordered checklist box ── */}
      <section className="relative isolate overflow-hidden bg-white py-20 lg:py-24">
        {/* Faint block-arrow watermark, matching the reference UI */}
        <div aria-hidden
          className="pointer-events-none absolute -top-10 left-[4%] hidden h-[460px] w-[92%] bg-[#f3f5f4] lg:block"
          style={{ clipPath: "polygon(0 30%, 58% 30%, 58% 6%, 100% 50%, 58% 94%, 58% 70%, 0 70%)", opacity: 0.55 }} />

        <div className="container-page relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left: text */}
            <div>
              <h2 className="text-[38px] font-bold leading-[1.12] text-[#0f3d25] lg:text-[46px]">
                Who We Are
              </h2>
              <p className="mt-6 max-w-[560px] text-[19px] leading-[1.85] text-[#4b4f58] lg:text-[20px]">
                With over{" "}
                <strong className="bg-brand px-2 py-0.5 font-bold text-white">
                  60 years of economic leadership
                </strong>
                , we transform individuals and organisations with economic solutions endorsed by
                industry experts, policymakers and global development partners to{" "}
                <strong className="font-bold text-[#0f3d25]">
                  create a better Zambia through economics.
                </strong>
              </p>
              <div className="mt-8">
                <Link href="/about-us"
                  className="inline-flex items-center gap-2 text-[18px] font-bold text-brand transition-colors hover:text-brand-dark">
                  Learn More About Us <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Right: green-bordered checklist box */}
            <div className="rounded-[2px] border-2 border-brand-bright bg-white p-8 lg:p-10">
              <ul className="space-y-6">
                {[
                  { bold: "Established in the 1960s", rest: " as the Lusaka Economics Club" },
                  { bold: "Registered under the Societies Act", rest: ", Cap. 105, in 1985" },
                  { bold: "Partnerships with government, academia", rest: " and leading organisations" },
                  { bold: "Members across Zambia", rest: " in economics, finance and allied fields" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-3.5 w-3.5 shrink-0 border-2 border-brand-bright" aria-hidden />
                    <p className="text-[18px] leading-[1.6] text-[#4b4f58] lg:text-[19px]">
                      <strong className="font-bold text-[#0f3d25]">{item.bold}</strong>
                      {item.rest}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Work With — borderless moving logo carousel ── */}
      <section className="waves-bg relative isolate overflow-hidden py-16 lg:py-20">
        {/* Faint, well-spaced repeated EAZ watermark */}
        <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

        <div className="relative text-center">
          <h2 className="text-[34px] font-bold leading-tight text-[#0f3d25] lg:text-[42px]">
            Corporate Members
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-[min(520px,78%)] bg-gradient-to-r from-brand via-[#3f9d5a] to-brand-bright" />
        </div>

        <div className="marquee-wrap mt-12">
          <div className="marquee-track items-center">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={`${p.abbr}-${i}`} className="mx-8 flex h-[104px] w-[210px] shrink-0 items-center justify-center lg:mx-10">
                {p.logo ? (
                  <Image src={p.logo} alt={p.name} width={190} height={76}
                    className="h-auto w-[170px] object-contain" />
                ) : (
                  <span
                    className="text-[30px] font-black tracking-tight lg:text-[34px]"
                    style={{ color: p.color ?? "#0f3d25" }}
                    aria-hidden
                  >
                    {p.abbr}
                  </span>
                )}
                <span className="sr-only">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── History of EAZ — term cards linking to organogram detail pages ── */}
      <HistorySection />

      {/* ── What We Do — big bg image behind the card strip ── */}
      <section className="relative bg-white pt-16 pb-12 lg:pt-24 lg:pb-16">
        {/* Desktop: image pinned to the right, spanning the text and card rows */}
        <div className="pointer-events-none absolute right-0 top-[110px] bottom-0 hidden w-[38vw] lg:block" aria-hidden>
          <Image src="/images/summit-2025-keynote.jpg" alt="" fill sizes="40vw" className="object-cover" />
        </div>

        <div className="container-page relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-[38px] font-bold leading-[1.12] text-[#0f3d25] lg:text-[46px]">
                What We Do
              </h2>
              <div className="mt-4 h-[3px] w-56 bg-gradient-to-r from-brand to-brand-bright" />
              <p className="mt-6 text-[21px] font-normal leading-snug text-[#3f9d5a] lg:text-[23px]">
                The right knowledge makes all the difference.
              </p>
              <p className="mt-4 max-w-[580px] text-[17px] leading-[1.8] text-[#5c6b77] lg:text-[18px]">
                As the leading professional association for economists in Zambia, EAZ empowers
                individuals and organisations with our{" "}
                <strong className="font-bold text-ink">research and publications</strong>,
                world-class{" "}
                <strong className="font-bold text-ink">national economic summits</strong>, and
                innovative{" "}
                <strong className="font-bold text-ink">policy dialogue solutions</strong> to drive
                efficiency, resilience and sustainable growth.
              </p>
            </div>
            {/* Mobile/tablet: show the image in flow (desktop has it as the bg band) */}
            <div className="relative aspect-[16/9] self-start lg:hidden">
              <Image src="/images/summit-2025-keynote.jpg" alt="EAZ National Economic Summit" fill
                sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>          {/* 4-image cards strip, floating over the right bg image */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {WHAT_WE_DO.map((card, i) => (
              <Link key={card.title} href={card.href}
                className={`group flex flex-col bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] ${
                  i === 1 ? "ring-2 ring-brand" : "ring-1 ring-black/5"
                }`}>
                {/* Photo with title overlaid at the top */}
                <div className="relative h-[230px] lg:h-[255px]">
                  <Image src={card.image} alt={card.title} fill sizes="25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
                  <h3 className="absolute left-5 right-5 top-5 text-[21px] font-bold leading-snug text-white lg:text-[23px]">
                    {card.title}
                  </h3>
                </div>
                {/* White body with description */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <p className={`text-[17px] leading-[1.6] ${i === 1 ? "text-brand" : "text-[#5c6b77]"}`}>
                    {card.blurb}
                  </p>
                </div>
                {/* Green base bar */}
                <div className="h-[6px] w-full bg-gradient-to-r from-brand to-brand-bright" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Membership band — wave texture + wedge buttons ── */}
      <section className="waves-bg relative isolate overflow-hidden py-16 lg:py-24">
        {/* Faint, well-spaced repeated EAZ watermark */}
        <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

        <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.2] text-ink lg:text-[40px]">
              Elevate Your Career with EAZ Membership
            </h2>
            <p className="mt-5 max-w-[600px] text-[18px] leading-[1.8] text-[#5c6b77] lg:text-[19px]">
              Join the network of over{" "}
              <strong className="font-bold text-ink">50,000+ professional members</strong> who
              connect and support each other with career advancement advice and industry expertise
              across Zambia and beyond.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {/* Wedge-style split buttons matching the reference UI */}
              <Link href="/membership"
                className="group inline-flex w-fit items-stretch overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                <span className="flex items-center bg-brand px-6 py-3.5 text-[16px] font-bold text-white transition-colors group-hover:bg-brand-dark">
                  Explore Individual Membership
                </span>
                <span aria-hidden
                  className="relative flex w-[72px] items-center justify-center bg-brand-bright transition-colors group-hover:bg-brand"
                  style={{ clipPath: "polygon(32% 0, 100% 0, 100% 100%, 0 100%)" }}>
                  <svg viewBox="0 0 12 14" className="h-3.5 w-3 translate-x-0.5" fill="currentColor" aria-hidden>
                    <path d="M2 1l9 6-9 6z" />
                  </svg>
                </span>
              </Link>
              <Link href="/membership"
                className="group inline-flex w-fit items-stretch overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                <span className="flex items-center bg-brand px-6 py-3.5 text-[16px] font-bold text-white transition-colors group-hover:bg-brand-dark">
                  Explore Corporate Membership
                </span>
                <span aria-hidden
                  className="relative flex w-[72px] items-center justify-center bg-brand-bright transition-colors group-hover:bg-brand"
                  style={{ clipPath: "polygon(32% 0, 100% 0, 100% 100%, 0 100%)" }}>
                  <svg viewBox="0 0 12 14" className="h-3.5 w-3 translate-x-0.5" fill="currentColor" aria-hidden>
                    <path d="M2 1l9 6-9 6z" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="mt-9 h-[3px] w-full max-w-[420px] bg-gradient-to-r from-brand to-brand-bright" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
            <Image src="/images/membership-benefits.webp" alt="EAZ members networking" fill
              sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-gradient-to-br from-brand to-[#2db800] py-16 lg:py-20">
        <div className="container-page max-w-[980px]">
          <div className="flex gap-6">
            <div className="shrink-0">
              <svg viewBox="0 0 32 24" className="h-8 w-10 text-white/60" fill="currentColor" aria-hidden>
                <path d="M0 24V14.4C0 6.4 5.333 1.6 16 0l2.133 3.2C12.267 4.533 9.067 7.2 8.533 11.2H14V24H0zm18 0V14.4C18 6.4 23.333 1.6 34 0l2.133 3.2C30.267 4.533 27.067 7.2 26.533 11.2H32V24H18z" />
              </svg>
            </div>
            <div className="border-l-2 border-white/30 pl-6">
              <p className="text-[21px] font-bold leading-relaxed text-white lg:text-[25px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-white/20" />
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-[14px] text-white/70">{t.title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} type="button" onClick={() => setTestimonialIdx(i)}
                className={`h-4 w-4 border border-white/60 transition-colors ${i === testimonialIdx ? "bg-white" : "bg-transparent hover:bg-white/30"}`}
                aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Insights ── */}
      <section className="border-t-2 border-brand bg-white py-14 lg:py-18">
        <div className="container-page">
          <InsightsCarousel posts={insights} />
        </div>
      </section>

      {/* ── Newsletter — dark bg-image section ── */}
      <section
        className="relative isolate overflow-hidden py-20 lg:py-24"
        style={{ backgroundImage: "url('/images/boardroom.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="container-page relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <h2 className="text-[36px] font-bold leading-[1.15] text-white lg:text-[44px]">
                Subscribe for the Latest in Economics
              </h2>
              <p className="mt-5 text-[18px] leading-[1.8] text-white/80 lg:text-[19px]">
                Stay competitive and up to date with the latest economic news in policy, research
                and development. The EAZ Signals newsletter provides you with a weekly,
                consolidated, easy-to-read update on topics and trends that will help you stay
                ahead of the curve.
              </p>
            </div>
            {/* Right: form */}
            <div>
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function NewsletterSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  if (done) {
    return (
      <div className="rounded border border-white/30 bg-white/10 px-6 py-5 text-[17px] text-white">
        Thank you! Check your inbox to confirm your subscription.
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (!firstName.trim() || !lastName.trim()) { setError("Please enter your full name."); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) { setError("Please enter a valid email address."); return; }
        if (!agreed) { setError("Please agree to the privacy policy."); return; }
        setError("");
        setDone(true);
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-[15px] font-bold text-white">First Name: *</label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-white/50 bg-transparent px-3 py-2.5 text-[17px] text-white placeholder:text-white/40 focus:border-white focus:outline-none" />
        </div>
        <div>
          <label className="mb-1 block text-[15px] font-bold text-white">Last Name: *</label>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)}
            className="w-full border border-white/50 bg-transparent px-3 py-2.5 text-[17px] text-white placeholder:text-white/40 focus:border-white focus:outline-none" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-[15px] font-bold text-white">Email Address: *</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-white/50 bg-transparent px-3 py-2.5 text-[17px] text-white placeholder:text-white/40 focus:border-white focus:outline-none" />
      </div>
      <label className="flex cursor-pointer items-start gap-3">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-brand" />
        <span className="text-[16px] text-white">
          I have read and agree to the{" "}
          <a href="/privacy" className="font-bold text-brand-bright underline">EAZ privacy policy</a>. *
        </span>
      </label>
      {error && <p className="text-[15px] text-red-300">{error}</p>}
      <button type="submit"
        className="bg-brand px-8 py-3 text-[17px] font-bold text-white transition-colors hover:bg-brand-dark">
        Submit
      </button>
    </form>
  );
}
