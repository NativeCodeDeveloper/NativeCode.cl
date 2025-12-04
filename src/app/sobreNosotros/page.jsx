"use client"
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import VenomBeam from "@/components/ui/venom-beam";
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

export default function SobreNosotros() {
  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      {/* Bloque 1: Intro */}
      <section className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-900/40 ring-1 ring-white/10 rounded-3xl md:rounded-4xl shadow-2xl backdrop-blur-sm">
        <div>
          <h1 className={`${michroma.className} leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white`}>
            Sobre Nosotros
          </h1>
          <p className="mt-4 sm:mt-6 text-justify text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">
            Somos una agencia de desarrollo web, enfocada en ofrecer soluciones de alto nivel y
            personalizadas para profesionales y empresas que buscan soluciones
            digitales.
          </p>
          <p className="mt-4 sm:mt-6 text-justify text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">
            Nuestro objetivo es llevar su imagen y negocio al siguiente nivel,
            creando plataformas que transmitan profesionalismo y brinden a sus
            clientes una experiencia excepcional, reflejando la calidad y
            dedicación de su trabajo.
          </p>
        </div>
        <div className="order-first md:order-none">
          <Image
            src="/webstorm.svg"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
            alt="Equipo de desarrollo trabajando en soluciones web"
            className="rounded-2xl md:rounded-3xl w-full h-auto object-cover ring-1 ring-white/10 shadow-xl"
            priority
          />
        </div>
      </section>

      {/* Bloque 2: Video + texto */}
      <section className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-900/40 ring-1 ring-white/10 rounded-3xl md:rounded-4xl shadow-2xl backdrop-blur-sm">
        <div>
          {/* Video visible en md+ */}
          <video
            src="/exito.mp4"
            className="w-full h-auto rounded-2xl md:rounded-3xl ring-1 ring-white/10 shadow-xl hidden md:block"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div>
          <p className="text-base text-justify sm:text-lg md:text-xl lg:text-2xl text-white/90">
            No utilizamos plantillas ni soluciones genéricas. Usamos todo el
            poder de la ingeniería de software, trabajando con lenguajes de
            programación y frameworks de alta performance para crear
            plataformas únicas que se adaptan a las necesidades de cada
            cliente.
          </p>
        </div>
      </section>

      {/* Bloque 3: Proceso de Trabajo con StickyScroll */}
      <section className="relative overflow-hidden px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-24">
        <h2 className={`${michroma.className} leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center mb-4`}>
          Cómo Trabajamos
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
          Nuestro proceso garantiza resultados de calidad, escalabilidad y rendimiento óptimo en cada proyecto.
        </p>
        
        <StickyScroll content={[
          {
            title: "Descubrimiento y Análisis",
            description:
              "Comenzamos conociendo tu negocio, objetivos y público objetivo. Analizamos tu mercado, competencia y requisitos técnicos para diseñar una estrategia digital que realmente genere resultados medibles y valor para tu marca.",
            content: (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-950/60 via-black to-black text-white p-8 ring-1 ring-violet-500/30">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Análisis Profundo</h3>
                  <p className="text-lg opacity-90">Entendemos tu negocio desde la raíz.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Diseño y Arquitectura",
            description:
              "Creamos wireframes, mockups y prototipos interactivos. Definimos la arquitectura técnica, stack tecnológico y estructura de datos. Todo orientado a crear interfaces intuitivas y backends escalables que soporten el crecimiento de tu plataforma.",
            content: (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-950/50 via-black to-black text-white p-8 ring-1 ring-purple-500/30">
                <Image
                  src="/webstorm.svg"
                  width={400}
                  height={400}
                  className="h-full w-full object-contain opacity-90"
                  alt="Proceso de diseño y arquitectura"
                />
              </div>
            ),
          },
          {
            title: "Desarrollo y Testing",
            description:
              "Programamos con código limpio, siguiendo mejores prácticas y estándares de la industria. Realizamos pruebas continuas de funcionalidad, rendimiento, seguridad y compatibilidad para garantizar una plataforma robusta y confiable.",
            content: (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-900/40 via-purple-950/30 to-black text-white p-8 ring-1 ring-violet-600/30">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Código de Calidad</h3>
                  <p className="text-lg opacity-90">Desarrollo profesional y testing exhaustivo</p>
                </div>
              </div>
            ),
          },
          {
            title: "Lanzamiento y Soporte",
            description:
              "Desplegamos tu plataforma en producción con configuraciones optimizadas. Monitoreamos el rendimiento, ofrecemos mantenimiento continuo y te acompañamos en el crecimiento de tu proyecto digital con actualizaciones y mejoras constantes.",
            content: (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-950/45 via-black to-black text-white p-8 ring-1 ring-purple-600/30">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Tu Éxito, Nuestro Compromiso</h3>
                  <p className="text-lg opacity-90">Acompañamiento continuo post-lanzamiento</p>
                </div>
              </div>
            ),
          },
        ]} />
      </section>

      {/* Bloque 4: CTA con fondo dinámico */}
      <section className="relative overflow-hidden rounded-3xl md:rounded-4xl ring-1 ring-white/10 shadow-2xl">
        <VenomBeam className="flex items-center justify-center w-full flex-col px-4 min-h-[40rem]">
          <h2 className={`${michroma.className} leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-6 relative z-20`}>
            ¿Estás listo para avanzar al siguiente nivel?
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mb-8" />
          <p className="text-gray-300 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Transformamos ideas en soluciones digitales reales. Diseño moderno, código limpio y resultados medibles.
          </p>
        </VenomBeam>
      </section>
    </div>
  );
}
