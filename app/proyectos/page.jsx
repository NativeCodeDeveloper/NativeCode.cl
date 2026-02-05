"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        date: "FEBRERO 04, 2026",
        title: "SILUETA CHIC",
        description: "Plataforma diseñada para gestionar clientes para una clínica de estética.",
        tag: "WEB DEVELOPMENT",
        image: "images/silueta.png",
        link: "https://siluetachic.cl"
    },
    {
        date: "ABRIL 01, 2025",
        title: "RUNA JOYAS E-commerce Platform",
        description: "Plataforma de comercio electrónico para la venta de joyas artesanales con integración de pasarelas de pago y gestión de inventario.",
        tag: "WEB DEVELOPMENT",
        image: "images/runa2.png",
        link: "https://www.runajoyas.cl"
    },
    {
        date: "AGOSTO 22, 2025",
        title: "MACAR REPUESTOS",
        description: "Plataforma destinada a la venta de repuestos automotrices de alta calidad con catálogo en línea y opciones de envío.",
        tag: "WEB DEVELOPMENT",
        image: "images/macar.png",
        link: "https://www.repuestosmacar.cl"
    },
    {
        date: "NOVIEMBRE 10, 2025",
        title: "MEDIFY CLINIC",
        description: "Ecosistema diseñado para la gestión integral de profesionales de la salud con funcionalidades de citas, historial médico y facturación.",
        tag: "ECOSYSTEM",
        image: "images/medify.png",
        link: "https://www.medifyclinic.cl"
    },

];

export default function ProyectosPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24 space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
                        Proyectos.
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
                        Explora nuestra selección de trabajos donde la tecnología y el diseño convergen para crear soluciones excepcionales.
                    </p>
                </motion.header>

                {/* Projects List */}
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group border-t border-[rgba(31,34,40)] pt-12 first:border-none first:pt-0"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[15%_45%_40%] gap-8 items-start">

                                {/* Date Column */}
                                <div className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase pt-2">
                                    {project.date}
                                </div>

                                {/* Content Column */}
                                <div className="flex flex-col h-full justify-between pr-8">
                                    <div>
                                        <h3 className="text-2xl font-display text-white mb-4 tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-400 text-base leading-relaxed font-normal max-w-md">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-12 md:mt-24">
                                        <span className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase">
                                            {project.tag}
                                        </span>
                                        <Link
                                            href={project.link}
                                            className="px-6 py-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-white/5 text-[10px] font-mono text-white tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                                        >
                                            VER PROYECTO
                                        </Link>
                                    </div>
                                </div>

                                {/* Image Column */}
                                <div className="relative aspect-video overflow-hidden rounded-sm group-hover:opacity-90 transition-opacity">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    />
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </main>
    );
}
