// Import the necessary NextAuth types
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

// Extend the default User type to include firstName and lastName
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            firstName: string;
            lastName: string;
            othernames: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        id: string;
        firstName: string;
        lastName: string;
        othernames: string;
    }
}

// Extend the default JWT type to include firstName and lastName
declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        firstName: string;
        lastName: string;
        othernames: string;
    }
}