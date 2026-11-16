export const m02 = {
    slug: "lab-exercise-2",
    num: "02",
    dateLabel: "August 5, 2026",
    title: "Lab Exercise #2 — AI Capability and Limitation Analysis",
    shortTitle: "Capability & Limitation",
    concept: "What changes an AI's behaviour",
    concepts: [
        "Vague vs. clear questions",
        "Wrong assumptions",
        "Hallucination & verification",
        "Conversation memory",
        "Human judgment",
    ],
    summary:
        "Seven tests of what AI chatbots do well and where they fail, covering vague questions, wrong assumptions, hallucinated references, memory and human judgment, with a screenshot for each.",
    preview: "/evidence/02/05_partB-exp1_BEFORE_ambiguous-prompt_and-output.png",
    miniBefore: "Which one is better?",
    miniAfter: "Which is better for a small university website with mostly static pages…",
    miniNote: "Vague vs. clear questions",
    kind: "pair",
    shots: "pair",
    compare: { beforeLabel: "Before", afterLabel: "After" },
    beginning: [
        "Lab Exercise #2 put conversational AI through a series of tests. The first half checked what it does well, like explaining, rewriting, summarising and making tables. The second half checked its limits, like vague instructions, wrong assumptions, hallucinated references, memory and human judgment.",
        "The prompts in the experiments came from the lab instructions, so this milestone is not about rewriting my own prompts. It is about learning what actually changes an AI's behaviour, like context, verification, memory settings, and the absolute necessity of human judgment.",
    ],
    learned: {
        paragraphs: [
            "A vague question got a question back. A clear one got a useful answer. 'Which one is better?' could not even be answered, so the AI had to ask what was being compared.",
            "On the limits side, I checked every academic source the AI gave, watched it correct a wrong claim about who made Java, and saw that its memory quietly carries details into new chats. That is helpful and a privacy risk at the same time.",
        ],
        principles: [
            "Vague vs. clear questions",
            "Wrong assumptions",
            "Fact-checking",
            "Conversation memory",
            "Human judgment",
        ],
    },
    before: {
        sectionTitle: "The vague prompt (from the lab)",
        promptLabel: "Ambiguous prompt",
        prompt: "Which one is better?",
        evidence: [
            {
                src: "/evidence/02/05_partB-exp1_BEFORE_ambiguous-prompt_and-output.png",
                label: "Ambiguous prompt & AI output",
                caption: "With no context, the AI could not tell what was being compared, so it asked which options I meant instead of guessing.",
            },
        ],
        outputNote:
            "It recognised that the prompt did not identify what was being compared, and requested the choices it needed rather than guessing.",
    },
    after: {
        sectionTitle: "The specified prompt (from the lab)",
        promptLabel: "Specified prompt",
        prompt:
            "Which is better for a small university website with mostly static pages: a traditional content management system or a custom web application? Consider cost, maintenance, and technical expertise.",
        evidence: [
            {
                src: "/evidence/02/06_partB-exp1_AFTER_specific-prompt_and-output.png",
                label: "Specified prompt & AI output",
                caption: "With the two options and the criteria named, it compared them factor by factor and recommended a traditional CMS.",
            },
        ],
        outputNote:
            "A detailed comparison based on cost, maintenance and technical expertise, concluding that a traditional CMS suited the scenario.",
    },
    evolution: {
        items: [
            {
                title: "Clarity",
                before: "'Which one', with the options never named",
                after: "Two named options, traditional CMS vs. custom web application",
            },
            {
                title: "Context",
                before: "Nothing was said about the project",
                after: "A small university website with mostly static pages",
            },
            {
                title: "What to judge by",
                before: "'Better' by no stated standard",
                after: "Judged on cost, maintenance and technical expertise",
            },
        ],
    },
    reflection: {
        isDraft: false,
        source: "My reflection on Lab Exercise #2.",
        paragraphs: [
            "AI answers should be checked, not trusted right away. An answer can sound clear, detailed and confident while still being incomplete, oversimplified or incorrect.",
            "This lab showed me both sides. The AI followed instructions well, asked for clarification when the question was vague, and corrected the false claim that Microsoft created Java. But its analogy oversimplified machine learning, its summary dropped supporting details, and even its genuine academic references still had to be checked against the publishers. Its memory carried the project details into a new conversation, which is useful for personalization, but something to manage carefully.",
            "In the end, I see conversational AI as a support tool, not an unquestionable source or a final decision-maker. When a student asked whether to drop a course, it helped weigh the options but rightly left the decision to them, the same way I have to verify facts and judge whether an answer fits the real situation.",
        ],
    },
    gallery: {
        title: "Every test in the lab, in order",
        items: [
            {
                src: "/evidence/02/01_partA-test1_explanation_prompt-and-output.png",
                label: "Capability · explanation",
                caption: "Machine learning explained with an analogy a 12-year-old could follow, within 150 words.",
            },
            {
                src: "/evidence/02/02_partA-test2_text-transformation_prompt-and-output.png",
                label: "Capability · rewriting",
                caption: "A casual message to a professor rewritten in a professional tone.",
            },
            {
                src: "/evidence/02/03_partA-test3_summarization_prompt-and-output.png",
                label: "Capability · summarization",
                caption: "A passage on back-propagation and connectionist models condensed into three points.",
            },
            {
                src: "/evidence/02/04_partA-test4_structured-table_prompt-and-output.png",
                label: "Capability · structured output",
                caption: "A table comparing supervised, unsupervised and reinforcement learning.",
            },
            {
                src: "/evidence/02/05_partB-exp1_BEFORE_ambiguous-prompt_and-output.png",
                label: "Vague prompt",
                caption: "With no context, the AI could not tell what was being compared, so it asked which options I meant instead of guessing.",
            },
            {
                src: "/evidence/02/06_partB-exp1_AFTER_specific-prompt_and-output.png",
                label: "Clear prompt",
                caption: "With the two options and the criteria named, it compared them factor by factor and recommended a traditional CMS.",
            },
            {
                src: "/evidence/02/07_partB-exp2_false-premise_prompt-and-output.png",
                label: "Wrong assumption test",
                caption: "The AI corrected the wrong assumption (Java was created by Sun Microsystems, not Microsoft) before answering.",
            },
            {
                src: "/evidence/02/08_partC_academic-references_output-1of2.png",
                label: "Hallucination check · 1 of 2",
                caption: "The first two academic references the AI recommended.",
            },
            {
                src: "/evidence/02/09_partC_academic-references_output-2of2.png",
                label: "Hallucination check · 2 of 2",
                caption: "The third reference. I checked all three against the publishers, and every one was genuine.",
            },
            {
                src: "/evidence/02/10_partD_context-step1_establish-context.png",
                label: "Context · setup",
                caption: "Setting up context with 'My name is Alex…' and the UniConnect app. Note the 'Memory updated' label.",
            },
            {
                src: "/evidence/02/11_partD_context_cloud-computing.png",
                label: "Context · follow-up 1",
                caption: "Asked for three benefits of cloud computing, it tied the answer back to UniConnect.",
            },
            {
                src: "/evidence/02/12_partD_context_ai-vs-ml.png",
                label: "Context · follow-up 2",
                caption: "Explaining AI vs. machine learning, it used UniConnect as the example.",
            },
            {
                src: "/evidence/02/13_partD_context_cybersecurity-tips.png",
                label: "Context · follow-up 3",
                caption: "Three cybersecurity tips, plus one about protecting UniConnect's student data.",
            },
            {
                src: "/evidence/02/14_partD_context_recall-same-conversation.png",
                label: "Memory · same conversation",
                caption: "Later in the same conversation, the AI still recalled UniConnect and what it does.",
            },
            {
                src: "/evidence/02/15_partD_context_recall-new-conversation.png",
                label: "Memory · new conversation",
                caption: "In a brand-new conversation it still knew, because the platform's memory had saved the details.",
            },
            {
                src: "/evidence/02/16_partE_human-judgment_prompt-and-output.png",
                label: "Human judgment test",
                caption: "Asked about dropping a course, the AI responded with empathy and helped weigh the options without making the decision.",
            },
        ],
    },
    gaps: [],
};
