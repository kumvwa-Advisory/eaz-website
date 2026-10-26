import type { Metadata } from "next";
import { PostRoute } from "@/components/site/post-detail";
import { byType, postBySlug } from "@/data/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return byType("news").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return { title: "News item not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function NewsItemPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  return <PostRoute type="news" slug={slug} />;
}
