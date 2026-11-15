import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import EvidenceImage from "@/components/EvidenceImage";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/Interactive";

export default function MilestoneCard({ m }) {
    return (
        <Reveal>
            <article
                id={`milestone-${m.num}`}
                data-testid={`milestone-card-${m.num}`}
                className="relative pl-9 md:pl-16"
            >
                <span className="absolute left-[10px] top-9 h-3 w-3 rounded-full border-2 border-lime bg-bgd md:left-[34px]" />
                <TiltCard max={2}>
                <div className="rounded-xl border border-lined bg-panel p-6 transition-colors duration-300 hover:border-lime/35 md:p-8">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="num-outline font-display text-4xl font-extrabold md:text-5xl">
                            {m.num}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-faintw">
                            {m.dateLabel}
                        </span>
                        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
                            {m.concept}
                        </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-ink md:text-2xl">
                        <Link to={`/journey/${m.slug}`} className="ix-title-link" data-testid={`milestone-title-${m.num}`}>
                            {m.shortTitle}
                        </Link>
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mutew md:text-[15px]">
                        {m.summary}
                    </p>
                    {m.miniBefore && (
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-md border border-amberw/25 bg-amberw/5 p-3.5 font-mono text-[11px] leading-relaxed text-amberw/90">
                                <span className="mb-1.5 block font-bold uppercase tracking-[0.2em] text-amberw">
                                    Before
                                </span>
                                {m.miniBefore}
                            </div>
                            <div className="rounded-md border border-lime/25 bg-lime/5 p-3.5 font-mono text-[11px] leading-relaxed text-lime/90">
                                <span className="mb-1.5 block font-bold uppercase tracking-[0.2em]">
                                    After
                                </span>
                                {m.miniAfter}
                            </div>
                            {m.miniNote && (
                                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faintw sm:col-span-2">
                                    {m.miniNote}
                                </p>
                            )}
                        </div>
                    )}
                    {m.kind === "process" && m.stats && (
                        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {m.stats.slice(0, 3).map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-md border border-lined p-3.5"
                                >
                                    <p className="font-display text-lg font-extrabold text-lime">
                                        {s.value}
                                    </p>
                                    <p className="mt-1 text-[11px] leading-snug text-faintw">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                    {m.preview && (
                        <EvidenceImage
                            className="ix-ev-thumb mt-6"
                            src={m.preview}
                            label="Evidence"
                            alt={`${m.shortTitle} — evidence preview`}
                            caption={null}
                        />
                    )}
                    <Link
                        to={`/journey/${m.slug}`}
                        data-testid={`milestone-link-${m.num}`}
                        className="ix-tap group mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime"
                    >
                        Read the story
                        <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
                </TiltCard>
            </article>
        </Reveal>
    );
}
