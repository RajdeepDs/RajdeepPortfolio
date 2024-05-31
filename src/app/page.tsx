import { MainSection as Section } from "@/components/section";
import { SideSection } from "@/components/section";
import Link from "next/link";
import { projects } from "@/configs/projects";
import { contacts } from "@/configs/contacts";
import { skills } from "@/configs/skills";
import { getBlogPosts } from "@/utils/mdx";
import { formatDate } from "@/utils/date";

export default async function Home() {
  const blogs = await getBlogPosts();
  return (
    <main className="grid grid-cols-2 p-10">
      <aside>
        <div className="h-20 w-20 rounded-full bg-gray-200" />
        <h1 className="text-2xl mt-5 font-medium text-gray-900">Rajdeep Das</h1>
        <SideSection name="About">
          <p className="text-base mt-3 text-gray-700">
            I&apos;m an Open-Source enthusiast & pursuing my Bachelors in
            Computer Science from India.
          </p>
        </SideSection>
        <SideSection name="Skills">
          <ul className="text-sm mt-3 flex gap-1 flex-wrap">
            {skills.map((skill) => {
              return (
                <li
                  key={skill}
                  className="px-3 py-1 rounded-full border w-fit text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors duration-300 ease-in-out"
                >
                  {skill}
                </li>
              );
            })}
          </ul>
        </SideSection>
        <div className="">{/* All social links */}</div>
      </aside>
      <div className="space-y-10">
        <Section name="INTRO">
          <p className="w-2/3 text-base mt-3 text-gray-700">
            I&apos;m a passionate second-year computer science student with a
            strong interest in full-stack development. I&apos;m constantly
            learning and eager to tackle new challenges in building innovative
            and user-friendly applications.
          </p>
          <p className="w-2/3 text-base mt-3 text-gray-700">
            Proficient in <span className="font-semibold">React</span> and{" "}
            <span className="font-semibold">Next.js</span>, I have experience of
            building web applications. Learning new technologies and frameworks
            is my hobby.
          </p>
        </Section>
        <Section name="Projects">
          <div className="flex gap-2 flex-wrap w-2/3">
            {projects.map((project) => (
              <Link key={project.id} href={project.previewLink}>
                <div className="w-[280px] border rounded-md p-2 mt-3 h-[150px] flex flex-col hover:bg-gray-50">
                  <div className="flex-grow"></div>{" "}
                  <div>
                    <h2 className="uppercase text-sm font-semibold">
                      {project.title}
                    </h2>
                    <p className="text-sm mt-1">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
        <Section name="Blog">
          <div className="w-2/3 mt-3">
            {blogs.map((blog) => (
              <Link
                href={"/blogs/" + blog.slug}
                key={blog.slug}
                className="flex py-2 justify-between border-b hover:bg-gray-50 transition-colors duration-300 ease-in-out"
              >
                <h2 className="text-sm">{blog.metadata.title}</h2>
                <p className="text-sm text-gray-400">
                  {formatDate(blog.metadata.publishedAt)}
                </p>
              </Link>
            ))}
            <Link href={"/blogs"}>
              <p className="text-sm text-gray-600 hover:underline mt-2">
                Read more...
              </p>
            </Link>
          </div>
        </Section>
        <Section name="Contacts">
          <div className="w-2/3 mt-3">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex py-2 justify-between border-b"
              >
                <h2 className="text-sm">{contact.title}</h2>
                <Link href={contact.link}>
                  <p className="text-sm text-gray-400 hover:underline hover:text-gray-600 transition-colors duration-300">
                    {contact.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
