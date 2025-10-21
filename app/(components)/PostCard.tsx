import { Post } from '@/lib/models'
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Avatar } from 'primereact/avatar';
import { Tag } from 'primereact/tag';

export default function PostCard({ post }: { post: Post }) {
    return (
        <article>
            <Card title={post.title} className='lg:w-xl w-96 mb-4'>
                {post.img && <Image src={post.img} alt={post.title} className="w-full h-48 object-cover" />}
                <div className='flex justify-between items-center'>
                    <div className='flex items-center mt-4 space-x-4'>
                        {post.authorAvatar ? <Avatar image={post.authorAvatar} size="large" shape="circle" /> :
                            <Avatar icon="pi pi-user" size="large" shape="circle" />
                        }
                        <p className='mt-2 text-gray-800'>{post.author}</p>
                    </div>
                    <Tag className='mt-2' severity="warning" value={post.authorRole} rounded></Tag>
                </div>
                <p className="mt-2 text-gray-700">{post.description}</p>
                <div className="mt-3 text-sm text-gray-500 flex items-center justify-between">
                    <span>{post.createdAtText}</span>
                    <span>❤ {post.likes}</span>
                </div>
            </Card>
        </article>
    )
}