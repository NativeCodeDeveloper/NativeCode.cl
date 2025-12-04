"use client";
import Portada from "./portada/page";
import SobreNosotros from "./sobreNosotros/page";
import Servicios from "./servicios/page";
import Footer from "./Footer/page";
import Portafolio from "./portafolio/page";
import ScrollReveal from "../componentes/ScrollReveal";
import Image from "next/image";
import BotonBlanco from "@/componentes/BotonBlanco";
import Link from "next/link";
import { MacbookScroll } from "@/componentes/MacbookScroll";
import FadeInSection from "@/componentes/FadeInSection";

export default function Home() {
  return (
    <div className="relative">
      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-20 right-8 z-[100]">
        <Link href={"/comprar"}>
          <button className="button-float group">
            <div className="dots_border">
              <div className="dots_border_inner"></div>
            </div>
            <Image 
              src="/ico2.png" 
              alt="NativeCode Logo" 
              width={28} 
              height={28}
              className="logo-float"
            />
            <span className="text_button">Contáctanos</span>
          </button>
        </Link>
      </div>

      {/* Sección 1: Portada */}
      <div className="relative mb-32">
        <Portada></Portada>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>

      {/* Sección 2: MacBook Scroll Animation */}
      <FadeInSection delay={0.2}>
        <div className="relative w-full min-h-screen overflow-hidden bg-black dark">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
          <MacbookScroll
            src="/adquierenativecode.jpg"
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

      {/* Separador con imagen de fondo */}
      <div className="relative overflow-hidden bg-[url('/wall3.png')] bg-cover bg-center w-full ring-1 ring-white/10 rounded-4xl shadow-2xl my-32 min-h-[200px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" aria-hidden="true"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>

      {/* Sección 3: Servicios */}
      <FadeInSection delay={0.3}>
        <div className="relative my-32">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
          <Servicios></Servicios>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
        </div>
      </FadeInSection>

      {/* Sección 4: Portafolio */}
      <FadeInSection delay={0.2}>
        <div className="relative my-32 z-0">
          <Portafolio></Portafolio>
        </div>
      </FadeInSection>

      {/* Sección 5: Soporte */}
      <FadeInSection delay={0.25}>
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
      <FadeInSection delay={0.2}>
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
