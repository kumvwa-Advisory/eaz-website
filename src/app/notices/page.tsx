import type { Metadata } from "next";
import { PostsPage } from "@/components/site/posts-page";
import { byType } from "@/data/content";

export const metadata: Metadata = {
  title: "Notices",
  description:
    "Official notices and circulars issued to members of the Economics Association of Zambia, including general meeting and nomination notices.",
};

export default function NoticesPage() {
  return (
    <PostsPage
      title="Notices"
      lead="Official notices and circulars issued to members, including general meeting and nomination notices."
      posts={byType("notice")}
      fixedType="notice"
    />
  );
}
