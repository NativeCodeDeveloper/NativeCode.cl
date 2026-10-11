"use client";

import { motion } from "framer-motion";

export default function SobreNosotrosContent() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <header className="mb-32 space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight"
                    >
                        Sobre Nosotros.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zinc-400 max-w-3xl font-light leading-relaxed"
                    >
                        Somos NativeCode, una empresa de desarrollo de software a medida. Creamos e-commerce de alto rendimiento, landing pages, portales e integraciones, con especialización en plataformas para salud.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    {/* Mission */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.3em]">Nuestra Misión</h2>
                        <div className="space-y-4">
                            <p className="text-2xl font-light leading-relaxed text-white">
                                Transformar procesos complejos en soluciones digitales que ayuden a las empresas a vender, operar y crecer. Construimos cada proyecto alrededor de sus usuarios y necesidades reales.
                            </p>
                            <p className="text-zinc-400 leading-relaxed font-light">
                                Junto al desarrollo a medida, creamos productos propios por suscripción: Agenda Clínica para la gestión de centros de salud y LeveyQC para el control de calidad analítica en laboratorios.
                            </p>
                        </div>
                    </motion.section>

                    {/* Values */}
                    <motion.section
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.3em]">Nuestros Valores</h2>
                        <div className="grid grid-cols-1 gap-8">
                            {[
                                { title: "Excelencia", desc: "No nos conformamos con lo que funciona. Buscamos lo extraordinario." },
                                { title: "Transparencia", desc: "Comunicación clara y honesta en cada etapa del proceso." },
                                { title: "Innovación", desc: "Exploramos constantemente nuevas fronteras tecnológicas." }
                            ].map((value, i) => (
                                <div key={i} className="space-y-2 border-l border-zinc-800 pl-6">
                                    <h3 className="text-lg font-bold text-white">{value.title}</h3>
                                    <p className="text-zinc-400 text-sm font-light">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>

                {/* Team Placeholder / Future */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-48 pt-24 border-t border-zinc-900 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-8">¿Listo para construir el futuro?</h2>
                    <a
                        href="https://wa.me/56932912943"
                        target="_blank"
                        className="inline-block px-12 py-4 rounded-full bg-white text-black font-mono uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors"
                    >
                        Únete a nosotros
                    </a>
                </motion.div>

            </div>
        </main>
    );
}
