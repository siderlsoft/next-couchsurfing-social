import { NextRequest, NextResponse } from 'next/server'
import users from '@/data/users.json'

export async function GET(_req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const user = users.find(u => u.id === id)

  if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json(user)
}