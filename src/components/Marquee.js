import { useState } from "react";

// Moving strip of skills. It pauses on hover, on keyboard focus, and when tapped or clicked.
export default function Marquee({ items }) {
    const [paused, setPaused] = useState(false);
    const Row = ({ hidden }) => (
        <div aria-hidden={hidden ? "true" : undefined} className="flex shrink-0 items-center">
            {items.map((t, i) => (
                <span key={i} className="flex items-center">
                    <span className="whitespace-nowrap px-7 font-mono text-[11px] uppercase tracking-[0.3em] text-mutew md:px-9 md:text-xs">
                        {t}
                    </span>
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
                </span>
            ))}
        </div>
    );
    return (
        <div
            className={`ix-marquee overflow-hidden border-y border-lined py-5 ${paused ? "is-paused" : ""}`}
            data-testid="marquee"
            role="button"
            tabIndex={0}
            aria-pressed={paused}
            aria-label={`Skills: ${items.join(", ")}. Press to ${paused ? "resume" : "pause"} the scrolling.`}
            onClick={() => setPaused((p) => !p)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setPaused((p) => !p);
                }
            }}
        >
            <div className="marquee-track flex" aria-hidden="true">
                <Row />
                <Row hidden />
            </div>
        </div>
    );
}
