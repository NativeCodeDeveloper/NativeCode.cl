import { AppWindow, ArrowRight, FileSearch, Phone, Rocket, CodeXml, type LucideIcon } from "lucide-react";

export interface TimelineStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PathToResilienceOrbitalTimelineProps {
  title?: string;
  steps?: TimelineStep[];
}

const defaultSteps: TimelineStep[] = [
  { icon: FileSearch, title: "Análisis y planificación", description: "Comprendemos tu negocio, identificamos tus necesidades y definimos las funcionalidades, los objetivos y el alcance de tu proyecto." },
  { icon: AppWindow, title: "Diseño y prototipado", description: "Diseñamos una propuesta visual e interactiva para que puedas conocer cómo funcionará tu software antes de comenzar su desarrollo." },
  { icon: CodeXml, title: "Desarrollo y pruebas", description: "Construimos tu solución a medida, realizando pruebas para garantizar su funcionamiento, seguridad y rendimiento." },
  { icon: Rocket, title: "Implementación y soporte", description: "Ponemos tu software en funcionamiento, capacitamos a tu equipo y te acompañamos con soporte y futuras mejoras." },
];

export default function PathToResilienceOrbitalTimeline({
  title = "De tu idea a una solución real.",
  steps = defaultSteps,
}: PathToResilienceOrbitalTimelineProps) {
  return (
    <section id="metodologia" aria-labelledby="orbital-timeline-title" className="bg-black px-6 pb-16 pt-4 text-white sm:px-10 lg:pb-24 lg:pt-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-200">Nuestra metodología</p>
          <h2 id="orbital-timeline-title" className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Transformamos las necesidades de tu empresa en soluciones tecnológicas mediante un proceso claro, colaborativo y estructurado.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/56932912943?text=Hola%2C%20quiero%20hablar%20con%20un%20ejecutivo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Hablar con un Ejecutivo
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <ol className="relative space-y-7 border-l border-white/50 pl-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-sm">
                <span className="absolute -left-[3.125rem] top-7 grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-bold text-black ring-4 ring-black">
                  {index + 1}
                </span>
                <div className="flex items-center gap-6">
                  <Icon aria-hidden="true" className="h-10 w-10 shrink-0 text-white" />
                  <div aria-hidden="true" className="w-px self-stretch bg-white/10" />
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{step.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
