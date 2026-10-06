"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({ children, className = "", }: {
    children: ReactNode;
    className?: string;
}) {
    const reduce = useReducedMotion();
    return (<motion.div className={className} initial={{ opacity: 1, y: 0 }} whileInView={reduce ? undefined : { y: [18, 0], opacity: [0.65, 1] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>);
}
