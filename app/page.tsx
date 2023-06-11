import { Project } from "@/types/projects"
import ProjectCard from "@/components/project-card"

const projects: Project[] = [
  {
    title: "Seent",
    description:
      "A modern and feature-rich social media application. Combines the best features of popular social media platforms for a unique experience.\n\nTechnologies: React, MUI, Next.js, Nest.js, PostgreSQL, Prisma, Socket.io",
    href: "https://github.com/AriaTofighi/seent",
  },
  {
    title: "BSN Surveys",
    description:
      "A survey creation and data collection platform made for the BCIT nursing program. Please contact me for access. \n\nTechnologies: React, MUI, Express.js, PostgreSQL, Sequelize",
  },

  {
    title: "VTD",
    description:
      "Virus Tower Defense. A virus themed tower defense web game with endless rounds. Cleanse virus carriers with your towers to prevent harm to the city. \n\nTechnologies: Phaser, Firebase",
    href: "https://github.com/AriaTofighi/COMP-2800-Team-BBY-38-VTD",
  },
]

export default function IndexPage() {
  return (
    <section className="container grid max-w-3xl items-center gap-10 py-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold  md:text-4xl">
          Aria Tofighi
        </h1>
        <p className="text-lg text-muted-foreground">
          Software developer. BCIT CST graduate. I build web applications, usually with React and Node.js.
        </p>
      </div>
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl">
          Projects
        </h2>
        <p className="mb-6 max-w-[700px] text-lg text-muted-foreground">
          Here are my projects. I&apos;m always looking for new projects to work
          on, so feel free to reach out if you have something in mind.
        </p>
        <div className="flex flex-col gap-3">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
