import { formatDate } from "@/utils/date";
import { getAllBlogsMeta } from "@/utils/mdx";
import Link from "next/link";

export default async function Blogs() {
  const blogs = await getAllBlogsMeta();
  return (
    <main className="p-10">
      <Link
        href={"/"}
        className="border rounded p-2 hover:underline text-sm absolute top-10 left-10"
      >
        Back
      </Link>
      <h1 className="font-semibold uppercase items-center flex justify-center">
        My Blogs
      </h1>
      <div className="container flex flex-col w-2/4 justify-center mx-auto mt-10">
        {blogs?.map((blog) => (
          <Link
            href={"/blogs/" + blog.slug}
            key={blog.slug}
            className="flex py-2 justify-between border-b cursor-pointer hover:bg-gray-50 p-2"
          >
            <h2 className="text-sm">{blog.title}</h2>
            <p className="text-sm text-gray-400">
              {formatDate(blog.publishedAt)}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
