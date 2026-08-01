"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
                <div className="w-full max-w-[980px] lg:translate-y-4">
                    <motion.p
                        variants={reveal}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-linear-to-r from-fuchsia-300 via-violet-200 to-sky-300 bg-clip-text font-michroma text-[10px] uppercase tracking-[0.28em] text-transparent sm:text-xs lg:text-[13px]"
                    >
                        Tecnología especializada en salud
                    </motion.p>

                    <motion.h1
                        variants={reveal}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative mt-7 aspect-[28/5] w-full max-w-[840px] overflow-hidden"
                    >
                        <span className="sr-only">NativeCode</span>
                        <Image
                            src="/logo3.png"
                            alt="NativeCode"
                            fill
                            sizes="(min-width: 1024px) 840px, calc(100vw - 48px)"
                            className="scale-[1.18] object-cover object-center"
                            priority
                        />
                    </motion.h1>

                    <motion.p
                        variants={reveal}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-lg lg:text-xl lg:leading-9"
                    >
                        Creamos plataformas especializadas que ordenan procesos, fortalecen la gestión clínica y simplifican el trabajo de profesionales, centros de salud y laboratorios.
                    </motion.p>

                    <motion.div
                        variants={reveal}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="pointer-events-auto mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                    >
                        <span className="inline-flex rounded-[16px] bg-linear-to-r from-fuchsia-500 via-violet-500 to-sky-400 p-px shadow-[0_0_24px_rgba(124,58,237,0.38)]">
                            <Link
                                href="#soluciones"
                                className="flex items-center gap-3 rounded-[15px] bg-[#03050d]/95 px-6 py-4 font-michroma text-[9px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#0b0d18] sm:px-7 lg:text-[10px]"
                            >
                                Conoce nuestras soluciones
                                <span aria-hidden="true" className="text-base leading-none">↓</span>
                            </Link>
                        </span>

                        <Link
                            href="#nativecode"
                            className="rounded-[15px] border border-white/20 bg-black/20 px-6 py-4 font-michroma text-[9px] uppercase tracking-[0.18em] text-zinc-200 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/5 lg:text-[10px]"
                        >
                            Descubre NativeCode
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
}
