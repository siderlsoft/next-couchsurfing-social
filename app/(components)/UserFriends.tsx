import { getUserFriends } from '@/lib/api';
import { User } from '@/lib/models';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import Link from 'next/link';

export default async function UserFriends({ userId, showFriendsPostsButton = true }: { userId: string; showFriendsPostsButton?: boolean }) {
    const friends = await getUserFriends(userId);

    return (
        <div>
            <h1 className="text-2xl font-bold flex justify-center bg-orange-500 text-white">{friends.length > 0 ? `${friends.length} Friends` : 'No Friends Found'}</h1>

            <div className='flex flex-wrap justify-center gap-4 mt-4'>
                {friends.map((friend: User) => (
                    <Link key={friend.id} href={`/profile/${friend.id}`} prefetch className="flex justify-center">
                        {friend.avatarUrl ? <Avatar image={friend.avatarUrl} size="large" shape="circle" /> :
                            <Avatar icon="pi pi-user" size="large" shape="circle" />
                        }
                    </Link>
                ))}
            </div>

            {showFriendsPostsButton && (
                <div className='flex justify-center mt-8'>
                    <Link href="/">
                        <Button label="See Friend's Posts" severity="warning" rounded />
                    </Link>
                </div>
            )}
        </div>
    );
}