import Link from "next/link";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];
export default function NavBar(): JSX.Element {
  return (
    <div className="flex items-center gap-x-4">
      {navItems.map((item) => (
        <Link key={item.name} href={item.href} className="">
          {item.name}
        </Link>
      ))}
    </div>
  );
}
