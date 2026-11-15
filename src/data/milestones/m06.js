export const m06 = {
    slug: "lost-context-archive",
    num: "07",
    dateLabel: "September 2, 2026",
    title: "Context Management — The Lost Context Archive: Protocol Ground Truth",
    shortTitle: "The Lost Context Archive",
    concept: "Context as a curated resource",
    concepts: [
        "Current vs. superseded state",
        "Compression",
        "Evidence gating",
        "Contradiction resolution",
        "Data minimisation",
        "Priority rules",
    ],
    summary:
        "An individual game about keeping an AI's working memory truthful: six chambers, each a rule for managing context — and a final key, QRATES, assembled from the fragments each chamber paid out.",
    preview: "/evidence/06/page-2.png",
    kind: "process",
    beginning: [
        "The Lost Context Archive was an individual ChatGPT game about managing context. Six chambers, each enforcing one rule of truthful working memory: the State Vault, the Compression Engine, the Evidence Gate, the Contradiction Engine, the Minimal Context Lock and the Final Priority Test.",
        "The ledger describes what each submitted prompt achieved — establishing current state while marking superseded facts, compressing history without promoting unsupported claims into facts, letting the latest explicit correction win, and keeping only what the task needs.",
    ],
    stats: [
        { value: "6 / 6", label: "chambers passed — every one on attempt 1" },
        { value: "Q·R·A·T·E·S", label: "fragments earned across the chambers" },
        { value: "QRATES", label: "final key — accepted, archive fully restored" },
        { value: "1,110", label: "of 1,500 estimated tokens remaining" },
        { value: "0", label: "hint or recovery fees, no integrity flags" },
    ],
    chambers: [
        {
            name: "Chamber 1 — The State Vault",
            lesson: "Keep the current state, mark superseded facts, exclude irrelevant and sensitive data, and surface the unresolved question.",
        },
        {
            name: "Chamber 2 — The Compression Engine",
            lesson: "Compress the available history into a minimal session state — without turning unsupported claims into facts.",
        },
        {
            name: "Chamber 3 — The Evidence Gate",
            lesson: "Verified and unsupported claims must never be mixed; unsupported stays labelled unsupported.",
        },
        {
            name: "Chamber 4 — The Contradiction Engine",
            lesson: "When facts collide, the latest explicit correction wins — and the superseded value is marked, not deleted silently.",
        },
        {
            name: "Chamber 5 — The Minimal Context Lock",
            lesson: "Carry only the context the task needs — data minimisation is part of correctness.",
        },
        {
            name: "Chamber 6 — The Final Priority Test",
            lesson: "Apply the priority rules to the end: never invent missing information.",
        },
    ],
    learned: {
        paragraphs: [
            "Context is not whatever I remember to type — it is a curated resource. Current state stays, superseded state gets marked as superseded, unsupported claims stay labelled, and the latest explicit correction wins.",
            "The chambers also made privacy operational: the State Vault excluded a portal credential and the Minimal Context Lock stripped the context down to what the task actually needed. Correct context is minimal context.",
        ],
        principles: ["State tracking", "Evidence gating", "Contradiction resolution", "Data minimisation", "Priority rules"],
    },
    evolution: null,
    reflection: {
        isDraft: false,
        source: "My reflection on Context Management and Retrieval Aware Prompt.",
        paragraphs: [
            "The archive taught me to treat context as something to curate, not just collect: keep what is current, mark what is superseded, separate verified claims from unsupported ones, and carry only what the task needs. Never inventing a missing answer turned out to be a rule I could write down, not just hope for.",
            "It connected back to Lab Exercise #2, where ChatGPT's memory carried the UniConnect details into a brand-new conversation. This time I was writing the rules for what the AI keeps, instead of just observing it.",
        ],
    },
    gallery: {
        title: "The full ledger, page by page",
        items: [
            { src: "/evidence/06/page-1.png", label: "Ledger · page 1", caption: "The finalized ledger — 6/6 chambers passed, final key QRATES, archive fully restored." },
            { src: "/evidence/06/page-2.png", label: "Ledger · page 2", caption: "The detailed archive report — overall completion and the start of Chamber 1, the State Vault." },
            { src: "/evidence/06/page-3.png", label: "Ledger · page 3", caption: "The rest of Chamber 1 and its puzzle, then the start of Chamber 2." },
            { src: "/evidence/06/page-4.png", label: "Ledger · page 4", caption: "Chamber 2 — the Compression Engine — and Chamber 3, the Evidence Gate." },
            { src: "/evidence/06/page-5.png", label: "Ledger · page 5", caption: "Chamber 4 — the Contradiction Engine — and the start of Chamber 5." },
            { src: "/evidence/06/page-6.png", label: "Ledger · page 6", caption: "The end of Chamber 5, Chamber 6 — the Final Priority Test — and the fragment ledger." },
            { src: "/evidence/06/page-7.png", label: "Ledger · page 7", caption: "The final key QRATES accepted, and the token record chamber by chamber." },
            { src: "/evidence/06/page-8.png", label: "Ledger · page 8", caption: "Performance summary — the principles the run demonstrated." },
            { src: "/evidence/06/page-9.png", label: "Ledger · page 9", caption: "Final status: 6/6 chambers, key QRATES, archive fully restored." },
        ],
    },
    gaps: [
        "The final ledger records what each chamber's prompt achieved, chamber by chamber, rather than reproducing the prompts.",
    ],
};
