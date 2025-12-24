export function AboutSection() {
    return (
        <>
            <div className="relative mb-12">
                <div className="py-8 md:py-10 px-6 md:px-8">
                    <div className="text-3xl flex items-center gap-2 mb-4">
                        <div className="h-2 w-8 bg-primary rounded-full" />
                        <h2 className="leading-none font-semibold">About Me</h2>
                    </div>
                    <p className="text-lg leading-relaxed">
                        A recent graduate passionate about building{" "}
                        <span className="font-semibold text-primary/80">impactful digital solutions</span>. I see coding as a creative
                        discipline where elegant solutions meet real-world problems.
                    </p>
                    <div className="space-y-2">
                        <p className="flex items-start gap-2">
                            <span className="inline-block size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>
                                <strong>Creative problem-solver</strong> who approaches challenges from unique angles and builds
                                intuitive, user-focused applications.
                            </span>
                        </p>
                        <p className="flex items-start gap-2">
                            <span className="inline-block size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>
                                <strong>Rapid learner</strong> with hands-on experience in modern web technologies through personal
                                projects and academic work.
                            </span>
                        </p>
                        <p className="flex items-start gap-2">
                            <span className="inline-block size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>
                                <strong>Actively seeking</strong> to launch my career and contribute to a dynamic engineering team that
                                values innovation and growth.
                            </span>
                        </p>
                    </div>
                </div>
            </div >
        </ >
    )
}