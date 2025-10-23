import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { compare } from "bcrypt";

const handler = NextAuth({
  providers: [
    Google({ clientId: process.env.GOOGLE_CLIENT_ID || "", clientSecret: process.env.GOOGLE_CLIENT_SECRET || "" }),
    Credentials({
      credentials: { email: { label: "Email", type: "email" }, password: { label: "Password", type: "password" } },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const pass = credentials?.password as string;
        const user = await prisma.user.findUnique({ where: { email } });
        if (user?.passwordHash && await compare(pass, user.passwordHash)) {
          return { id: user.id, email: user.email!, name: user.name || "" };
        }
        return null;
      },
    })
  ],
  session: { strategy: "jwt" }
});
export { handler as GET, handler as POST };
