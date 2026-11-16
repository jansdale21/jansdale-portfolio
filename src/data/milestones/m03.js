export const m03 = {
    slug: "lab-exercise-3",
    num: "04",
    dateLabel: "August 19, 2026",
    title: "Lab Exercise #3 — One Prompt, Seven Prompt-Engineering Frameworks",
    shortTitle: "Prompt Frameworks",
    concept: "Frameworks as structure",
    concepts: ["RTCFC", "COSTAR", "RISEN", "CRAFT", "RACE", "TRACE", "CRISPE"],
    summary:
        "I took one bare three-word prompt ('Explain subnetting.') and rewrote it into seven different prompt-engineering frameworks, mapping every component letter by letter.",
    preview: "/evidence/03/page-1.png",
    kind: "framework",
    beginning: [
        "By the third lab exercise the question changed. It was no longer 'what makes a prompt good?' but 'can a good prompt be engineered systematically?' The task was to take one bare three-word prompt and convert it into seven different prompt-engineering frameworks, component by component.",
        "Each framework is a different checklist for the same job. RTCFC starts from Role and Task, COSTAR from Context and Objective, and CRISPE from Capacity and Insight. Yet all seven land on the same principles. Say who the AI is, who the reader is, what exactly to do, and what the answer should look like.",
    ],
    learned: {
        paragraphs: [
            "Frameworks turn prompting from improvisation into structure. Once each letter is a component you can deliberately include or leave out, you stop hoping for a good answer and start constructing one.",
        ],
        principles: ["RTCFC", "COSTAR", "RISEN", "CRAFT", "RACE", "TRACE", "CRISPE"],
    },
    before: {
        promptLabel: "Original prompt",
        prompt: "Explain subnetting.",
        evidence: [],
        outputNote:
            "Just three words, with no role, no audience, no format and no limits. Every rewrite below starts from this same sentence.",
    },
    frameworks: [
        {
            name: "RTCFC",
            full: "Role · Task · Context · Format · Constraint",
            components: [
                { k: "Role", v: "Networking Instructor" },
                { k: "Task", v: "Explain the concept of subnetting" },
                { k: "Context", v: "The learner is studying basic networking and needs to understand subnetting, its purpose, and its application" },
                { k: "Format", v: "Structured sections with definitions, explanations, and examples" },
                { k: "Constraint", v: "Simple language suitable for beginners; avoid overly advanced concepts" },
            ],
            prompt:
                "Act as a networking instructor. Explain the concept of subnetting to a beginner who is studying networking. Discuss what subnetting is, why it is used, and how it works. Present the explanation using organized sections with definitions, explanations, and simple examples. Use beginner-friendly language and avoid overly advanced networking concepts.",
        },
        {
            name: "COSTAR",
            full: "Context · Objective · Style · Tone · Audience · Response",
            components: [
                { k: "Context", v: "A beginner wants to learn about subnetting" },
                { k: "Objective", v: "Explain subnetting, including its purpose and basic operation" },
                { k: "Style", v: "Educational, structured, and easy to understand" },
                { k: "Tone", v: "Friendly and informative" },
                { k: "Audience", v: "Students with limited networking knowledge" },
                { k: "Response", v: "Provide a clear explanation with examples" },
            ],
            prompt:
                "A beginner student in networking wants to understand subnetting. Explain what subnetting is, why it is important, and how it works. Use an educational and structured style with a friendly and informative tone. Write the explanation for students with limited networking knowledge. Provide a clear response with simple examples to demonstrate the concept.",
        },
        {
            name: "RISEN",
            full: "Role · Instructions · Steps · End Goal · Narrowing",
            components: [
                { k: "Role", v: "Networking instructor" },
                { k: "Instructions", v: "Explain subnetting clearly for beginners" },
                { k: "Steps", v: "Define subnetting, explain purpose, describe process, and provide example" },
                { k: "End Goal", v: "Help learners understand the fundamentals of subnetting" },
                { k: "Narrowing", v: "Focus only on basic concepts and avoid advanced subnet calculations" },
            ],
            prompt:
                "Act as a networking instructor. Explain subnetting clearly for a beginner audience. Follow these steps: (1) define subnetting, (2) explain why subnetting is used, (3) describe how subnetting works, and (4) provide a simple example. The goal is to help learners understand the fundamental concepts of subnetting. Focus only on basic concepts and avoid advanced subnetting methods.",
        },
        {
            name: "CRAFT",
            full: "Context · Role · Action · Format · Target",
            components: [
                { k: "Context", v: "A student is learning basic networking" },
                { k: "Role", v: "Experienced networking teacher" },
                { k: "Action", v: "Explain subnetting, its purpose, and how it works" },
                { k: "Format", v: "Organized sections and examples" },
                { k: "Target", v: "Beginner networking students" },
            ],
            prompt:
                "A student learning basic networking needs to understand subnetting. Act as an experienced networking teacher and explain what subnetting is, why it is used, and how it works. Organize the explanation into clear sections and include simple examples. Make the explanation suitable for beginner networking students.",
        },
        {
            name: "RACE",
            full: "Role · Action · Context · Expectation",
            components: [
                { k: "Role", v: "Networking expert" },
                { k: "Action", v: "Explain subnetting accurately and clearly" },
                { k: "Context", v: "The learner has little knowledge about networking" },
                { k: "Expectation", v: "The learner should understand the meaning, purpose, and basic process of subnetting" },
            ],
            prompt:
                "Act as a networking expert. Explain subnetting accurately and clearly to a learner who has limited networking knowledge. Explain what subnetting means, why it is useful, and how it allows networks to be divided into smaller networks. Ensure that the learner understands the basic purpose and process of subnetting by the end of the explanation.",
        },
        {
            name: "TRACE",
            full: "Task · Request · Action · Context · Example",
            components: [
                { k: "Task", v: "Explain subnetting" },
                { k: "Request", v: "Provide a beginner-friendly explanation" },
                { k: "Action", v: "Define, explain purpose, describe process, and demonstrate subnetting" },
                { k: "Context", v: "Reader is a networking beginner" },
                { k: "Example", v: "Use a simple IP subnet example" },
            ],
            prompt:
                "Explain subnetting in a beginner-friendly manner. Define subnetting, explain its purpose, describe how networks are divided into smaller subnetworks, and demonstrate the concept with an example. Assume the reader has basic networking knowledge but is unfamiliar with subnetting. Include a simple IP address example to make the explanation easier to understand.",
        },
        {
            name: "CRISPE",
            full: "Capacity · Role · Insight · Statement · Personality · Experiment",
            components: [
                { k: "Capacity", v: "Knowledge of networking and IP addressing" },
                { k: "Role", v: "Patient networking instructor" },
                { k: "Insight", v: "The learner understands IP addresses but not subnetting" },
                { k: "Statement", v: "Explain subnetting and its purpose" },
                { k: "Personality", v: "Clear, supportive, and beginner-friendly" },
                { k: "Experiment", v: "Demonstrate subnetting using a practical example" },
            ],
            prompt:
                "Use your knowledge of networking and IP addressing. Act as a patient and knowledgeable networking instructor. The learner understands basic IP addresses but does not yet understand subnetting. Explain what subnetting is, why it is used, and how it works. Use a clear, supportive, and beginner-friendly teaching style. Include a practical example showing how a network can be divided into smaller subnetworks.",
        },
    ],
    after: null,
    evolution: {
        items: [
            {
                title: "Role assignment",
                before: "No role, so the AI answers as itself",
                after: "'Act as a networking instructor' · 'a networking expert' · 'an experienced networking teacher'",
            },
            {
                title: "Audience",
                before: "Nobody in particular",
                after: "A beginner with limited networking knowledge",
            },
            {
                title: "Instruction hierarchy",
                before: "One bare sentence",
                after: "Four numbered steps to define, explain why, describe how, and give an example",
            },
            {
                title: "Format",
                before: "Free-form",
                after: "Organized sections with definitions and examples",
            },
            {
                title: "Constraints",
                before: "Nothing off-limits",
                after: "Avoid advanced subnetting and keep language beginner-friendly",
            },
            {
                title: "Examples",
                before: "None requested",
                after: "A simple IP address example to demonstrate the concept",
            },
        ],
    },
    reflection: {
        isDraft: false,
        source: "My reflection on Lab Exercise #3.",
        paragraphs: [
            "Before this exercise a prompt felt like a question. After rewriting the same sentence seven different ways, a prompt started to feel like a small program. Every framework letter is a component I can deliberately include or leave out.",
            "RTCFC (role, task, context, format, constraint) became the skeleton I reached for first, and it carried my Master Vault prompt in the Prompt Vault game a week later.",
        ],
    },
    gallery: {
        title: "The full document, page by page",
        items: [
            { src: "/evidence/03/page-1.png", label: "Document · page 1", caption: "The original prompt, the RTCFC breakdown and prompt, and the COSTAR breakdown." },
            { src: "/evidence/03/page-2.png", label: "Document · page 2", caption: "The COSTAR prompt, the RISEN breakdown and prompt, and the CRAFT breakdown." },
            { src: "/evidence/03/page-3.png", label: "Document · page 3", caption: "The CRAFT prompt, the RACE breakdown and prompt, and the TRACE breakdown." },
            { src: "/evidence/03/page-4.png", label: "Document · page 4", caption: "The end of the TRACE prompt, then the CRISPE breakdown and prompt." },
        ],
    },
    gaps: [],
};
