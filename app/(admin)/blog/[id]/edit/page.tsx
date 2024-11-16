import BlogEditor from "@/components/BlogEditor";
export default function EditBlog ({ params }: { params: { id: string };
}){
    return(
        <div>
            <BlogEditor id={"2"}/>
        </div>
    )
}