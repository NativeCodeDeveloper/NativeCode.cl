import Image from "next/image";
import {
    CircleHelp,
    FilePenLine,
    MessagesSquare,
    Zap,
} from "lucide-react";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

const cortexBenefits = [
    {
        title: "Redacción clínica asistida",
        description: "Mejora fichas, evoluciones y documentos manteniendo el contexto original.",
        icon: FilePenLine,
    },
    {
        title: "Gestión mediante lenguaje natural",
        description: "Solicita acciones como agendar, cancelar o bloquear horarios escribiendo de forma normal.",
        icon: MessagesSquare,
    },
    {
        title: "Ayuda dentro de la plataforma",
        description: "Resuelve dudas sobre funciones y guía al usuario mientras trabaja.",
        icon: CircleHelp,
    },
    {
        title: "Productividad inteligente",
        description: "Reduce tareas repetitivas y acelera los procesos clínicos y administrativos.",
        icon: Zap,
    },
];

export default function CortexSection() {
    return (
        <section
            id="cortex-ai"
            className="border-b border-white/10 bg-black"
        >
            <div className="relative isolate overflow-hidden">
                <Image
                    src="/portadanueva.png"
                    alt="Imagen cerebral que representa Cortex AI"
                    fill
                    sizes="100vw"
                    className="-z-30 object-cover object-[68%_center] opacity-80 lg:object-contain lg:object-right"
                />
                <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.9)_42%,rgba(0,0,0,0.42)_72%,rgba(0,0,0,0.08)_100%)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-black to-transparent" />

                <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
                            Cortex AI
                        </h2>

                        <p className="mt-5 max-w-xl text-xl leading-8 text-zinc-100 sm:text-2xl">
                            Inteligencia clínica que entiende tu trabajo.
                        </p>

                        <div className="mt-7 flex max-w-xl flex-col gap-4 text-base leading-7 text-zinc-400">
                            <p>
                                Cortex AI es una herramienta complementaria integrada a Agenda Clínica. Transforma instrucciones en lenguaje natural en acciones útiles, ayuda a redactar documentos, organizar información clínica y agilizar tareas administrativas.
                            </p>
                            <p>
                                No funciona como un producto independiente ni como un chat aislado. Forma parte del flujo de Agenda Clínica y acompaña al profesional mientras trabaja dentro de la plataforma.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 bg-black px-6 py-16 sm:py-20">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex flex-col gap-8 rounded-3xl border border-white/5 bg-white/[0.03] px-8 py-10 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-xl">
                            <p className="font-display text-2xl leading-9 text-white sm:text-3xl">
                                Menos clics, menos tareas repetitivas y más tiempo para tus pacientes.
                            </p>
                            <p className="mt-3 text-base leading-7 text-zinc-400">
                                Cortex AI no solo conversa contigo. Trabaja dentro de Agenda Clínica.
                            </p>
                        </div>

                        <span className="inline-flex min-h-12 w-fit shrink-0 cursor-default items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-zinc-300">
                            Coming soon
                        </span>
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden border-t border-white/10 bg-black">
                <StarsBackground
                    starColor="#e8f2ff"
                    speed={70}
                    factor={0.018}
                    pointerEvents={false}
                    className="pointer-events-none absolute inset-0 opacity-35"
                />
                <div
                    id="cortex-beneficios"
                    className="relative z-10 mx-auto grid w-full max-w-7xl gap-x-10 gap-y-12 scroll-mt-28 px-6 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4"
                >
                    {cortexBenefits.map(({ title, description, icon: Icon }) => (
                        <div key={title} className="flex flex-col gap-3">
                            <Icon
                                aria-hidden="true"
                                className="size-5 text-zinc-400"
                                strokeWidth={1.5}
                            />
                            <div>
                                <h3 className="text-sm font-medium text-white">
                                    {title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-zinc-500">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
