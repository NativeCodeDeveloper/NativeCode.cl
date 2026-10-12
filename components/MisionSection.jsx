export default function MisionSection() {
    return (
        <section id="nativecode" className="relative scroll-mt-24 overflow-hidden border-b border-white/10 bg-black">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(126,34,206,0.16),transparent_32%),radial-gradient(circle_at_82%_80%,rgba(37,99,235,0.12),transparent_30%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black to-transparent" />

            <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
                    <div>
                        <h2 className="font-michroma-solo text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                            Somos
                            <span className="block">NativeCode</span>
                        </h2>
                    </div>

                    <div className="border-l border-white/15 pl-6 sm:pl-10 lg:mt-8">
                        <p className="max-w-3xl text-xl leading-9 text-zinc-200 sm:text-2xl sm:leading-10">
                            Creamos tecnología para una salud más simple y eficiente.
                        </p>
                        <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
                            Somos una empresa de software enfocada en transformar procesos clínicos en soluciones digitales confiables.
                        </p>
                    </div>
                </div>

                <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] px-7 py-9 sm:px-10 sm:py-11 lg:mt-20 lg:px-12">
                    <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-violet-600/10 blur-3xl" />
                    <div className="relative grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
                        <div>
                            <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                                No estás solo en el proceso.
                            </h3>
                        </div>

                        <p className="text-base leading-8 text-zinc-400 sm:text-lg">
                            Nuestro equipo multidisciplinario reúne especialistas en calidad analítica de laboratorio, profesionales de la salud y expertos en seguridad de la información. Te acompañamos con soporte 24/7 para entregarte respaldo técnico y humano en cada etapa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
