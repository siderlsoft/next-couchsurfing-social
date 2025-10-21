export interface Post {
  id: string;
  authorId: string;
  title: string;
  description: string;
  author?: string;
  authorAvatar?: string;
  authorRole?: string;
  img?: string;
  createdAt: string;
  createdAtText?: string;
  likes: number;
}

export interface User {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarUrl?: string;
}
