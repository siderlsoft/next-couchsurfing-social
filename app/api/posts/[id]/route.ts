import { NextResponse } from "next/server";
import posts from "@/data/posts.json";
import users from "@/data/users.json";
import { formatDateUTC } from "@/lib/helper";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    const post = posts.find(p => p.id === params.id);
    const author = users.find(u => u.id === post?.authorId);

    return NextResponse.json({
        ...post,
        author: author?.name,
        authorAvatar: author?.avatarUrl,
        authorRole: author?.role,
        createdAtText: post?.createdAt ? formatDateUTC(post.createdAt) : "Unknown date", // 👈
    });
}