import { ShoppingBag, Target, HeartPulse, PanelsTopLeft, Cable } from "lucide-react";

export default function DesarrolloMedidaSection() {
    return (
        <section id="soluciones" className="relative scroll-mt-24 overflow-hidden border-b border-white/10 bg-black">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_0%,rgba(109,40,217,0.16),transparent_50%)]" />
            <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300">Desarrollo a medida</p>
                        <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Tu operación define el software.
                        </h2>
                    </div>
                    <p className="max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                        Desde la primera visita hasta los procesos que sostienen tu negocio. Diseñamos cada solución alrededor de tus objetivos, tus usuarios y tu siguiente etapa de crecimiento.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16">
                    <article className="rounded-3xl border border-violet-300/20 bg-linear-to-br from-violet-500/10 to-white/[0.02] p-7 sm:p-10">
                        <div className="flex items-center justify-between">
                            <ShoppingBag aria-hidden="true" className="size-7 text-violet-300" strokeWidth={1.5} />
                            <span className="text-xs text-violet-200">Rendimiento y escala</span>
                        </div>
                        <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">E-commerce de alto rendimiento</h3>
                        <p className="mt-4 text-base leading-7 text-zinc-400">Tiendas desarrolladas para recibir miles de visitas, acompañar campañas de alta demanda y ofrecer una experiencia de compra ágil.</p>
                        <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-6 text-zinc-300">Catálogos, pagos y procesos comerciales conectados en una arquitectura pensada para escalar.</p>
                    </article>
                    <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10">
                        <div className="flex items-center justify-between">
                            <Target aria-hidden="true" className="size-7 text-sky-300" strokeWidth={1.5} />
                            <span className="text-xs text-zinc-400">Captación y conversión</span>
                        </div>
                        <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">Landing pages con propósito</h3>
                        <p className="mt-4 text-base leading-7 text-zinc-400">Páginas para campañas, servicios y lanzamientos. Cada sección orienta al visitante y ayuda a captar y filtrar prospectos según lo que tu empresa necesita.</p>
                        <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-6 text-zinc-300">Propuestas claras, formularios de calificación y recorridos enfocados en la conversión.</p>
                    </article>
                    <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10">
                        <div className="flex items-center justify-between">
                            <HeartPulse aria-hidden="true" className="size-7 text-emerald-300" strokeWidth={1.5} />
                            <span className="text-xs text-zinc-400">Especialización en salud</span>
                        </div>
                        <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">Plataformas para salud</h3>
                        <p className="mt-4 text-base leading-7 text-zinc-400">Software para clínicas, profesionales y laboratorios, diseñado alrededor de sus procesos clínicos, administrativos y de gestión.</p>
                        <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-6 text-zinc-300">Portales de pacientes e interoperabilidad HL7 entre sistemas de información clínica.</p>
                    </article>
                    <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10">
                        <div className="flex items-center justify-between">
                            <PanelsTopLeft aria-hidden="true" className="size-7 text-amber-200" strokeWidth={1.5} />
                            <span className="text-xs text-zinc-400">Gestión y automatización</span>
                        </div>
                        <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">Portales y sistemas web</h3>
                        <p className="mt-4 text-base leading-7 text-zinc-400">Portales de clientes, herramientas internas y plataformas especializadas para centralizar información y coordinar el trabajo de tu equipo.</p>
                        <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-6 text-zinc-300">Flujos a medida para reducir tareas manuales y dar continuidad a tu operación.</p>
                    </article>
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10">
                    <div className="flex items-center gap-3">
                        <Cable aria-hidden="true" className="size-6 shrink-0 text-violet-300" strokeWidth={1.5} />
                        <h3 className="font-display text-2xl font-semibold tracking-tight text-white">Tus sistemas, conectados.</h3>
                    </div>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">Desarrollamos integraciones para que ventas, comunicaciones y datos compartan un mismo flujo de trabajo, según los requisitos de cada proyecto.</p>
                    <ul className="mt-7 flex flex-wrap gap-3 text-sm text-zinc-200">
                        <li className="rounded-full border border-white/15 px-4 py-2.5">Impuestos Internos · SII</li>
                        <li className="rounded-full border border-white/15 px-4 py-2.5">WhatsApp</li>
                        <li className="rounded-full border border-white/15 px-4 py-2.5">Gmail</li>
                        <li className="rounded-full border border-white/15 px-4 py-2.5">Pasarelas de pago</li>
                        <li className="rounded-full border border-white/15 px-4 py-2.5">Interoperabilidad HL7</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
