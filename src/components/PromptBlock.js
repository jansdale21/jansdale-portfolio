const chipTone = (tone) =>
    tone === "lime"
        ? "border-lime/40 bg-lime text-bgd"
        : tone === "amber"
        ? "border-amberw/40 bg-amberw text-bgd"
        : "border-lined bg-panel text-mutew";

export default function PromptBlock({ label, prompt, tone = "ink", chip, id }) {
    const head =
        tone === "lime"
            ? "border-lime/40 text-lime"
            : tone === "amber"
            ? "border-amberw/40 text-amberw"
            : "border-lined text-ink";
    const dot =
        tone === "lime" ? "bg-lime" : tone === "amber" ? "bg-amberw" : "bg-mutew";
    return (
        <figure
            data-testid={id}
            className="overflow-hidden rounded-lg border border-lined bg-panel"
        >
            <figcaption
                className={`flex flex-wrap items-center justify-between gap-2 border-b ${head} px-4 py-3`}
            >
                <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.25em]">
                    <span className={`h-2 w-2 rounded-full ${dot}`} />
                    {label}
                </span>
                {chip && (
                    <span
                        className={`rounded-sm px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] ${chipTone(
                            chip.tone
                        )}`}
                    >
                        {chip.text}
                    </span>
                )}
            </figcaption>
            <blockquote className="whitespace-pre-wrap px-5 py-5 font-mono text-[13px] leading-relaxed text-ink/90 md:text-sm">
                {prompt}
            </blockquote>
        </figure>
    );
}
