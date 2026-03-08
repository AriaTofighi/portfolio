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
    <section className="container grid max-w-3xl items-center gap-10 py-12 md:py-20">
      <div className="flex max-w-[980px] flex-col items-start gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
        <h1 className="text-4xl font-black leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Aria Tofighi
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground/80 sm:text-xl transition-colors hover:text-foreground">
          Software developer. BCIT CST graduate. I build full-stack web applications, because the world needs more web applications.
        </p>
      </div>
      <div className="flex flex-col items-start gap-6 opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
        <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl border-b pb-2 w-full">
          Selected Projects
        </h2>
        <div className="flex w-full flex-col gap-4">
          {projects.map((project, index) => (
            <div key={project.title} className="opacity-0 animate-fade-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
