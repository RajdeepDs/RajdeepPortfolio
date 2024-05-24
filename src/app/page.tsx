import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <main className="mt-10">
      <h1 className="font-bold text-3xl">Hey, I&apos;m Rajdeep</h1>
      <div className="font-mono mt-4 text-gray-600">
        I&apos;m a passionate second-year computer science student with a strong
        interest in full-stack development. I&apos;m constantly learning and
        eager to tackle new challenges in building innovative and user-friendly
        applications.
      </div>
      <div className="font-mono mt-4 text-gray-600">
        Proficient in <Badge>React</Badge> and <Badge>Next.js</Badge>, crafting
        interactive UIs and utilizing server-side rendering, static site
        generation, and other Next.js features for a seamless development
        experience.
      </div>
    </main>
  );
}
