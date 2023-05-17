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
        <span className="bg-gradient-to-r from-green-600 via-teal-500 to-sky-600 bg-clip-text text-transparent ">
          I'm Phillip Estes!
        </span>
      </h1>
      <h3 className="mt-4 text-2xl text-cyan-100">
        Your go-to Front-End Web Developer.
      </h3>

      <p className="mt-4 text-2xl text-cyan-100">
        With a year's worth of experience under my belt and a diverse skill set
        that includes HTML 5, CSS3, JavaScript, TailwindCSS, Next.js, and
        React.js, I design and build web solutions that are efficient, scalable,
        and user-centered.
      </p>

      <p className="mt-4 text-2xl text-cyan-100">
        Having worked remotely from Vietnam, I've embraced a diverse cultural
        environment, enhancing my adaptability and communication skills. I've
        built websites with Konscious, growing my practical understanding of
        modern web development practices.{" "}
      </p>
      <p className="mt-3 text-xl text-cyan-100">
        I'm all about transforming complex ideas into intuitive and visually
        appealing digital experiences. As a proactive problem solver and team
        player, I thrive in remote environments, valuing collaboration,
        continuous learning, and high-quality output. Have a look around my
        portfolio to see the work I've done and the skills I bring to the table.
        I look forward to the opportunity to work with you to enhance your web
        presence!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
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
            <div className="mt-2 font-extrabold bg-gradient-to-r from-green-600 via-teal-500 to-sky-600 bg bg-clip-text text-transparent ">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
