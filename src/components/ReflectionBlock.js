import { Quote, PencilLine } from "lucide-react";

export default function ReflectionBlock({ reflection }) {
    const accent = reflection.isDraft ? "text-amberw" : "text-lime";
    return (
        <>
            <div
                data-testid="reflection-block"
                className="relative rounded-lg border border-lined bg-panel p-6 md:p-10"
            >
                <Quote size={28} className={`${accent} mb-5`} />
                {reflection.isDraft && (
                    <span
                        data-testid="reflection-draft-badge"
                        className="mb-6 inline-flex items-center gap-2 rounded-sm border border-amberw/40 bg-amberw/10 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-amberw"
                    >
                        <PencilLine size={12} />
                        Draft, awaiting my approval
                    </span>
                )}
                <div className="space-y-5">
                    {reflection.paragraphs.map((p, i) => (
                        <p
                            key={i}
                            className={
                                i === 0
                                    ? "font-serifacc text-xl italic leading-relaxed text-ink md:text-2xl"
                                    : "text-sm leading-relaxed text-mutew md:text-base"
                            }
                        >
                            {p}
                        </p>
                    ))}
                </div>
                <footer className="mt-7 border-t border-lined pt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-faintw">
                    {reflection.source}
                </footer>
            </div>
        </>
    );
}
