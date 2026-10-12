import Image from "next/image";
import {
    ArrowUpRight,
    BellRing,
    CalendarDays,
    ClipboardPlus,
    MessageCircle,
    UsersRound,
} from "lucide-react";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

const benefits = [
    {
        title: "Agenda online 24/7",
        description: "Recibe reservas incluso cuando tu consulta está cerrada.",
        icon: CalendarDays,
    },
    {
        title: "Recordatorios y confirmaciones",
        description: "Reduce ausencias y ordena cada cambio de cita.",
        icon: BellRing,
    },
    {
        title: "Fichas clínicas personalizables",
        description: "Mantén la información clínica segura y centralizada.",
        icon: ClipboardPlus,
    },
    {
        title: "Centros y profesionales",
        description: "Escala desde una consulta individual a todo tu centro.",
        icon: UsersRound,
    },
];

export default function FeatureGrid() {
    return (
        <section
            id="agenda-clinica"
            className="relative overflow-hidden border-y border-white/10 bg-black"
        >
            <StarsBackground
                starColor="#e8f2ff"
                speed={70}
                factor={0.018}
                pointerEvents={false}
                className="pointer-events-none absolute inset-0 opacity-35"
            />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
                <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(32rem,1.05fr)] lg:gap-16">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                            Agenda Clínica
                        </h2>

                        <p className="mt-5 max-w-xl text-xl leading-8 text-zinc-100 sm:text-2xl">
                            Gestión clínica y administrativa en una sola plataforma.
                        </p>

                        <div className="mt-7 flex max-w-xl flex-col gap-4 text-base leading-7 text-zinc-400">
                            <p>
                                Agenda Clínica ayuda a profesionales y centros de salud a organizar sus citas, pacientes y procesos clínicos de manera simple, segura y eficiente.
                            </p>
                            <p>
                                Automatiza la reserva de horas, reduce tareas administrativas y mantén toda la información de tu centro centralizada, desde la agenda hasta la ficha clínica.
                            </p>
                        </div>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="https://www.agendaclinicas.cl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                            >
                                Conocer Agenda Clínica
                                <ArrowUpRight
                                    aria-hidden="true"
                                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                            <a
                                href="https://wa.me/56966091038?text=Hola%2C%20quiero%20solicitar%20una%20demostraci%C3%B3n%20de%20Agenda%20Cl%C3%ADnica."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
                            >
                                <MessageCircle aria-hidden="true" className="size-4" />
                                Solicitar una demostración
                            </a>
                        </div>
                    </div>

                    <div className="relative isolate min-h-72 overflow-hidden sm:min-h-96 lg:min-h-[30rem]">
                        <Image
                            src="/aclogo.png"
                            alt="Logo de Agenda Clínica"
                            fill
                            sizes="(min-width: 1024px) 608px, calc(100vw - 48px)"
                            className="-z-10 object-contain object-center"
                        />
                    </div>
                </div>

                <div className="mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
                    {benefits.map(({ title, description, icon: Icon }) => (
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
