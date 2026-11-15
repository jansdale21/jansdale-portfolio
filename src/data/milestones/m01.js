export const m01 = {
    slug: "lab-exercise-1",
    num: "01",
    dateLabel: "July 25, 2026",
    title: "Lab Exercise #1 — Exploring & Comparing Modern Conversational AI Platforms",
    shortTitle: "Comparing AI Platforms",
    concept: "Prompt specificity",
    concepts: ["Audience", "Constraints", "Specificity", "Output format"],
    summary:
        "I compared ChatGPT, Google Gemini and Claude with the same prompts — then a prompt-modification experiment showed me, in my own screenshots, exactly how much the wording of a prompt controls the answer.",
    preview: "/evidence/01/01_BEFORE_basic-prompt_and_ai-output.png",
    miniBefore: "Tell me about cybersecurity.",
    miniAfter: "You are explaining cybersecurity to first-year IT students…",
    miniNote: "The prompt modification experiment",
    kind: "pair",
    shots: "pair",
    beginning: [
        "Lab Exercise #1 was my first structured hands-on with the three major conversational AI platforms. I explored ChatGPT, Google Gemini and Claude feature by feature, then gave all three the same prompts and scored the responses on five criteria. Claude finished first overall — clearest and most complete — but all three were equally accurate on the same prompts.",
        "The turning point was the prompt-modification experiment: run one deliberately basic prompt, then a fully specified version of the same question, and compare the two outputs side by side. That is where I first saw, with my own screenshots, how much a prompt is a specification — not just a question.",
    ],
    learned: {
        paragraphs: [
            "A prompt is a specification. When I named the audience, capped the length, fixed the scope and demanded a format, the AI stopped improvising and started delivering exactly the artifact I needed. Every one of those four levers showed up visibly in the output.",
            "Naming the audience mattered most: with 'first-year IT students' as the reader, the jargon disappeared and the examples became relatable.",
        ],
        principles: ["Audience", "Word limits", "Scope", "Output format"],
    },
    before: {
        promptLabel: "Original prompt",
        prompt: "Tell me about cybersecurity.",
        evidence: [
            {
                src: "/evidence/01/01_BEFORE_basic-prompt_and_ai-output.png",
                label: "Original prompt & AI output",
                caption: "The basic prompt and the AI's answer.",
            },
        ],
        outputNote:
            "The answer covered a wide scope in technical language — useful as a general overview, but written for no one in particular.",
    },
    after: {
        promptLabel: "Improved prompt",
        prompt:
            "You are explaining cybersecurity to first-year IT students with no professional cybersecurity experience. In 200 words or fewer, explain what cybersecurity is, give three common cybersecurity threats, and provide one real-world example for each. Use simple language and organize the answer using headings and bullet points.",
        evidence: [
            {
                src: "/evidence/01/02_AFTER_detailed-prompt_and_ai-output.png",
                label: "Improved prompt & AI output",
                caption: "The improved prompt and the AI's answer — focused, with headings, bullets and one example per threat.",
            },
        ],
        outputNote:
            "Focused, concise, beginner-friendly: exactly three threats, one clear example each, organised with headings.",
    },
    evolution: {
        items: [
            {
                title: "Audience & context",
                before: "Not specified — the AI picked its own reader",
                after: "First-year IT students with no professional cybersecurity experience",
            },
            {
                title: "Constraints",
                before: "No length limit — the answer could sprawl",
                after: "200 words or fewer",
            },
            {
                title: "Specificity",
                before: "Open-ended: 'tell me about…'",
                after: "Exactly three threats, each with one real-world example",
            },
            {
                title: "Output requirements",
                before: "Free-form paragraphs",
                after: "Simple language, organised with headings and bullet points",
            },
        ],
    },
    reflection: {
        isDraft: false,
        source: "My reflection on Lab Exercise #1.",
        paragraphs: [
            "ChatGPT, Google Gemini and Claude can all answer questions, analyze files and images, search the web and keep context — but they are not the same. They differed in interface, response style, features and how much detail they gave. On the same prompts all three were equally accurate, yet Claude's answers were the clearest and most complete.",
            "The bigger lesson was that the prompt matters as much as the platform. My basic prompt got a general overview; the detailed one — written for first-year IT students, in plain language, with one example per threat and a 200-word limit — got a focused answer that was easy to read. What I get back depends on both the tool and the instructions I give it.",
        ],
    },
    gallery: {
        title: "The full activity, in order",
        items: [
            {
                src: "/evidence/01-doc/page-1.png",
                label: "Document · page 1",
                caption: "Exploring the three platforms — ChatGPT, Gemini and Claude compared feature by feature.",
            },
            {
                src: "/evidence/01-doc/page-2.png",
                label: "Document · page 2",
                caption: "The same prompts on all three platforms, scored on five criteria.",
            },
            {
                src: "/evidence/01-doc/page-3.png",
                label: "Document · page 3",
                caption: "The rest of the scores and my answers to the analysis questions — Claude best overall at 25, ChatGPT 23, Gemini 21.",
            },
            {
                src: "/evidence/01-doc/page-4.png",
                label: "Document · page 4",
                caption: "The prompt modification experiment, step 1: the basic prompt and the AI's answer.",
            },
            {
                src: "/evidence/01-doc/page-5.png",
                label: "Document · page 5",
                caption: "The improved prompt's answer, and the start of my side-by-side comparison of the two responses.",
            },
            {
                src: "/evidence/01-doc/page-6.png",
                label: "Document · page 6",
                caption: "The rest of the comparison and my answers on what changed and why the audience mattered.",
            },
            {
                src: "/evidence/01-doc/page-7.png",
                label: "Document · page 7",
                caption: "My written reflection, as submitted.",
            },
        ],
    },
    gaps: [],
};
