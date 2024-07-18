import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized: async ({ auth }) => {
      // console.log("authorized", auth);
      return !!auth;
    },
    async signIn({ user }) {
      if (typeof user.email === "string") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name || "",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          });
          console.log("User created");
        }
        return true;
      }
      return true;
    },
  },
  pages: {
    signIn: "/signin",
  },

  providers: [Google],
});
