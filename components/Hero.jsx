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
        <section className="relative isolate flex min-h-[calc(100svh-2rem)] items-center overflow-hidden bg-black pt-24 pb-12 md:pt-28 md:pb-16">
            <HeroSplineBackground />

            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.88)_36%,rgba(0,0,0,0.28)_65%,rgba(0,0,0,0.08)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-linear-to-t from-black via-black/35 to-transparent" />

            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
                className="pointer-events-none relative z-20 mx-auto w-full max-w-7xl px-6"
            >
                <div className="max-w-2xl -translate-y-4 sm:translate-x-6 sm:-translate-y-6 md:max-w-[54rem] md:translate-x-16 md:-translate-y-10 lg:translate-x-20 lg:-translate-y-12">
                    <motion.div
                        variants={reveal}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative mb-7 aspect-[28/5] w-96 max-w-full overflow-hidden sm:w-[40rem] md:mb-9 md:w-[50rem]"
                    >
                        <Image
                            src="/logo3.png"
                            alt="NativeCode"
                            fill
                            sizes="(min-width: 768px) 800px, (min-width: 640px) 640px, 384px"
                            className="scale-[1.18] object-cover object-center"
                        />
                    </motion.div>

                    <motion.h1
                        variants={reveal}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="font-display text-2xl leading-[1.35] text-white sm:text-3xl md:text-4xl"
                    >
                        Ingeniería de software
                        <span className="mt-1 block text-3xl text-violet-500 sm:text-4xl md:text-5xl">
                            en salud
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={reveal}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="mt-6 max-w-xl font-michroma text-xs leading-6 text-zinc-200 sm:text-sm md:mt-7 md:text-base"
                    >
                        Tecnología que conecta, <span className="text-violet-400">innova</span> y <span className="text-violet-400">transforma</span>
                    </motion.p>

                </div>
            </motion.div>
        </section>
    );
}
