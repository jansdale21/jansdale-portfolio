import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, X, ZoomIn, ZoomOut } from "lucide-react";
import { startLenis, stopLenis } from "@/lib/lenis";

const LightboxCtx = createContext(null);
export const useLightbox = () => useContext(LightboxCtx);

// Screenshot viewer. Opens with a list of screenshots and a starting position, so a whole
// set of evidence can be read in one pass with the arrow buttons or the arrow keys.
export function LightboxProvider({ children }) {
    const [items, setItems] = useState(null);
    const [index, setIndex] = useState(0);
    const [zoom, setZoom] = useState(false);
    const dialogRef = useRef(null);
    const closeRef = useRef(null);
    const returnFocus = useRef(null);

    const open = useCallback((list, at = 0) => {
        returnFocus.current = document.activeElement;
        setItems(Array.isArray(list) ? list : [list]);
        setIndex(at);
        setZoom(false);
        stopLenis();
    }, []);

    const close = useCallback(() => {
        setItems(null);
        setZoom(false);
        startLenis();
        const el = returnFocus.current;
        if (el && typeof el.focus === "function") requestAnimationFrame(() => el.focus());
    }, []);

    const count = items ? items.length : 0;
    const step = useCallback(
        (d) => {
            setZoom(false);
            setIndex((i) => (i + d + count) % count);
        },
        [count]
    );

    useEffect(() => {
        if (!items) return undefined;
        requestAnimationFrame(() => closeRef.current?.focus());
        const onKey = (e) => {
            if (e.key === "Escape") close();
            if (count > 1 && e.key === "ArrowRight") step(1);
            if (count > 1 && e.key === "ArrowLeft") step(-1);
            if (e.key === "Tab" && dialogRef.current) {
                const els = dialogRef.current.querySelectorAll("button, [href], [tabindex]:not([tabindex='-1'])");
                if (!els.length) return;
                const first = els[0];
                const last = els[els.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [items, close, step, count]);

    const item = items ? items[index] : null;
    const stop = (e) => e.stopPropagation();

    return (
        <LightboxCtx.Provider value={{ open }}>
            {children}
            <AnimatePresence>
                {item && (
                    <motion.div
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label={item.label || "Screenshot viewer"}
                        data-testid="lightbox"
                        className="fixed inset-0 z-[200] flex flex-col bg-[#060704]/95 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={close}
                    >
                        <div className="flex items-center justify-between border-b border-lined px-5 py-4 md:px-8" onClick={stop}>
                            <div className="min-w-0 pr-4" aria-live="polite">
                                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-lime">
                                    {item.label}
                                </p>
                                {item.caption && <p className="mt-1 text-xs text-mutew md:text-sm">{item.caption}</p>}
                            </div>
                            <button
                                type="button"
                                ref={closeRef}
                                data-testid="lightbox-close-button"
                                onClick={close}
                                className="ix-lb-btn shrink-0"
                                aria-label="Close viewer"
                            >
                                <X size={16} />
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center overflow-auto p-4 md:p-10" onClick={close}>
                            <motion.img
                                key={item.src}
                                src={item.src}
                                alt={item.alt || item.caption || item.label}
                                data-testid="lightbox-image"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setZoom((z) => !z);
                                }}
                                className={`rounded-md border border-lined shadow-2xl ${
                                    zoom ? "w-[170%] max-w-none cursor-zoom-out" : "max-h-[72vh] max-w-full cursor-zoom-in"
                                }`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.25 }}
                            />
                        </div>
                        <div className="ix-lb-bar" onClick={stop}>
                            {count > 1 && (
                                <button
                                    type="button"
                                    className="ix-lb-btn"
                                    onClick={() => step(-1)}
                                    aria-label="Previous screenshot"
                                    data-testid="lightbox-prev"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                            )}
                            {count > 1 && (
                                <span className="ix-lb-count" data-testid="lightbox-count">
                                    {index + 1} / {count}
                                </span>
                            )}
                            {count > 1 && (
                                <button
                                    type="button"
                                    className="ix-lb-btn"
                                    onClick={() => step(1)}
                                    aria-label="Next screenshot"
                                    data-testid="lightbox-next"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            )}
                            <button
                                type="button"
                                className="ix-lb-btn"
                                onClick={() => setZoom((z) => !z)}
                                aria-pressed={zoom}
                                aria-label={zoom ? "Fit image to screen" : "Zoom into image"}
                                data-testid="lightbox-zoom"
                            >
                                {zoom ? <ZoomOut size={15} /> : <ZoomIn size={15} />}
                                <span className="ix-lb-label">{zoom ? "Fit" : "Zoom"}</span>
                            </button>
                            <a
                                className="ix-lb-btn"
                                href={item.src}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Open the original image in a new tab"
                                data-testid="lightbox-original"
                            >
                                <ExternalLink size={15} />
                                <span className="ix-lb-label">Original</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </LightboxCtx.Provider>
    );
}
