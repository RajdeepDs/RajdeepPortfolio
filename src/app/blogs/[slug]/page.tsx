import { formatDate } from "@/utils/date";
import { getBlogsBySlug } from "@/utils/mdx";

const getPageContent = async (slug) => {
  const { meta, content } = await getBlogsBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title + " | Blogs " };
}

const Page = async ({ params }) => {
  const { content, meta } = await getPageContent(params.slug);

  return (
    <section className="flex flex-col w-1/3 mx-auto m-10">
      <div className="mb-5 border-b pb-2">
        <h1 className="text-xl font-semibold">{meta.title}</h1>
        <p className="text-sm text-gray-600 mt-1">
          {formatDate(meta.publishedAt)}
        </p>
      </div>
      <div className="prose">{content}</div>
    </section>
  );
};

export default Page;
