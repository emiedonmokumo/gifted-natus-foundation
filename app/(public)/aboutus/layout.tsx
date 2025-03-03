import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { Session } from "@/context/Session";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "about Gifted Natus Foundation",
    description:
      "Welcome to the Gifted Natus Foundation, a beacon of hope and empowerment for the people of Bayelsa State and beyond. Founded with a vision to inspire, uplift, and transform lives, our organization is driven by the belief that everyone deserves the opportunity to thrive.",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Gifted Natus foundation - Home</title>
        <link rel="shortcut icon" href="/logo.jpeg" type="image/x-icon" />
      </Head>
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Session>
          {children}
        </Session>
      </body>
    </html>
  );
}
