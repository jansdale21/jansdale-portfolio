import { Component, Suspense, lazy, useEffect, useLayoutEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { initLenis, scrollToY, scrollToEl } from "@/lib/lenis";
import { LightboxProvider } from "@/components/Lightbox";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import Home from "@/pages/Home";

// The journey and story pages load only when they are opened.
const Journey = lazy(() => import("@/pages/Journey"));
const Story = lazy(() => import("@/pages/Story"));
import NotFound from "@/pages/NotFound";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    componentDidCatch(error, info) {
        console.error("Page crashed:", error, info?.componentStack);
    }
    render() {
        if (this.state.error) {
            return (
                <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bgd p-8 text-center font-mono text-sm text-ink">
                    <p>Something went wrong. Please refresh the page.</p>
                    <a href="/" className="ix-lb-btn">
                        Back to home
                    </a>
                </div>
            );
        }
        return this.props.children;
    }
}

// Scroll handling between routes:
// - going back to the Journey from a story (or using the browser's back button) restores
//   the position the visitor left; links with a #hash scroll to that section;
// - every other navigation starts at the top.
function ScrollManager() {
    const { pathname, hash } = useLocation();
    const navType = useNavigationType();
    const positions = useRef({});
    const current = useRef(pathname);

    useEffect(() => {
        if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
        const onScroll = () => {
            positions.current[current.current] = window.scrollY;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useLayoutEffect(() => {
        const from = current.current;
        current.current = pathname;
        if (from !== pathname) {
            // Move keyboard and screen-reader focus to the new page's content.
            setTimeout(() => document.getElementById("main")?.focus({ preventScroll: true }), 80);
        }
        if (hash) {
            const go = () => scrollToEl(document.getElementById(hash.slice(1)), from !== pathname);
            requestAnimationFrame(() => requestAnimationFrame(go));
            return;
        }
        const backToJourney = pathname === "/journey" && from.startsWith("/journey/");
        const saved = positions.current[pathname];
        const y = (navType === "POP" || backToJourney) && saved != null ? saved : 0;
        requestAnimationFrame(() => requestAnimationFrame(() => scrollToY(y)));
    }, [pathname, hash, navType]);

    return null;
}

function App() {
    useEffect(() => {
        initLenis();
    }, []);
    return (
        <ErrorBoundary>
            <MotionConfig reducedMotion="user">
                <BrowserRouter>
                    <ScrollManager />
                    <LightboxProvider>
                        <AmbientBackground />
                        <div className="grain" aria-hidden="true" />
                        <a
                            href="#main"
                            className="ix-skip"
                            data-testid="skip-link"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("main")?.focus({ preventScroll: true });
                                scrollToY(0);
                            }}
                        >
                            Skip to content
                        </a>
                        <Nav />
                        <Suspense fallback={<main id="main" tabIndex={-1} className="min-h-screen" />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/journey" element={<Journey />} />
                            <Route path="/journey/:slug" element={<Story />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        </Suspense>
                        <Footer />
                    </LightboxProvider>
                </BrowserRouter>
            </MotionConfig>
        </ErrorBoundary>
    );
}

export default App;
