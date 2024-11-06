import Link from "next/link"
export default function Dashboard({
  params,
}: {
  params: {
    blogid: string;
    userid: string;
  };
}) {
  return(
    <div className="">
        <h1>{params.userid}</h1>
        <Link href={`/admin/${params.userid}/createPost`}> create post</Link>
    </div>
  );
}
