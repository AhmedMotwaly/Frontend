import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // This tells NextAuth: "If something goes wrong or we need a custom login page, use this one:"
  pages: {
    signIn: "/signup", 
  },
});

export { handler as GET, handler as POST };