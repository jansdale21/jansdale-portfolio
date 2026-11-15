import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

// Before/after "curtain": drag the line (or tap anywhere) to move the split.
// Left of the line shows BEFORE, right of the line shows AFTER.
export default function SplitCompare({ before, after, beforeLabel = "Before", afterLabel = "After", beforeCaption, afterCaption, start = 50, className = "", testId = "split-compare" }) {
    const ref = useRef(null);
    const [pos, setPos] = useState(start);
    const [dragging, setDragging] = useState(false);

    const fromClientX = useCallback((x) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        const p = ((x - r.left) / r.width) * 100;
        setPos(Math.max(0, Math.min(100, p)));
    }, []);

    const onDown = (e) => {
        if (e.button !== undefined && e.button !== 0) return;
        setDragging(true);
        e.currentTarget.setPointerCapture?.(e.pointerId);
        fromClientX(e.clientX);
    };
    const onMove = (e) => {
        if (dragging) fromClientX(e.clientX);
    };
    const onUp = () => setDragging(false);

    const onKey = (e) => {
        const step = e.shiftKey ? 20 : 5;
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
        else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
        else if (e.key === "Home") setPos(0);
        else if (e.key === "End") setPos(100);
        else return;
        e.preventDefault();
    };

    return (
        <div className={`ix-split-wrap ${className}`} data-testid={testId}>
            <div
                ref={ref}
                className={`ix-split ${dragging ? "is-dragging" : ""}`}
                style={{ "--pos": `${pos}%` }}
                onPointerDown={onDown}
                onPointerMove={onMove}
                onPointerUp={onUp}
                onPointerCancel={onUp}
            >
                <div className="ix-split-layer is-before" aria-hidden={pos <= 2}>
                    <span className="ix-split-tag is-amber">{beforeLabel}</span>
                    {before}
                </div>
                <div className="ix-split-layer is-after" aria-hidden={pos >= 98}>
                    <span className="ix-split-tag is-lime">{afterLabel}</span>
                    {after}
                </div>
                <div className="ix-split-line" aria-hidden="true" />
                <button
                    type="button"
                    className="ix-split-handle"
                    role="slider"
                    aria-label="Move the line to compare before and after"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(pos)}
                    onKeyDown={onKey}
                    data-testid={`${testId}-handle`}
                >
                    <MoveHorizontal size={16} />
                </button>
            </div>
            {(beforeCaption || afterCaption) && (
                <div className="ix-split-caps">
                    <p>{beforeCaption}</p>
                    <p>{afterCaption}</p>
                </div>
            )}
        </div>
    );
}
