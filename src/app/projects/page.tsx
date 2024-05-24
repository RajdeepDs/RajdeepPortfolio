import ProjectCard from "@/components/projectCard";

const projectItems = [
  {
    id: 1,
    title: "BuildIt",
    description:
      "Buildit is an open-source project management tool. It helps teams collaborate and manage their projects effectively.",
    techStacks: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    previewLink: "https://buildit.codes",
    repoLink: "https://github.com/RajdeepDs/buildit",
  },
];
export default function ProjectPage(): JSX.Element {
  return (
    <main className="mt-10">
      <h1 className="font-bold text-3xl">Explore my Projects</h1>
      {projectItems.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </main>
  );
}
