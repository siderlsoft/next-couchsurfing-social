import { User } from '@/lib/models';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Tag } from 'primereact/tag';

export default async function ProfilePage({ user }: { user: User }) {
    const imgUrl = user.avatarUrl || '/images/default-avatar.jpg';
    return (
        <>
            <a className='flex justify-center' href={'/'}>
                <i className="pi pi-home" style={{ fontSize: '2.5rem' }}></i>
            </a>
            <div className="mb-4 mx-auto p-4 flex flex-col items-center bg-orange-500 pb-10">
                <h2 className="text-4xl text-center mb-10 mt-6 text-white font-extrabold tracking-wide uppercase">{user.name}</h2>
                <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
                    <Image src={imgUrl} alt={user.name} width="256" height="256" className="object-cover" />
                </div>
                <Tag className='mt-8' severity="warning" value={user.role} rounded></Tag>
            </div>
            <Card className="mb-4 mx-auto p-4">
                <p className="text-center">Location: {user.location}</p>
            </Card>
        </>
    );
}