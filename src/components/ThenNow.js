import { useMemo, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { thenNow } from "@/data/thenNow";
import { Reveal } from "@/components/Reveal";
import { scrollToEl } from "@/lib/lenis";

export default function ThenNow() {
    const { then, now, anatomy } = thenNow;
    const lines = useMemo(() => now.text.split("\n"), [now.text]);
    const [active, setActive] = useState(null);
    const lineRefs = useRef([]);

    // Lines to highlight: the line containing `find`, or every line from `find` to `to`.
    const rangeOf = (a) => {
        const start = lines.findIndex((l) => l.includes(a.find));
        if (start < 0) return [];
        const end = a.to ? lines.findIndex((l, i) => i >= start && l.includes(a.to)) : start;
        return Array.from({ length: Math.max(end, start) - start + 1 }, (_, k) => start + k);
    };
    const hits = active === null ? [] : rangeOf(anatomy[active]);

    const pick = (i) => {
        const next = active === i ? null : i;
        setActive(next);
        if (next === null) return;
        // The prompt sits beside the list on wide screens. On narrow screens (or if the
        // matching line is outside the window) bring the highlighted line into view.
        const el = lineRefs.current[lines.findIndex((l) => l.includes(anatomy[next].find))];
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top < 90 || r.bottom > window.innerHeight - 24) scrollToEl(el);
    };

    return (
        <section className="ix-tn" data-testid="then-now">
            <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">The full arc</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
                    Day one <span className="font-serifacc font-normal italic text-lime">vs.</span> after PDC60
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-mutew md:text-base">
                    Same goal, two prompts: the first one I recorded in PDC60, and the same request rewritten
                    with RTCFC — Role, Task, Context, Format, Constraint — plus the rules the later activities
                    taught me. Pick an element to find it in the new prompt.
                </p>
            </Reveal>

            <div className="ix-tn-grid">
                <Reveal>
                    <div className="ix-tn-left">
                        <article className="ix-tn-card is-then">
                            <header>
                                <span className="ix-chip is-amber">Then</span>
                                <span className="ix-tn-meta">{then.date}</span>
                            </header>
                            <p className="ix-tn-src">{then.source}</p>
                            <p className="ix-tn-then">{then.text}</p>
                        </article>
                        <div className="ix-tn-anatomy">
                            <div className="ix-tn-row is-head" aria-hidden="true">
                                <span>Element</span>
                                <span>Then</span>
                                <span>Now</span>
                            </div>
                            <ul className="ix-tn-list">
                                {anatomy.map((a, i) => (
                                    <li key={a.k}>
                                        <button
                                            type="button"
                                            className={`ix-tn-row ${active === i ? "is-active" : ""}`}
                                            onClick={() => pick(i)}
                                            aria-pressed={active === i}
                                            data-testid={`then-now-row-${i}`}
                                        >
                                            <span className="ix-tn-k">
                                                {a.k}
                                                <em>{a.lesson}</em>
                                            </span>
                                            <span className="ix-tn-mark is-no">
                                                <X size={14} aria-label="Missing" />
                                            </span>
                                            <span className="ix-tn-mark is-yes">
                                                <Check size={14} aria-label="Included" />
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Reveal>
                <Reveal delay={0.08} className="h-full">
                    <article className="ix-tn-card is-now">
                        <header>
                            <span className="ix-chip is-lime">Now</span>
                            <span className="ix-tn-meta">{now.date}</span>
                        </header>
                        <p className="ix-tn-src">{now.source}</p>
                        <div className="ix-tn-panel is-auto" data-testid="then-now-panel">
                            {lines.map((l, i) => (
                                <div
                                    key={i}
                                    ref={(el) => {
                                        lineRefs.current[i] = el;
                                    }}
                                    className={`ix-tn-line ${hits.includes(i) ? "is-hit" : ""}`}
                                >
                                    {/^[A-Z]+:/.test(l) ? (
                                        <>
                                            <strong className="ix-tn-key">{l.match(/^[A-Z]+:/)[0]}</strong>
                                            {l.replace(/^[A-Z]+:/, "")}
                                        </>
                                    ) : (
                                        l || "\u00a0"
                                    )}
                                </div>
                            ))}
                        </div>
                    </article>
                </Reveal>
            </div>
        </section>
    );
}
