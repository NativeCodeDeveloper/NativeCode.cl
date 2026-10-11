"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Target, HeartPulse, PanelsTopLeft, Cable, Activity } from "lucide-react";

const services = [
    {
        icon: ShoppingBag,
        title: "E-commerce de alto rendimiento",
        description: "Tiendas a medida diseñadas para recibir miles de visitas y acompañar campañas de alta demanda. Conectamos catálogo, pagos y operación comercial con una arquitectura pensada para crecer.",
    },
    {
        icon: Target,
        title: "Landing pages de captación",
        description: "Páginas para campañas, servicios y lanzamientos, diseñadas para captar, filtrar y convertir prospectos. Adaptamos el mensaje y el recorrido a tu audiencia y a los objetivos de tu negocio.",
    },
    {
        icon: HeartPulse,
        title: "Plataformas para salud",
        description: "Desarrollo especializado para clínicas, centros médicos y laboratorios. Portales de pacientes, gestión clínica y herramientas que responden a los procesos particulares de cada organización.",
    },
    {
        icon: PanelsTopLeft,
        title: "Portales y sistemas a medida",
        description: "Portales de clientes, plataformas de gestión y sistemas internos para centralizar información, coordinar equipos y automatizar tareas. Software diseñado alrededor de tu forma de trabajar.",
    },
    {
        icon: Cable,
        title: "Integraciones de negocio",
        description: "Conectamos tus plataformas con Impuestos Internos (SII), WhatsApp, Gmail y pasarelas de pago. Diseñamos flujos de datos y comunicaciones según los requisitos de tu operación.",
    },
    {
        icon: Activity,
        title: "Interoperabilidad HL7",
        description: "Integramos sistemas de información clínica mediante HL7 para facilitar el intercambio de datos entre plataformas de salud. Definimos el alcance de cada integración según los sistemas de origen y destino.",
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
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8 text-white font-display"
                    >
                        Desarrollo a medida para tu negocio.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl"
                    >
                        E-commerce de alto rendimiento, landing pages, plataformas especializadas e integraciones. Construimos el software que tu empresa necesita para vender, operar y escalar.
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
                                className="group relative p-7 sm:p-10 transition-colors hover:bg-white/5 flex flex-col justify-between min-h-100"
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
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                            Conversemos sobre tu próximo proyecto.
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-400">
                            Cuéntanos qué necesitas construir, qué sistemas utilizas y qué volumen de operación esperas. Definamos una solución a tu medida.
                        </p>
                        <div className="pt-4">
                            <a
                                href="https://wa.me/56932912943"
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
