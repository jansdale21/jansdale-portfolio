import PromptBlock from "@/components/PromptBlock";
import EvidenceImage from "@/components/EvidenceImage";

// A prompt, the screenshots that go with it, and a one-line note on the result.
// `stack` keeps the screenshots in one column (used when two of these sit side by side).
export function PromptEvidence({ data, tone, side, id, stack = false, showEvidence = true }) {
    if (!data) return null;
    const ev = showEvidence ? data.evidence || [] : [];
    return (
        <div data-testid={side} className="space-y-5">
            <PromptBlock label={data.promptLabel} prompt={data.prompt} tone={tone} chip={data.resultChip} id={id} />
            {ev.length > 0 && (
                <div className={ev.length > 1 ? (stack ? "space-y-5" : "grid gap-5 sm:grid-cols-2") : ""}>
                    {ev.map((e) => (
                        <EvidenceImage key={e.src} {...e} group={ev} />
                    ))}
                </div>
            )}
            {data.outputNote && (
                <p
                    className={`border-l-2 pl-4 text-sm leading-relaxed text-mutew ${
                        tone === "lime" ? "border-lime/50" : "border-amberw/50"
                    }`}
                >
                    {data.outputNote}
                </p>
            )}
        </div>
    );
}
