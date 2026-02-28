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
                    verticalBeamOffset={0.49}
                    color="#CF9EFF"
                    horizontalSizing={2.0}
                    verticalSizing={2.0}
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

                    <h1 className="mt-20 mb-8 text-center font-display tracking-tight leading-none text-[clamp(2.0rem,9vw,7.6rem)]">
                        <span
                        className="inline-block max-w-full whitespace-nowrap px-3 mt-[19vh] sm:mt-[16vh] md:mt-[10vh] lg:mt-[8vh] text-transparent bg-clip-text bg-gradient-to-r from-white/18 via-white/72 to-white/95"
                        style={{
                            WebkitMaskImage:
                                "linear-gradient(to right, rgba(0,0,0,0.30) 15%, rgba(0,0,0,0.80) 50%, rgba(0,0,0,10) 95%)",
                            maskImage:
                                "linear-gradient(to right, rgba(0,0,0,0.30) 15%, rgba(0,0,0,0.80) 50%, rgba(0,0,0,10) 95%)",
                        }}
                        >
                        <strong className="tracking-[0.09em]">NativeCode</strong>
                        </span>
                    </h1>

                    {/* Logo 
                    
                    <img
                        src="/logos/logoport1.png"
                        alt="logoportada"
                        className="mt-[28vh] sm:mt-[16vh] md:mt-[10vh] lg:mt-[8vh] w-[74vw] sm:w-[82vw] md:w-[80vw] lg:w-[64vw] xl:w-[60vw] max-w-[64rem] h-auto object-contain"
                        style={{
                            WebkitMaskImage:
                                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)",
                            maskImage:
                                "linear-gradient(to right, transparent 1%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,1) 80%)",
                        }}
                    />
                        */}


                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-xs md:text-2xl text-zinc-300 max-w-2xl font-normal leading-relaxed tracking-wide font-display font-michroma mt-0 mb-8"
                >
                    <span className='hidden md:block'>Automatización y Desarrollo de Software</span>

                    {/* Mobile: Minimal Startup Design */}
                    <span className='block md:hidden text-sm text-zinc-400 font-light tracking-wider mb-4'>
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
                                Tu Socio en<br />
                                <span className="text-2xl font-semibold bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
                                    Innovación Digital
                                </span>
                            </h2>

                            {/* Minimalist Feature Pills */}
                            <div className="mt-4 flex flex-wrap gap-2 justify-center">
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
                            className="mt-4 group w-full bg-white hover:bg-zinc-100 text-black text-sm font-medium py-2.5 px-5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
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
