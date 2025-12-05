"use client";

import Image from "next/image";
import { Michroma } from "next/font/google";
import { motion } from "framer-motion";
import { Rocket, Target, TrendingUp, Eye, Award, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export default function LandingPages() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const plans = [
    {
      name: "Landing Básica",
      price: "$120.000",
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30 hover:border-orange-400",
      textColor: "text-orange-400",
      icon: <Rocket className="w-8 h-8" />,
      features: [
        "Diseño profesional de 1 página",
        "Sección Hero impactante",
        "Formulario de contacto/captura",
        "Call-to-Action optimizado",
        "Diseño 100% responsive",
        "Optimización para conversiones",
        "Integración Google Analytics",
        "Certificado SSL incluido",
        "Hosting 1 año gratis",
        "1 revisión de diseño"
      ]
    },
    {
      name: "Landing Pro",
      price: "$220.000",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30 hover:border-violet-400",
      textColor: "text-violet-400",
      icon: <Target className="w-8 h-8" />,
      popular: true,
      features: [
        "Todo lo del plan Básico",
        "Hasta 3 secciones personalizadas",
        "Videos explicativos integrados",
        "Testimonios de clientes",
        "Contador regresivo (urgencia)",
        "Pop-ups de conversión inteligentes",
        "Integración con CRM (HubSpot, etc.)",
        "A/B Testing básico",
        "Pixel de Facebook/Instagram",
        "Chat en vivo WhatsApp",
        "2 revisiones de diseño",
        "Copywriting persuasivo básico"
      ]
    },
    {
      name: "Landing Enterprise",
      price: "$380.000",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30 hover:border-cyan-400",
      textColor: "text-cyan-400",
      icon: <Award className="w-8 h-8" />,
      features: [
        "Todo lo del plan Pro",
        "Landing ilimitadas (multi-producto)",
        "Embudo de conversión completo",
        "Automatización de marketing",
        "Integración pasarelas de pago",
        "Sistema de reservas/agendamiento",
        "Calculadoras interactivas",
        "Gamificación y sorteos",
        "Dashboards de métricas en tiempo real",
        "Heatmaps y grabaciones de sesiones",
        "Copywriting profesional completo",
        "3 revisiones de diseño",
        "Soporte prioritario 90 días"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Alta Conversión",
      description: "Diseño centrado en convertir visitantes en clientes reales"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "ROI Comprobado",
      description: "Estrategias basadas en datos y mejores prácticas del mercado"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "UX Optimizada",
      description: "Experiencia de usuario diseñada para maximizar resultados"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Entrega Rápida",
      description: "Tu landing page lista en tiempo récord para lanzar campañas"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900/30 via-red-900/30 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/20 via-red-600/10 to-transparent"></div>
        
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-full px-6 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-orange-300">Landing Pages que Convierten</span>
            </div>
          </motion.div>

          <h1 className={`${michroma.className} text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight`}>
            Transforma Visitantes
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              En Clientes Reales
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Landing pages diseñadas con la única misión de convertir. 
            Cada elemento optimizado para maximizar tus ventas y captura de leads.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <Link href="/contacto">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all text-white">
                  Solicitar Propuesta
                </button>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/portafolio">
                <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
                  Ver Casos de Éxito
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-b from-black via-gray-900/50 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              ¿Por qué nuestras Landing Pages?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cada landing está diseñada con estrategias comprobadas de conversión
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl flex items-center justify-center mb-4 text-orange-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 via-transparent to-red-900/10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Planes y Precios
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Soluciones adaptadas a tus objetivos de conversión y presupuesto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br ${plan.gradient} border ${plan.borderColor} rounded-2xl p-8 backdrop-blur-sm transition-all flex flex-col ${
                  plan.popular ? 'lg:scale-105 shadow-2xl shadow-violet-500/20' : ''
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: plan.popular ? 1.05 : 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: plan.popular ? 1.08 : 1.03 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  <div className={`${plan.textColor} mb-6`}>
                    {plan.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400"> CLP</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className={`w-5 h-5 ${plan.textColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contacto" className="mt-auto">
                  <button className={`w-full py-3 bg-gradient-to-r ${plan.gradient} border ${plan.borderColor} rounded-xl font-semibold hover:shadow-lg transition-all`}>
                    Comenzar Ahora
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            ¿Listo para multiplicar tus conversiones?
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            Diseñamos tu landing page optimizada para generar resultados desde el primer día
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Link href="/contacto">
              <button className="px-10 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all text-lg">
                Solicitar Landing Page
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
