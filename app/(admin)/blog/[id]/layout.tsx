import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import { Session } from "@/context/Session";
import { metadata } from "../page";

const montserrat = Montserrat({ subsets: ["latin"] });

type props =  {
    params:{
        id:string
    }
}

export const generateMetadata= async ({params}:props): Promise<Metadata> =>{
    try{
        const blogPostFetch = await fetch(`/api/blog/${params.id}`)
      if(blogPostFetch.status == 200){
        var metaPost = await blogPostFetch.json()
      } 
      }catch(error){
        console.log(`there was an error:${error}`)
    }
 return{
    title: metaPost.metaTitle,
    description: metaPost.metaDescription
    
 }
}

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
