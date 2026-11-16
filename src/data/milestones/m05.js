export const m05 = {
    slug: "labyrinth",
    num: "06",
    dateLabel: "August 26, 2026",
    title: "Lab Quiz (Conversational UX) — The Labyrinth",
    shortTitle: "The Labyrinth",
    concept: "Fixing a prompt and trying again",
    concepts: ["Intent", "Asking for details", "Branching paths", "Confirming first", "Recovering from errors", "Trust & safety"],
    summary:
        "A second escape game on the same day, but this time the prompt was judged, not the answer. Six levels tested a campus assistant's behaviour, and the one level that took two attempts became my favourite before/after of the semester.",
    preview: "/evidence/05/page-2.png",
    miniBefore: "TRUST REPAIR PROMPT: Respond safely to a user requesting a login help…",
    miniAfter: "…Refuse passwords and do not repeat secrets. Tell the user to change the password that was exposed.",
    miniNote: "The one sentence that took Level 6 from REVISION REQUIRED to LEVEL CLEARED",
    kind: "pair",
    beginning: [
        "The second lab quiz flipped the perspective. Instead of prompting for answers, I was prompting a campus-support assistant's behaviour. Six levels (The Vague Entrance, The Slot Chamber, The Branching Hallway, The Confirmation Trap, The Endless Loop and The Trust Vault) each judged the repair prompt I wrote, not the text it produced.",
        "Levels 1 to 5 cleared on the first attempt. Level 6 did not, and the one-sentence revision that fixed it is the clearest lesson of my whole semester about saying exactly what I need.",
    ],
    learned: {
        paragraphs: [
            "If a requirement matters, write it down and never imply it. The first Trust Vault prompt said 'respond safely' and listed what to refuse, but never told the AI to advise changing the exposed password. The hidden criteria caught the omission instantly.",
            "The report itself said that safety steps like this should be stated outright, not implied.",
        ],
        principles: ["Say it, don't imply it", "Fix and retry", "Trust & safety", "Writing clear rules"],
    },
    before: {
        sectionTitle: "Attempt 1 at Level 6",
        promptLabel: "P6, attempt 1",
        prompt:
            "TRUST REPAIR PROMPT: Respond safely to a user requesting a login help. Refuse passwords and do not repeat secrets. Respect accessibility needs, avoid unnecessary medical information, offer accessible alternatives, and provide human escalation without claiming authority or completion.",
        evidence: [
            {
                src: "/evidence/05/page-3.png",
                label: "Prompt ledger page",
                caption: "The prompt ledger page with P6 at the bottom (attempt 1, REVISION REQUIRED).",
            },
        ],
        outputNote:
            "REVISION REQUIRED. The prompt left out the requirement to advise changing an exposed password.",
        resultChip: { text: "REVISION REQUIRED", tone: "amber" },
    },
    after: {
        sectionTitle: "Attempt 2",
        promptLabel: "P7, attempt 2",
        prompt:
            "TRUST REPAIR PROMPT: Respond safely to a user requesting a login help. Refuse passwords and do not repeat secrets. Tell the user to change the password that was exposed. Respect accessibility needs, avoid unnecessary medical information, offer accessible alternatives, and provide human escalation without claiming authority or completion.",
        evidence: [
            {
                src: "/evidence/05/page-4.png",
                label: "Prompt ledger page",
                caption: "The prompt ledger page with P7 at the top (attempt 2, LEVEL CLEARED).",
            },
        ],
        outputNote:
            "LEVEL CLEARED, with 6/6 criteria satisfied.",
        resultChip: { text: "LEVEL CLEARED", tone: "lime" },
    },
    evolution: {
        items: [
            {
                title: "Fix and retry",
                before: "Attempt 1, REVISION REQUIRED",
                after: "Attempt 2, LEVEL CLEARED",
            },
            {
                title: "Saying it outright",
                before: "Changing the password was only implied by 'respond safely'",
                after: "Stated outright in one sentence, 'Tell the user to change the password that was exposed.'",
            },
        ],
    },
    ledger: {
        title: "The complete prompt ledger",
        note: "Each of these repair prompts cleared its level on the first attempt.",
        items: [
            {
                id: "P1",
                level: "Level 1, The Vague Entrance",
                prompt:
                    "[REPAIR PROMPT]: Act as a campus assistant. Do not request passwords or sensitive data. Acknowledge the access issue without assuming the cause. Ask exactly one short question to identify whether the user forgot credentials, sees an error message, or if others are affected.",
            },
            {
                id: "P2",
                level: "Level 2, The Slot Chamber",
                prompt:
                    "[SLOT REPAIR PROMPT]: Create a short Wi-Fi support dialogue. Collect only needed details: location, device, error, time, and whether one or multiple users are affected. Never ask for passwords. Troubleshoot one device problems and escalate possible outages.",
            },
            {
                id: "P3",
                level: "Level 3, The Branching Hallway",
                prompt:
                    "[FLOW REPAIR PROMPT]: Create an enrollment assistant workflow table with columns State, Known Information, Assistant Action, User Options, Next Condition. Include OPEN, IDENTIFY INTENT, COLLECT DETAILS, FULFILL, and CLOSE/ESCALATE. Branch only by applicant type and program when needed. Do not invent deadlines or records.",
            },
            {
                id: "P4",
                level: "Level 4, The Confirmation Trap",
                prompt:
                    "CONFIRMATION REPAIR PROMPT: Create a short dialogue that clarify which application the user wants to cancel. Do not claim cancellation happened. Before any request preparation, summarize the action and ask for explicit confirmation. Offer human assistance.",
            },
            {
                id: "P5",
                level: "Level 5, The Endless Loop",
                prompt:
                    "RECOVERY REPAIR PROMPT: Create a four-stage recovery ladder. Stage 1 rephrase the request, Stage 2 provide clear choices, Stage 3 offer another input method, Stage 4 escalate to human support. Do not repeat the same question. Keep language concise and respectful.",
            },
            {
                id: "P8",
                level: "Final Boss, The Core System",
                prompt:
                    "FINAL MASTER PROMPT: You are a helpful CCS campus assistant. Clarify unclear requests, collect only necessary information, never request passwords or secrets, maintain corrected context, branch between individual issues and outages, confirm before consequential actions, provide recovery steps, respect accessibility needs, admit uncertainty, and escalate to authorized staff when needed. Use concise plain language.",
                chip: { text: "BOSS DEFEATED on attempt 1", tone: "lime" },
            },
        ],
    },
    reflection: {
        isDraft: false,
        source: "My reflection on Lab Quiz (Conversational UX).",
        paragraphs: [
            "Across six levels and a final boss, only one level needed a second attempt, and the fix was a single sentence. It made the lesson impossible to miss. Anything I leave implied, the AI has to guess, and guessing is exactly what a good prompt is supposed to prevent.",
            "Writing prompts that control how the assistant behaves ('never ask for passwords', 'confirm before consequential actions') felt like writing tests for a system I could not see. That mindset carried directly into the agentic AI activity that closed my semester.",
        ],
    },
    gallery: {
        title: "The full report, page by page",
        items: [
            { src: "/evidence/05/page-1.png", label: "Report · page 1", caption: "Level 6 and Final Boss results, cleared with 10/10 boss criteria." },
            { src: "/evidence/05/page-2.png", label: "Report · page 2", caption: "The final report (COMPLETED, exit code CUX-ESCAPED) and the start of the prompt ledger." },
            { src: "/evidence/05/page-3.png", label: "Report · page 3", caption: "The prompt ledger, P3 to P6." },
            { src: "/evidence/05/page-4.png", label: "Report · page 4", caption: "P7 and the final master prompt, then the results for Levels 1 and 2." },
            { src: "/evidence/05/page-5.png", label: "Report · page 5", caption: "Results for Levels 3 to 6 and the Final Boss." },
            { src: "/evidence/05/page-6.png", label: "Report · page 6", caption: "The final boss's five test results and the performance summary." },
        ],
    },
    gaps: [],
};
