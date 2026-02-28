"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const infoItems = [
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
];

export default function InfoSection() {
  return (
    <section className="relative flex min-h-[90svh] items-center overflow-hidden border-t border-[rgba(31,34,40)] bg-black px-6 py-16 md:min-h-[94svh] md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-36 left-1/2 h-[32rem] w-[45rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(93,143,255,0.22),transparent_65%)]" />
        <div className="absolute -top-24 left-[20%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,124,72,0.2),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-2 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex justify-center md:mb-6"
        >
          <img
            src="/logos/agendalogo1.png"
            alt="AgendaClinica - Healthcare Information System"
            className="h-auto w-full max-w-xl object-contain opacity-70 md:max-w-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:mb-12 mx-auto max-w-3xl text-center text-[clamp(1.05rem,2.3vw,1.75rem)] font-light leading-snug text-zinc-300"
        >
          No es un software de gestión, es el nuevo motor de tu clínica.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl space-y-3 text-left md:mt-7"
        >
          {infoItems.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5 text-zinc-400 md:px-5"
            >
              <span className="mr-2 text-[0.85rem] text-zinc-300">●</span>
              <strong className="text-zinc-100">{item.title}:</strong>{" "}
              <span className="leading-relaxed">{item.body}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 flex justify-center md:mt-8"
        >
          <a
            href="https://agendaclinica.nativecode.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/8 px-7 py-3 text-xs font-mono uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            <span>Ver más</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
