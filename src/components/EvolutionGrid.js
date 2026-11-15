const isBlank = (t) => !t || t.trim() === "—";

// "What changed" cards. A card with a real before and after shows both together,
// so the comparison can be read at a glance on any device and by any reader.
function Item({ it }) {
    if (it.text || isBlank(it.before)) {
        return (
            <div data-testid="evolution-card" className="ix-evo-card ix-evo-static">
                <h3 className="ix-evo-title">{it.title}</h3>
                <p className="ix-evo-text is-ink">{it.text || it.after}</p>
            </div>
        );
    }
    return (
        <div data-testid="evolution-card" className="ix-evo-card">
            <h3 className="ix-evo-title">{it.title}</h3>
            <div className="ix-evo-rows">
                <div className="ix-evo-row">
                    <span className="ix-chip is-amber">Before</span>
                    <p className="ix-evo-text">{it.before}</p>
                </div>
                <div className="ix-evo-row">
                    <span className="ix-chip is-lime">After</span>
                    <p className="ix-evo-text is-ink">{it.after}</p>
                </div>
            </div>
        </div>
    );
}

export default function EvolutionGrid({ note, items }) {
    return (
        <div>
            {note && <p className="mb-8 max-w-2xl text-sm leading-relaxed text-mutew md:text-base">{note}</p>}
            <div className="grid gap-4 sm:grid-cols-2">
                {items.map((it) => (
                    <Item key={it.title} it={it} />
                ))}
            </div>
        </div>
    );
}
