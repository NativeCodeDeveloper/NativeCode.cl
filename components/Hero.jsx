"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Package } from "lucide-react";
import { HeroSplineBackground } from "@/components/ui/galaxy-interactive-hero-section";

const reveal = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

export default function Hero() {
    return (
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#02030a] text-white">
            <div className="absolute inset-0 z-0 [filter:saturate(1.45)_contrast(1.08)]">
                <HeroSplineBackground />
            </div>

            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_72%_48%,rgba(126,34,206,0.28)_0%,rgba(37,99,235,0.14)_26%,transparent_53%),linear-gradient(90deg,rgba(1,2,8,0.93)_0%,rgba(1,2,8,0.72)_31%,rgba(1,2,8,0.18)_62%,rgba(1,2,8,0.04)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-44 bg-linear-to-b from-[#02030a]/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[45%] bg-linear-to-t from-black via-black/75 to-transparent" />

            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.14, delayChildren: 0.1 }}
                className="pointer-events-none relative z-20 mx-auto flex min-h-[100svh] w-full max-w-[1920px] items-center px-6 pb-14 pt-28 sm:px-10 md:px-16 lg:px-[5.75vw] lg:pb-24 lg:pt-32"
            >
                <div className="w-full max-w-[1320px] lg:translate-y-4">
                    <motion.h1
                        variants={reveal}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
                    >
                        Soluciones de Software
                        <span className="block font-light text-white/90">Empresariales</span>
                    </motion.h1>

                    <motion.p
                        variants={reveal}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
                    >
                        Creamos plataformas especializadas que ordenan procesos,
                        fortalecen la gestión y simplifican el trabajo de tu empresa.
                    </motion.p>

                    <motion.div
                        variants={reveal}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="pointer-events-auto mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                    >
                        <Link
                            href="/servicios"
                            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                        >
                            <Code2 aria-hidden="true" className="h-5 w-5" />
                            Desarrollo a medida
                            <ArrowRight aria-hidden="true" className="h-5 w-5" />
                        </Link>

                        <Link
                            href="/proyectos"
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-8 py-4 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/5"
                        >
                            <Package aria-hidden="true" className="h-5 w-5" />
                            Productos mensuales
                            <ArrowRight aria-hidden="true" className="h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
}
