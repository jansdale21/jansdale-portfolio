export const m08 = {
    slug: "ai-personalization",
    num: "03",
    dateLabel: "August 5, 2026",
    title: "AI Personalization — Engineering My Own Custom Instructions",
    shortTitle: "AI Personalization",
    concept: "Meta-prompting",
    concepts: ["Meta-prompting", "Role assignment", "Process control", "Output specification", "Memory policy"],
    summary:
        "Written the same day as Lab Exercise #2. Instead of asking ChatGPT a question, I asked it to interview me — one question at a time — so it could write my own personalisation and memory preferences.",
    preview: "/evidence/08/01_chatgpt-custom-instructions_result.png",
    kind: "single",
    beginning: [
        "I wrote this on August 5, the same day as Lab Exercise #2. It was designed from the start as a tool for improving the tool itself: a prompt whose deliverable is not an answer, but a configuration that every future conversation starts from.",
        "The prompt below makes ChatGPT an interviewer. One question at a time, each building on my previous answers, with follow-ups whenever I am vague — until it has enough to write my personalisation, my response preferences and a memory policy.",
    ],
    solo: {
        promptLabel: "The prompt",
        prompt:
            "I want you to act as an expert personalization consultant for ChatGPT.\n\nYour goal is to create the best possible Personalization (Custom Instructions and Memory preferences) for me through a structured interview.\n\nFollow these rules:\n\n1. Ask me only ONE question at a time.\n\n2. Each question should build on my previous answers.\n\n3. Ask follow-up questions whenever my answer is vague or incomplete.\n\n4. Don't move to the next topic until you have enough information.\n\n5. Prioritize questions that will meaningfully improve future conversations.\n\n6. Challenge assumptions when appropriate instead of simply agreeing with me.\n\n7. At the end of each answer, briefly explain why your next question matters.\n\nCover topics such as:\n\n- What I use ChatGPT for\n- My profession, education, and technical background\n- My current goals and long-term goals\n- My hobbies and interests that are relevant to future conversations\n- My preferred learning style\n- How detailed I like responses\n- Whether I prefer concise answers or comprehensive explanations\n- Whether I want step-by-step reasoning or just the conclusion\n- My preferred formatting (paragraphs, bullet points, tables, checklists)\n- Whether I like examples, analogies, or visual explanations\n- My coding preferences (languages, frameworks, commenting style, best practices)\n- My writing preferences (tone, grammar, level of formality)\n- How I prefer uncertainty to be communicated\n- Whether you should ask clarifying questions before answering\n- How you should handle disagreements or errors in my reasoning\n- What information is worth remembering about me across conversations\n- What information should never be remembered\n- Any recurring projects or workflows I commonly need help with\n\nWhen you believe you have enough information, produce:\n\n1. A polished \"About Me\" section suitable for ChatGPT Personalization.\n\n2. A polished \"How I'd Like ChatGPT to Respond\" section.\n\n3. A recommended Memory policy explaining what ChatGPT should and shouldn't remember.\n\n4. A summary of the reasoning behind each recommendation.\n\n5. Suggestions for anything I may have overlooked that would improve future conversations.\n\nDo not generate the final personalization until the interview is complete. Continue asking questions until you are confident you can produce an excellent result.",
        evidence: [
            {
                src: "/evidence/08/01_chatgpt-custom-instructions_result.png",
                label: "The result",
                caption: "The custom instructions the interview produced, entered in ChatGPT's personalization settings.",
            },
        ],
        outputNote:
            "The screenshot shows the saved result: personalisation and memory preferences written by the interview, stored in ChatGPT settings.",
    },
    learned: {
        paragraphs: [
            "Meta-prompting: the output of this prompt is not text I read once — it is instructions that shape every future conversation. The design effort went into process control: one question at a time, no skipped topics, follow-ups on vague answers, and a justification for every next question.",
            "It also specifies its own deliverables — five required output sections, down to a memory policy for what should and should not be remembered about me. A prompt with acceptance criteria.",
        ],
        principles: ["Role assignment", "One-question-at-a-time", "Challenge assumptions", "Required output sections", "Memory policy"],
    },
    evolution: {
        title: "Anatomy of the prompt",
        items: [
            {
                title: "Role assignment",
                before: "—",
                after: "'Act as an expert personalization consultant for ChatGPT'",
            },
            {
                title: "Process control",
                before: "—",
                after: "Structured interview: one question at a time, building on answers, follow-ups on vague replies",
            },
            {
                title: "Quality rules",
                before: "—",
                after: "Challenge assumptions; justify why each next question matters",
            },
            {
                title: "Output specification",
                before: "—",
                after: "Five required deliverables — from an 'About Me' section to a reasoning summary",
            },
            {
                title: "Persistence",
                before: "—",
                after: "An explicit memory policy: what should and should not be remembered across conversations",
            },
        ],
    },
    reflection: {
        isDraft: false,
        source: "My reflection on AI Personalization.",
        paragraphs: [
            "I wrote this the same day as Lab Exercise #2, where ChatGPT's memory carried the UniConnect details into a brand-new conversation. This prompt works from the other side: instead of observing what the AI remembers, it sets out what should and should not be remembered — and writes the instructions every future conversation starts from.",
            "It builds on what Lab Exercise #1 had already shown me — audience, constraints and explicit output requirements — and pushes further: a defined role, rules for how the interview runs, and five required deliverables. Looking back, it was an early version of the structured prompts I would later learn to name in the frameworks exercise.",
        ],
    },
    gallery: null,
    gaps: [
        "The document covers ChatGPT, Gemini and Claude; the result shown here is from ChatGPT.",
    ],
};
