import { ReactNode } from "react";

export default function WrapperContainer({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-primary/5 to-primary/10  blur-xl" />
            {/* Main content container */}
            <div className="relative bg-card/80 backdrop-blur-md  border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-500 ">
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
                <div className="py-8 md:py-10 px-6 md:px-8">
                    {children}
                </div>
            </div>
        </>
    )
}
