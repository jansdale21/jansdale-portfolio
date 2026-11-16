import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { scrollToEl, scrollToY, startLenis, stopLenis } from "@/lib/lenis";

const Logo = () => (
    <span className="ix-logo" aria-hidden="true">
        <span className="ix-logo-accent">&gt;</span>JSY<span className="ix-logo-cursor">_</span>
    </span>
);

// Projects lives on the home page; Contact is the footer on every page.
const links = [
    { label: "Home", path: "/", id: "nav-link-home", exact: true },
    { label: "Projects", path: "/", hash: "projects", id: "nav-link-projects" },
    { label: "Prompt Journey", path: "/journey", id: "nav-link-journey" },
    { label: "Contact", hash: "contact", id: "nav-link-contact" },
];

function useNavTarget() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const hrefOf = (l) => {
        const path = l.path ?? pathname;
        return l.hash ? `${path}#${l.hash}` : path;
    };
    const onClick = (l, after) => (e) => {
        after?.();
        if (!l.hash) {
            // Already on this page: just glide back to the top.
            if (l.path === pathname && !window.location.hash) {
                e.preventDefault();
                scrollToY(0, false);
            }
            return;
        }
        const path = l.path ?? pathname;
        e.preventDefault();
        if (path === pathname) {
            const go = () => scrollToEl(document.getElementById(l.hash));
            if (after) setTimeout(go, 60); // let the mobile menu close first
            else go();
            window.history.replaceState(null, "", `${path}#${l.hash}`);
        } else {
            navigate(`${path}#${l.hash}`);
        }
    };
    return { hrefOf, onClick };
}

// Which section is on screen right now: "projects" on the home page, "contact" when the
// footer is in view, otherwise none. Drives the highlighted nav item.
function useSectionInView() {
    const { pathname } = useLocation();
    const [section, setSection] = useState(null);
    useEffect(() => {
        const check = () => {
            const mid = window.innerHeight * 0.5;
            const footer = document.getElementById("contact");
            const projects = document.getElementById("projects");
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
            if (footer && (atBottom || footer.getBoundingClientRect().top < window.innerHeight * 0.6)) {
                setSection("contact");
                return;
            }
            if (projects) {
                const r = projects.getBoundingClientRect();
                if (r.top <= mid && r.bottom >= mid) {
                    setSection("projects");
                    return;
                }
            }
            setSection(null);
        };
        check();
        const t = setTimeout(check, 300);
        window.addEventListener("scroll", check, { passive: true });
        window.addEventListener("resize", check);
        return () => {
            clearTimeout(t);
            window.removeEventListener("scroll", check);
            window.removeEventListener("resize", check);
        };
    }, [pathname]);
    return section;
}

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleRef = useRef(null);
    const { pathname } = useLocation();
    const { hrefOf, onClick } = useNavTarget();
    const section = useSectionInView();
    const isActive = (l) =>
        l.hash
            ? section === l.hash
            : section === null && (l.exact ? pathname === l.path : pathname.startsWith(l.path));

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (open) stopLenis();
        else startLenis();
    }, [open]);

    // While the menu is open, keep keyboard focus inside it (plus its close button).
    useEffect(() => {
        if (!open) return undefined;
        const t = setTimeout(() => menuRef.current?.querySelector("a")?.focus(), 60);
        const onKey = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
                toggleRef.current?.focus();
            }
            if (e.key === "Tab" && menuRef.current && toggleRef.current) {
                const els = [toggleRef.current, ...menuRef.current.querySelectorAll("a, button")];
                const first = els[0];
                const last = els[els.length - 1];
                if (!els.includes(document.activeElement)) {
                    e.preventDefault();
                    first.focus();
                } else if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        window.addEventListener("keydown", onKey);
        return () => {
            clearTimeout(t);
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-[150] transition-colors duration-300 ${
                    scrolled || open
                        ? "border-b border-lined bg-bgd/85 backdrop-blur-md"
                        : "border-b border-transparent"
                }`}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-10">
                    <Link to="/" data-testid="nav-logo-link" className="flex items-center gap-3" aria-label="Jansdale Yusi, home">
                        <Logo />
                        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink">
                            Jansdale·Yusi
                        </span>
                    </Link>
                    <nav className="ix-nav-desktop items-center gap-8" aria-label="Main">
                        {links.map((l) => (
                            <Link
                                key={l.id}
                                to={hrefOf(l)}
                                onClick={onClick(l)}
                                data-testid={l.id}
                                aria-current={isActive(l) ? "page" : undefined}
                                className={`ix-tap font-mono text-[11px] uppercase tracking-[0.25em] transition-colors ${
                                    isActive(l) ? "text-lime" : "text-mutew hover:text-ink"
                                }`}
                            >
                                {l.label}
                            </Link>
                        ))}
                        <a
                            href={profile.cvUrl}
                            download="Jansdale_Yusi_Resume.pdf"
                            data-testid="nav-cv-button"
                            className="flex items-center gap-2 rounded-sm bg-lime px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-bgd transition-colors hover:bg-[#d9ff6e]"
                        >
                            <Download size={13} />
                            Download CV
                        </a>
                    </nav>
                    <button
                        type="button"
                        ref={toggleRef}
                        data-testid="nav-mobile-toggle"
                        className="ix-nav-toggle h-10 w-10 items-center justify-center rounded-sm border border-lined text-ink"
                        onClick={() => setOpen((o) => !o)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </header>
            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        ref={menuRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menu"
                        data-testid="mobile-menu"
                        className="ix-nav-mobile fixed inset-0 z-[140] flex-col justify-center bg-bgd px-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <nav className="space-y-8" aria-label="Main">
                            {links.map((l, i) => (
                                <motion.div
                                    key={l.id}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                                >
                                    <Link
                                        to={hrefOf(l)}
                                        onClick={onClick(l, () => setOpen(false))}
                                        data-testid={`${l.id}-mobile`}
                                        aria-current={isActive(l) ? "page" : undefined}
                                        className={`font-display text-3xl font-extrabold uppercase ${
                                            isActive(l) ? "text-lime" : "text-ink"
                                        }`}
                                    >
                                        {l.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.a
                                href={profile.cvUrl}
                                download="Jansdale_Yusi_Resume.pdf"
                                data-testid="nav-cv-button-mobile"
                                className="inline-flex items-center gap-2 rounded-sm bg-lime px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-bgd"
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.24, duration: 0.4 }}
                            >
                                <Download size={14} />
                                Download CV
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
