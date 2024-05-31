import React from "react";

export function SideSection({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5 w-2/5">
      <h2 className="uppercase text-xs font-medium text-gray-400">{name}</h2>
      {children}
    </section>
  );
}
export function MainSection({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="uppercase text-xs font-medium text-gray-400">{name}</h2>
      {children}
    </section>
  );
}
