"use client";
import { useCopy } from "@/i18n/copy";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
export function ImmersiveImage({ src, alt, className = "", 
// Tall mobile frames crop landscape images; request enough pixels for their height.
sizes = "(max-width: 1100px) 160vh, 100vw", }: {
    src: string;
    alt: string;
    className?: string;
    sizes?: string;
}) {
    const t = useCopy();
    const frame = useRef<HTMLDivElement>(null);
    const [nearViewport, setNearViewport] = useState(false);
    useEffect(() => {
        const element = frame.current;
        if (!element) return;
        // Native lazy loading can miss images inside transformed, clipped frames.
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setNearViewport(true);
                observer.disconnect();
            }
        }, { rootMargin: "400px" });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);
    const { scrollYProgress } = useScroll({
        target: frame,
        offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1.055, 1]);
    return (<div ref={frame} className={`immersive-image ${className}`}>
      <motion.div className="immersive-image-inner" style={{ scale }}>
        <Image src={src} alt={t(alt)} fill sizes={sizes} loading={nearViewport ? "eager" : "lazy"}/>
      </motion.div>
    </div>);
}
