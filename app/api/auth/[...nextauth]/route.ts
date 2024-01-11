import dbConnect from "@/app/dbConnect/dbConnect";
import User from "@/modals/User";
import NextAuth from "next-auth/next";
import bcryptjs from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const formEmail = credentials?.email as string;
        const plainPassword = credentials?.password as string;
        // connect to the database
        await dbConnect();
        // find the email address
        const isUserExist = await User.findOne({ email: formEmail });

        if (!isUserExist) {
          return null;
        }

        // validate the password
        const isValidPassword = await bcryptjs.compare(
          plainPassword,
          isUserExist?.password
        );
        // console.log("isValidPassword", isValidPassword);
        if (!isValidPassword) {
          return null;
        }
        console.log('logged in successfully');

        // return
        return {
          id: isUserExist?._id,
          name: isUserExist?.name || "Anonymous",
          email: isUserExist?.email,
        };
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
