import type { Metadata } from "next";
import { PostsPage } from "@/components/site/posts-page";
import { byType } from "@/data/content";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Analysis and commentary on the Zambian economy contributed by members of the Economics Association of Zambia.",
};

export default function ArticlesPage() {
  return (
    <PostsPage
      title="Articles"
      lead="Analysis and commentary on economic policy in Zambia, contributed by members of the Association."
      posts={byType("article")}
      fixedType="article"
    />
  );
}
