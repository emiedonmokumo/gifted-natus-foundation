import Credentials from "next-auth/providers/credentials";
import connectDB from "@/config/db";
import User, { IUser } from "@/models/User"; // Adjust the path according to your folder structure
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      authorize: async (credentials) => {
        await connectDB();
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        const user: IUser | any = await User.findOne({ "credentials.email": email });

        if (!user) {
          throw new Error("User not found");
        }

        const hashedPassword = user.credentials.password;
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);

        if (!isPasswordValid) {
          throw new Error("Invalid Password");
        }

        const response = {
          id: user._id,
          firstName: user.bio.firstName,
          lastName: user.bio.lastName,
          othernames: user.bio.othernames,
          role: user.role
        };
        return response;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName
        token.lastName = user.lastName
        token.othernames = user.othernames
        token.role = user.role
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.firstName = token.firstName
        session.user.lastName = token.lastName
        session.user.othernames = token.othernames
        session.user.role = token.role
      }
      return session;
    },
  },
};