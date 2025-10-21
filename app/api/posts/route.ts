import { NextRequest, NextResponse } from 'next/server'
import posts from '@/data/posts.json'
import users from '@/data/users.json'
import { formatDateUTC } from '@/lib/helper'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const page = Number(searchParams.get('page') ?? '1')
  const limit = Number(searchParams.get('limit') ?? '5')
  const start = (page - 1) * limit
  const end = start + limit

  const userMap = new Map(users.map(u => [u.id, u]));
  const slice = posts.slice(start, end).map(p => {
    const author = userMap.get(p.authorId);
    return {
      ...p,
      author: author?.name,
      authorAvatar: author?.avatarUrl,
      authorRole: author?.role,
      createdAtText: formatDateUTC(p.createdAt),
    };
  });

  return NextResponse.json({
    data: slice,
    page,
    total: posts.length,
    totalPages: Math.ceil(posts.length / limit),
  });
}
