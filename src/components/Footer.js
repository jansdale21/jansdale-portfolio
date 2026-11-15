import { ArrowUp, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { lenisTop } from "@/lib/lenis";
import { Reveal } from "@/components/Reveal";

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-lined bg-panel/40">
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">
                        Contact
                    </p>
                    <h2 className="mt-4 font-display text-4xl font-extrabold md:text-6xl">
                        Let&rsquo;s <span className="font-serifacc font-normal italic text-lime">connect.</span>
                    </h2>
                </Reveal>
                <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr]">
                    <Reveal>
                        <a
                            href={`mailto:${profile.email}`}
                            data-testid="footer-email-link"
                            className="font-mono text-base text-ink underline decoration-lime/50 underline-offset-8 transition-colors hover:text-lime md:text-xl"
                        >
                            {profile.email}
                        </a>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href={profile.cvUrl}
                                download="Jansdale_Yusi_Resume.pdf"
                                data-testid="footer-cv-button"
                                className="flex items-center gap-2 rounded-sm bg-lime px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-bgd transition-colors hover:bg-[#d9ff6e]"
                            >
                                <Download size={14} /> Download CV
                            </a>
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="footer-github-link"
                                className="flex items-center gap-2 rounded-sm border border-lined bg-panel px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mutew transition-colors hover:border-lime/50 hover:text-lime"
                            >
                                <Github size={14} /> GitHub
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="footer-linkedin-link"
                                className="flex items-center gap-2 rounded-sm border border-lined bg-panel px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mutew transition-colors hover:border-lime/50 hover:text-lime"
                            >
                                <Linkedin size={14} /> LinkedIn
                            </a>
                            <a
                                href={`mailto:${profile.email}`}
                                data-testid="footer-mail-link"
                                className="flex items-center gap-2 rounded-sm border border-lined bg-panel px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mutew transition-colors hover:border-lime/50 hover:text-lime"
                            >
                                <Mail size={14} /> Gmail
                            </a>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="max-w-sm text-sm leading-relaxed text-mutew">
                            Every prompt on this site comes from my own PDC60 coursework,
                            shown alongside the original screenshots and the AI outputs
                            it produced.
                        </p>
                        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-faintw">
                            {profile.university} · {profile.section} · {profile.location}
                        </p>
                    </Reveal>
                </div>
                <div className="mt-16 flex items-center justify-between border-t border-lined pt-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faintw">
                        © {new Date().getFullYear()} Jansdale S. Yusi
                    </p>
                    <button
                        type="button"
                        data-testid="footer-back-to-top"
                        onClick={lenisTop}
                        className="ix-tap flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-mutew transition-colors hover:text-lime"
                    >
                        Back to top <ArrowUp size={13} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
