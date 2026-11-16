import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PromptBlock from "@/components/PromptBlock";

export default function FrameworkPicker({ frameworks }) {
    const [active, setActive] = useState(0);
    const fw = frameworks[active];
    return (
        <div data-testid="framework-picker">
            <div className="flex flex-wrap gap-2">
                {frameworks.map((f, i) => (
                    <button
                        key={f.name}
                        type="button"
                        data-testid={`framework-chip-${f.name}`}
                        aria-pressed={i === active}
                        onClick={() => setActive(i)}
                        className={`rounded-sm border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                            i === active
                                ? "border-lime bg-lime text-bgd"
                                : "border-lined bg-panel text-mutew hover:border-lime/40 hover:text-ink"
                        }`}
                    >
                        {f.name}
                    </button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={fw.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.25fr]"
                >
                    <div className="overflow-hidden rounded-lg border border-lined bg-panel">
                        <div className="border-b border-lined px-4 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-lime">
                            {fw.full}
                        </div>
                        <dl className="divide-y divide-lined">
                            {fw.components.map((c) => (
                                <div
                                    key={c.k}
                                    className="grid grid-cols-[96px_1fr] gap-3 px-4 py-3 md:grid-cols-[130px_1fr]"
                                >
                                    <dt className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
                                        {c.k}
                                    </dt>
                                    <dd className="text-sm leading-relaxed text-mutew">
                                        {c.v}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <PromptBlock
                        label={`Complete ${fw.name} prompt`}
                        prompt={fw.prompt}
                        tone="lime"
                        id={`framework-prompt-${fw.name}`}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
