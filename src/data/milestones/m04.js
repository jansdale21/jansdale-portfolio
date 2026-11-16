export const m04 = {
    slug: "prompt-vault",
    num: "05",
    dateLabel: "August 26, 2026",
    title: "Lab Quiz (Prompt Engineering) — The Prompt Vault Escape Game",
    shortTitle: "The Prompt Vault",
    concept: "Prompting under pressure",
    concepts: ["Blank-Slate", "Pattern", "Identity", "RTCFC", "COSTAR", "RACE"],
    summary:
        "An escape game run inside ChatGPT, with six locks that each guarded a prompting technique, then a Master Vault boss. Every lock cleared on the first attempt, and the vault was escaped.",
    preview: "/evidence/04/page-1.png",
    kind: "process",
    beginning: [
        "The first lab quiz put prompting under game pressure. An escape game ran inside ChatGPT with six locks (Blank-Slate, Pattern, Identity, RTCFC, COSTAR and RACE). Each one opened only for a prompt that met hidden criteria. After them came a final Master Vault boss and an exit code.",
        "Fifteen prompts were counted in the ledger. Every system test passed on the first attempt, every puzzle was solved independently, and the exit code QBMTLR was verified on the first guess.",
    ],
    stats: [
        { value: "ESCAPED", label: "Final vault status" },
        { value: "6 / 6", label: "locks cleared on the first system-test attempt" },
        { value: "6 / 6", label: "puzzles solved independently" },
        { value: "1", label: "attempt used to defeat the Master Vault" },
        { value: "527", label: "of 1,500 estimated tokens used" },
        { value: "0", label: "hints, rescue fees or integrity flags" },
    ],
    learned: {
        paragraphs: [
            "Under escape-room pressure, concise beats clever. The final report named RTCFC as the strongest technique of the run and the compact Lock 6 RACE prompt as the most efficient successful prompt. It cleared every criterion on its first attempt with a small, tight structure.",
            "The report also named what to improve, which was to make fallback and edge-case behaviour slightly more explicit while keeping prompts concise. The Labyrinth game later that day tested exactly that. Its one level that needed a second attempt failed on a requirement I had left implied.",
        ],
        principles: ["Token economy", "Compact structure", "Explicit fallbacks"],
    },
    evolution: {
        title: "What carried the boss prompt",
        items: [
            {
                title: "Structure",
                text: "RTCFC was the structure of the Master Vault prompt.",
            },
            {
                title: "Role",
                text: "A campus IT triage role for the assistant.",
            },
            {
                title: "Output control",
                text: "Four examples supplied and the required output format specified.",
            },
            {
                title: "Safety",
                text: "The prompt prohibited handling authentication secrets.",
            },
            {
                title: "Room to improve",
                text: "The report asked for more explicit fallback and edge-case behaviour.",
            },
        ],
    },
    reflection: {
        isDraft: false,
        source: "My reflection on Lab Quiz (Prompt Engineering).",
        paragraphs: [
            "The Vault made prompting feel like a budget. I used 527 of the estimated 1,500 tokens for the whole run, with no hints and no rescue fees. A short prompt that meets every criterion beats a long one that hopes to.",
        ],
    },
    gallery: {
        title: "The full report, page by page",
        items: [
            { src: "/evidence/04/page-1.png", label: "Report · page 1", caption: "The final vault report, with the team, status VAULT ESCAPED and 6/6 locks cleared." },
            { src: "/evidence/04/page-2.png", label: "Report · page 2", caption: "Keys, final boss result and token wallet, then the start of the prompt ledger (P1–P4)." },
            { src: "/evidence/04/page-3.png", label: "Report · page 3", caption: "The rest of the prompt ledger (P5–P15). Every attempt passed or unlocked." },
            { src: "/evidence/04/page-4.png", label: "Report · page 4", caption: "Lock-by-lock results from Lock 1 Blank-Slate to Lock 3 Identity." },
            { src: "/evidence/04/page-5.png", label: "Report · page 5", caption: "Lock 4 RTCFC, Lock 5 COSTAR and Lock 6 RACE, each passed on the first attempt." },
            { src: "/evidence/04/page-6.png", label: "Report · page 6", caption: "The final boss, with the Master Vault prompt and its four hidden-test results." },
            { src: "/evidence/04/page-7.png", label: "Report · page 7", caption: "Performance summary with the strongest framework, the most efficient prompt, and what to improve." },
        ],
    },
    gaps: [],
};
