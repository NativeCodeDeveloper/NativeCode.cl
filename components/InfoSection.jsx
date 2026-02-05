"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LightRays from "./LightRays";

export default function InfoSection() {
    return (
        <section className="relative bg-black py-32 px-6 overflow-hidden border-t border-[rgba(31,34,40)] min-h-150">
            
            {/* LightRays Effect Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#CF9EFF"
                    raysSpeed={0.8}
                    lightSpread={0.6}
                    rayLength={0.7}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                
                {/* Icon + Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-4"
                >
                    <div className="w-25 h-35 rounded-full bg-white/0 flex items-center justify-center border border-white/0 p-2">
                        <img src="/logos/ico2.png" alt="NativeCode" className="w-full h-35 object-contain" />
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                      AgendaClinica
                    </h2>
                </motion.div>

                {/* Main subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-2xl md:text-3xl text-zinc-400 font-light"
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
