// app/api/posts/[id]/route.ts
import { NextResponse, type NextRequest } from "next/server";
import posts from "@/data/posts.json";
import users from "@/data/users.json";
import { formatDateUTC } from "@/lib/helper";

export async function GET(_req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  const post = posts.find((p) => p.id === id);
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const author = users.find((u) => u.id === post.authorId);
  return NextResponse.json({
    ...post,
    author: author?.name,
    authorAvatar: author?.avatarUrl,
    createdAtText: formatDateUTC(post.createdAt),
  });
}