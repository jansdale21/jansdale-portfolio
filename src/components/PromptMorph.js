import SplitCompare from "@/components/SplitCompare";

// Prompt comparison: both prompt texts under one draggable split line.
export default function PromptMorph({ before, after, beforeLabel = "Before", afterLabel = "After", beforeCaption, afterCaption }) {
    return (
        <div data-testid="prompt-morph">
            <SplitCompare
                testId="prompt-split"
                beforeLabel={beforeLabel}
                afterLabel={afterLabel}
                beforeCaption={beforeCaption}
                afterCaption={afterCaption}
                before={<p className="ix-split-text">{before}</p>}
                after={<p className="ix-split-text">{after}</p>}
            />
        </div>
    );
}
