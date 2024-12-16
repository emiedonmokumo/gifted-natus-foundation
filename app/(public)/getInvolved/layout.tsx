import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { Session } from "@/context/Session";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: " Gifted Natus Foundation: get involved in the change",
    description:
      "At Gifted Natus Foundation, we are committed to transforming lives through impactful initiatives in Education & Empowerment,Humanitarian Support, Emergency Relief, and Human Capacity Development. Your participation, no matter the form, can create lasting change. Join us in building a brighter, more sustainable future for all.",
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
