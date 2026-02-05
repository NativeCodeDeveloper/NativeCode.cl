"use client";

import { motion } from "framer-motion";

export default function SobreNosotrosPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <header className="mb-32 space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold tracking-tight"
                    >
                        Sobre Nosotros.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zinc-400 max-w-3xl font-light leading-relaxed"
                    >
                        Somos una agencia de diseño y desarrollo enfocada en construir el futuro web empresarial digital de Chile y el mundo.
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
                                Democratizar el acceso a la tecnología de punta, creando herramientas que permitan a las pymes, empresas, consultas particulares y clínicas a competir en un mercado global cada vez más complejo.
                            </p>
                            <p className="text-zinc-400 leading-relaxed font-light">
                                Creemos que el código no es solo una herramienta, sino un arte que, cuando se ejecuta con precisión, tiene el poder de transformar industrias y mejorar vidas.
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
                    <h2 className="text-2xl font-display mb-8">¿Listo para construir el futuro?</h2>
                    <a
                        href="https://wa.me/56966091038"
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
