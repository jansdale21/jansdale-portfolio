import { useRef } from "react";
import { Link } from "react-router-dom";
import useTitle from "@/lib/useTitle";
import { motion, useScroll, useSpring } from "framer-motion";
import { milestones, journeyMeta } from "@/data/milestones";
import MilestoneCard from "@/components/MilestoneCard";
import ThenNow from "@/components/ThenNow";
import { Reveal, MaskLine } from "@/components/Reveal";

export default function Journey() {
    useTitle("Prompt Journey");
    const railRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: railRef,
        offset: ["start 0.72", "end 0.65"],
    });
    const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 22 });

    return (
        <main id="main" tabIndex={-1} data-testid="journey-page" className="pt-28 md:pt-40">
            <div className="mx-auto max-w-7xl px-5 md:px-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">
                    {journeyMeta.course} · {journeyMeta.span}
                </p>
                <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,6rem)] font-extrabold uppercase leading-[0.98] tracking-tightest">
                    <MaskLine delay={0.1}>The evolution</MaskLine>
                    <MaskLine delay={0.28}>
                        of my{" "}
                        <span className="font-serifacc font-normal normal-case italic text-lime">
                            prompts
                        </span>
                    </MaskLine>
                </h1>
                <Reveal delay={0.35}>
                    <p className="mt-7 max-w-2xl text-sm leading-relaxed text-mutew md:text-lg">
                        {journeyMeta.intro}
                    </p>
                </Reveal>

                <div className="mx-auto mt-14 max-w-5xl md:mt-20">
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">The milestones</p>
                    <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
                        Eight steps, <span className="font-serifacc font-normal italic text-lime">in order.</span>
                    </h2>
                    <nav aria-label="Milestones">
                        <ol className="ix-jx" data-testid="journey-index">
                            {milestones.map((m) => (
                                <li key={m.slug}>
                                    <Link to={`/journey/${m.slug}`} data-testid={`journey-index-${m.num}`}>
                                        <span className="ix-jx-num">{m.num}</span>
                                        <span className="ix-jx-title">{m.shortTitle}</span>
                                        <span className="ix-jx-meta">{m.concept}</span>
                                        <span className="ix-jx-meta is-date">{m.dateLabel}</span>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>

                <div ref={railRef} className="relative mx-auto mt-12 max-w-5xl pb-16 md:mt-16">
                    <div className="absolute bottom-0 left-4 top-2 w-px bg-lined md:left-10" />
                    <motion.div
                        style={{ scaleY: progress }}
                        className="absolute bottom-0 left-4 top-2 w-px origin-top bg-lime md:left-10"
                        data-testid="journey-progress-rail"
                    />
                    <div className="space-y-14 md:space-y-20">
                        {milestones.map((m, i) => (
                            <MilestoneCard key={m.slug} m={m} index={i} />
                        ))}
                    </div>
                </div>

                <div className="mx-auto max-w-5xl pb-10">
                    <ThenNow />
                </div>
            </div>
        </main>
    );
}
