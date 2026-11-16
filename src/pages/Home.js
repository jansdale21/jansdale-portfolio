import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
    ArrowRight,
    Award,
    Download,
    Github,
    GraduationCap,
    ShieldCheck,
    Trophy,
    Users,
} from "lucide-react";
import {
    profile,
    heroStats,
    typedPrompt,
    marqueeItems,
    education,
    skills,
    projects,
    achievements,
    certifications,
    leadership,
} from "@/data/portfolio";
import Marquee from "@/components/Marquee";
import { CountUp, TiltCard } from "@/components/Interactive";
import EvidenceImage from "@/components/EvidenceImage";
import { Reveal, MaskLine, Fade } from "@/components/Reveal";
import useTitle from "@/lib/useTitle";

function TypeLine({ text }) {
    const reduce = useReducedMotion();
    const [n, setN] = useState(reduce ? text.length : 0);
    useEffect(() => {
        if (reduce) return undefined;
        const t = setInterval(() => {
            setN((v) => {
                if (v >= text.length) {
                    clearInterval(t);
                    return v;
                }
                return v + 1;
            });
        }, 44);
        return () => clearInterval(t);
    }, [text, reduce]);
    return (
        <p className="font-mono text-xs text-lime/90 md:text-sm" data-testid="hero-typed-prompt">
            <span className="text-faintw">&gt;&nbsp;</span>
            {text.slice(0, n)}
            <span className="caret text-lime">▍</span>
        </p>
    );
}

const SectionLabel = ({ children, as: Tag = "p" }) => (
    <Tag className="mb-4 font-mono text-[11px] font-normal uppercase tracking-[0.3em] text-lime">
        {children}
    </Tag>
);

function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const photoR = useTransform(scrollYProgress, [0, 1], [0, -3]);

    return (
        <header ref={ref} className="relative overflow-hidden">
            <div className="spotlight-lime pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full" />
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-28 md:px-10 md:pt-40 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-12 lg:pb-24">
                <div className="min-w-0">
                    <Fade>
                        <TypeLine text={typedPrompt} />
                    </Fade>
                    <h1 className="mt-7 font-display text-[clamp(2.5rem,6.3vw,5.8rem)] font-extrabold uppercase leading-[0.95] tracking-tightest">
                        <MaskLine delay={0.15}>Jansdale</MaskLine>
                        <MaskLine delay={0.32}>
                            <span className="text-lime">S. Yusi</span>
                        </MaskLine>
                    </h1>
                    <Fade delay={0.55}>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink md:text-lg">
                            {profile.tagline[0]}{" "}
                            <span className="font-serifacc italic text-lime">{profile.tagline[1]}</span>
                        </p>
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-mutew md:text-base">
                            {profile.about}
                        </p>
                    </Fade>
                    <Fade delay={0.7} className="mt-9 flex flex-wrap gap-3">
                        <Link
                            to="/#projects"
                            data-testid="hero-cta-projects"
                            className="group flex items-center gap-2.5 rounded-sm bg-lime px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-bgd transition-colors hover:bg-[#d9ff6e]"
                        >
                            View my projects
                            <ArrowRight
                                size={14}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                        <Link
                            to="/journey"
                            data-testid="hero-cta-journey"
                            className="flex items-center gap-2.5 rounded-sm border border-lined px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-lime/50 hover:text-lime"
                        >
                            Explore my prompt journey
                        </Link>
                        <a
                            href={profile.cvUrl}
                            download="Jansdale_Yusi_Resume.pdf"
                            data-testid="hero-cta-cv"
                            className="flex items-center gap-2.5 rounded-sm border border-lined px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-lime/50 hover:text-lime"
                        >
                            <Download size={14} />
                            Download CV
                        </a>
                    </Fade>
                    <Fade delay={0.85} className="mt-12">
                        <div className="grid grid-cols-3 gap-4 border-t border-lined pt-6 md:gap-6">
                            {heroStats.map((s) => (
                                <div key={s.label}>
                                    <p className="font-display text-2xl font-extrabold text-ink md:text-3xl">
                                        <CountUp value={s.value} />
                                    </p>
                                    <p className="mt-1 text-[10px] leading-snug text-faintw md:text-[11px]">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Fade>
                </div>
                <motion.figure
                    style={{ y: photoY, rotate: photoR }}
                    className="relative mx-auto w-full max-w-[380px]"
                >
                    <div className="absolute -right-2 -top-2 h-7 w-7 rounded-tr-md border-r-2 border-t-2 border-lime" />
                    <div className="absolute -bottom-2 -left-2 h-7 w-7 rounded-bl-md border-b-2 border-l-2 border-lime" />
                    <div className="relative rounded-xl border border-lined bg-panel p-3 md:p-4">
                        <img
                            src={profile.photo}
                            alt="Jansdale S. Yusi"
                            data-testid="hero-profile-photo"
                            className="aspect-square w-full rounded-lg object-cover"
                        />
                        <figcaption className="flex items-center justify-between px-1 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-faintw">
                            <span>Jansdale S. Yusi</span>
                            <span className="text-lime">BSIT 4-A</span>
                        </figcaption>
                    </div>
                </motion.figure>
            </div>
        </header>
    );
}

function Education() {
    return (
        <section id="education" className="ix-sec mx-auto max-w-7xl px-5 md:px-10">
            <Reveal>
                <SectionLabel as="h2">04 · Education</SectionLabel>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
                {education.map((e, i) => (
                    <Reveal key={e.school} delay={i * 0.08} className="h-full">
                        <div
                            data-testid={`education-card-${i}`}
                            className="h-full rounded-xl border border-lined bg-panel p-6 transition-colors hover:border-lime/30 md:p-8"
                        >
                            <div className="flex items-center justify-between">
                                <GraduationCap size={20} className="text-lime" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faintw">
                                    {e.period}
                                </span>
                            </div>
                            <h3 className="mt-5 font-display text-lg font-bold text-ink md:text-xl">
                                {e.school}
                            </h3>
                            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-lime">
                                {e.degree}
                            </p>
                            <ul className="mt-4 space-y-1.5">
                                {e.details.map((d) => (
                                    <li key={d} className="flex gap-3 text-sm text-mutew">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section id="skills" className="ix-sec mx-auto max-w-7xl px-5 md:px-10">
            <Reveal>
                <SectionLabel as="h2">03 · Technical skills</SectionLabel>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {skills.map((g, i) => (
                    <Reveal key={g.group} delay={i * 0.06} className="h-full">
                        <div className="h-full rounded-xl border border-lined bg-panel p-6">
                            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                                {g.group}
                            </h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {g.items.map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-sm border border-lined px-2.5 py-1.5 text-xs text-mutew transition-colors hover:border-lime/40 hover:text-ink"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
            <Reveal>
                <SectionLabel>01 · Projects</SectionLabel>
                <h2 className="mb-10 max-w-2xl font-display text-3xl font-extrabold leading-tight md:text-5xl">
                    Academic projects, <span className="font-serifacc font-normal italic text-lime">shipped.</span>
                </h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
                {projects.map((p, i) => (
                    <Reveal
                        key={p.name}
                        delay={(i % 2) * 0.08}
                        className={p.featured ? "md:col-span-2" : ""}
                    >
                        <TiltCard max={3}>
                        <article
                            data-testid={`project-card-${p.name.split(" ")[0].toLowerCase()}`}
                            className={`h-full rounded-xl border border-lined bg-panel p-6 transition-colors hover:border-lime/30 md:p-8 ${
                                p.textOnly ? "border-dashed" : ""
                            }`}
                        >
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <h3 className="font-display text-xl font-extrabold text-ink md:text-2xl">
                                    {p.name}
                                </h3>
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faintw">
                                    {p.year}
                                </span>
                            </div>
                            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-lime">
                                {p.subtitle} · {p.role}
                            </p>
                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mutew">
                                {p.summary}
                            </p>
                            {p.flow && (
                                <div className="ix-flow" aria-label="How it works">
                                    {p.flow.map((step, k) => (
                                        <span key={step} className="ix-flow-step">
                                            {k > 0 && <span className="ix-flow-arrow" aria-hidden="true">→</span>}
                                            {step}
                                        </span>
                                    ))}
                                    {p.flowNote && <p className="ix-flow-note">{p.flowNote}</p>}
                                </div>
                            )}
                            {p.contribution && (
                                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/90">
                                    <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.2em] text-lime">My part</span>
                                    {p.contribution}
                                </p>
                            )}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.stack.map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-sm border border-lined px-2 py-1 font-mono text-[10px] text-faintw"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                            {p.repo && (
                                <a
                                    href={p.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-testid={`project-repo-${p.name.split(" ")[0].toLowerCase()}`}
                                    aria-label={`${p.name} source code on GitHub (opens in a new tab)`}
                                    className="mt-5 inline-flex items-center gap-2 rounded-sm border border-lined px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mutew transition-colors hover:border-lime/50 hover:text-lime"
                                >
                                    <Github size={14} /> View on GitHub
                                </a>
                            )}
                            {p.images.length > 0 && (
                                <div
                                    className={`mt-6 grid gap-3 ${
                                        p.images.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                                    }`}
                                >
                                    {p.images.map((img) => (
                                        <EvidenceImage key={img.src} {...img} label={p.name} />
                                    ))}
                                </div>
                            )}
                            {p.note && (
                                <p className="mt-4 border-l-2 border-lime/40 pl-3 text-xs leading-relaxed text-faintw">
                                    {p.note}
                                </p>
                            )}
                        </article>
                        </TiltCard>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

function Achievements() {
    return (
        <section id="achievements" className="ix-sec mx-auto max-w-7xl px-5 md:px-10">
            <Reveal>
                <SectionLabel as="h2">02 · Achievements, research & training</SectionLabel>
            </Reveal>
            <div className="grid gap-4 lg:grid-cols-2">
                <Reveal className="h-full">
                    <div className="h-full rounded-xl border border-lined bg-panel p-6 md:p-8">
                        <h3 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                            <Trophy size={14} /> Achievements & research
                        </h3>
                        <ul className="mt-5 space-y-4">
                            {achievements.map((a) => (
                                <li key={a} className="flex gap-3 text-sm text-ink md:text-base">
                                    <Award size={15} className="mt-0.5 shrink-0 text-lime" />
                                    {a}
                                </li>
                            ))}
                        </ul>
                        <h3 className="mt-9 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                            <Users size={14} /> Leadership & activities
                        </h3>
                        <ul className="mt-5 space-y-2">
                            {leadership.map((l) => (
                                <li key={l} className="flex gap-3 text-sm text-mutew">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                                    {l}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
                <Reveal delay={0.1} className="h-full">
                    <div className="h-full rounded-xl border border-lined bg-panel p-6 md:p-8">
                        <h3 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
                            <ShieldCheck size={14} /> Courses & training
                        </h3>
                        <ul className="mt-5 divide-y divide-lined">
                            {certifications.map((c) => (
                                <li key={c.name} className="ix-cert">
                                    <span className="text-sm text-ink">{c.name}</span>
                                    <span className="ix-cert-meta">
                                        {c.org} · {c.year}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

function JourneyCta() {
    return (
        <section className="relative overflow-hidden border-y border-lined">
            <div className="spotlight-lime pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="relative mx-auto max-w-7xl px-5 py-24 text-center md:px-10 md:py-32">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">
                        PDC60 · Professional Domain Course 6 · July to November 2026
                    </p>
                    <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
                        See how my prompts
                        <br />
                        <span className="font-serifacc font-normal italic text-lime">
                            evolved.
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-mutew md:text-base">
                        Eight milestones showing the prompts I wrote, how the AI responded, and
                        what each activity taught me.
                    </p>
                    <Link
                        to="/journey"
                        data-testid="home-journey-cta"
                        className="group mt-9 inline-flex items-center gap-2.5 rounded-sm bg-lime px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-bgd transition-colors hover:bg-[#d9ff6e]"
                    >
                        Open the journey
                        <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}

export default function Home() {
    useTitle("");
    return (
        <main id="main" tabIndex={-1} data-testid="home-page">
            <Hero />
            <Marquee items={marqueeItems} />
            <Projects />
            <Achievements />
            <Skills />
            <Education />
            <JourneyCta />
        </main>
    );
}
