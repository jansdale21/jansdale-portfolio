import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 28, className }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay, ease: EASE }}
    >
        {children}
    </motion.div>
);

export const MaskLine = ({ children, delay = 0, className }) => (
    <span className={`block overflow-hidden ${className || ""}`}>
        <motion.span
            className="block"
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay, ease: EASE }}
        >
            {children}
        </motion.span>
    </span>
);

export const Fade = ({ children, delay = 0, className }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay, ease: EASE }}
    >
        {children}
    </motion.div>
);
