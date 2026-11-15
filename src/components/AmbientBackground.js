import { useEffect, useRef } from "react";

// Decorative backdrop behind every page: slow-drifting glows, a faint dot grid,
// a few floating code glyphs and a soft light that follows the pointer.
const GLYPHS = [
    { t: ">_", x: 8, y: 22, s: 18, d: 0 },
    { t: "{ }", x: 88, y: 14, s: 16, d: -6 },
    { t: "</>", x: 76, y: 62, s: 15, d: -12 },
    { t: "01", x: 14, y: 72, s: 14, d: -3 },
    { t: "#", x: 48, y: 88, s: 18, d: -9 },
    { t: "//", x: 93, y: 84, s: 14, d: -15 },
    { t: "[ ]", x: 30, y: 40, s: 13, d: -18 },
    { t: "::", x: 62, y: 30, s: 14, d: -21 },
];

export default function AmbientBackground() {
    const glow = useRef(null);

    useEffect(() => {
        const el = glow.current;
        if (!el || !window.matchMedia("(pointer: fine)").matches) return undefined;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
        let raf = 0;
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 3;
        const move = (e) => {
            x = e.clientX;
            y = e.clientY;
            if (!raf) {
                raf = requestAnimationFrame(() => {
                    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                    el.style.opacity = "1";
                    raf = 0;
                });
            }
        };
        const leave = () => {
            el.style.opacity = "0";
        };
        window.addEventListener("pointermove", move, { passive: true });
        document.documentElement.addEventListener("pointerleave", leave);
        return () => {
            window.removeEventListener("pointermove", move);
            document.documentElement.removeEventListener("pointerleave", leave);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="ix-ambient" aria-hidden="true">
            <div className="ix-ambient-grid" />
            <div className="ix-ambient-blob ix-ambient-blob-1" />
            <div className="ix-ambient-blob ix-ambient-blob-2" />
            <div className="ix-ambient-blob ix-ambient-blob-3" />
            {GLYPHS.map((g) => (
                <span
                    key={g.t}
                    className="ix-ambient-glyph"
                    style={{ left: `${g.x}%`, top: `${g.y}%`, fontSize: g.s, animationDelay: `${g.d}s` }}
                >
                    {g.t}
                </span>
            ))}
            <div ref={glow} className="ix-ambient-cursor" />
        </div>
    );
}
