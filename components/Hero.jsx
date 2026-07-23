"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeroSplineBackground } from "@/components/ui/galaxy-interactive-hero-section";

const reveal = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

export default function Hero() {
    return (
        <section className="relative isolate flex min-h-[calc(100svh-2rem)] items-center overflow-hidden bg-black pt-24 pb-14 md:pt-28 md:pb-16">
            <HeroSplineBackground />

            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.62)_55%,rgba(0,0,0,0.96)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.88)_38%,rgba(0,0,0,0.42)_64%,rgba(0,0,0,0.08)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-linear-to-t from-black via-black/45 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-16 w-56 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.9)_45%,transparent_75%)]" />

            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.14, delayChildren: 0.1 }}
                className="pointer-events-none relative z-20 w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40"
            >
                <div className="max-w-[58rem] -translate-y-4 md:-translate-y-8">
                    <motion.div
                        variants={reveal}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative mb-8 aspect-[28/5] w-full max-w-[46rem] overflow-hidden sm:mb-10"
                    >
                        <Image
                            src="/logo3.png"
                            alt="NativeCode"
                            fill
                            sizes="(min-width: 768px) 736px, calc(100vw - 48px)"
                            className="scale-[1.18] object-cover object-center"
                            priority
                        />
                    </motion.div>

                    <motion.h1
                        variants={reveal}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-[46rem] font-display text-sm uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.75)] sm:text-base md:text-lg"
                    >
                        Ingeniería de software en salud
                    </motion.h1>

                    <motion.p
                        variants={reveal}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-5 max-w-2xl text-balance font-michroma text-xs leading-6 text-zinc-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-sm md:mt-6 md:text-base"
                    >
                        Tecnología que conecta, <span className="text-white">innova</span> y <span className="text-white">transforma</span>
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
