"use client";

import Image from "next/image";
import { Michroma } from "next/font/google";
import { motion } from "framer-motion";
import { Globe, Sparkles, Zap, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export default function PaginasWeb() {
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
      name: "Web Esencial",
      price: "$180.000",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30 hover:border-blue-400",
      textColor: "text-blue-400",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Diseño moderno y responsivo",
        "Hasta 5 páginas (Inicio, Servicios, Nosotros, Contacto, etc.)",
        "Hosting profesional incluido (1 año)",
        "Dominio .cl o .com opcional",
        "Formulario de contacto funcional",
        "Integración redes sociales",
        "Optimización SEO básica",
        "Certificado SSL (HTTPS)",
        "Correos corporativos (3 cuentas)",
        "Soporte técnico 30 días"
      ]
    },
    {
      name: "Web Profesional",
      price: "$320.000",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30 hover:border-purple-400",
      textColor: "text-purple-400",
      icon: <Sparkles className="w-8 h-8" />,
      popular: true,
      features: [
        "Todo lo del plan Esencial",
        "Hasta 10 páginas personalizadas",
        "Diseño UI/UX avanzado sin plantillas",
        "Blog integrado con CMS",
        "Galería de imágenes/videos",
        "Sistema de agendamiento online",
        "Integración con Google Analytics",
        "Chat en vivo (WhatsApp)",
        "Correos corporativos ilimitados",
        "Panel administrador completo",
        "Optimización SEO avanzada",
        "Soporte técnico 60 días"
      ]
    },
    {
      name: "Web Enterprise",
      price: "$500.000",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30 hover:border-emerald-400",
      textColor: "text-emerald-400",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Todo lo del plan Profesional",
        "Páginas ilimitadas",
        "Sistema de membresías/login",
        "Integración con pasarelas de pago",
        "Multi-idioma (hasta 3 idiomas)",
        "API REST personalizada",
        "Base de datos avanzada",
        "Sistema de notificaciones",
        "Backup automático diario",
        "CDN para máxima velocidad",
        "Dashboards analíticos personalizados",
        "Soporte técnico prioritario 90 días",
        "2 revisiones de diseño incluidas"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Seguridad Garantizada",
      description: "SSL, backups automáticos y protección contra amenazas"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rendimiento Óptimo",
      description: "Carga ultra-rápida con optimización avanzada"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SEO Profesional",
      description: "Posicionamiento en Google desde el día 1"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "100% Responsive",
      description: "Perfecta visualización en móviles, tablets y desktop"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-purple-600/10 to-transparent"></div>
        
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
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full px-6 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-blue-300">Desarrollo Web Profesional</span>
            </div>
          </motion.div>

          <h1 className={`${michroma.className} text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight`}>
            Tu Presencia Digital
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Comienza Aquí
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes. 
            Diseño profesional sin plantillas genéricas.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <Link href="/contacto">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-white">
                  Solicitar Cotización
                </button>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/portafolio">
                <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
                  Ver Portafolio
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
              ¿Por qué elegirnos?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tecnología de punta y diseño profesional para tu éxito digital
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 text-purple-400">
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
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
        
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
              Elige el plan que mejor se adapte a las necesidades de tu negocio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br ${plan.gradient} border ${plan.borderColor} rounded-2xl p-8 backdrop-blur-sm transition-all flex flex-col ${
                  plan.popular ? 'lg:scale-105 shadow-2xl shadow-purple-500/20' : ''
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: plan.popular ? 1.05 : 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: plan.popular ? 1.08 : 1.03 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-full">
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
                    Contratar Ahora
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"
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
            ¿Listo para llevar tu negocio al siguiente nivel?
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            Contáctanos hoy y descubre cómo podemos ayudarte a crear la web perfecta para tu empresa
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Link href="/contacto">
              <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-lg">
                Comenzar Ahora
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
