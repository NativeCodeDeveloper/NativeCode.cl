import DarkVeil from "@/components/DarkVeil";
import SpotlightCard from "@/components/SpotlightCard";

const whatsappUrl = (mensaje) =>
    `https://wa.me/56966091038?text=${encodeURIComponent(mensaje)}`;

const capacidades = [
    {
        titulo: "Web a Medida",
        descripcion: "Diseño exclusivo, construido desde cero.",
        etiquetas: ["Diseño UX/UI", "SEO"],
        accion: { texto: "Cotizar", href: whatsappUrl("Hola, quiero cotizar una Web a Medida."), externo: true },
    },
    {
        titulo: "Web Corporativa",
        descripcion: "Una presencia sólida para tu empresa.",
        etiquetas: ["Formularios", "WhatsApp"],
        accion: { texto: "Cotizar", href: whatsappUrl("Hola, quiero cotizar una Web Corporativa."), externo: true },
    },
    {
        titulo: "Tienda Online",
        descripcion: "Vende 24/7 con tu propia tienda.",
        etiquetas: ["Catálogo", "Checkout"],
        accion: { texto: "Cotizar", href: whatsappUrl("Hola, quiero cotizar una Tienda Online."), externo: true },
    },
    {
        titulo: "Plataformas para salud",
        descripcion: "Gestión clínica y calidad analítica.",
        etiquetas: ["Agenda Clínica", "LeveyQC"],
        accion: { texto: "Ver soluciones", href: "#soluciones", externo: false },
    },
];

export default function MisionSection() {
    return (
        <section id="nativecode" className="relative isolate scroll-mt-24 overflow-hidden border-b border-white/10 bg-black font-sans">
            <div className="absolute inset-0 -z-20">
                <DarkVeil
                    color="#6b12ff"
                    speed={0.5}
                    scale={1}
                    rotation={0}
                    flow={1}
                    warp={0}
                    variation={0}
                    sheen={0}
                    glow={0.4}
                    brightness={1}
                    grain={0.03}
                    quality={0.5}
                    fade={0}
                    opacity={1}
                    mouseInteraction
                    mouseStrength={1}
                    intro
                    lightMode={false}
                />
            </div>
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#000_0%,transparent_18%,transparent_80%,#000_100%)]" />

            <div className="mx-auto w-full max-w-7xl px-6 py-28 sm:py-36 lg:px-8 lg:py-44">
                <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
                    <div>
                        <h2 className="font-michroma-solo text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                            Somos NativeCode
                        </h2>
                        <p className="mt-6 max-w-lg text-base leading-7 text-zinc-300 sm:text-[1.0625rem]">
                            Diseñamos y desarrollamos sitios, tiendas online y plataformas especializadas para el sector salud, con un estándar de calidad premium en cada detalle.
                        </p>
                        <div className="mt-9 flex flex-wrap gap-3">
                            <a
                                href="https://wa.me/56966091038?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20NativeCode."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                            >
                                Cotizar proyecto
                            </a>
                            <a
                                href="#servicios-digitales"
                                className="inline-flex h-11 items-center rounded-full bg-white/10 px-5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/15"
                            >
                                Ver servicios
                            </a>
                        </div>
                    </div>

                    <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 [&>*]:min-h-72">
                        {capacidades.map(({ titulo, descripcion, etiquetas, accion }) => (
                            <SpotlightCard
                                key={titulo}
                                theme="dark"
                                spotlightColor="#ffffff"
                                intensity={0.15}
                                spotlightSize={240}
                                softness={0.7}
                                shape="circle"
                                borderGlow={0.6}
                                proximity={80}
                                smoothing={0.3}
                                grain={0}
                                ambient={false}
                                flare
                                className="flex h-full flex-col rounded-3xl! p-7! backdrop-blur-xl"
                                style={{ "--spotlight-card-surface": "rgba(10, 10, 10, 0.55)" }}
                            >
                                <h3 className="text-2xl font-normal tracking-tight text-white">
                                    {titulo}
                                </h3>
                                <p className="mt-2 min-h-12 text-[0.9375rem] leading-6 text-zinc-400">
                                    {descripcion}
                                </p>
                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {etiquetas.map((etiqueta) => (
                                        <li
                                            key={etiqueta}
                                            className="rounded-full bg-white/[0.07] px-3.5 py-1.5 text-[0.8125rem] text-zinc-200"
                                        >
                                            {etiqueta}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto pt-7">
                                    <a
                                        href={accion.href}
                                        {...(accion.externo && { target: "_blank", rel: "noopener noreferrer" })}
                                        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white/[0.08] text-sm font-medium text-white ring-1 ring-white/10 transition-colors hover:bg-white hover:text-black"
                                    >
                                        {accion.texto}
                                    </a>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
