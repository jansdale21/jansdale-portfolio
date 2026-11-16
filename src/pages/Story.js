import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import useTitle from "@/lib/useTitle";
import { getStory, getNeighbors, milestones } from "@/data/milestones";
import SectionHead from "@/components/SectionHead";
import PromptBlock from "@/components/PromptBlock";
import EvidenceImage from "@/components/EvidenceImage";
import { PromptEvidence } from "@/components/BeforeAfter";
import SplitCompare from "@/components/SplitCompare";
import { ReadingProgress } from "@/components/Interactive";
import EvolutionGrid from "@/components/EvolutionGrid";
import ReflectionBlock from "@/components/ReflectionBlock";
import StoryNav from "@/components/StoryNav";
import FrameworkPicker from "@/components/FrameworkPicker";
import { Reveal } from "@/components/Reveal";

function Learned({ data }) {
    return (
        <div className="space-y-4">
            {data.paragraphs.map((p, i) => (
                <p key={i} className="max-w-3xl text-sm leading-relaxed text-mutew md:text-base">
                    {p}
                </p>
            ))}
        </div>
    );
}

function Stats({ data }) {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {data.map((s) => (
                <div key={s.label} className="h-full min-w-0 rounded-lg border border-lined bg-panel p-5">
                    <p className="ix-stat-val font-display font-extrabold text-lime">{s.value}</p>
                    <p className="mt-1.5 text-xs leading-snug text-mutew md:text-sm">{s.label}</p>
                </div>
            ))}
        </div>
    );
}

function Paragraphs({ items }) {
    return (
        <div className="space-y-4">
            {items.map((p, i) => (
                <p key={i} className="max-w-3xl text-sm leading-relaxed text-mutew md:text-base">
                    {p}
                </p>
            ))}
        </div>
    );
}

const GALLERY_PREVIEW = 4;

function useMinWidth(px) {
    const query = `(min-width: ${px}px)`;
    const [ok, setOk] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
    useEffect(() => {
        const mq = window.matchMedia(query);
        const on = () => setOk(mq.matches);
        on();
        mq.addEventListener("change", on);
        return () => mq.removeEventListener("change", on);
    }, [query]);
    return ok;
}

function Gallery({ items }) {
    const [all, setAll] = useState(false);
    const shown = all ? items : items.slice(0, GALLERY_PREVIEW);
    const twoCols = useMinWidth(768);
    return (
        <>
            {twoCols ? (
                // Two independent columns, filled left-right in reading order, so a short
                // preview never leaves one column empty beside a tall one.
                <div className="ix-gallery-cols">
                    {[0, 1].map((c) => (
                        <div key={c} className="ix-gallery-col">
                            {shown
                                .filter((_, i) => i % 2 === c)
                                .map((it) => (
                                    <EvidenceImage key={it.src} {...it} group={items} />
                                ))}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="ix-gallery-col">
                    {shown.map((it) => (
                        <EvidenceImage key={it.src} {...it} group={items} />
                    ))}
                </div>
            )}
            {items.length > GALLERY_PREVIEW && (
                <button
                    type="button"
                    className="ix-more"
                    onClick={() => setAll((v) => !v)}
                    aria-expanded={all}
                    data-testid="gallery-toggle"
                >
                    {all ? "Show fewer" : `View all supporting evidence (${items.length})`}
                </button>
            )}
        </>
    );
}

function SubLabel({ children }) {
    return (
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-faintw">{children}</p>
    );
}

// One block for the whole comparison, the same on every before/after story:
// the two prompts under a draggable split line, the result of each, then the
// AI's answers (also under a split line when both are single screenshots).
function Note({ text, tone }) {
    if (!text) return <div />;
    return (
        <p
            className={`border-l-2 pl-4 text-sm leading-relaxed text-mutew ${
                tone === "lime" ? "border-lime/50" : "border-amberw/50"
            }`}
        >
            {text}
        </p>
    );
}

// Before (amber) and after (lime) screenshots in two balanced columns, filled
// left-right in order, so an uneven count never leaves one column empty.
function ShotColumns({ items }) {
    const twoCols = useMinWidth(768);
    const card = (e) => <EvidenceImage key={e.src} {...e} group={items} />;
    if (!twoCols) return <div className="ix-gallery-col">{items.map(card)}</div>;
    return (
        <div className="ix-gallery-cols">
            {[0, 1].map((c) => (
                <div key={c} className="ix-gallery-col">
                    {items.filter((_, i) => i % 2 === c).map(card)}
                </div>
            ))}
        </div>
    );
}

function BeforeAfterBlock({ m }) {
    const b = m.before;
    const a = m.after;
    const bShots = b.evidence || [];
    const aShots = a.evidence || [];
    const oneEach = m.shots && bShots.length === 1 && aShots.length === 1;
    return (
        <>
            <SubLabel>{m.compare?.title || "The prompt"}</SubLabel>
            <SplitCompare
                testId="prompt-split"
                beforeCaption={m.compare?.before ? null : b.promptLabel}
                afterCaption={m.compare?.after ? null : a.promptLabel}
                before={<p className="ix-split-text">{m.compare?.before || b.prompt}</p>}
                after={<p className="ix-split-text">{m.compare?.after || a.prompt}</p>}
            />
            {m.compare?.note && <p className="ix-ba-note">{m.compare.note}</p>}

            <div className="ix-ba mt-8">
                <Note text={b.outputNote} tone="amber" />
                <Note text={a.outputNote} tone="lime" />
            </div>

            {(bShots.length > 0 || aShots.length > 0) && (
                <div className="mt-10">
                    <SubLabel>The AI&rsquo;s answer</SubLabel>
                    {oneEach ? (
                        <div className="ix-shot-split">
                            <SplitCompare
                                testId="shot-split"
                                beforeCaption={bShots[0].caption}
                                afterCaption={aShots[0].caption}
                                before={<img src={bShots[0].src} alt={bShots[0].caption || bShots[0].label} draggable="false" />}
                                after={<img src={aShots[0].src} alt={aShots[0].caption || aShots[0].label} draggable="false" />}
                            />
                        </div>
                    ) : (
                        <ShotColumns
                            items={[
                                ...bShots.map((e) => ({ ...e, tone: "amber" })),
                                ...aShots.map((e) => ({ ...e, tone: "lime" })),
                            ]}
                        />
                    )}
                </div>
            )}
        </>
    );
}

export default function Story() {
    const { slug } = useParams();
    const m = getStory(slug);
    useTitle(m ? m.shortTitle : null);
    if (!m) return <NotFound />;
    const { prev, next } = getNeighbors(slug);

    const sections = [];
    const add = (key, title, content, tone) => sections.push({ key, title, content, tone });

    add("beginning", "The beginning", <Paragraphs items={m.beginning} />);

    if (m.kind === "pair") {
        add("compare", "Before and after", <BeforeAfterBlock m={m} />);
    }
    if (m.kind === "framework") {
        add(
            "before",
            m.before.sectionTitle || "My original prompt",
            <PromptEvidence data={m.before} tone="amber" side="before-panel" id="before-prompt" />,
            "amber"
        );
        add("after", "Seven framework rewrites", <FrameworkPicker frameworks={m.frameworks} />);
    }
    if (m.kind === "single") {
        add("prompt", "The prompt", <PromptEvidence data={m.solo} tone="lime" side="solo-panel" id="solo-prompt" />);
    }
    if (m.kind === "process") {
        add("results", "Results of the run", <Stats data={m.stats} />);
    }

    if (m.evolution) {
        add(
            "evolution",
            m.evolution.title || "What changed",
            <EvolutionGrid note={m.evolution.note} items={m.evolution.items} />
        );
    }

    add("learned", "What I learned", <Learned data={m.learned} />);

    if (m.chambers) {
        add(
            "chambers",
            "Six chambers, six rules",
            <div className="grid gap-4 md:grid-cols-2">
                {m.chambers.map((c) => (
                    <div key={c.name} className="ix-evo-card ix-evo-static">
                        <h3 className="ix-evo-title">{c.name}</h3>
                        <p className="ix-evo-text is-ink">{c.lesson}</p>
                    </div>
                ))}
            </div>
        );
    }

    if (m.ledger) {
        add(
            "ledger",
            m.ledger.title,
            <>
                {m.ledger.note && (
                    <p className="mb-6 max-w-2xl text-sm leading-relaxed text-mutew md:text-base">{m.ledger.note}</p>
                )}
                <div className="space-y-5">
                    {m.ledger.items.map((it) => (
                        <PromptBlock
                            key={it.id}
                            label={`${it.id} · ${it.level}`}
                            prompt={it.prompt}
                            tone="ink"
                            chip={it.chip}
                            id={`ledger-${it.id}`}
                        />
                    ))}
                </div>
            </>
        );
    }

    if (m.gallery) {
        add(
            "gallery",
            m.gallery.title,
            <Gallery items={m.gallery.items} />
        );
    }

    if (m.gaps && m.gaps.length > 0) {
        add("notes", "Notes on this activity", <Paragraphs items={m.gaps} />);
    }

    add("reflection", "My reflection", <ReflectionBlock reflection={m.reflection} />);
    add("next", "Continue the journey", <StoryNav prev={prev} next={next} current={m.slug} />);

    return (
        <main id="main" tabIndex={-1} data-testid="story-page" className="pb-24 pt-28 md:pt-40">
            <ReadingProgress />
            <div className="mx-auto max-w-4xl px-5 md:px-10">
                <Reveal>
                    <header className="border-b border-lined pb-10">
                        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">
                            Milestone {m.num} / {String(milestones.length).padStart(2, "0")} · {m.dateLabel}
                        </p>
                        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
                            {m.title.includes(" — ") ? (
                                <>
                                    <span className="ix-h1-kicker">{m.title.split(" — ")[0]}</span>
                                    {m.title.split(" — ").slice(1).join(" ")}
                                </>
                            ) : (
                                m.title
                            )}
                        </h1>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {m.concepts.map((c) => (
                                <span
                                    key={c}
                                    className="rounded-sm border border-lined bg-panel px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-mutew"
                                >
                                    {c}
                                </span>
                            ))}
                        </div>
                    </header>
                </Reveal>

                {sections.map((sec, i) => (
                    <section key={sec.key} className="mt-14 md:mt-16" data-testid={`story-section-${sec.key}`}>
                        <SectionHead letter={String.fromCharCode(65 + i)} title={sec.title} tone={sec.tone} />
                        <Reveal delay={0.05}>{sec.content}</Reveal>
                    </section>
                ))}
            </div>
        </main>
    );
}
