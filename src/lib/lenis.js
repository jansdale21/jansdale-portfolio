import Lenis from "lenis";

let lenis = null;

const prefersReducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function initLenis() {
    if (lenis || prefersReducedMotion()) return lenis;
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return lenis;
}

export const stopLenis = () => lenis && lenis.stop();
export const startLenis = () => lenis && lenis.start();

export const scrollToY = (y, immediate = true) => {
    if (lenis) {
        lenis.resize(); // page height may have just changed (route change)
        lenis.scrollTo(y, { immediate, force: true });
    }
    else window.scrollTo({ top: y, behavior: immediate ? "auto" : "smooth" });
};

export const lenisTop = () => scrollToY(0);

// Scroll to an element, leaving room for the fixed header. Lazy-loaded images can change the
// page height while the smooth scroll runs, so the position is checked again when it ends.
const HEADER_OFFSET = 80;
const targetY = (el) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    return Math.max(0, Math.min(max, el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET));
};

export const scrollToEl = (el, immediate = false) => {
    if (!el) return;
    const instant = immediate || prefersReducedMotion();
    if (!lenis) {
        window.scrollTo({ top: targetY(el), behavior: instant ? "auto" : "smooth" });
        return;
    }
    lenis.resize();
    const settle = (tries) => {
        lenis.resize();
        const y = targetY(el);
        if (Math.abs(window.scrollY - y) > 4 && tries > 0) {
            lenis.scrollTo(y, { immediate: true, force: true });
            setTimeout(() => settle(tries - 1), 120);
        }
    };
    lenis.scrollTo(targetY(el), {
        immediate: instant,
        force: true,
        onComplete: () => settle(3),
    });
    if (instant) setTimeout(() => settle(3), 60);
};
