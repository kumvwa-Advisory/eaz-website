"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EVENTS, POSTS, SECTION, type Post, type PostType } from "@/data/content";
import { ORG } from "@/data/site";
import { HeroSlider } from "@/components/site/hero-slider";

const TYPE_LABEL: Record<PostType, string> = {
  news: "News",
  article: "Article",
  notice: "Notice",
};

const RULE = "border-[#eaeaea]";
const DIVIDE = "divide-[#eaeaea]";

const CHIP =
  "inline-flex items-center gap-1.5 rounded-[5px] border border-[#cad4e5] bg-white px-3.5 py-1.5 text-[13px] font-bold text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white";

const PER_PAGE = 3;

function SliderCards({ posts }: { posts: Post[] }) {
  const [page, setPage] = useState(0);
  const total = Math.ceil(posts.length / PER_PAGE);
  const visible = posts.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => {
          const d = new Date(post.dateISO);
          return (
            <Link
              key={post.slug}
              href={`${SECTION[post.type].href}/${post.slug}`}
              className="group relative flex h-[360px] flex-col overflow-hidden rounded-[6px] border border-[#eaeaea] bg-white shadow-sm"
            >
              {/* Image fills remaining space */}
              <div className="relative min-h-0 flex-1 overflow-hidden bg-brand-soft">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-brand-soft" />
                )}
              </div>

              {/* Info block — date + title static, excerpt slides up on hover */}
              <div className="shrink-0 bg-white">
                {/* Excerpt — hidden, slides down from 0 height on hover */}
                <div className="overflow-hidden transition-all duration-300 ease-out max-h-0 group-hover:max-h-[80px]">
                  <p className="line-clamp-2 px-4 pt-3 text-[13px] leading-[1.55] text-[#6c757d]">
                    {post.excerpt}
                  </p>
                </div>

                {/* Date + title — always visible at bottom */}
                <div className="flex gap-3 px-4 pb-4 pt-3">
                  <div className="flex w-[52px] shrink-0 flex-col items-center overflow-hidden rounded-[3px] bg-brand-deep text-white">
                    <span className="w-full bg-brand py-0.5 text-center text-[9px] font-bold uppercase tracking-[0.1em]">
                      {d.toLocaleString("en", { month: "short" })}
                    </span>
                    <span className="py-1 text-[22px] font-bold leading-none">
                      {String(d.getDate()).padStart(2, "0")}
                    </span>
                    <span className="w-full bg-brand py-0.5 text-center text-[9px] font-bold">
                      {d.getFullYear()}
                    </span>
                  </div>
                  <h3 className="flex-1 text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Prev / Next */}
      {total > 1 && (
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#eaeaea] bg-white text-[18px] text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white disabled:opacity-30"
          >
            &#8249;
          </button>
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === page ? "w-8 bg-brand" : "w-2 bg-[#ccc] hover:bg-brand/50"
              }`}
            />
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(total - 1, p + 1))}
            disabled={page === total - 1}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#eaeaea] bg-white text-[18px] text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white disabled:opacity-30"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  action,
  light = false,
  border = true,
}: {
  eyebrow?: string;
  title: string;
  action?: { label: string; href: string };
  light?: boolean;
  border?: boolean;
}) {
  return (
    <div
      className={`mb-8 flex flex-wrap items-end justify-between gap-4 pb-4 ${
        border ? `border-b ${light ? "border-white/15" : RULE}` : ""
      }`}
    >
      <div>
        {eyebrow && (
          <>
            <p
              className={`font-sans text-[12px] font-medium uppercase tracking-[2px] ${
                light ? "text-gold-bright" : "text-gold-ink"
              }`}
            >
              {eyebrow}
            </p>
            <div className={`mt-2 h-[3px] w-8 ${light ? "bg-gold-bright" : "bg-brand"}`} />
          </>
        )}
        <h2
          className={`mt-4 text-[26px] font-semibold leading-[1.2] sm:text-[28.8px] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {action && (
        <Link href={action.href} className={CHIP}>
          {action.label} <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  const latest = POSTS.filter((p) => p.type !== "notice").slice(3, 7);
  const notices = POSTS.filter((p) => p.type === "notice").slice(0, 4);
  const lead = POSTS[0];

  return (
    <>
      {/* ── Hero ── */}
      <HeroSlider />

      {/* ── Notice strip ── */}
      <div className={`border-b bg-white ${RULE}`}>
        <div className="container-page flex flex-wrap items-center gap-x-3 gap-y-1 py-3.5 text-[14px]">
          <span className="inline-block rounded-[3px] bg-gold-bright px-1.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-brand-ink">
            Notice
          </span>
          <time dateTime={lead.dateISO} className="tabular font-semibold text-[#6c757d]">
            {lead.date}
          </time>
          <Link
            href={`/notices/${lead.slug}`}
            className="font-semibold text-ink transition-colors hover:text-brand"
          >
            {lead.title}
          </Link>
          <span aria-hidden className="text-[#c4c4c4]">→</span>
        </div>
      </div>

      {/* ── WE ARE EAZ intro ── */}
      <section className="bg-white">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-20">
          <div>
            <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
              We are EAZ.
            </p>
            <div className="mt-2 h-[3px] w-8 bg-brand" />
            <h2 className="mt-4 text-[28.8px] font-semibold leading-[1.2] text-ink sm:text-[34px]">
              A non-partisan professional association for{" "}
              <span className="underline decoration-brand underline-offset-4">economists</span>{" "}
              and allied professionals.
            </h2>
            <p className="mt-4 max-w-lg">
              The <strong className="font-semibold text-ink">Economics Association of Zambia (EAZ)</strong> is a
              non-partisan, Professional Association whose membership includes experts in the areas of
              economics, business administration, finance and allied fields. The Association is registered
              under the Societies Act as a Non-Governmental and Not for Profit Organisation. It serves as
              a forum for the articulation of economic and other developmental issues.
            </p>
            <p className="mt-3 max-w-lg">
              The Association aims to promote the socio-economic development of Zambia and the region by
              undertaking research, training, education, publication and consultancy in the field of
              economics and related disciplines.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-[5px] bg-brand-deep px-5 py-2.5 text-[15px] font-bold text-white transition-colors hover:bg-brand"
              >
                More About Us
              </Link>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-[5px] border border-[#cad4e5] bg-white px-5 py-2.5 text-[15px] font-bold text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                Join EAZ Today
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px]">
              <Image
                src="/images/members-meeting.webp"
                alt="EAZ members at a meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating quote card */}
            <div className="absolute -bottom-6 left-6 max-w-[240px] rounded-[6px] border-t-[3px] border-gold-bright bg-white p-5 shadow-[0_12px_32px_-10px_rgba(0,0,0,0.22)]">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[2px] text-gold-ink">
                Established in the 1960s
              </p>
              <p className="mt-2 text-[15px] font-bold leading-snug text-ink">
                Registered under the Societies Act, Cap. 105, in 1985.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's New (Latest News cards) ── */}
      <section className="bg-paper py-14 lg:py-16">
        <div className="container-page">
          <SectionHead
            eyebrow="Stay updated"
            title="What's New"
            action={{ label: "All news", href: "/news" }}
          />
          <SliderCards posts={POSTS.filter((p) => p.type !== "notice")} />
        </div>
      </section>

      {/* ── Featured Articles / Publications ── */}
      <section className="bg-white py-14 lg:py-16">
        <div className="container-page">
          <SectionHead
            eyebrow="Knowledge"
            title="Featured Articles & Publications"
            action={{ label: "All articles", href: "/articles" }}
          />
          <SliderCards posts={POSTS.filter((p) => p.type === "article")} />
        </div>
      </section>

      {/* ── More News + Sidebar ── */}
      <section className="bg-paper py-14 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
          <div>
            <SectionHead
              eyebrow="Latest headlines"
              title="More News"
              action={{ label: "All news", href: "/news" }}
            />

            {/* All posts as cards */}
            <ul className="space-y-4">
              {latest.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`${SECTION[post.type].href}/${post.slug}`}
                    className="group flex gap-5 rounded-[6px] border border-[#eaeaea] bg-white p-4 transition duration-300 hover:border-brand/30 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)]"
                  >
                    <div className="relative hidden h-[120px] w-[180px] shrink-0 overflow-hidden rounded-[4px] bg-brand-soft sm:block">
                      {post.image ? (
                        <Image src={post.image} alt="" fill sizes="180px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="h-full bg-brand-soft" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <span className="inline-block rounded-[3px] bg-gold-bright px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-ink">
                        {TYPE_LABEL[post.type]}
                      </span>
                      <h3 className="mt-2 text-[17px] font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                        {post.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-[13px] leading-[1.55] text-[#6c757d]">
                        {post.excerpt}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-[12.5px] font-bold text-brand">
                        Read more <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            {/* Notices */}
            <div className="rounded-[6px] border border-[#eaeaea] bg-white p-5">
              <div className={`flex flex-wrap items-end justify-between gap-3 border-b pb-4 ${RULE}`}>
                <div>
                  <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                    Latest
                  </p>
                  <h2 className="mt-1 text-[20px] font-semibold leading-[1.2] text-ink">
                    Notices
                  </h2>
                </div>
                <Link href="/notices" className={CHIP}>
                  View all <span aria-hidden>→</span>
                </Link>
              </div>
              <ul className={`divide-y ${DIVIDE}`}>
                {notices.map((post, i) => (
                  <li key={post.slug}>
                    <Link
                      href={`/notices/${post.slug}`}
                      className="group flex gap-3 py-3 transition-colors"
                    >
                      <span className="mt-0.5 font-sans text-[12px] font-bold text-gold-ink">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <time
                          dateTime={post.dateISO}
                          className="tabular text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#6c757d]"
                        >
                          {post.date}
                        </time>
                        <p className="mt-0.5 text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                          {post.title}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conferences */}
            <div className="rounded-[6px] border border-[#eaeaea] bg-white p-5">
              <div className={`flex items-center justify-between border-b pb-3 ${RULE}`}>
                <h2 className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                  Conferences
                </h2>
                <Link href="/conferences" className="text-[12px] font-bold text-brand hover:underline">
                  View all
                </Link>
              </div>
              <ul className="mt-3 space-y-3">
                {EVENTS.map((event) => (
                  <li key={event.title}>
                    <Link
                      href="/conferences"
                      className="group block rounded-[4px] bg-paper p-3 transition-colors hover:bg-brand-tint"
                    >
                      <span className="inline-block rounded-[3px] bg-gold-bright px-1.5 py-0.5 font-sans text-[10.5px] font-bold uppercase tracking-[0.06em] text-brand-ink">
                        {event.date}
                      </span>
                      <p className="mt-2 text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                        {event.title}
                      </p>
                      <p className="mt-0.5 text-[12px] text-[#6c757d]">{event.venue}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Membership band ── */}
      <section className="bg-white py-14 lg:py-16">
        <div className="container-page">
          <SectionHead
            eyebrow="Membership"
            title="Become a member of the Economics Association of Zambia"
            action={{ label: "View membership classes", href: "/membership" }}
            border={false}
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-16">
            <div>
              <p className="mt-0">
                The Economics Association of Zambia (EAZ) is a non-partisan, Professional Association whose
                membership includes experts in the areas of economics, business administration, finance and
                allied fields. The Association is registered under the Societies Act as a Non-Governmental
                and Not for Profit Organisation. It serves as a forum for the articulation of economic and
                other developmental issues.
              </p>
              <p>
                The Association aims to promote the socio-economic development of Zambia and the region by
                undertaking research, training, education, publication and consultancy in the field of
                economics and related disciplines.
              </p>
              <div className="mt-7 text-left">
                <Link href="/members/register" className={CHIP}>
                  Register on the website <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px]">
              <Image
                src="/images/membership-benefits.webp"
                alt="Members of the Association at a meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact footer band ── */}
      <section className="border-t-2 border-ink bg-[#111111]">
        <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-gold-bright/70">
              Secretariat
            </h2>
            <address className="mt-2 text-[14px] not-italic leading-relaxed text-white/65">
              {ORG.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <div>
            <h2 className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-gold-bright/70">
              Telephone
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-white/65">
              <a href={`tel:${ORG.phoneHref}`} className="hover:text-white">
                {ORG.phone}
              </a>
              <span className="block text-[12px] text-white/35">(WhatsApp)</span>
            </p>
            <p className="mt-1 text-[14px] text-white/65">{ORG.alternatePhones.join(" / ")}</p>
          </div>
          <div>
            <h2 className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-gold-bright/70">
              Email
            </h2>
            <div className="mt-2 space-y-1 text-[14px] text-white/65">
              <a href={`mailto:${ORG.email}`} className="block hover:text-white">
                {ORG.email} <span className="text-white/35">(Secretariat)</span>
              </a>
              <a href={`mailto:${ORG.membershipEmail}`} className="block hover:text-white">
                {ORG.membershipEmail} <span className="text-white/35">(Membership)</span>
              </a>
              <a href={`mailto:${ORG.infoEmail}`} className="block hover:text-white">
                {ORG.infoEmail} <span className="text-white/35">(General)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
