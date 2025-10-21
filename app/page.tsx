import { getPosts } from '@/lib/api'
import { Avatar } from 'primereact/avatar'
import { Suspense } from "react";
import FeedServer from "./(components)/FeedServer";

export const revalidate = 30;

export default async function Feed({ searchParams }: { searchParams: { page?: string } }) {
  const page = Number(searchParams.page ?? '1')
  const { data, totalPages } = await getPosts(page, 5)

  return (
    <div className="space-y-4">
      <a href="/profile" className='flex justify-center mt-4'>
        <Avatar icon="pi pi-user" shape="circle" />
        <h1 className="text-2xl font-bold ml-2">My Profile</h1>
      </a>
      <h1 className="text-2xl font-bold flex justify-center mt-4 bg-orange-500">Friends’ posts</h1>

      <Suspense fallback={<div className="animate-pulse h-24 rounded-xl bg-gray-100" />}>
        <FeedServer page={page} />
      </Suspense>
    </div>
  )
}