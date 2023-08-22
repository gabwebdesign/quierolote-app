import { JWT, getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { NextResponseMessage } from './utils/api/responseMessage';
import { HttpStatusCode } from 'axios';

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session) {
    if(req.url.includes('/api/admin')) {
      return NextResponseMessage({ status: HttpStatusCode.Unauthorized, message: 'No tienes acceso a este recurso.' });
    }

    if(req.url.includes('/admin')) {
      return NextResponse.rewrite(new URL('/auth', req.url));
    }
  }

}

export const config = {
  matcher: ['/api/:function*', '/admin/:path*'],
};

