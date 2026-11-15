import EvidenceImage from "@/components/EvidenceImage";

// The AI's two answers, side by side (stacked on phones). Same layout on every story.
export default function FlipCompare({ before, after }) {
    const b = before?.evidence?.[0];
    const a = after?.evidence?.[0];
    if (!b || !a) return null;
    const group = [
        { ...b, label: "Before — AI answer" },
        { ...a, label: "After — AI answer" },
    ];
    return (
        <div className="ix-ba" data-testid="shot-pair">
            <EvidenceImage {...group[0]} tone="amber" group={group} />
            <EvidenceImage {...group[1]} tone="lime" group={group} />
        </div>
    );
}
