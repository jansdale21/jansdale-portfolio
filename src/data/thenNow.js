// "Day one vs. after PDC60" on the Journey page.
// Same goal, two prompts: my first recorded prompt (Lab Exercise #1), and the same request
// rewritten at the end of the semester with the RTCFC framework (Role, Task, Context, Format,
// Constraint) plus the rules the later activities taught me.
export const thenNow = {
    then: {
        date: "July 2026",
        source: "Lab Exercise #1, my first recorded prompt",
        text: "Tell me about cybersecurity.",
    },
    now: {
        date: "November 2026",
        source: "The same request, rewritten with RTCFC",
        text: `ROLE: Act as a cybersecurity instructor preparing a short lesson.

TASK: Explain what cybersecurity is and why it matters.
Include, in this order:
1. A two-sentence definition in plain language.
2. Three common threats students face (phishing, malware and weak passwords), each with one realistic campus example and one action the student can take today.
3. A three-item checklist the student can follow this week.

CONTEXT: The readers are first-year IT students with no professional cybersecurity experience. They use a laptop, a phone and a school portal every day.

FORMAT: Headings and bullet points, 200 words or fewer.

CONSTRAINT:
- Avoid jargon. If a technical term is necessary, define it in one short clause.
- Do not invent statistics, laws or news events. If you are unsure about a fact, leave it out.
- Never ask for or repeat passwords or personal data in the examples.
- If anything in this request is unclear, ask me one short question before answering.`,
    },
    // find = exact text in the rewritten prompt (to = last line of a multi-line part); lesson = where I learned it.
    anatomy: [
        { k: "R · Role", find: "ROLE:", lesson: "RTCFC framework, Lab Exercise #3" },
        { k: "T · Task", find: "TASK:", lesson: "RTCFC framework, Lab Exercise #3" },
        { k: "Ordered steps", find: "Include, in this order:", to: "3. A three-item checklist", lesson: "Step-by-step instructions (RISEN), Lab Exercise #3" },
        { k: "C · Context", find: "CONTEXT:", lesson: "Audience from Lab Exercise #1, context from Lab Exercise #2" },
        { k: "F · Format", find: "FORMAT:", lesson: "Output format and length, Lab Exercise #1" },
        { k: "C · Constraint", find: "CONSTRAINT:", to: "ask me one short question before answering", lesson: "RTCFC framework, Lab Exercise #3" },
        { k: "Explicit requirements", find: "one action the student can take today", lesson: "Say it, don't imply it (The Labyrinth)" },
        { k: "No invention", find: "Do not invent statistics", lesson: "Lab Exercise #2 & Lost Context Archive" },
        { k: "Safety", find: "Never ask for or repeat passwords", lesson: "Prompt Vault & The Labyrinth" },
        { k: "Clarify first", find: "ask me one short question before answering", lesson: "Lab Exercise #2 & The Labyrinth" },
    ],
};
