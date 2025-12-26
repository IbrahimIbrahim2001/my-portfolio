import TextAnimate from "./ui/text-animate"

interface TextBoxProps {
    text: string
}

export function TextBox({ text }: TextBoxProps) {
    return (
        <div className="flex items-center gap-2 mb-8">
            <TextAnimate type="whipIn" text={text} className="bg-secondary leading-none font-semibold border-2 border-border hover:border-primary/80 hover:border-dashed transition-all delay-75 p-1" />
        </div>
    )
}
