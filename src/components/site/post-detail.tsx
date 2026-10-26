import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/site/page-header";
import { POSTS, SECTION, postBySlug, type Post } from "@/data/content";
import { ORG } from "@/data/site";

/** Paragraphs beginning "• " are list items; a short unpunctuated line begins a block. */
function ArticleBody({ body }: { body: string[] }) {
  const blocks: ReactNode[] = [];
  let list: string[] = [];

  const flush = () => {
    if (!list.length) return;
    const items = list;
    list = [];
    blocks.push(
      <ul key={`list-${blocks.length}`} className="my-4 list-disc space-y-1.5 pl-5 marker:text-brand">
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
        <h2 key={`h-${index}`} className="mt-8 text-[21px] font-semibold leading-snug text-ink">
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

      <article className="container-page py-10 lg:py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_286px] lg:gap-14">
          <div className="min-w-0">
            {post.image ? (
              <figure className="mb-8">
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
                  <figcaption className="mt-2 text-[13px] leading-relaxed text-muted">
                    {post.imageAlt}.
                  </figcaption>
                ) : null}
              </figure>
            ) : null}

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-rule pb-3 text-[13px]">
              <span className="font-semibold uppercase tracking-[0.12em] text-brand">
                {section.label}
              </span>
              <span aria-hidden className="text-rule">
                |
              </span>
              <time dateTime={post.dateISO} className="tabular text-muted">
                {post.date}
              </time>
              <span aria-hidden className="text-rule">
                |
              </span>
              <span className="text-muted">By {post.author}</span>
            </div>

            <p className="mt-6 max-w-2xl text-[17px] leading-[1.65] text-ink">{post.excerpt}</p>

            <div className="prose-column mt-5 max-w-2xl text-[16px] leading-[1.8] text-ink-soft">
              <ArticleBody body={post.body} />
            </div>

            <p className="mt-8 border-t border-rule pt-4 text-[14px] leading-relaxed text-ink-soft">
              <span className="font-medium text-ink">{post.author}</span>
              <br />
              {post.role}
            </p>

            {post.attachment ? (
              <div className="mt-6 flex flex-col gap-4 bg-paper p-5 card sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-rule bg-white">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-4 w-4 text-brand"
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
                    <p className="text-[14px] font-medium text-ink">{post.attachment.label}</p>
                    <p className="tabular mt-0.5 text-[13px] text-muted">{post.attachment.meta}</p>
                  </div>
                </div>
                <a
                  href={post.attachment.file}
                  download
                  className="inline-flex shrink-0 items-center justify-center gap-2 bg-brand px-4 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-brand-dark"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5"
                    aria-hidden
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M8 2v8M4.5 7 8 10.5 11.5 7M3 13.5h10" />
                  </svg>
                  Download PDF
                </a>
              </div>
            ) : null}

            <div className="mt-8 border-t border-rule pt-5">
              <Link
                href={section.href}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-ink-soft transition-colors hover:text-brand"
              >
                <svg
                  viewBox="0 0 14 14"
                  className="h-3 w-3"
                  aria-hidden
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M11 7H3M6 4 3 7l3 3" />
                </svg>
                All {section.label.toLowerCase()}
              </Link>
            </div>
          </div>

          <aside className="space-y-8 lg:border-l lg:border-rule lg:pl-8">
            <div>
              <h2 className="border-b border-rule pb-2.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-ink">
                Related
              </h2>
              <ul className="divide-y divide-rule">
                {suggestions.map((entry) => (
                  <li key={entry.slug} className="py-3">
                    <time dateTime={entry.dateISO} className="tabular text-[12px] text-muted">
                      {entry.date}
                    </time>
                    <h3 className="mt-1 text-[14px] font-medium leading-snug">
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

            <div className="bg-brand-tint p-4 card">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.13em] text-ink">
                Secretariat
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                Enquiries about this item should be directed to the office.
              </p>
              <p className="mt-2 text-[14px] leading-relaxed">
                <a href={`tel:${ORG.phoneHref}`} className="block text-ink-soft hover:text-brand">
                  {ORG.phone}
                </a>
                <a href={`mailto:${ORG.email}`} className="block text-ink-soft hover:text-brand">
                  {ORG.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="border-b border-rule pb-2.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-ink">
                Members&rsquo; area
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                Register on the website to apply for membership and access member content.
              </p>
              <Link
                href="/members/login"
                className="mt-2 inline-flex text-[14px] font-medium text-ink underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
              >
                Member login
              </Link>
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
