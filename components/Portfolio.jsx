import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const projects = [

    {
        date: "MARZO 03, 2026",
        title: "CLÍNICA ORTEGA & SCHMUCK",
        description: "Arquitectura digital diseñada para clínica Dental, de alta complejidad. Centralizamos la operación clínica en un solo ecosistema donde la agenda inteligente, el historial médico y la facturación automática serán un alivio.",
        tag: "ECOSYSTEM",
        image: "images/ortega.png",
        link: "https://www.ortegayschmuck.cl"
    },
    {
        date: "MARZO 01, 2026",
        title: "CLÍNICA INNOVADENT",
        description: "Arquitectura digital diseñada para clínica Dental, transformmamos la operación y gestión de un Excel a una plataforma de agendamiento automático, automatizando a los profesionales la gestión de sus reservas.",
        tag: "ECOSYSTEM",
        image: "images/innovadent.png",
        link: "https://www.innovadenttalca.cl"
    },
    {
        date: "FEBRERO 04, 2026",
        title: "SILUETA CHIC",
        description: "Transformamos la operación de Silueta Chic eliminando la gestión manual. Implementamos un ecosistema de agendamiento inteligente sincronizado con recordatorios automáticos y una pasarela de pagos blindada. Ahora, la clínica no solo gestiona pacientes, sino que asegura sus ingresos antes de cada cita.",
        tag: "AUTOMATIZACION DE CLÍNICA",
        image: "images/silueta.png",
        link: "https://siluetachic.cl"
    },
    {
        date: "ABRIL 01, 2025",
        title: "RUNA JOYAS E-commerce Platform",
        description: "Plataforma E-commerce de alto rendimiento. Automatizamos el ciclo completo de venta: desde la exhibición premium del catálogo hasta la gestión automatizada de pedidos y pagos, eliminando la carga administrativa manual del proceso de venta online",
        tag: "SISTEMA DE VENTAS ONLINE",
        image: "images/runa2.png",
        link: "https://www.runajoyas.cl"
    },
    {
        date: "AGOSTO 22, 2025",
        title: "MACAR REPUESTOS",
        description: "Transformamos la venta de repuestos automotrices en una experiencia de búsqueda inteligente. Desarrollamos una plataforma robusta capaz de gestionar catálogos extensos con filtros avanzados, facilitando la conversión inmediata y la confianza del comprador técnico",
        tag: "E-COMMERCE ALTA GAMMA",
        image: "images/macar.png",
        link: "https://www.repuestosmacar.cl"
    },
    {
        date: "NOVIEMBRE 10, 2025",
        title: "MEDIFY CLINIC",
        description: "Arquitectura digital para salud de alta complejidad. Centralizamos la operación clínica en un solo ecosistema donde la agenda inteligente, el historial médico y la facturación automática coexisten sin fricción, permitiendo que los profesionales se enfoquen en la medicina y no en el software",
        tag: "ECOSYSTEM",
        image: "images/medify.png",
        link: "https://www.medifyclinic.cl"
    },
    {
        date: "SEPTIEMBRE 10, 2025",
        title: "NEO FITNESS",
        description: "Digitalización premium para Neo Fitness. Construimos un ecosistema de venta directa al consumidor (D2C) que combina un diseño visual impactante con una arquitectura de pagos rápida, optimizando la conversión y la fidelización de la comunidad fitness.",
        tag: "SISTEMA D2C",
        image: "images/neo.png",
        link: "https://coco-fit-front-end-git-main-nativecodes-projects-fbcce9f5.vercel.app"
    },
    {
        date: "SEPTIEMBRE 10, 2025",
        title: "JPA INGENIERÍA",
        description: "Desarrollo de plataforma corporativa de alta fidelidad para el sector industrial. Proyectamos la capacidad técnica de JPA Ingeniería mediante una arquitectura web sólida que prioriza la exposición de proyectos complejos, la confianza técnica y el posicionamiento de marca en mercados B2B competitivos.",
        tag: "DISEÑO WEB MINIMALISTA" +
            "",
        image: "images/JPA.png",
        link: "https://jpaingenieriasolutions.cl"
    },
    {
        date: "SEPTIEMBRE 10, 2025",
        title: "DENNISS BELTRÁN - PSICOLOGÍA CLINICA",
        description: "Digitalización de la práctica terapéutica para la consulta de Denniss Beltrán. Implementamos un ecosistema de agendamiento autónomo que respeta el tiempo del paciente y del profesional, eliminando la fricción administrativa" +
            "",
        tag: "AGENDA CLINICA" +
            "",
        image: "images/DEN.png",
        link: "https://dennisbeltran.medifyclinic.cl"
    },
];

export default function Portfolio() {
    const featuredProjects = projects.slice(0, 4);

    return (
        <section className="bg-black py-24 border-t border-[rgba(31,34,40)] relative">
            
            {/* Top Fade from Black */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent pointer-events-none z-10" />
            
            <div className="max-w-7xl mx-auto px-6 space-y-24">

                {featuredProjects.map((project, index) => (
                    <div key={index} className="group border-t border-[rgba(31,34,40)] pt-12 first:border-none first:pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-[15%_45%_40%] gap-8 items-start">

                            {/* Date Column */}
                            <div className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase pt-2">
                                {project.date}
                            </div>

                            {/* Content Column */}
                            <div className="flex flex-col h-full justify-between pr-8">
                                <div>
                                    <h3 className="text-2xl font-sans font-medium text-white mb-4 tracking-tight">
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
                    </div>
                ))}

                <div className="flex justify-center pt-4">
                    <Link
                        href="/proyectos"
                        className="px-8 py-3 rounded-full border border-[rgba(255,255,255,0.2)] bg-white/5 text-xs font-mono text-white tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Ver más
                    </Link>
                </div>

            </div>
        </section>
    );
}
