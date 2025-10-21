import PostCard from "@/app/(components)/PostCard";
import { getPost } from '@/lib/api';
import Link from "next/link";

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const post = await getPost(resolvedParams.id);

    return (
        <section className="flex flex-col items-center mt-4 space-y-4">
            <Link
                href="/"
                className="self-start text-brand-600 hover:underline hover:text-brand-700 transition-colors ml-4 mb-2"
            >
                ← Back to feed
            </Link>

            <PostCard post={post} />
        </section>
    );
}