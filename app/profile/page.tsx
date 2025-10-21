import { getUser } from '@/lib/api';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import UserFriends from '../(components)/UserFriends';
import { Tag } from 'primereact/tag';

export default async function ProfilePage() {
    const currentUser = await getUser('u4'); // Mocked user ID
    return (
        <section className="space-y-4 lg:size-[50%] w-96 mb-4 mx-auto p-4">
            <h1 className="text-2xl font-bold flex justify-center">Your profile</h1>
            <a className='flex justify-center' href={'/'}>
                <i className="pi pi-home" style={{ fontSize: '2.5rem' }}></i>
            </a>
            <div className="mb-4 mx-auto p-4 flex flex-col items-center bg-orange-500 pb-10">
                <h2 className="text-4xl text-center mb-10 mt-6 text-white font-extrabold tracking-wide uppercase">{currentUser.name}</h2>
                <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
                    <Image src={currentUser.avatarUrl} alt={currentUser.name} width="256" height="256" className="object-cover" />
                </div>
                <Tag className='mt-8' severity="warning" value={currentUser.role} rounded></Tag>
            </div>
            <Card className="mb-4 mx-auto p-4">
                <p className="text-center">Location: {currentUser.location}</p>
            </Card>
            <Card>
                <UserFriends userId={currentUser.id} />
            </Card>
        </section>
    );
}