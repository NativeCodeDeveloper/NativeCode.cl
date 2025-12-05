"use client"
import React from 'react';
import PortfolioCarousel from "@/componentes/PortfolioCarousel";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from 'next/image';
import GlowingBorderCard from "@/components/ui/glowingbordercard";
import { LightRays } from "@/components/ui/light-rays";

export default function Portafolio(){
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return(
    <div className="bg-black">
      <PortfolioCarousel />
      
      {/* Sección "¿Por qué confiar en NativeCode?" */}
      <section className="relative bg-neutral-900/10 ring-1 ring-white/10 rounded-4xl shadow-2xl backdrop-blur-sm px-6 md:px-10 lg:px-14 py-16 md:py-24 mt-20 overflow-hidden">
        <LightRays 
          count={5}
          color="rgba(168, 85, 247, 0.25)"
          blur={40}
          speed={16}
          length="60vh"
        />
        <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-3 items-center gap-8 relative z-10">
          <div className="md:col-span-2 space-y-4">
            {mounted ? (
              <TypewriterEffectSmooth 
                words={[
                  { text: "¿Por", className: "text-white" },
                  { text: "qué", className: "text-white" },
                  { text: "confiar", className: "text-white" },
                  { text: "en", className: "text-white" },
                  { text: "NativeCode?", className: "text-fuchsia-400" },
                ]}
                className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight justify-start"
                cursorClassName="bg-fuchsia-400"
              />
            ) : (
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-white">
                ¿Por qué confiar en <span className="text-fuchsia-400">NativeCode</span>?
              </h3>
            )}
            <p className="text-white/80 text-base md:text-lg">
              Combinamos diseño y performance para entregar productos digitales sólidos, escalables y fáciles de usar.
              Nos integramos a tu equipo, entendemos tus objetivos y los transformamos en soluciones reales que generan valor.
            </p>
            <p className="text-white/80 text-base md:text-lg">
              Código limpio, procesos claros y soporte continuo. Nuestro compromiso es que tus proyectos brillen hoy y crezcan mañana.
            </p>
          </div>
          <div className="flex md:justify-center mt-6 md:mt-0">
            <GlowingBorderCard
              className="w-40 h-40 md:w-44 md:h-44"
              fromColor="purple-600"
              toColor="fuchsia-400"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/ico2.png"
                  alt="NativeCode logo"
                  width={180}
                  height={180}
                  loading="lazy"
                  sizes="(max-width: 768px) 112px, 144px"
                  className="w-full h-full object-contain"
                />
              </div>
            </GlowingBorderCard>
          </div>
        </div>
      </section>
    </div>
  )
}