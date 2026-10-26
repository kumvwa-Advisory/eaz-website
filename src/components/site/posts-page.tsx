import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import type { Post, PostType } from "@/data/content";
import { EVENTS } from "@/data/content";
import { ORG } from "@/data/site";

const RULE = "border-[#eaeaea]";
const DIVIDE = "divide-[#eaeaea]";
const CHIP =
  "inline-flex items-center gap-1.5 rounded-[5px] border border-[#cad4e5] bg-white px-3.5 py-1.5 text-[13px] font-bold text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white";

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

      <section className="bg-paper py-12 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-12">

          {/* ── Main posts grid ── */}
          <div>
            <ul className="flex flex-col gap-6">
              {posts.map((post) => {
                const d = new Date(post.dateISO);
                return (
                  <li key={post.slug}>
                    <Link
                      href={`${section}/${post.slug}`}
                      className="group flex gap-5 rounded-[6px] border border-[#eaeaea] bg-white p-4 transition duration-300 hover:border-brand/30 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)]"
                    >
                      {/* Image */}
                      <div className="relative hidden h-[120px] w-[180px] shrink-0 overflow-hidden rounded-[4px] bg-brand-soft sm:block">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.imageAlt ?? ""}
                            fill
                            sizes="180px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="h-full bg-brand-soft" />
                        )}
                      </div>

                      {/* Body */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="inline-block rounded-[3px] bg-gold-bright px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-ink">
                            {TYPE_LABEL[post.type]}
                          </span>
                          <time
                            dateTime={post.dateISO}
                            className="tabular text-[11.5px] text-[#6c757d]"
                          >
                            {post.date}
                          </time>
                        </div>
                        <h2 className="mt-2 text-[17px] font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                          {post.title}
                        </h2>
                        <p className="mt-1.5 line-clamp-2 text-[13px] leading-[1.55] text-[#6c757d]">
                          {post.excerpt}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-[12.5px] font-bold text-brand">
                          Read more <span aria-hidden>→</span>
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">

            {/* Sections nav */}
            <div className={`rounded-[6px] border ${RULE} bg-white p-5`}>
              <div className={`border-b pb-3 ${RULE}`}>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                  Browse
                </p>
                <h2 className="mt-1 text-[18px] font-semibold text-ink">Sections</h2>
              </div>
              <ul className={`mt-3 divide-y ${DIVIDE}`}>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-2.5 text-[14px] transition-colors hover:text-brand ${
                        link.href === section
                          ? "font-semibold text-brand"
                          : "text-ink"
                      }`}
                    >
                      {link.label}
                      <span aria-hidden className="text-[#ccc]">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conferences */}
            <div className={`rounded-[6px] border ${RULE} bg-white p-5`}>
              <div className={`flex items-end justify-between border-b pb-3 ${RULE}`}>
                <div>
                  <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                    Events
                  </p>
                  <h2 className="mt-1 text-[18px] font-semibold text-ink">Conferences</h2>
                </div>
                <Link href="/conferences" className={CHIP}>
                  View all <span aria-hidden>→</span>
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
                      <p className="mt-2 text-[14px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                        {event.title}
                      </p>
                      <p className="mt-0.5 text-[12px] text-[#6c757d]">{event.venue}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contribute */}
            <div className={`rounded-[6px] border ${RULE} bg-white p-5`}>
              <div className={`border-b pb-3 ${RULE}`}>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[2px] text-gold-ink">
                  Members
                </p>
                <h2 className="mt-1 text-[18px] font-semibold text-ink">Contribute</h2>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-[#6c757d]">
                Members may submit analysis for publication under their own name. Articles represent
                the views of the author and not those of the Association.
              </p>
              <a
                href={`mailto:${ORG.email}?subject=Article%20submission`}
                className="mt-3 inline-flex items-center gap-1 text-[13px] font-bold text-brand hover:underline"
              >
                Submit an article <span aria-hidden>→</span>
              </a>
            </div>

          </aside>
        </div>
      </section>
    </>
  );
}
