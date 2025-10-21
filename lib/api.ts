import { cache } from 'react';

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? ''

export const getPosts = cache(async (page = 1, limit = 5) => {
  const res = await fetch(`${BASE}/api/posts?page=${page}&limit=${limit}`, {
    next: { revalidate: 30, tags: ['posts'] },
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
});

export const getPost = cache(async (id: string) => {
  const res = await fetch(`${BASE}/api/posts/${id}`, {
    next: { revalidate: 60, tags: ['posts'] },
  });
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
});

export async function getUsers() {
  const res = await fetch(`${BASE}/api/users`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Failed to fetch users')
  return res.json()
}

export async function getUser(id: string) {
  const res = await fetch(`${BASE}/api/users/${id}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch user')
  return res.json()
}

export async function getUserFriends(userId: string) {
  const res = await fetch(`${BASE}/api/users/${userId}/friends`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch user friends')
  return res.json()
}
