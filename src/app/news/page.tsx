import type { Metadata } from "next";
import { PostsPage } from "@/components/site/posts-page";
import { byType } from "@/data/content";

export const metadata: Metadata = {
  title: "News",
  description:
    "News from the Economics Association of Zambia: summits, briefings, courtesy calls, partnerships and reports from the Secretariat.",
};

export default function NewsPage() {
  return (
    <PostsPage
      title="News"
      lead="Reports from the Secretariat on the Association's summits, briefings, partnerships and engagements."
      posts={byType("news")}
      fixedType="news"
    />
  );
}
