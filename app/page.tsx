import { Project } from "@/types/projects"
import ProjectCard from "@/components/project-card"

const projects: Project[] = [
  {
    title: "Seent",
    description:
      "A modern and feature-rich social media application. Combing the best features of popular social meida platforms.",
    href: "https://github.com/AriaTofighi/seent",
  },
  {
    title: "BSN Surveys",
    description:
      "A survey creation and data collection platform made for the BCIT nursing program. Private repository for security reasons. Contact me for access.",
  },

  {
    title: "VTD",
    description:
      "Virus Tower Defense. A virus themed tower defense web game made with Phaser.",
    href: "https://github.com/AriaTofighi/COMP-2800-Team-BBY-38-VTD",
  },
]

export default function IndexPage() {
  return (
    <section className="container grid max-w-3xl items-center gap-12 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Aria Tofighi
        </h1>
        <p className="text-lg text-muted-foreground">
          Software developer from Vancouver, Canada. BCIT CST graduate. I build
          fully-featured web applications, typically with Next.js frontends and
          Node.js flavoured backends. I like Typescript.
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
