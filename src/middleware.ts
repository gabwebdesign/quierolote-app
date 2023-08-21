import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';
import { NextResponseMessage } from './utils/api/responseMessage';
import { HttpStatusCode } from 'axios';

export async function middleware(req: NextRequest) {
  const session: any = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session) {
    // return NextResponse.rewrite(new URL('/auth', req.url));
    if(req.url.includes('api')) {
      return NextResponseMessage({ status: HttpStatusCode.Unauthorized, message: 'No tienes acceso a este recurso.' });
    }
  }

}

export const config = {
  matcher: ['/api/:function*'],
};

