"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden border-t border-[rgba(31,34,40)] min-h-150">

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">

        {/* Logo Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="-mt-40 mb-6 md:mb-0 flex items-center justify-center"
        >
          <img
            src="/logos/agendaclinica-logo.png"
            alt="AgendaClinica - Healthcare Information System"
            className="w-full max-w-2xl h-auto object-contain"
          />
        </motion.div>

        {/* Main subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="-mt-30 text-2xl md:text-3xl text-zinc-400 font-light"
        >
          No es un software de gestión, es el nuevo motor de tu clínica.
        </motion.p>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-zinc-500 text-base md:text-lg max-w-2xl mx-auto"
        >
          <ul className="list-none text-left space-y-4">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2 text-xl">•</span>
              <div>
                <strong className="text-white">Gestión de Flujo:</strong> Agenda inteligente con recordatorios automáticos para reducir el ausentismo.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2 text-xl">•</span>
              <div>
                <strong className="text-white">Terminal de Pagos:</strong> Integración nativa con Mercado Pago para cobros de servicios y productos en tiempo real.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2 text-xl">•</span>
              <div>
                <strong className="text-white">Expediente Digital:</strong> Fichas clínicas centralizadas y gestión de pacientes bajo estándares de seguridad profesional.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2 text-xl">•</span>
              <div>
                <strong className="text-white">Inteligencia de Negocio:</strong> Reportes automáticos y control de caja para que sepas exactamente qué pasa con tu dinero.
              </div>
            </li>
          </ul>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8"
        >
          <a
            href="https://agendaclinica.nativecode.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-mono uppercase tracking-widest transition-all"
          >
            <span>Ver más</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Fade to Black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none z-20" />

    </section>
  );
}
