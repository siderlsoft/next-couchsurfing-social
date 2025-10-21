import { getPosts } from "@/lib/api";
import FeedScroller from "./FeedScroller";

export default async function FeedServer({ page }: { page: number }) {
  const { data, totalPages } = await getPosts(page, 5);

  return <FeedScroller initial={data} initialPage={page} totalPages={totalPages} rows={5} />;
}