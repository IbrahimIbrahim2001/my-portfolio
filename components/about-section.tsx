import SectionHeader from "./section-header"

export function AboutSection() {
    return (
        <>
            <div className="relative">
                <div className="py-8 md:py-10 px-6 md:px-8 max-w-3xl">
                    <SectionHeader title="About Me" description={
                        <>
                            I&apos;m a software developer based in <span className="font-semibold text-primary/80">Latakia, Syria</span>.
                            I build modern web applications with a focus on clean UI, performance, and maintainable code.
                        </>
                    } />
                    <div className="space-y-4 text-muted-foreground/80 max-w-3xl mt-6">
                        <p>
                            My current stack centers around <strong className="text-muted-foreground">Next.js, TypeScript, and Tailwind CSS</strong>,
                            with experience building responsive interfaces, API integrations, and component libraries.
                        </p>
                        <p>
                            I enjoy solving practical problems through code—whether it&apos;s optimizing a slow page,
                            implementing an intuitive UI, or setting up efficient development workflows.
                        </p>
                        <p>
                            I&apos;m actively seeking opportunities to join a team where I can contribute to meaningful projects
                            while continuing to grow as a developer.
                        </p>
                    </div>
                </div>
            </div >
        </ >
    )
}