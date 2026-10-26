import { PageHeader } from "@/components/site/page-header";
import { CARD, CardHeading, GREEN_BAR } from "@/components/site/section-heading";
import { POSTS, SECTION, postBySlug, type Post } from "@/data/content";
import { ORG } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

/** Paragraphs beginning "• " are list items; a short unpunctuated line begins a block. */
function ArticleBody({ body }: { body: string[] }) {
  const blocks: ReactNode[] = [];
  let list: string[] = [];

  const flush = () => {
    if (!list.length) return;
    const items = list;
    list = [];
    blocks.push(
      <ul key={`list-${blocks.length}`} className="my-4 list-disc space-y-1.5 pl-5 text-[17px] marker:text-brand">
        {items.map((item) => (
          <li key={item}>{item.replace(/^•\s*/, "")}</li>
        ))}
      </ul>
    );
  };

  body.forEach((line, index) => {
    if (line.startsWith("• ")) {
      list.push(line);
      return;
    }
    flush();
    const nextIsList = body[index + 1]?.startsWith("• ");
    if (nextIsList && line.length < 70 && !line.endsWith(".")) {
      blocks.push(
        <h2 key={`h-${index}`} className="mt-9 text-[23px] font-bold leading-snug text-[#0f3d25]">
          {line}
        </h2>
      );
      return;
    }
    blocks.push(<p key={`p-${index}`}>{line}</p>);
  });
  flush();

  return <>{blocks}</>;
}

export function PostDetail({ post }: { post: Post }) {
  const section = SECTION[post.type];
  const related = POSTS.filter((entry) => entry.slug !== post.slug && entry.type === post.type).slice(
    0,
    4
  );
  const suggestions = related.length
    ? related
    : POSTS.filter((entry) => entry.slug !== post.slug).slice(0, 4);

  return (
    <>
      <PageHeader
        title={post.title}
        parents={[{ label: section.label, href: section.href }]}
      />

      <article className="container-page py-14 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div className="min-w-0">
            {post.image ? (
              <figure className="mb-9">
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-paper">
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? ""}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 760px"
                    className="object-cover"
                  />
                </div>
                {post.imageAlt ? (
                  <figcaption className="mt-2 text-[15px] leading-relaxed text-[#7a7a7a]">
                    {post.imageAlt}.
                  </figcaption>
                ) : null}
              </figure>
            ) : null}

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-[#e8ebe8] pb-4">
              <span className="bg-brand px-2 py-0.5 text-[12px] font-bold uppercase tracking-[0.1em] text-white">
                {section.label}
              </span>
              <time dateTime={post.dateISO} className="tabular text-[15px] text-[#5c6b77]">
                {post.date}
              </time>
              <span aria-hidden className="text-[#d9d9d9]">|</span>
              <span className="text-[15px] text-[#5c6b77]">By {post.author}</span>
            </div>

            <p className="mt-7 max-w-2xl text-[19px] font-medium leading-[1.65] text-ink">{post.excerpt}</p>

            <div className="prose-column mt-6 max-w-2xl text-[17px] leading-[1.8] text-[#4b4f58]">
              <ArticleBody body={post.body} />
            </div>

            <p className="mt-9 border-t border-[#e8ebe8] pt-5 text-[15px] leading-relaxed text-[#4b4f58]">
              <span className="font-bold text-ink">{post.author}</span>
              <br />
              {post.role}
            </p>

            {post.attachment ? (
              <div className={`mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${CARD} p-5`}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center bg-brand-soft text-brand">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-4 w-4"
                      aria-hidden
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      <path d="M9 1.5H4v13h8V4.5z" />
                      <path d="M9 1.5v3h3" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[16px] font-bold text-ink">{post.attachment.label}</p>
                    <p className="tabular mt-0.5 text-[14px] text-[#7a7a7a]">{post.attachment.meta}</p>
                  </div>
                </div>
                <a
                  href={post.attachment.file}
                  download
                  className="group inline-flex shrink-0 items-stretch overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                >
                  <span className="flex items-center bg-brand px-5 py-3 text-[15px] font-bold text-white transition-colors group-hover:bg-brand-dark">
                    <svg
                      viewBox="0 0 16 16"
                      className="mr-2 h-3.5 w-3.5"
                      aria-hidden
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M8 2v8M4.5 7 8 10.5 11.5 7M3 13.5h10" />
                    </svg>
                    Download PDF
                  </span>
                  <span
                    aria-hidden
                    className="relative flex w-[44px] items-center justify-center bg-brand-bright transition-colors group-hover:bg-brand"
                    style={{ clipPath: "polygon(32% 0, 100% 0, 100% 100%, 0 100%)" }}
                  />
                </a>
              </div>
            ) : null}

            <div className="mt-9 border-t border-[#e8ebe8] pt-6">
              <Link
                href={section.href}
                className="inline-flex items-center gap-2 text-[16px] font-bold text-brand transition-colors hover:text-brand-dark"
              >
                <svg
                  viewBox="0 0 14 14"
                  className="h-3.5 w-3.5"
                  aria-hidden
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M11 7H3M6 4 3 7l3 3" />
                </svg>
                All {section.label.toLowerCase()}
              </Link>
            </div>
          </div>

          <aside className="space-y-8 lg:border-l lg:border-[#e8ebe8] lg:pl-10">
            {/* Related */}
            <div>
              <h2 className="border-b-2 border-brand-bright pb-2.5 text-[14px] font-bold uppercase tracking-[0.12em] text-[#0f3d25]">
                Related
              </h2>
              <ul className="divide-y divide-[#ececec]">
                {suggestions.map((entry) => (
                  <li key={entry.slug} className="py-3">
                    <time dateTime={entry.dateISO} className="tabular text-[13px] text-[#7a7a7a]">
                      {entry.date}
                    </time>
                    <h3 className="mt-1 text-[16px] font-bold leading-snug">
                      <Link
                        href={`${SECTION[entry.type].href}/${entry.slug}`}
                        className="transition-colors hover:text-brand"
                      >
                        {entry.title}
                      </Link>
                    </h3>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secretariat */}
            <div className="rounded-[2px] border-2 border-brand-bright bg-white p-5">
              <h2 className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#0f3d25]">
                Secretariat
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5c6b77]">
                Enquiries about this item should be directed to the office.
              </p>
              <p className="mt-2 text-[15px] leading-relaxed">
                <a href={`tel:${ORG.phoneHref}`} className="block font-bold text-ink hover:text-brand">
                  {ORG.phone}
                </a>
                <a href={`mailto:${ORG.email}`} className="block font-bold text-ink hover:text-brand">
                  {ORG.email}
                </a>
              </p>
            </div>

            {/* Members' area */}
            <div className={CARD}>
              <div className="p-5">
                <CardHeading eyebrow="Members" title="Members’ area" />
                <p className="mt-3 text-[15px] leading-relaxed text-[#5c6b77]">
                  Register on the website to apply for membership and access member content.
                </p>
                <Link
                  href="/members/login"
                  className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-bold text-brand hover:text-brand-dark"
                >
                  Member login <span aria-hidden>→</span>
                </Link>
              </div>
              <div className={GREEN_BAR} />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}

export function PostRoute({ type, slug }: { type: Post["type"]; slug: string }) {
  const post = postBySlug(slug);
  if (!post || post.type !== type) notFound();
  return <PostDetail post={post} />;
}
