import { NextResponse } from 'next/server';
import { getDiscussions } from '~/api/discussions';

export async function GET() {
  try {
    const discussions = await getDiscussions();
    return NextResponse.json({ discussions });
  } catch (error) {
    console.error('[byuls] `/api/discussion`', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
