import { dbUsers } from '@/database';
import NextAuth from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProviders({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Contrasena', type: 'password' },
      },
      async authorize(credentials) {
        return await dbUsers.checkUserEmailPassword(
          credentials!.email,
          credentials!.password
        );
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  session: {
    maxAge: 60 * 60 * 24, //1 day
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 60 * 60 * 24, //1 day
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        switch (account.type) {
          case 'credentials':
            token.user = user;
            break;
        }
      }

      return token;
    },

    async session({ session, token, user }) {
      session.user = token.user as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
