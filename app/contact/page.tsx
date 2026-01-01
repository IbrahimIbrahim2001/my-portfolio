import ContactForm from "@/components/contact/contact-form";
import SectionHeader from "@/components/shared/section-header";
import WrapperContainer from "@/components/shared/wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with Ibrahim Ibrahim for web development projects, collaborations, or opportunities. Available for full-time & part-time roles.',
}

export default function ContactPage() {
    return (
        <div className="pb-16">
            <div className="py-8 md:py-10 px-6 md:px-8 max-w-3xl">
                <SectionHeader title="Contact Me" description={
                    <>
                        Currently open to software engineering opportunities. I specialize in building <span className="font-semibold text-primary/80"> modern, performant web applications </span> with a focus on clean UI and maintainable code architecture.
                    </>
                } />
            </div>
            <div className="relative">
                <WrapperContainer>
                    <ContactForm />
                </WrapperContainer>
            </div>
        </div>
    )
}
