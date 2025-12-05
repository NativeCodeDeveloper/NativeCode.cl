"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Portada from "./portada/page";
import Image from "next/image";
import BotonBlanco from "@/componentes/BotonBlanco";
import Link from "next/link";
import FadeInSection from "@/componentes/FadeInSection";

// Lazy load componentes pesados con loading optimization
const SobreNosotros = dynamic(() => import("./sobreNosotros/page"), { 
  ssr: true,
  loading: () => null
});
const Servicios = dynamic(() => import("./servicios/page"), { 
  ssr: true,
  loading: () => null
});
const Footer = dynamic(() => import("./Footer/page"), { 
  ssr: true,
  loading: () => null
});
const Portafolio = dynamic(() => import("./portafolio/page"), { 
  ssr: true,
  loading: () => null
});
const MacbookScroll = dynamic(() => import("@/componentes/MacbookScroll").then(mod => ({ default: mod.MacbookScroll })), { 
  ssr: false,
  loading: () => null
});

export default function Home() {
  return (
    <div className="relative">
      {/* Sección 1: Portada */}
      <div className="relative mb-32">
        <Portada></Portada>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>

      {/* Sección 2: MacBook Scroll Animation */}
      <FadeInSection delay={0}>
        <div className="relative w-full min-h-screen overflow-hidden bg-black">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
          <MacbookScroll
            src="/loginmac.png"
            showGradient={false}
            title={
              <span className="text-white text-xl md:text-4xl lg:text-5xl">
                Experiencias digitales de{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">
                  alto rendimiento
                </span>
              </span>
            }
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
        </div>
      </FadeInSection>

      {/* Separador con imagen de fondo - E-Commerce */}
      <motion.div 
        className="relative overflow-hidden bg-[url('/wall3.png')] bg-cover bg-center w-full ring-1 ring-white/10 rounded-4xl shadow-2xl my-32 min-h-[600px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px", amount: 0.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" aria-hidden="true"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
        
        {/* Contenido */}
        <div className="relative z-20 px-6 md:px-10 lg:px-14 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Columna de texto */}
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: 0, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                Tu tienda <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">
                    siempre activa.
                  </span>
              </h2>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                Tus ventas <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">siempre creciendo.</span>   
              </h2>
              
              <div className="space-y-4 text-justify text-base md:text-lg text-white/80">
                <p>
                  En <span className="font-semibold text-white">NativeCode</span>, somos una agencia especializada en el desarrollo de{" "}
                  <span className="font-semibold text-cyan-400">e-commerce profesionales</span> y sistemas de venta automatizados 
                  diseñados para escalar tu negocio sin complicaciones.
                </p>
                
                <p>
                  Creamos tiendas online de alto rendimiento, totalmente personalizadas, con infraestructura optimizada, 
                  paneles de administración intuitivos, métodos de pago integrados, control de stock y flujos automatizados 
                  que permiten convertir más y vender mejor.
                </p>
                
                <p>
                  Desde soluciones <span className="font-semibold text-cyan-400">Lite</span> para emprendedores, 
                  plataformas <span className="font-semibold text-cyan-400">Pro</span> para negocios en crecimiento, 
                  hasta sistemas completos en VPS dedicados con multi-sucursal, facturación electrónica, conexión con SII, 
                  IA para atención al cliente y automatizaciones avanzadas.
                </p>
                
                <p>
                  Desarrollamos tecnología <span className="font-semibold text-white">rápida, segura y escalable</span>, 
                  con enfoque en UX/UI, performance, SEO y automatización, para que tu negocio venda 24/7, crezca de forma 
                  real y entregue una experiencia premium a cada cliente.
                </p>
                
                <p className="text-lg md:text-xl font-semibold text-cyan-400 mt-6">
                  Tu crecimiento es nuestra misión. Nosotros construimos. Tú escalas.
                </p>
              </div>
            </motion.div>

            {/* Columna de botones */}
            <motion.div 
              className="lg:col-span-4 flex flex-col gap-6 lg:items-end lg:justify-center lg:h-full lg:pr-8 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            >
              <Link href="/eCommerce">
                <div className="relative group">
                  <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500 via-sky-500 to-pink-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="transition-all duration-500 group-hover:translate-x-1">Ver soluciones E-Commerce</span>
                        <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </span>
                  </button>
                </div>
              </Link>
              <Link href="/servicios">
                <div className="relative group">
                  <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="transition-all duration-500 group-hover:translate-x-1">Todos los servicios</span>
                        <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </span>
                  </button>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
      </motion.div>

      {/* Sección 3: Servicios */}
      <FadeInSection delay={0}>
        <div className="relative my-32">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
          <Servicios></Servicios>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
        </div>
      </FadeInSection>

      {/* Sección 4: Portafolio */}
      <FadeInSection delay={0}>
        <div className="relative my-32 z-0">
          <Portafolio></Portafolio>
        </div>
      </FadeInSection>

      {/* Sección 5: Soporte */}
      <FadeInSection delay={0}>
        <div className="relative overflow-hidden bg-[url('/wallet.png')] bg-cover bg-center w-full ring-1 ring-white/10 rounded-4xl shadow-2xl my-32">
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden="true"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-5 items-center px-6 md:px-10 lg:px-14 py-16 md:py-24">
          <div className="col-span-4">
            <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Tu proyecto <strong className="text-cyan-300">No Termina</strong> en la entrega
            </h2>
            <p className="mt-6 text-lg text-justify md:text-2xl text-white/90 max-w-3xl">
              No te dejamos solo después de la puesta en marcha. Nuestro compromiso es
              acompañarte de forma constante, escuchando tus necesidades y
              aplicando las mejoras que desees para que tu proyecto evolucione y
              se mantenga siempre a la vanguardia.
            </p>

            <div className="mt-10 flex md:justify-end gap-2">
              <Link href={"/soporte"}>
                <BotonBlanco contenido={"Plan de Soporte"} />
              </Link>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
      </div>
      </FadeInSection>

      {/* Sección 6: Sobre Nosotros */}
      <FadeInSection delay={0}>
        <div className="relative overflow-hidden bg-[url('/morado1.png')] bg-cover bg-center w-full ring-1 ring-white/10 rounded-4xl shadow-2xl px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
        <div className="relative">
          <SobreNosotros></SobreNosotros>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
      </div>
      </FadeInSection>
    </div>
  );
}
