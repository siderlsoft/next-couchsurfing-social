import ProfileCard from '@/app/(components)/ProfileCard';
import UserFriends from '@/app/(components)/UserFriends';
import { getUser } from '@/lib/api';
import { Card } from 'primereact/card';

export default async function UserProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const user = await getUser(resolvedParams.id);
    return (
        <section className="space-y-4 lg:size-[50%] w-96 mb-4 mx-auto p-4">
            <h1 className="text-2xl font-bold flex justify-center">Friend profile</h1>
            <ProfileCard user={user} />
            <Card>
                <UserFriends userId={user.id} showFriendsPostsButton={false} />
            </Card>
        </section>
    );
}