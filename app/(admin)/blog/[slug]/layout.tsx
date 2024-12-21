import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import { Session } from "@/context/Session";
import { metadata } from "../page";

const montserrat = Montserrat({ subsets: ["latin"] });

type props =  {
    params:{
        slug:string
    }
}

export const generateMetadata= async ({params}:props)=>{
    try{
        const blogPostFetch = await fetch(`/api/blog/${params.slug}`)
      if(blogPostFetch.status == 200){
        var metaPost = await blogPostFetch.json()
        return{
          title: metaPost.metaTitle,
          description:metaPost.metaDescription
        }
      }else{
        return{
          title:"gifted natus blog",
          description: "this was a blog post in the gifed natus"
        }
      }
      }catch(error){
        console.log(`there was an error:${error}`)
    }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Session>
          {children}
        </Session>
    </html>
  );
}
