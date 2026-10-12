import Image from "next/image";

export default function SolucionesSection() {
    return (
        <section
            id="soluciones"
            className="relative scroll-mt-24 overflow-hidden border-b border-white/10 bg-black"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(109,40,217,0.14),transparent_38%),radial-gradient(circle_at_85%_65%,rgba(37,99,235,0.09),transparent_28%)]" />

            <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-sans text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                        Soluciones creadas para problemas reales de salud
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-7 text-zinc-300 sm:text-[1.0625rem]">
                        Plataformas especializadas para organizar la gestión clínica, fortalecer la calidad analítica y simplificar el trabajo diario.
                    </p>
                </div>

                <div className="mt-12 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 lg:mt-16">
                    <a
                        href="#agenda-clinica"
                        className="group relative flex min-h-80 flex-col items-center justify-center px-8 py-12 text-center transition-colors hover:bg-white/[0.035]"
                    >
                        <div className="pointer-events-none absolute inset-x-14 bottom-0 h-px bg-linear-to-r from-transparent via-fuchsia-400/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="relative mt-5 h-28 w-40">
                            <Image
                                src="/aclogo.png"
                                alt="Logo de Agenda Clínica"
                                fill
                                sizes="160px"
                                className="object-contain"
                            />
                        </div>
                        <h3 className="mt-5 font-sans text-2xl font-normal tracking-tight text-white">Agenda Clínica</h3>
                        <p className="mt-3 text-sm text-zinc-500">Gestión clínica integral</p>
                        <span className="mt-6 font-sans text-sm text-zinc-400 underline decoration-white/20 underline-offset-8 transition-colors group-hover:text-fuchsia-300">
                            Conocer solución
                        </span>
                    </a>

                    <a
                        href="#leveyqc"
                        className="group relative flex min-h-80 flex-col items-center justify-center px-8 py-12 text-center transition-colors hover:bg-white/[0.035]"
                    >
                        <div className="pointer-events-none absolute inset-x-14 bottom-0 h-px bg-linear-to-r from-transparent via-violet-400/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="relative mt-5 h-28 w-40">
                            <Image
                                src="/logos/leveyqc.png"
                                alt="Logo de LeveyQC"
                                fill
                                sizes="160px"
                                className="scale-125 object-contain"
                            />
                        </div>
                        <h3 className="mt-5 font-sans text-2xl font-normal tracking-tight text-white">LeveyQC</h3>
                        <p className="mt-3 text-sm text-zinc-500">Control de calidad analítica</p>
                        <span className="mt-6 font-sans text-sm text-zinc-400 underline decoration-white/20 underline-offset-8 transition-colors group-hover:text-violet-300">
                            Conocer solución
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
