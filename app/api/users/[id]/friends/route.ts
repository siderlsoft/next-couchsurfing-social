import { NextResponse } from 'next/server';
import friends from '@/data/friends.json';
import users from '@/data/users.json';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    // Find the user's friends
    const userFriends = friends.find(friend => friend.userId === id)?.friends || [];

    // Map friend IDs to user details
    const friendDetails = userFriends.map(friendId => users.find(user => user.id === friendId));

    if (!friendDetails.length) {
        return NextResponse.json({ error: 'No friends found for this user.' }, { status: 404 });
    }

    return NextResponse.json(friendDetails);
}