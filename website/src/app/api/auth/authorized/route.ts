import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = new URLSearchParams(req.nextUrl.search);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Missing parameter' }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
