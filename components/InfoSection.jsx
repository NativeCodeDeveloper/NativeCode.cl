"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

const projects = [
  {
    name: "Agenda Clínica",
    subtitle: "No es un software de gestión, es el nuevo motor de tu clínica.",
    logoSrc: "/logos/agendalogo1.png",
    logoAlt: "AgendaClinica - Healthcare Information System",
    ctaLabel: "Ver más",
    ctaHref: "https://agendaclinica.nativecode.cl",
    status: null,
    infoItems: [
      {
        title: "Gestión de Flujo",
        body: "Agenda inteligente con recordatorios automáticos para reducir el ausentismo.",
      },
      {
        title: "Terminal de Pagos",
        body: "Integración nativa con Mercado Pago para cobros de servicios y productos en tiempo real.",
      },
      {
        title: "Expediente Digital",
        body: "Fichas clínicas centralizadas y gestión de pacientes bajo estándares de seguridad profesional.",
      },
      {
        title: "Inteligencia de Negocio",
        body: "Reportes automáticos y control de caja para que sepas exactamente qué pasa con tu dinero.",
      },
    ],
  },
  {
    name: "Finance by Nativecode",
    subtitle:
      "Nuestra próxima plataforma para impulsar el control financiero de empresas en tiempo real.",
    ctaLabel: "Coming Soon",
    logoSrc: "/logos/logoFinance.png",
    logoAlt: "Finance by Nativecode - Financial Management Platform",
    ctaHref: null,
    status: "Coming Soon",
    infoItems: [
      {
        title: "Flujo de Caja",
        body: "Seguimiento claro de ingresos, egresos y proyección mensual.",
      },
      {
        title: "Métricas Financieras",
        body: "Panel ejecutivo con indicadores clave para decisiones rápidas.",
      },
      {
        title: "Automatización",
        body: "Procesos y reportes financieros inteligentes en un solo lugar.",
      },
    ],
  },
];

export default function InfoSection() {
  return (
    <section className="relative flex min-h-[90svh] items-center overflow-hidden border-t border-[rgba(31,34,40)] bg-black px-6 py-16 md:min-h-[94svh] md:py-20">
      <StarsBackground
        starColor="#e8f2ff"
        speed={90}
        factor={0.02}
        pointerEvents={false}
        className="pointer-events-none absolute inset-0 opacity-65"
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 left-1/2 h-[32rem] w-[45rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(93,143,255,0.22),transparent_65%)]" />
        <div className="absolute -top-24 left-[20%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,124,72,0.2),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-6 px-2 md:grid-cols-2 md:px-0">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm md:p-8"
          >
            {project.logoSrc ? (
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src={project.logoSrc}
                  alt={project.logoAlt}
                  className="h-auto w-full max-w-xl object-contain opacity-70"
                />
              </div>
            ) : (
              <div className="mb-5 text-center md:mb-6">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
                  Proyecto
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-zinc-100">{project.name}</h3>
              </div>
            )}

            {project.status ? (
              <div className="mb-5 flex justify-center md:mb-6">
                <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-amber-200">
                  {project.status}
                </span>
              </div>
            ) : null}

            <p className="mx-auto max-w-3xl text-center text-[clamp(1rem,1.7vw,1.35rem)] font-light leading-snug text-zinc-300">
              {project.subtitle}
            </p>

            <ul className="mx-auto mt-6 space-y-3 text-left md:mt-7">
              {project.infoItems.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5 text-zinc-400 md:px-5"
                >
                  <span className="mr-2 text-[0.85rem] text-zinc-300">●</span>
                  <strong className="text-zinc-100">{item.title}:</strong>{" "}
                  <span className="leading-relaxed">{item.body}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex justify-center md:mt-8">
              {project.ctaHref ? (
                <a
                  href={project.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/8 px-7 py-3 text-xs font-mono uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <span>{project.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              ) : (
                <span className="inline-flex cursor-not-allowed items-center gap-3 rounded-full border border-zinc-500/40 bg-zinc-700/30 px-7 py-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-300">
                  {project.ctaLabel}
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
