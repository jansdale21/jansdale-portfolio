import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";

// Thin lime bar at the top of the page that fills as the reader scrolls.
export function ReadingProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
    return <motion.div className="ix-progress" style={{ scaleX }} aria-hidden="true" />;
}

// Counts up to a value like "08" the first time it scrolls into view.
export function CountUp({ value }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const reduce = useReducedMotion();
    const target = parseInt(value, 10);
    const numeric = !Number.isNaN(target) && /^\d+$/.test(value);
    const [shown, setShown] = useState(numeric && !reduce ? 0 : target);

    useEffect(() => {
        if (!numeric || reduce || !inView) return undefined;
        const controls = animate(0, target, {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => setShown(Math.round(v)),
        });
        return () => controls.stop();
    }, [inView, numeric, reduce, target]);

    if (!numeric) return <span ref={ref}>{value}</span>;
    return <span ref={ref}>{String(shown).padStart(value.length, "0")}</span>;
}

// Card with a soft lime spotlight that follows the pointer and a gentle 3D tilt.
export function TiltCard({ children, className = "", max = 4, ...rest }) {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const srx = useSpring(rx, { stiffness: 160, damping: 18 });
    const sry = useSpring(ry, { stiffness: 160, damping: 18 });

    const onMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
        if (reduce || e.pointerType !== "mouse") return;
        ry.set((x - 0.5) * 2 * max);
        rx.set(-(y - 0.5) * 2 * max);
    };
    const onLeave = () => {
        rx.set(0);
        ry.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`ix-spot ${className}`}
            style={{ rotateX: srx, rotateY: sry, transformPerspective: 1100 }}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            {...rest}
        >
            {children}
        </motion.div>
    );
}
