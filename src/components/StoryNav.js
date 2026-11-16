import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronDown, Map } from "lucide-react";
import { milestones } from "@/data/milestones";

// Dropdown under the previous/next cards: jump straight to any other milestone.
function JumpTo({ current }) {
    const navigate = useNavigate();
    return (
        <div className="ix-jump">
            <label htmlFor="jump-to-milestone" className="ix-jump-label">
                Jump to a milestone
            </label>
            <div className="ix-jump-field">
                <select
                    id="jump-to-milestone"
                    data-testid="story-jump-select"
                    value={current}
                    onChange={(e) => navigate(`/journey/${e.target.value}`)}
                >
                    {milestones.map((m) => (
                        <option key={m.slug} value={m.slug}>
                            {m.num} · {m.shortTitle}
                            {m.slug === current ? " (this story)" : ""}
                        </option>
                    ))}
                </select>
                <ChevronDown size={16} aria-hidden="true" />
            </div>
        </div>
    );
}

export default function StoryNav({ prev, next, current }) {
    return (
        <>
        <nav
            data-testid="story-navigation"
            className="grid gap-4 md:grid-cols-[1fr_auto_1fr]"
        >
            {prev ? (
                <Link
                    to={`/journey/${prev.slug}`}
                    data-testid="story-nav-prev"
                    className="group rounded-lg border border-lined bg-panel p-5 transition-colors hover:border-lime/40"
                >
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-faintw">
                        <ArrowLeft size={12} /> Previous story
                    </span>
                    <span className="mt-2 block font-display text-sm font-bold text-ink group-hover:text-lime md:text-base">
                        {prev.num} · {prev.shortTitle}
                    </span>
                </Link>
            ) : (
                <div className="hidden md:block" />
            )}
            <Link
                to="/journey"
                data-testid="story-nav-back"
                className="flex items-center justify-center gap-2 self-stretch rounded-lg border border-lined bg-panel p-5 font-mono text-[10px] uppercase tracking-[0.25em] text-mutew transition-colors hover:border-lime/40 hover:text-lime"
            >
                <Map size={13} /> Back to journey
            </Link>
            {next ? (
                <Link
                    to={`/journey/${next.slug}`}
                    data-testid="story-nav-next"
                    className="group rounded-lg border border-lined bg-panel p-5 text-right transition-colors hover:border-lime/40"
                >
                    <span className="flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-faintw">
                        Next story <ArrowRight size={12} />
                    </span>
                    <span className="mt-2 block font-display text-sm font-bold text-ink group-hover:text-lime md:text-base">
                        {next.num} · {next.shortTitle}
                    </span>
                </Link>
            ) : (
                <div className="hidden md:block" />
            )}
        </nav>
        <JumpTo current={current} />
        </>
    );
}
