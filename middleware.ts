import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
	async function middleware(req) {
		const {
			nextUrl: { pathname },
			nextauth: { token },
		} = req;

		if (pathname.startsWith("/auth") && token) {
			return NextResponse.redirect(new URL("/dashboard", req.url));
		}
		return NextResponse.next();
	},
	{
		callbacks: {
			authorized: ({ token, req }) => {
				const {
					nextUrl: { pathname },
				} = req;

				if (["/dashboard", "/blog/new", "/blog/[id]/edit"].includes(pathname) && !token) {
					return false;
				}	
                return true;
			},
		},
	}
);