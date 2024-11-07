import Link from "next/link"
export default function Dashboard({ params }: { params: { id: string };
}) {
  return(
    <div className="">
        <h1>{params.id}</h1>
        <Link href={`/admin/${params.id}/createPost`}> create post</Link>
    </div>
  );
}
