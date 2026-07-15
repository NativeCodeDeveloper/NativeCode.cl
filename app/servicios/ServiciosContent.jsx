"use client";

import { motion } from "framer-motion";
import { jetbrains } from "next/font/google";
import { ArrowUpRight, Smartphone, Globe, Database, Code2, Zap, Shield } from "lucide-react";

const services = [
    {
        icon: Smartphone,
        title: "Plataformas Clínicas a Medida",
        description: "Sistemas de agendamiento, fichas clínicas y gestión de pacientes diseñados desde cero para la operación real de tu centro de salud — no plantillas genéricas forzadas a encajar.",
    },
    {
        icon: Globe,
        title: "Plataformas Web",
        description: "Sitios y portales para clínicas y profesionales de la salud, pensados para generar confianza y convertir visitas en pacientes agendados — rápidos, seguros y fáciles de mantener.",
    },
    {
        icon: Database,
        title: "Infraestructura Cloud",
        description: "Arquitecturas en la nube preparadas para la disponibilidad y trazabilidad que exige el dato clínico. AWS, Azure & Google Cloud Platform, arquitecturas serverless y microservicios, CI/CD automatizado.",
    },
    {
        icon: Code2,
        title: "Arquitectura de Software",
        description: "Sistemas construidos para evolucionar junto a tu operación, sin reescrituras completas cada vez que creces. Clean Architecture & SOLID, patrones de diseño modernos, testing automatizado (TDD).",
    },
    {
        icon: Zap,
        title: "Performance & SEO",
        description: "Plataformas rápidas y bien posicionadas para que los pacientes te encuentren y agenden sin fricción. Core Web Vitals optimizados, Lighthouse 100/100, SEO técnico avanzado.",
    },
    {
        icon: Shield,
        title: "Seguridad & Cumplimiento",
        description: "Protección de datos clínicos con los estándares que exige la industria de la salud. Autenticación OAuth 2.0 & JWT, encriptación end-to-end, cumplimiento GDPR & HIPAA.",
    }
];

export default function ServiciosContent() {
    return (
        <main className="min-h-screen bg-black">

            {/* Hero Section */}
            <section className="px-6 pt-32 pb-20 border-b border-[rgba(31,34,40)]">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-8 text-white"
                    >
                        Servicios
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl"
                    >
                        Construimos la infraestructura digital que necesitan clínicas, centros médicos y empresas que operan en salud — con la misma disciplina de ingeniería que exigen los productos digitales globales.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(31,34,40)]">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-12 transition-colors hover:bg-white/5 flex flex-col justify-between min-h-100"
                            >
                                {/* Header */}
                                <div className="space-y-6">
                                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white border border-[rgba(31,34,40)] group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight text-white mb-2 font-display">
                                        {service.title}
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed text-base">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Action Pill */}
                                <div className="mt-12 flex items-center justify-between">
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                                        .
                                    </span>
                                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-white/10 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                                        <span>Ver más</span>
                                        <ArrowUpRight size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-32 border-t border-[rgba(31,34,40)]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                            ¿Listo para comenzar?
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-400">
                            Conversemos sobre tu proyecto y cómo podemos ayudarte.
                        </p>
                        <div className="pt-4">
                            <a
                                href="https://wa.me/56966091038"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded text-lg font-semibold hover:bg-zinc-200 transition-all"
                            >
                                Contactar
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
