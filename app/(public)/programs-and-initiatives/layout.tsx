import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { Session } from "@/context/Session";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Gifted Natus Foundation: Progams and Initiative",
  description:
    "The Gifted Natus Foundation is committed to driving meaningful change through innovative programs and initiatives categorized under three core areas: Education & Empowerment, Community Health & Well-Being, and Human Capacity Development. Each category represents our dedication to transforming lives and building a sustainable future for Bayelsa State and beyond.",
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
