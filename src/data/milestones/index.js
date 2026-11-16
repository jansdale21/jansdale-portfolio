import { m01 } from "./m01";
import { m02 } from "./m02";
import { m03 } from "./m03";
import { m04 } from "./m04";
import { m05 } from "./m05";
import { m06 } from "./m06";
import { m07 } from "./m07";
import { m08 } from "./m08";

export const milestones = [m01, m02, m08, m03, m04, m05, m06, m07];

export const getStory = (slug) => milestones.find((m) => m.slug === slug);

export const getNeighbors = (slug) => {
    const i = milestones.findIndex((m) => m.slug === slug);
    return {
        prev: i > 0 ? milestones[i - 1] : null,
        next: i >= 0 && i < milestones.length - 1 ? milestones[i + 1] : null,
    };
};

export const journeyMeta = {
    course: "PDC60 · Professional Domain Course 6",
    span: "July to November 2026",
    intro:
        "Eight milestones from one semester in PDC60, from one-line questions to structured, tested instructions. Each milestone documents a different learning experience through the prompts I wrote, how the AI responded, the evidence, and what I learned.",
};
