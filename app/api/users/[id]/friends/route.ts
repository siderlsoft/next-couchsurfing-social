import { NextResponse } from 'next/server';
import friends from '@/data/friends.json';
import users from '@/data/users.json';

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;

    // Find the user's friends
    const userFriends = friends.find(friend => friend.userId === id)?.friends || [];

    // Map friend IDs to user details, filtering out undefined values
    const friendDetails = userFriends
        .map(friendId => users.find(user => user.id === friendId))
        .filter(Boolean);

    // Always return an array, even if empty
    return NextResponse.json(friendDetails);
}