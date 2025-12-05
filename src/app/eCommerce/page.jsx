"use client";

import Image from "next/image";
import { Michroma } from "next/font/google";
import { motion } from "framer-motion";
import { ShoppingCart, Sparkles, Zap, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export default function Ecommerce() {
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
      name: "E-commerce Lite",
      price: "$320.000",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30 hover:border-cyan-400",
      textColor: "text-cyan-400",
      icon: <ShoppingCart className="w-8 h-8" />,
      features: [
        "Diseño UI/UX personalizado (sin plantillas)",
        "Hosting profesional + Dominio opcional",
        "Correos corporativos ilimitados",
        "Catálogo completo con categorías y filtros",
        "Galería de imágenes por producto",
        "Carrito de compras + gestión de órdenes",
        "Pasarela MercadoPago Checkout Pro",
        "Panel administrador completo",
        "Control de stock manual",
        "Botón WhatsApp + SEO avanzado"
      ]
    },
    {
      name: "E-commerce ProSuite",
      price: "$670.000",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30 hover:border-purple-400",
      textColor: "text-purple-400",
      icon: <Zap className="w-8 h-8" />,
      badge: "Recomendado",
      features: [
        "Todo lo del Plan Lite +",
        "Inventario automático (descuento por venta)",
        "Notificaciones automáticas de despacho",
        "Seguimiento de carritos perdidos",
        "Sistema de cupones de descuento",
        "Múltiples usuarios con roles",
        "Pasarelas de pago múltiples",
        "SEO optimizado al máximo",
        "Copias de seguridad + soporte continuo"
      ]
    },
    {
      name: "E-commerce UltraScale",
      price: "$1.370.000",
      gradient: "from-fuchsia-500/20 to-violet-500/20",
      borderColor: "border-fuchsia-500/30 hover:border-fuchsia-400",
      textColor: "text-fuchsia-400",
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        "Todo lo del Plan ProSuite +",
        "Servidores dedicados exclusivos",
        "Gestión multi-sucursal completa",
        "Facturación electrónica + conexión SII",
        "IA para atención al cliente",
        "Sistema de suscripciones recurrentes",
        "Seguridad avanzada + monitoreo 24/7",
        "Estadísticas y métricas en tiempo real"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Seguridad Avanzada",
      description: "Protección SSL, encriptación de datos y cumplimiento PCI DSS"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Escalabilidad Garantizada",
      description: "Arquitectura cloud que crece con tu negocio sin límites"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rendimiento Óptimo",
      description: "Carga ultra-rápida con CDN global y optimización automática"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-900/30 via-purple-900/30 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/20 via-purple-600/10 to-transparent"></div>
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className={`${michroma.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400`}
            variants={fadeInUp}
          >
            E-Commerce Profesional
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Soluciones de comercio electrónico diseñadas a medida para impulsar tu negocio al siguiente nivel
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Intro Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
        >
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 px-4 py-2 rounded-full text-sm font-semibold text-cyan-400">
              Tecnología de Vanguardia
              </span>
            </div>
            
            <h2 className={`${michroma.className} text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight`}>
              Tu tienda online sin límites
            </h2>
            
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Lleva tu negocio al siguiente nivel con una tienda online profesional, 
                diseñada completamente a medida sin plantillas genéricas.
              </p>
              
              <p className="text-justify">
                En <span className="text-transparent text-justify bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">NativeCode</span> desarrollamos 
                soluciones e-commerce únicas que se adaptan 100% a tu modelo de negocio, 
                con código personalizado y arquitectura escalable.
              </p>
              
              <p className="text-justify">
                Integra pasarelas de pago, gestión automática de inventario, sistemas de 
                cupones, recuperación de carritos abandonados, facturación electrónica 
                y todo lo que tu empresa necesite para crecer sin límites.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <div className="text-cyan-400 mb-2">{benefit.icon}</div>
                  <h3 className="font-semibold text-white mb-1 text-sm">{benefit.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <Image
                height={2000}
                width={1000}
                src="/celu.png"
                alt="E-commerce responsive NativeCode"
                className="rounded-3xl relative z-10 shadow-2xl hidden sm:block"
              />
              <Image
                height={700}
                width={700}
                src="/tienda2.jpg"
                alt="Tienda online profesional"
                className="rounded-3xl relative z-10 shadow-2xl block sm:hidden"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <div className="text-center mb-16">
            <h2 className={`${michroma.className} text-3xl sm:text-4xl lg:text-5xl font-bold mb-4`}>
              Planes E-commerce
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Elige la solución perfecta para tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br ${plan.gradient} backdrop-blur-sm border ${plan.borderColor} rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 group flex flex-col`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  <div className="mb-6">
                    <div className={`${plan.textColor} mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className={`${michroma.className} text-2xl sm:text-3xl font-bold mb-2`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl sm:text-5xl font-bold ${plan.textColor}`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-sm">+ IVA</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                        <CheckCircle2 className={`w-5 h-5 ${plan.textColor} flex-shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/servicios" className="mt-auto">
                  <button className={`w-full bg-gradient-to-r ${plan.gradient} border ${plan.borderColor} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                    Ver detalles
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mb-24 py-16 px-6 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-fuchsia-500/10 border border-purple-500/30 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className={`${michroma.className} text-3xl sm:text-4xl font-bold mb-6`}>
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para crear la solución e-commerce perfecta para ti
          </p>
          <Link href="/servicios">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Ver todos los planes
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
