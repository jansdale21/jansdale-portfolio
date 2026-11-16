import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import useTitle from "@/lib/useTitle";

export default function NotFound() {
    useTitle("Page not found");
    // Ask search engines not to index addresses that do not exist.
    useEffect(() => {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex";
        document.head.appendChild(meta);
        return () => meta.remove();
    }, []);
    return (
        <main id="main" tabIndex={-1} data-testid="not-found-page" className="flex min-h-[80vh] items-center pt-28">
            <div className="mx-auto max-w-7xl px-5 md:px-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">404 · page not found</p>
                <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight md:text-6xl">
                    Nothing at this <span className="font-serifacc font-normal italic text-lime">address.</span>
                </h1>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-mutew md:text-base">
                    The link may be old or mistyped. Head back to the portfolio or the prompt journey.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                    <Link
                        to="/"
                        className="group flex items-center gap-2.5 rounded-sm bg-lime px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-bgd transition-colors hover:bg-[#d9ff6e]"
                    >
                        Portfolio
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                        to="/journey"
                        className="flex items-center gap-2.5 rounded-sm border border-lined px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-lime/50 hover:text-lime"
                    >
                        The journey
                    </Link>
                </div>
            </div>
        </main>
    );
}
