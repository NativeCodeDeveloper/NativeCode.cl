import { ArrowUpRight, Code2, Database, Globe } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Automatizaciones",
        description: "El agendamiento manual, las planillas y las confirmaciones por WhatsApp tienen un límite. Diseñamos plataformas a medida que ordenan la operación diaria de tu clínica o centro de salud, del primer contacto con el paciente al cierre de caja.",
        icon: <Code2 size={24} />,
        link: "#services"
    },
    {
        title: "Cobro y Facturación en Salud",
        description: "Integramos pasarelas de pago directamente en tu flujo clínico: presupuestos, boletas y cobros recurrentes sin fricción para el paciente ni trabajo extra para tu equipo administrativo.",
        icon: <Globe size={24} />,
        link: "#services"
    },
    {
        title: "Agenda Clínica",
        description: "Olvida las confirmaciones manuales por WhatsApp y el desorden en los pagos. Llevamos toda tu operación a una plataforma donde los pacientes se agendan solos, el sistema les cobra y tú recibes reportes limpios a fin de mes.",
        icon: <Database size={24} />,
        link: "#services"
    }
];

export default function FeatureGrid() {
    return (
        <section className="bg-black relative z-20 border-t border-[rgba(31,34,40)]">
            <div className="max-w-7xl mx-auto py-24 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(31,34,40)] border-b border-[rgba(31,34,40)]">

                {features.map((feature, index) => (
                    <div key={index} className="group relative p-12 transition-colors hover:bg-white/5 flex flex-col justify-between min-h-100 overflow-hidden">
                        {/* Subtle glow behind card on hover */}
                        <div className="absolute -inset-px rounded-[10px] bg-gradient-to-r from-white/10 to-white/5 blur opacity-0 group-hover:opacity-50 transition duration-500 z-10" />

                        <div className="relative z-20"> {/* Wrap existing content in this new div to control z-index */}
                            {/* Header */}
                            <div className="space-y-6 relative z-0">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white border border-[rgba(31,34,40)] group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-sans font-medium tracking-tight text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed text-base">
                                    {feature.description}
                                    </p>
                            </div>

                            {/* Action Pill - x.ai style */}
                            <div className="mt-12 flex items-center justify-between relative z-20">
                                <Link href={feature.link} className="flex items-center space-x-2 text-zinc-400 group-hover:text-white transition-colors duration-300">
                                    <span className="font-sans text-sm font-medium">Saber más</span>
                                    <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="absolute bottom-0 left-0 right-0 h-90 bg-gradient-to-t from-black to-transparent pointer-events-none z-40" />
        </section>
    );
}
