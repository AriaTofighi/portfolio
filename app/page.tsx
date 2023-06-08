export default function IndexPage() {
  return (
    <section className="container grid max-w-3xl items-center gap-14 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Aria Tofighi
        </h1>
        <p className="text-lg text-muted-foreground">
          Software developer from Vancouver, Canada. I build fully-featured web
          applications, typically with Next.js frontends and Node.js flavoured
          backends.
        </p>
      </div>
      {/* <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          See my projects
        </Link>
      </div> */}
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl">
          Projects
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          I&apos;ve built a variety of projects, ranging from small personal
          projects to working on enterprise applications. I&apos;m always
          looking for new projects to work on, so feel free to reach out if you
          have something in mind.
        </p>
      </div>
    </section>
  )
}
