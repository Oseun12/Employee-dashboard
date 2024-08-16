import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: "Username", type: "text" },
            password: {  label: "Password", type: "password" }
          },
      authorize: async (credentials) => {
        // Replace with your own authentication logic
        if (credentials.username === 'admin' && credentials.password === 'password') {
          return { id: 1, name: 'Admin' };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
});
function CredentialsProvider(arg0: { name: string; credentials: { username: { label: string; type: string; }; password: { label: string; type: string; }; }; authorize: (credentials: any) => Promise<{ id: number; name: string; } | null>; }): Providers.Provider {
    throw new Error('Function not implemented.');
}

