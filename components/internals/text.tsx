import { ComponentProps } from "react";

type TextProps = ComponentProps<'p'> & { text: string, align?: string }

export default function Text({ text, color, align }: TextProps) {
    return (
        // @ts-ignore
        <p className="p-4 lg:p-8 text-lg lg:text-xl" style={{ color, textAlign: align }}>{text}</p>
    )
}
