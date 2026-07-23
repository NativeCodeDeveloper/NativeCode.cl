"use client";

import { motion } from "framer-motion";
import {
    BellRing,
    CheckCircle2,
    ClipboardCheck,
    LineChart,
    MessageCircle,
    Microscope,
    ShieldCheck,
} from "lucide-react";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

const demoLeveyResults = [
    { x: 60, y: 126 },
    { x: 88, y: 116 },
    { x: 116, y: 102 },
    { x: 144, y: 134 },
    { x: 172, y: 148 },
    { x: 200, y: 112 },
    { x: 228, y: 96 },
    { x: 256, y: 80 },
    { x: 284, y: 106 },
    { x: 312, y: 121 },
    { x: 340, y: 132 },
    { x: 368, y: 159 },
    { x: 396, y: 142 },
    { x: 424, y: 118 },
    { x: 452, y: 108 },
    { x: 480, y: 88 },
    { x: 508, y: 99 },
    { x: 536, y: 126 },
    { x: 564, y: 137 },
    { x: 592, y: 115 },
];

const leveyBenefits = [
    {
        title: "Detección oportuna",
        description: "Identifica desviaciones antes de validar resultados clínicos.",
        icon: LineChart,
    },
    {
        title: "Reglas de Westgard",
        description: "Aplica criterios de control automáticamente sobre cada serie.",
        icon: ShieldCheck,
    },
    {
        title: "Alertas y acciones correctivas",
        description: "Registra incidencias, responsables y decisiones en un mismo flujo.",
        icon: BellRing,
    },
    {
        title: "Trazabilidad completa",
        description: "Conserva cada resultado y acción para revisiones y auditorías.",
        icon: ClipboardCheck,
    },
    {
        title: "Menos tareas manuales",
        description: "Reemplaza cálculos, planillas y registros difíciles de controlar.",
        icon: CheckCircle2,
    },
    {
        title: "Supervisión analítica",
        description: "Centraliza equipos, analitos, lotes y niveles de control.",
        icon: Microscope,
    },
];

export default function InfoSection() {
    const demoPolyline = demoLeveyResults
        .map(({ x, y }) => `${x},${y}`)
        .join(" ");

    return (
        <section
            id="leveyqc"
            className="relative overflow-hidden border-b border-white/10 bg-[#020405]"
        >
            <StarsBackground
                starColor="#bdebf2"
                speed={70}
                factor={0.018}
                pointerEvents={false}
                className="pointer-events-none absolute inset-0 opacity-35"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
                <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(34rem,1.1fr)] lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.65 }}
                        className="max-w-2xl"
                    >
                        <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
                            LeveyQC
                        </h2>

                        <p className="mt-5 max-w-xl text-justify text-xl leading-8 text-zinc-100 sm:text-2xl">
                            Control de calidad clínico, centralizado y trazable.
                        </p>

                        <div className="mt-7 flex max-w-xl flex-col gap-4 text-base leading-7 text-zinc-400">
                            <p className="text-justify">
                                LeveyQC es una plataforma especializada en control de calidad interno para laboratorios clínicos. Permite registrar y analizar resultados, visualizar gráficos de Levey-Jennings y aplicar reglas de Westgard desde un solo lugar.
                            </p>
                            <p className="text-justify">
                                Centraliza equipos, analitos, lotes y niveles de control para que cada resultado, alerta y decisión permanezca completamente trazable.
                            </p>
                        </div>

                        <p className="mt-8 max-w-xl text-justify font-display text-lg leading-8 text-white">
                            ¿Tu laboratorio todavía depende de planillas, cálculos manuales o registros dispersos?
                        </p>

                        <a
                            href="https://wa.me/56932912943?text=Hola%2C%20quiero%20solicitar%20una%20demostraci%C3%B3n%20de%20LeveyQC."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                        >
                            <MessageCircle
                                aria-hidden="true"
                                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                            Solicitar una demostración
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.65, delay: 0.08 }}
                        className="overflow-hidden rounded-2xl border border-white/5 bg-black/70 backdrop-blur-sm"
                    >
                        <div className="flex flex-col gap-3 border-b border-white/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="font-mono text-xs uppercase text-zinc-500">
                                    Levey-Jennings
                                </p>
                                <p className="mt-1 text-sm font-medium text-zinc-100">
                                    Glucosa · Vitros-5200 · Nivel 2
                                </p>
                            </div>
                            <span className="inline-flex w-fit items-center gap-2 text-xs text-emerald-300">
                                <span className="size-2 rounded-full bg-emerald-400" />
                                Proceso bajo control
                            </span>
                        </div>

                        <div className="px-3 py-5 sm:px-5">
                            <svg
                                viewBox="0 0 640 240"
                                role="img"
                                aria-label="Vista demostrativa de un gráfico de control Levey-Jennings"
                                className="aspect-[8/3] w-full"
                            >
                                {[30, 60, 90, 120, 150, 180, 210].map((y, index) => (
                                    <line
                                        key={y}
                                        x1="48"
                                        x2="620"
                                        y1={y}
                                        y2={y}
                                        stroke={index === 3 ? "#67e8f9" : "#27272a"}
                                        strokeWidth={index === 3 ? "1.4" : "1"}
                                        strokeDasharray={index === 3 ? undefined : "5 6"}
                                    />
                                ))}

                                {[
                                    { y: 30, label: "+3 DE" },
                                    { y: 60, label: "+2 DE" },
                                    { y: 90, label: "+1 DE" },
                                    { y: 120, label: "MEDIA" },
                                    { y: 150, label: "-1 DE" },
                                    { y: 180, label: "-2 DE" },
                                    { y: 210, label: "-3 DE" },
                                ].map(({ y, label }) => (
                                    <text
                                        key={label}
                                        x="4"
                                        y={y + 4}
                                        fill="#71717a"
                                        fontSize="10"
                                    >
                                        {label}
                                    </text>
                                ))}

                                <polyline
                                    points={demoPolyline}
                                    fill="none"
                                    stroke="#67e8f9"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                {demoLeveyResults.map(({ x, y }, index) => (
                                    <circle
                                        key={`${x}-${y}`}
                                        cx={x}
                                        cy={y}
                                        r="3.5"
                                        fill={index === 11 ? "#fbbf24" : "#ecfeff"}
                                        stroke="#083344"
                                        strokeWidth="1.5"
                                    />
                                ))}
                            </svg>
                        </div>

                        <div className="grid grid-cols-3 border-t border-white/5">
                            {[
                                { label: "Media", value: "102.4" },
                                { label: "CV", value: "2.1%" },
                                { label: "Resultados", value: "20" },
                            ].map(({ label, value }, index) => (
                                <div
                                    key={label}
                                    className={`px-4 py-4 ${index > 0 ? "border-l border-white/5" : ""}`}
                                >
                                    <p className="font-mono text-xs text-zinc-600">{label}</p>
                                    <p className="mt-1 text-sm font-medium text-zinc-200">{value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                    <div className="max-w-md">
                        <p className="font-display text-2xl leading-9 text-white sm:text-3xl">
                            Más que generar gráficos.
                        </p>
                        <p className="mt-4 text-justify text-base leading-7 text-zinc-400">
                            LeveyQC ayuda al laboratorio a detectar desviaciones, documentar incidencias y tomar decisiones antes de validar resultados clínicos.
                        </p>
                    </div>

                    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
                        {leveyBenefits.map(({ title, description, icon: Icon }) => (
                            <div key={title} className="flex gap-4">
                                <Icon
                                    aria-hidden="true"
                                    className="mt-0.5 size-5 shrink-0 text-zinc-400"
                                    strokeWidth={1.5}
                                />
                                <div>
                                    <h3 className="text-sm font-medium text-white">{title}</h3>
                                    <p className="mt-2 text-justify text-sm leading-6 text-zinc-500">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
