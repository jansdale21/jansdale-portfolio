import { Reveal } from "@/components/Reveal";

export default function SectionHead({ letter, title, tone = "lime" }) {
    return (
        <Reveal>
            <div className="mb-8 flex items-baseline gap-4 border-b border-lined pb-4">
                <span
                    className={`font-mono text-sm ${
                        tone === "amber" ? "text-amberw" : "text-lime"
                    }`}
                >
                    {letter}
                </span>
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-ink md:text-sm">
                    {title}
                </h2>
            </div>
        </Reveal>
    );
}
