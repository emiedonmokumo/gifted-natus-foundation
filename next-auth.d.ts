// Import the necessary NextAuth types
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

// Extend the default User type to include firstName and lastName
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        id: string;
    }
}

// Extend the default JWT type to include firstName and lastName
declare module "next-auth/jwt" {
    interface JWT {
        id: string;
    }
}