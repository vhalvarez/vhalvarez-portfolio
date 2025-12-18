"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    delay?: number;
    yOffset?: number;
    inView?: boolean;
    inViewMargin?: string;
    blur?: string;
}

export default function BlurFade({
    children,
    className,
    variant,
    duration = 0.4,
    delay = 0,
    yOffset = 6,
    inView = false,
    inViewMargin = "-50px",
    blur = "6px",
}: BlurFadeProps) {
    const ref = useRef(null);
    // const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
    // Since we don't have useInView installed from framer-motion (it's part of it but needs import), 
    // and simplistic version might just use whileInView or just animate on mount.
    // We'll use whileInView for simplicity.

    const defaultVariants: Variants = {
        hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
        visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
    };
    const combinedVariants = variant || defaultVariants;

    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial="hidden"
                whileInView="visible" // Simple trigger
                viewport={{ once: true, margin: inViewMargin }}
                animate={!inView ? "visible" : undefined} // If inview is false, animate immediately? 
                // Logic: if inView is true, use whileInView. If inView is false, use animate="visible" (onload)
                // Adjusting logic:
                // If inView prop is true, we rely on whileInView.
                // If inView prop is false, we rely on animate="visible".
                variants={combinedVariants}
                transition={{
                    delay: 0.04 + delay,
                    duration,
                    ease: "easeOut",
                }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
