import Image from "next/image";
import {
    ArrowUpRight,
    BellRing,
    CalendarDays,
    ClipboardPlus,
    MessageCircle,
    UsersRound,
} from "lucide-react";

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
            className="relative border-y border-white/10 bg-black"
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
                <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(32rem,1.05fr)] lg:gap-16">
                    <div className="max-w-2xl">
                        <p className="mb-5 font-mono text-xs uppercase text-violet-300">
                            Nuestro principal producto
                        </p>

                        <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
                            Agenda Clínica
                        </h2>

                        <p className="mt-5 max-w-xl text-xl leading-8 text-zinc-200 sm:text-2xl">
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
                                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
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
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
                            >
                                <MessageCircle aria-hidden="true" className="size-4" />
                                Solicitar una demostración
                            </a>
                        </div>
                    </div>

                    <div className="relative min-h-72 overflow-hidden sm:min-h-96 lg:min-h-[30rem]">
                        <Image
                            src="/logos/agendaclinica-logo-transparente.png"
                            alt="Agenda Clínica, Healthcare Information System"
                            fill
                            sizes="(min-width: 1024px) 608px, calc(100vw - 48px)"
                            className="object-contain object-center"
                        />
                    </div>
                </div>

                <div className="mt-16 grid border-t border-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                    {benefits.map(({ title, description, icon: Icon }, index) => (
                        <div
                            key={title}
                            className={`flex min-h-48 flex-col justify-between gap-8 border-b border-white/10 px-1 py-7 sm:px-6 lg:border-b-0 lg:px-7 ${
                                index % 2 === 1 ? "sm:border-l sm:border-white/10" : ""
                            } ${index > 0 ? "lg:border-l lg:border-white/10" : "lg:border-l-0"}`}
                        >
                            <Icon
                                aria-hidden="true"
                                className="size-6 text-violet-300"
                                strokeWidth={1.5}
                            />
                            <div>
                                <h3 className="text-base font-medium text-white">
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
