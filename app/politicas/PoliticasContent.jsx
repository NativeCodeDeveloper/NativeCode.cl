"use client";

import { useEffect, useMemo, useState } from "react";
import { FileText, Lock, Shield } from "lucide-react";

const tabs = [
    { id: "privacidad", label: "Política de Privacidad", icon: Shield },
    { id: "terminos", label: "Términos y Condiciones", icon: FileText },
    { id: "seguridad", label: "Política de Seguridad", icon: Lock },
];

const tabMeta = {
    privacidad: {
        headline: "Privacidad de datos",
        summary:
            "Cómo tratamos, almacenamos y protegemos los datos personales y operativos de clientes y usuarios.",
    },
    terminos: {
        headline: "Marco contractual",
        summary:
            "Condiciones que regulan el alcance, responsabilidades y límites de los servicios ofrecidos por NativeCode.",
    },
    seguridad: {
        headline: "Controles de seguridad",
        summary:
            "Prácticas técnicas y operativas que reducimos riesgo en aplicaciones, infraestructura y operación del cliente.",
    },
};

export default function PoliticasContent() {
    const [activeTab, setActiveTab] = useState("privacidad");

    useEffect(() => {
        const syncFromHash = () => {
            const hash = window.location.hash.replace("#", "");
            if (hash === "privacidad" || hash === "terminos" || hash === "seguridad") {
                setActiveTab(hash);
            }
        };

        syncFromHash();
        window.addEventListener("hashchange", syncFromHash);
        return () => window.removeEventListener("hashchange", syncFromHash);
    }, []);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        window.history.replaceState(null, "", `#${tabId}`);
    };

    const activeMeta = useMemo(() => tabMeta[activeTab], [activeTab]);

    return (
        <main className="relative min-h-screen overflow-hidden bg-black pt-32 pb-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_95%_30%,rgba(255,255,255,0.04),transparent_38%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100%_54px] opacity-20" />

            <div className="relative mx-auto max-w-6xl px-6">
                <header className="border-b border-[rgba(31,34,40)] pb-12 md:pb-14">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                        NativeCode Documentación Legal
                    </p>

                    <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] md:items-end">
                        <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-4xl">
                            Políticas, términos y seguridad.
                        </h1>
                        <p className="max-w-sm text-sm leading-relaxed text-zinc-400 md:justify-self-end">
                            Documentación legal ajustada a parámetros Nacionales e Interncionales para la protección de datos y cumplimiento normativo.
                        </p>
                    </div>

                    <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="rounded-xl border border-[rgba(255,255,255,0.12)] bg-white/[0.02] px-4 py-3">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Última revisión</p>
                            <p className="mt-1 text-sm font-medium text-white">Marzo 2026</p>
                        </div>
                        <div className="rounded-xl border border-[rgba(255,255,255,0.12)] bg-white/[0.02] px-4 py-3">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Jurisdicción</p>
                            <p className="mt-1 text-sm font-medium text-white">República de Chile y Países de Sudamérica</p>
                        </div>
                        <div className="rounded-xl border border-[rgba(255,255,255,0.12)] bg-white/[0.02] px-4 py-3">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Versión</p>
                            <p className="mt-1 text-sm font-medium text-white">v1.0</p>
                        </div>
                    </div>
                </header>

                <nav className="mt-8 flex flex-wrap gap-3" aria-label="Secciones legales">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-all ${isActive
                                        ? "border-white bg-white text-black"
                                        : "border-[rgba(255,255,255,0.16)] bg-white/5 text-zinc-300 hover:border-white hover:text-white"
                                    }`}
                            >
                                <Icon className="h-4 w-4" />
                                {tab.label}
                            </button>
                        );
                    })}
                </nav>

                <section className="mt-10 grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
                    <aside className="h-fit rounded-xl border border-[rgba(31,34,40)] bg-white/[0.02] p-5 lg:sticky lg:top-28">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">Sección activa</p>
                        <h2 className="mt-4 text-xl font-semibold tracking-tight text-white">{activeMeta.headline}</h2>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{activeMeta.summary}</p>
                    </aside>

                    <div className="rounded-2xl border border-[rgba(31,34,40)] bg-white/[0.03] p-6 md:p-10">
                        {activeTab === "privacidad" && <PrivacidadContent />}
                        {activeTab === "terminos" && <TerminosContent />}
                        {activeTab === "seguridad" && <SeguridadContent />}
                    </div>
                </section>
            </div>
        </main>
    );
}

function PrivacidadContent() {
    return (
        <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-4xl">
                Política de Privacidad
            </h2>

            <p className="leading-relaxed text-zinc-300">
                En NativeCode respetamos y protegemos la información personal de nuestros clientes y usuarios. Esta
                política describe cómo recopilamos, utilizamos y protegemos los datos.
            </p>

            <div className="space-y-7">
                <Section title="Datos que recopilamos">
                    Podemos recopilar:
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Nombre y apellido</li>
                        <li>Correo electrónico</li>
                        <li>Número de teléfono</li>
                        <li>Información entregada mediante formularios</li>
                        <li>Datos necesarios para la prestación del servicio</li>
                    </ul>
                </Section>

                <Section title="Finalidad del tratamiento">
                    Los datos se utilizan para:
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Responder consultas comerciales</li>
                        <li>Gestionar proyectos contratados</li>
                        <li>Brindar soporte técnico</li>
                        <li>Enviar información relacionada con los servicios</li>
                    </ul>
                </Section>

                <Section title="Datos sensibles">
                    En sistemas como Agenda Clínica, los datos de pacientes pertenecen exclusivamente al cliente.
                    NativeCode actúa como proveedor tecnológico y no utiliza dichos datos para fines propios.
                </Section>

                <Section title="Almacenamiento y seguridad">
                    Los datos se almacenan en infraestructuras seguras y protegidas mediante controles de acceso,
                    cifrado en tránsito (HTTPS) y buenas prácticas de desarrollo seguro.
                </Section>

                <Section title="Compartición de datos">
                    NativeCode no vende ni comercializa datos personales. Solo podrán compartirse cuando sea necesario
                    para la prestación del servicio (por ejemplo, proveedores de hosting) bajo estándares de seguridad
                    adecuados.
                </Section>

                <Section title="Derechos del titular de los datos">
                    El usuario puede solicitar:
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Acceso a sus datos</li>
                        <li>Rectificación</li>
                        <li>Eliminación</li>
                        <li>Revocación del consentimiento</li>
                    </ul>
                    <p className="mt-3 text-zinc-300">
                        escribiendo a{" "}
                        <a
                            href="mailto:contacto@nativecode.cl"
                            className="text-white underline underline-offset-4 hover:text-zinc-300"
                        >
                            ingenieria.software@nativecode.cl
                        </a>
                        .
                    </p>
                </Section>

                <Section title="Conservación de los datos">
                    Los datos se conservarán únicamente durante el tiempo necesario para cumplir con la finalidad para
                    la cual fueron recopilados o mientras exista una relación contractual.
                </Section>

                <Section title="Cookies">
                    El sitio puede utilizar cookies técnicas y analíticas para mejorar la experiencia del usuario. No se
                    utilizan para identificar personalmente a los visitantes.
                </Section>

                <Section title="Modificaciones">
                    NativeCode podrá actualizar esta política para adaptarla a cambios legales o tecnológicos.
                </Section>
            </div>
        </div>
    );
}

function TerminosContent() {
    return (
        <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-4xl">
                Términos y Condiciones
            </h2>

            <p className="leading-relaxed text-zinc-300">
                Los presentes términos regulan la contratación de servicios de desarrollo de software y soluciones
                digitales ofrecidas por NativeCode SpA.
            </p>

            <div className="space-y-7">
                <Section title="Alcance de los servicios">
                    El alcance de cada proyecto será definido en la cotización aceptada. Cualquier funcionalidad no
                    contemplada requerirá una nueva cotización o un plan de mantenimiento.
                </Section>

                <Section title="2. Inicio del proyecto">
                    El proyecto inicia una vez aprobado el presupuesto, pagado el anticipo y entregados los insumos
                    necesarios. Los plazos comienzan desde ese momento.
                </Section>

                <Section title="Responsabilidades del cliente">
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Entregar contenidos y accesos en los plazos acordados.</li>
                        <li>Validar avances dentro de los tiempos definidos.</li>
                        <li>No modificar el sistema sin autorización.</li>
                    </ul>
                </Section>

                <Section title="Condiciones de pago">
                    Los pagos se realizarán según la cotización. El incumplimiento puede suspender temporalmente el
                    servicio.
                </Section>

                <Section title="Propiedad intelectual">
                    El código fuente y componentes propietarios pertenecen a NativeCode. El cliente obtiene una licencia
                    de uso. Los datos son propiedad del cliente.
                </Section>

                <Section title="Garantía">
                    NativeCode ofrece una garantía de 90 días que cubre errores de software en funcionalidades entregadas.
                    No incluye nuevas funcionalidades ni cambios posteriores.
                </Section>

                <Section title="Soporte y mantenimiento">
                    Finalizada la garantía, el soporte estará disponible mediante la contratación de un plan de
                    mantenimiento.
                </Section>

                <Section title="Disponibilidad del sistema">
                    Objetivo de disponibilidad de 99.5% mensual en horario operativo, excluyendo fallas de terceros o
                    fuerza mayor.
                </Section>

                <Section title="Limitación de responsabilidad">
                    NativeCode no será responsable por daños indirectos o lucro cesante. La responsabilidad máxima se
                    limita al monto contratado.
                </Section>

                <Section title="Cancelación">
                    Cualquiera de las partes podrá cancelar el servicio con aviso previo de 30 días.
                </Section>

                <Section title="Jurisdicción">
                    Estos términos se rigen por la legislación chilena.
                </Section>
            </div>
        </div>
    );
}

function SeguridadContent() {
    return (
        <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-4xl">
                Política de Seguridad
            </h2>

            <p className="leading-relaxed text-zinc-300">
                NativeCode aplica prácticas de desarrollo seguro para proteger la información gestionada en las
                plataformas desarrolladas.
            </p>

            <div className="space-y-7">
                <Section title="Desarrollo seguro">
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Validación de datos de entrada.</li>
                        <li>Control de accesos por roles.</li>
                        <li>Uso de HTTPS.</li>
                        <li>Manejo seguro de credenciales.</li>
                        <li>Protección contra inyección de código.</li>
                    </ul>
                </Section>

                <Section title="Almacenamiento de datos">
                    Los datos se almacenan en infraestructuras seguras con acceso restringido mediante autenticación y
                    permisos.
                </Section>

                <Section title="Copias de seguridad">
                    Los respaldos están garantizados solo cuando forman parte de un plan de soporte contratado.
                </Section>

                <Section title="Incidentes de seguridad">
                    Ante un incidente se realizará diagnóstico técnico, notificación al cliente y aplicación de medidas
                    correctivas.
                </Section>

                <Section title="Responsabilidad compartida">
                    La seguridad también depende de la correcta gestión de accesos del cliente y de la infraestructura de
                    terceros utilizada.
                </Section>
            </div>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <section className="space-y-3 border-t border-[rgba(31,34,40)] pt-6 first:border-0 first:pt-0">
            <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
            <div className="leading-relaxed text-zinc-300">{children}</div>
        </section>
    );
}
