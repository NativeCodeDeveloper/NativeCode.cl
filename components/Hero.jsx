"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LaserFlow from "./LaserFlow";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

            {/* Laser Flow Background - Responsive positioning */}
            <div className="absolute inset-0 md:inset-5 z-10 md:top-4 -top-40">
                <LaserFlow
                    horizontalBeamOffset={0.9}
                    verticalBeamOffset={0.46}
                    color="#CF9EFF"
                    horizontalSizing={2.0}
                    verticalSizing={2.5}
                    wispDensity={1.5}
                    wispSpeed={10}
                    wispIntensity={5.1}
                    flowSpeed={0.50}
                    flowStrength={0.25}
                    fogIntensity={0.50}
                    fogScale={0.05}
                    fogFallSpeed={0.5}
                    decay={1.3}
                    falloffStart={1.5}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto px-4">

                {/* Main Title - Styled with Michroma via font-display */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full flex justify-center"
                >
                    <h1 className="mt-40 hidden md:block text-[10vw] md:text-[8rem] lg:text-[10rem] font-display font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-white/05 via-white/45 to-white/95 select-none drop-shadow-3xl">
                        <strong>NativeCode</strong>
                    </h1>

                    <h1 className=" block md:hidden mt-40 text-[10vw] md:text-[8rem] lg:text-[10rem] font-display font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-white/05 via-white/45 to-white/95 select-none drop-shadow-3xl">
                        <strong>NativeCode</strong>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-xs md:text-2xl text-zinc-300 max-w-2xl font-normal leading-relaxed tracking-wide font-display font-michroma mt-10"
                >
                    <span className='hidden md:block'>Automatización y Desarrollo de Software</span>

                    {/* Mobile: Minimal Startup Design */}
                    <span className='block md:hidden text-sm text-zinc-400 font-light tracking-wider'>
                        Automatización y Desarrollo de Software
                    </span>
                </motion.p>

                {/* Desktop CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="hidden md:block pt-8"
                >
                    <a
                        href="https://wa.me/56966091038"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-mono uppercase tracking-widest transition-all"
                    >
                        <span>Contáctanos</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Mobile CTA Section - Minimalist Tech Startup Style */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="w-full max-w-2xl relative px-6"
                >
                    <div className="block md:hidden space-y-6">
                        {/* Minimal Value Proposition */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-light text-white/90 tracking-wide">
                                Tu Socio en<br/>
                                <span className="text-2xl font-semibold bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
                                    Innovación Digital
                                </span>
                            </h2>

                            {/* Minimalist Feature Pills */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="px-3 py-1.5 text-xs border border-zinc-700/50 rounded-full text-zinc-300 backdrop-blur-sm bg-black/30">
                                    Web Apps
                                </span>
                                <span className="px-3 py-1.5 text-xs border border-zinc-700/50 rounded-full text-zinc-300 backdrop-blur-sm bg-black/30">
                                    Automatización
                                </span>
                                <span className="px-3 py-1.5 text-xs border border-zinc-700/50 rounded-full text-zinc-300 backdrop-blur-sm bg-black/30">
                                    Integración
                                </span>
                                <span className="px-3 py-1.5 text-xs border border-zinc-700/50 rounded-full text-zinc-300 backdrop-blur-sm bg-black/30">
                                    Consultoría
                                </span>
                            </div>
                        </div>

                        {/* Minimalist CTA Button */}
                        <a
                            href="https://wa.me/56966091038"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full bg-white hover:bg-zinc-100 text-black text-sm font-medium py-2.5 px-5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            <span>Contáctanos</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Subtle Divider Line */}
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mx-auto"></div>
                    </div>
                </motion.div>

            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none z-20" />
        </section>
    );
}
