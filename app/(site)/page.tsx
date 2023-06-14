/* eslint-disable react/no-unescaped-entities */
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-6xl font-extrabold">
        Hello there,{" "}
        <span className="bg-gradient-to-t from-text-300 via-sky-500 to-transparent bg-clip-text text-transparent ">
          I'm Phillip Estes!
        </span>
      </h1>
      <h3 className="mt-4 text-2xl text-cyan-100">
        Your go-to Front-End Web Developer.
      </h3>

      <h2 className="mt-24 font-bold text-text-300 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-text-300 rounded-lg p-1 hover:scale-105 hover:border-indigo-400 transition cursor: pointer;"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-t from-text-300 via-sky-500 to-transparent bg bg-clip-text text-transparent ">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
