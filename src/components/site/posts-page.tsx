import { PageHeader } from "@/components/site/page-header";
import { CARD, CardHeading, GREEN_BAR, SectionHeading } from "@/components/site/section-heading";
import type { Post, PostType } from "@/data/content";
import { EVENTS } from "@/data/content";
import { ORG } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

const TYPE_LABEL: Record<PostType, string> = {
  news: "News",
  article: "Article",
  notice: "Notice",
};

const NAV_LINKS = [
  { label: "News", href: "/news" },
  { label: "Articles", href: "/articles" },
  { label: "Notices", href: "/notices" },
  { label: "Conferences", href: "/conferences" },
];

export function PostsPage({
  title,
  lead,
  posts,
  fixedType,
}: {
  title: string;
  lead: string;
  posts: Post[];
  fixedType: PostType;
}) {
  const section = { news: "/news", article: "/articles", notice: "/notices" }[fixedType];

  return (
    <>
      <PageHeader
        title={title}
        lead={lead}
        meta={`${posts.length} ${posts.length === 1 ? "entry" : "entries"}`}
      />

      <section className="waves-bg relative isolate overflow-hidden py-16 lg:py-20">
        <div aria-hidden className="eaz-mark pointer-events-none absolute inset-0 z-0" />

        <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">

          {/* ── Main posts list ── */}
          <div>
            <SectionHeading title={title} />
            <ul className="mt-10 flex flex-col gap-6">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`${section}/${post.slug}`}
                    className={`${CARD} group flex gap-5 p-5 transition duration-300 hover:shadow-[0_10px_28px_-12px_rgba(0,0,0,0.2)] sm:p-6`}
                  >
                    {/* Image */}
                    <div className="relative hidden h-[140px] w-[210px] shrink-0 overflow-hidden bg-brand-soft sm:block">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.imageAlt ?? ""}
                          fill
                          sizes="210px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full bg-brand-soft" />
                      )}
                    </div>

                    {/* Body */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="bg-brand px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                          {TYPE_LABEL[post.type]}
                        </span>
                        <time
                          dateTime={post.dateISO}
                          className="tabular text-[14px] font-medium text-[#5c6b77]"
                        >
                          {post.date}
                        </time>
                      </div>
                      <h2 className="mt-2.5 text-[20px] font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                        {post.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-[16px] leading-[1.6] text-[#5c6b77]">
                        {post.excerpt}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-bold text-brand">
                        Read more <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">

            {/* Sections nav */}
            <div className={CARD}>
              <div className="p-6">
                <CardHeading eyebrow="Browse" title="Sections" />
                <ul className="mt-3 divide-y divide-[#ececec]">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between py-3 text-[16px] transition-colors hover:text-brand ${
                          link.href === section ? "font-bold text-brand" : "font-medium text-ink"
                        }`}
                      >
                        {link.label}
                        <span aria-hidden className="text-[#ccc]">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={GREEN_BAR} />
            </div>

            {/* Conferences */}
            <div className={CARD}>
              <div className="p-6">
                <CardHeading eyebrow="Events" title="Conferences" />
                <Link href="/conferences" className="mt-2 inline-flex items-center gap-1.5 text-[15px] font-bold text-brand hover:text-brand-dark">
                  View all <span aria-hidden>→</span>
                </Link>
                <ul className="mt-3 space-y-3">
                  {EVENTS.map((event) => (
                    <li key={event.title}>
                      <Link
                        href="/conferences"
                        className="group block bg-[#f7f8f6] p-4 transition-colors hover:bg-brand-tint"
                      >
                        <span className="inline-block bg-brand px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.06em] text-white">
                          {event.date}
                        </span>
                        <p className="mt-2.5 text-[16px] font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                          {event.title}
                        </p>
                        <p className="mt-0.5 text-[14px] text-[#5c6b77]">{event.venue}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={GREEN_BAR} />
            </div>

            {/* Contribute */}
            <div className={CARD}>
              <div className="p-6">
                <CardHeading eyebrow="Members" title="Contribute" />
                <p className="mt-4 text-[16px] leading-[1.65] text-[#5c6b77]">
                  Members may submit analysis for publication under their own name. Articles represent
                  the views of the author and not those of the Association.
                </p>
                <a
                  href={`mailto:${ORG.email}?subject=Article%20submission`}
                  className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-bold text-brand hover:text-brand-dark"
                >
                  Submit an article <span aria-hidden>→</span>
                </a>
              </div>
              <div className={GREEN_BAR} />
            </div>

          </aside>
        </div>
      </section>
    </>
  );
}
