import { getUser } from '@/lib/api';
import { Card } from 'primereact/card';
import UserFriends from '../(components)/UserFriends';
import ProfileCard from '../(components)/ProfileCard';

export default async function ProfilePage() {
    const currentUser = await getUser('u4'); // Mocked user ID
    return (
        <section className="space-y-4 lg:size-[50%] w-96 mb-4 mx-auto p-4">
            <h1 className="text-2xl font-bold flex justify-center">Your profile</h1>
            <ProfileCard user={currentUser} />
            <Card>
                <UserFriends userId={currentUser.id} showFriendsPostsButton={true} />
            </Card>
        </section>
    );
}