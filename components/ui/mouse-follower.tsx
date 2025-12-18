"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export function MouseFollower() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth minimalist spring physics
    const springConfig = { damping: 20, stiffness: 300, mass: 0.2 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{ x, y }}
            className={cn(
                "pointer-events-none fixed left-0 top-0 z-[9999] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference md:block" // Mini circle with difference blend mode
            )}
        />
    );
}
