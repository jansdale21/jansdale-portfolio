export const m06 = {
    slug: "lost-context-archive",
    num: "07",
    dateLabel: "September 2, 2026",
    title: "Context Management — The Lost Context Archive: Protocol Ground Truth",
    shortTitle: "The Lost Context Archive",
    concept: "Choosing what the AI remembers",
    concepts: [
        "Current vs. outdated facts",
        "Shortening history",
        "Checking evidence",
        "Handling conflicting facts",
        "Keeping only what's needed",
        "Priority rules",
    ],
    summary:
        "An individual game about keeping what an AI remembers accurate. Six chambers each taught a rule for managing context, and the fragments they paid out formed the final key, QRATES.",
    preview: "/evidence/06/page-2.png",
    kind: "process",
    beginning: [
        "The Lost Context Archive was an individual ChatGPT game about managing context. There were six chambers, each with one rule for keeping the AI's memory accurate. They were the State Vault, the Compression Engine, the Evidence Gate, the Contradiction Engine, the Minimal Context Lock and the Final Priority Test.",
        "The ledger describes what each submitted prompt achieved. They set out the current facts while marking old ones as outdated, shortened the history without turning unproven claims into facts, let the latest correction win, and kept only what the task needed.",
    ],
    stats: [
        { value: "6 / 6", label: "chambers passed, every one on attempt 1" },
        { value: "Q·R·A·T·E·S", label: "fragments earned across the chambers" },
        { value: "QRATES", label: "final key, accepted with the archive fully restored" },
        { value: "1,110", label: "of 1,500 estimated tokens remaining" },
        { value: "0", label: "hint or recovery fees, no integrity flags" },
    ],
    chambers: [
        {
            name: "Chamber 1 · The State Vault",
            lesson: "Keep the current facts, mark old ones as outdated, leave out anything irrelevant or private, and point out the question that is still open.",
        },
        {
            name: "Chamber 2 · The Compression Engine",
            lesson: "Shorten the history to only what matters, without turning unproven claims into facts.",
        },
        {
            name: "Chamber 3 · The Evidence Gate",
            lesson: "Never mix proven claims with unproven ones. Anything unproven stays labelled that way.",
        },
        {
            name: "Chamber 4 · The Contradiction Engine",
            lesson: "When two facts conflict, the latest correction wins, and the old value is marked as outdated instead of quietly deleted.",
        },
        {
            name: "Chamber 5 · The Minimal Context Lock",
            lesson: "Give the AI only what the task needs. Sharing less is part of getting it right.",
        },
        {
            name: "Chamber 6 · The Final Priority Test",
            lesson: "Apply the priority rules to the end and never invent missing information.",
        },
    ],
    learned: {
        paragraphs: [
            "Context is not whatever I remember to type. It is something I have to choose carefully. Current facts stay, old facts get marked as outdated, unproven claims stay labelled, and the latest correction wins.",
            "The chambers also made privacy part of the job. The State Vault left out a portal login detail, and the Minimal Context Lock cut everything down to what the task actually needed. The right context is usually less context.",
        ],
        principles: ["Tracking what's current", "Checking evidence", "Handling conflicting facts", "Keeping only what's needed", "Priority rules"],
    },
    evolution: null,
    reflection: {
        isDraft: false,
        source: "My reflection on Context Management and Retrieval Aware Prompt.",
        paragraphs: [
            "The archive taught me to treat context as something to choose carefully, not just collect. Keep what is current, mark what is outdated, separate proven claims from unproven ones, and give only what the task needs. Never inventing a missing answer turned out to be a rule I could write down, not just hope for.",
            "It connected back to Lab Exercise #2, where ChatGPT's memory carried the UniConnect details into a brand-new conversation. This time I was writing the rules for what the AI keeps, instead of just observing it.",
        ],
    },
    gallery: {
        title: "The full ledger, page by page",
        items: [
            { src: "/evidence/06/page-1.png", label: "Ledger · page 1", caption: "The finalized ledger, with 6/6 chambers passed, final key QRATES and the archive fully restored." },
            { src: "/evidence/06/page-2.png", label: "Ledger · page 2", caption: "The detailed archive report, showing overall completion and the start of Chamber 1, the State Vault." },
            { src: "/evidence/06/page-3.png", label: "Ledger · page 3", caption: "The rest of Chamber 1 and its puzzle, then the start of Chamber 2." },
            { src: "/evidence/06/page-4.png", label: "Ledger · page 4", caption: "Chamber 2 (the Compression Engine) and Chamber 3 (the Evidence Gate)." },
            { src: "/evidence/06/page-5.png", label: "Ledger · page 5", caption: "Chamber 4 (the Contradiction Engine) and the start of Chamber 5." },
            { src: "/evidence/06/page-6.png", label: "Ledger · page 6", caption: "The end of Chamber 5, Chamber 6 (the Final Priority Test) and the fragment ledger." },
            { src: "/evidence/06/page-7.png", label: "Ledger · page 7", caption: "The final key QRATES accepted, and the token record chamber by chamber." },
            { src: "/evidence/06/page-8.png", label: "Ledger · page 8", caption: "Performance summary with the principles the run demonstrated." },
            { src: "/evidence/06/page-9.png", label: "Ledger · page 9", caption: "Final status, with 6/6 chambers, key QRATES and the archive fully restored." },
        ],
    },
    gaps: [
        "The final ledger records what each chamber's prompt achieved, chamber by chamber, rather than reproducing the prompts.",
    ],
};
