import { getProject, getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex item-centered justify-between">
        <h1 className="bg-gradient-to-t from-text-300 via-sky-500 to-transparent bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {project.name}
        </h1>

        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-text-300 rounded-lg text-gray-200 font-bold py-3 px-4 whitespace-nowrap hover:bg-sky-500 hover:text-sky-100 transition"
        >
          {" "}
          View Project
        </a>
      </header>

      {/* content goes here */}
      <div className="text-lg text-sky-200 mt-5">
        <PortableText value={project.content} />
      </div>

      {/* image goes here */}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className=" mt-10 border-2 border-sky-700 object-cover rounder-xl"
      />
    </div>
  );
}
