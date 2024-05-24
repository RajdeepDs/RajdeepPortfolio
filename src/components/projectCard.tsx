import Link from "next/link";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    techStacks: string[];
    previewLink: string;
    repoLink: string;
  };
}
export default function ProjectCard({
  project,
}: ProjectCardProps): JSX.Element {
  return (
    <div className="border p-4 rounded-md mt-4" key={project.id}>
      <h1 className="uppercase font-bold">{project.title}</h1>
      <p className="text-gray-500 mt-1">{project.description}</p>
      <div className="flex items-center gap-x-2 mt-4">
        {project.techStacks.map((tech) => (
          <Badge key={tech} className="text-sm font-bold font-mono">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex items-center gap-x-2 mt-4">
        <Button asChild>
          <Link href={project.previewLink}>Preview</Link>
        </Button>
        <Button asChild variant={"ghost"}>
          <Link href={project.repoLink}>Repo</Link>
        </Button>
      </div>
    </div>
  );
}
