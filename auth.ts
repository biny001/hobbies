import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized: async ({ auth }) => {
      console.log("authorized", auth);
      return !!auth;
    },
  },
  pages: {
    signIn: "/signin",
  },
  providers: [Google],
});
