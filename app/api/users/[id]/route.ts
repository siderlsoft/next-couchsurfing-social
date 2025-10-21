import { NextRequest, NextResponse } from 'next/server'
import users from '@/data/users.json'

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const user = users.find(u => u.id === params.id)
  
  if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json(user)
}