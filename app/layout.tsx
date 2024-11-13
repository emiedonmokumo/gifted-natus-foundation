import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Head from "next/head";
import { Session } from "@/context/Session";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gifted Natus Foundation",
  description: "Empowering individuals for a future of hope, opportunity, and sustainable growth.",
  icons: {
    icon: '/logo.png'
  }
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
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
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
