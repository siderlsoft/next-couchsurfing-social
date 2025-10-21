"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import PostCard from "./PostCard";
import { Post } from "@/lib/models";
import Link from 'next/link';

export default function FeedScroller({
    initial, initialPage, totalPages, rows
}: { initial: Post[]; initialPage: number; totalPages: number; rows: number }) {
    const router = useRouter();
    const [items, setItems] = useState(initial);
    const [page, setPage] = useState(initialPage);
    const [loading, setLoading] = useState(false);

    async function loadMore() {
        if (loading || page >= totalPages) return;
        setLoading(true);
        const res = await fetch(`/api/posts?page=${page + 1}&limit=${rows}`);
        const json = await res.json();
        setItems(prev => [...prev, ...json.data]);
        setPage(p => p + 1);
        router.replace(`/?page=${page + 1}`, { scroll: false });
        setLoading(false);
    }

    return (
        <div className="space-y-4">
            {items.map((p: Post) => (
                <Link key={p.id} href={`/posts/${p.id}`} prefetch className="flex justify-center">
                    <PostCard post={p} />
                </Link>
            ))}
            <div className="flex justify-center mb-4">
                <Button
                    label={page < totalPages ? (loading ? "Loading…" : "Load more") : "No more posts"}
                    onClick={loadMore}
                    disabled={loading || page >= totalPages}
                />
            </div>
        </div>
    );
}
