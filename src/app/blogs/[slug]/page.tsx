import { CustomMDX } from "@/components/mdx";
import { formatDate } from "@/utils/date";
import { getBlogPosts } from "@/utils/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="flex flex-col w-1/3 mx-auto m-10">
      <Link
        href={"/blogs"}
        className="border rounded p-2 hover:underline text-sm absolute top-10 left-10"
      >
        Back
      </Link>
      <div className="mb-5 border-b pb-2">
        <h1 className="text-xl font-semibold">{post.metadata.title}</h1>
        <p className="text-sm text-gray-600 mt-1">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <div className="prose">
        <CustomMDX source={post.content} />
      </div>
    </section>
  );
};

export default Page;
