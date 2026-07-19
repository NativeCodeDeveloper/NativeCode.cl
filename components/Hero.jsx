"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reveal = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

export default function Hero() {
    return (
        <section className="relative isolate flex min-h-[calc(100svh-2rem)] items-center overflow-hidden bg-black pt-24 pb-12 md:pt-28 md:pb-16">
            <Image
                src="/portadanueva.png"
                alt="Resonancia magnética cerebral con iluminación violeta"
                fill
                priority
                sizes="100vw"
                className="-z-30 origin-right scale-[1.06] object-contain object-right"
            />

            <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.92)_38%,rgba(0,0,0,0.38)_67%,rgba(0,0,0,0.08)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.86)_35%,rgba(0,0,0,0.28)_59%,rgba(0,0,0,0.04)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-linear-to-t from-black via-black/35 to-transparent" />

            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
                className="mx-auto w-full max-w-7xl px-6"
            >
                <div className="max-w-2xl md:max-w-[46rem]">
                    <motion.div
                        variants={reveal}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative mb-7 aspect-[28/5] w-80 max-w-full overflow-hidden sm:w-[34rem] md:mb-9 md:w-[42rem]"
                    >
                        <Image
                            src="/logo2.png"
                            alt="NativeCode"
                            fill
                            sizes="(min-width: 768px) 672px, (min-width: 640px) 544px, 320px"
                            className="object-cover object-center"
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
