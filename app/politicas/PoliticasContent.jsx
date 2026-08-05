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
                            <p className="mt-1 text-sm font-medium text-white">Julio 2026</p>
                        </div>
                        <div className="rounded-xl border border-[rgba(255,255,255,0.12)] bg-white/[0.02] px-4 py-3">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Jurisdicción</p>
                            <p className="mt-1 text-sm font-medium text-white">República de Chile</p>
                        </div>
                        <div className="rounded-xl border border-[rgba(255,255,255,0.12)] bg-white/[0.02] px-4 py-3">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Versión</p>
                            <p className="mt-1 text-sm font-medium text-white">v2.0</p>
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
                En NativeCode respetamos y protegemos la privacidad de quienes interactúan con nosotros. Esta política
                describe cómo recopilamos, usamos y protegemos la información personal de nuestros clientes, usuarios
                y visitantes.
            </p>

            <div className="space-y-7">
                <Section title="Quiénes somos">
                    NativeCode SpA, RUT 78.184.828-K, es una empresa de ingeniería de software especializada en
                    sistemas para el sector salud, con domicilio en Santiago, Chile. Operamos los productos
                    AgendaClinica, Cortex AI y LeveyQC, además de servicios de desarrollo de software para clínicas y
                    empresas.
                    <p className="mt-3 text-zinc-300">
                        Contacto de privacidad:{" "}
                        <a
                            href="mailto:ingenieria.software@nativecode.cl"
                            className="text-white underline underline-offset-4 hover:text-zinc-300"
                        >
                            ingenieria.software@nativecode.cl
                        </a>
                    </p>
                </Section>

                <Section title="Datos que recopilamos">
                    <p className="text-zinc-300">A través del sitio web (nativecode.cl)</p>
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Nombre y correo electrónico cuando completas un formulario de contacto o solicitud de demo.</li>
                        <li>Información que proporcionas voluntariamente en la conversación comercial.</li>
                        <li>Datos de navegación anónimos (páginas visitadas, tiempo en el sitio) a través de herramientas de analítica.</li>
                    </ul>

                    <p className="mt-4 text-zinc-300">A través de proyectos y contratos</p>
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Datos de identificación y representación legal del cliente (nombre, RUT, cargo).</li>
                        <li>Información técnica y operacional necesaria para el desarrollo del proyecto.</li>
                        <li>Datos de facturación.</li>
                    </ul>

                    <p className="mt-4 text-zinc-300">A través de los productos (AgendaClinica, Cortex AI, LeveyQC)</p>
                    <p className="mt-2 text-zinc-300">
                        Los datos de usuarios y pacientes gestionados a través de nuestros productos se rigen por las
                        políticas de privacidad específicas de cada producto. En el caso de AgendaClinica, los datos
                        clínicos de pacientes son propiedad del cliente (la clínica o el profesional) y NativeCode
                        actúa como custodio técnico sin usarlos para fines propios.
                    </p>
                </Section>

                <Section title="Para qué usamos los datos">
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Responder consultas comerciales y técnicas.</li>
                        <li>Gestionar proyectos, contratos y facturación.</li>
                        <li>Brindar soporte técnico y postventa.</li>
                        <li>Enviar comunicaciones relacionadas con los servicios contratados.</li>
                        <li>Mejorar nuestros productos y servicios.</li>
                    </ul>
                    <p className="mt-3 text-zinc-300">
                        No utilizamos datos personales con fines publicitarios ni los cedemos a terceros para ese
                        propósito.
                    </p>
                </Section>

                <Section title="Compartición de datos">
                    NativeCode no vende ni comercializa datos personales. Solo los comparte cuando es estrictamente
                    necesario para prestar el servicio —con proveedores de infraestructura cloud, servicios de
                    mensajería u otros subprocesadores—, bajo obligaciones de confidencialidad equivalentes a las de
                    esta política.
                </Section>

                <Section title="Seguridad">
                    Implementamos controles técnicos y organizativos para proteger la información: cifrado en tránsito
                    y en reposo, control de acceso por roles, monitoreo de seguridad y formación del equipo en buenas
                    prácticas. Los detalles se describen en la Política de Seguridad.
                </Section>

                <Section title="Conservación de datos">
                    Los datos personales de contacto se conservan mientras exista una relación comercial activa o
                    potencial, y hasta por 3 años desde el último contacto. Los datos de proyectos y contratos se
                    conservan por el plazo exigido por la normativa tributaria y comercial chilena. Puedes solicitar
                    la eliminación de tus datos en cualquier momento (ver &quot;Tus derechos&quot;).
                </Section>

                <Section title="Cookies">
                    El sitio nativecode.cl utiliza cookies técnicas necesarias para la navegación, y puede utilizar
                    herramientas de analítica web anónima. No utilizamos cookies de publicidad dirigida ni redes de
                    tracking.
                </Section>

                <Section title="Tus derechos">
                    Puedes ejercer en cualquier momento los siguientes derechos:
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Acceder a los datos que almacenamos sobre ti.</li>
                        <li>Solicitar la corrección de datos inexactos o incompletos.</li>
                        <li>Solicitar la eliminación de tus datos personales.</li>
                        <li>Revocar el consentimiento para comunicaciones comerciales.</li>
                    </ul>
                    <p className="mt-3 text-zinc-300">
                        Escríbenos a{" "}
                        <a
                            href="mailto:ingenieria.software@nativecode.cl"
                            className="text-white underline underline-offset-4 hover:text-zinc-300"
                        >
                            ingenieria.software@nativecode.cl
                        </a>{" "}
                        con el asunto &quot;Solicitud de Privacidad&quot;. Respondemos dentro de 15 días hábiles.
                    </p>
                </Section>

                <Section title="Modificaciones">
                    Podemos actualizar esta política para adaptarla a cambios en nuestros servicios o en la normativa
                    aplicable. Las actualizaciones importantes serán comunicadas a nuestros clientes activos. La
                    versión vigente siempre estará disponible en esta página.
                    <p className="mt-3 text-sm text-zinc-500">Última actualización: Julio 2026.</p>
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
                El uso del sitio web nativecode.cl y la contratación de los servicios de NativeCode SpA implican la
                aceptación de los presentes Términos y Condiciones.
            </p>

            <div className="space-y-7">
                <Section title="Acerca de NativeCode">
                    NativeCode SpA, RUT 78.184.828-K, es una empresa de ingeniería de software con domicilio en
                    Santiago, Chile. Diseñamos y construimos soluciones tecnológicas para el sector salud, incluyendo
                    AgendaClinica, Cortex AI y LeveyQC, además de otros servicios de desarrollo.
                </Section>

                <Section title="Uso del sitio web">
                    El sitio nativecode.cl es de carácter informativo y comercial. Está permitido navegar, leer sus
                    contenidos y contactarnos a través de los canales disponibles. No está permitido:
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Copiar, reproducir o distribuir los contenidos del sitio sin autorización expresa.</li>
                        <li>Intentar acceder a sistemas, bases de datos o infraestructura de NativeCode de forma no autorizada.</li>
                        <li>Usar el sitio para enviar comunicaciones no solicitadas o contenido malicioso.</li>
                    </ul>
                </Section>

                <Section title="Servicios y productos">
                    Los servicios y productos de NativeCode se rigen por los contratos y términos específicos
                    acordados con cada cliente. Esta página presenta términos generales; los detalles de cada servicio
                    quedan establecidos en los documentos contractuales correspondientes (Contrato de Servicios, SLA,
                    Garantía Técnica y Términos de cada producto).
                </Section>

                <Section title="Propiedad intelectual">
                    Todo el contenido del sitio nativecode.cl —textos, imágenes, logotipos, diseño y código— es
                    propiedad de NativeCode SpA o se utiliza bajo licencia. El código fuente, arquitectura y
                    metodología de los productos desarrollados por NativeCode son propiedad intelectual de la empresa.
                    <p className="mt-3 text-zinc-300">
                        Los clientes retienen la propiedad de los datos y contenidos que aportan al desarrollo o que
                        gestionan a través de los productos de NativeCode.
                    </p>
                </Section>

                <Section title="Limitación de responsabilidad">
                    NativeCode no garantiza que el sitio web esté disponible de forma ininterrumpida ni libre de
                    errores. La información publicada es referencial; los términos definitivos de cada servicio quedan
                    establecidos en los contratos firmados.
                    <p className="mt-3 text-zinc-300">
                        NativeCode no será responsable por daños indirectos, pérdida de negocio o cualquier otro
                        perjuicio derivado del uso del sitio o de la interpretación de su contenido fuera del marco
                        contractual.
                    </p>
                </Section>

                <Section title="Privacidad">
                    El tratamiento de datos personales en el sitio y en los servicios de NativeCode se rige por la
                    Política de Privacidad disponible en esta misma página.
                </Section>

                <Section title="Modificaciones">
                    NativeCode puede actualizar estos Términos en cualquier momento. La versión vigente estará siempre
                    disponible en esta página.
                </Section>

                <Section title="Ley aplicable">
                    Estos Términos se rigen por las leyes de la República de Chile. Las controversias que no puedan
                    resolverse de forma directa se someterán a los tribunales ordinarios con asiento en Santiago de
                    Chile.
                    <p className="mt-3 text-sm text-zinc-500">Última actualización: Julio 2026.</p>
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
                La seguridad de la información es un pilar central en NativeCode, especialmente dado que operamos en
                el sector salud. Esta política describe los controles y prácticas que aplicamos para proteger los
                datos de nuestros clientes y sus pacientes.
            </p>

            <div className="space-y-7">
                <Section title="Alcance">
                    Esta política aplica a todos los productos y servicios de NativeCode SpA: AgendaClinica, Cortex
                    AI, LeveyQC y los proyectos de desarrollo de software a medida para clientes.
                </Section>

                <Section title="Gestión de accesos">
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Principio de mínimo privilegio: cada integrante del equipo accede únicamente a los sistemas y datos necesarios para su función.</li>
                        <li>Autenticación segura con contraseñas fuertes y autenticación de dos factores para accesos a sistemas críticos.</li>
                        <li>Control de acceso basado en roles (RBAC) en todos los productos.</li>
                        <li>Revisión periódica de privilegios y revocación inmediata ante cambios de rol o salida del equipo.</li>
                    </ul>
                </Section>

                <Section title="Seguridad de los datos">
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Cifrado en tránsito mediante TLS/HTTPS en todas las comunicaciones entre cliente y servidor.</li>
                        <li>Cifrado en reposo para datos almacenados en infraestructura cloud.</li>
                        <li>Copias de seguridad periódicas con verificación de integridad y retención mínima de 30 días.</li>
                        <li>Separación de entornos: los datos de producción no se utilizan en ambientes de desarrollo o pruebas.</li>
                    </ul>
                </Section>

                <Section title="Seguridad de la infraestructura">
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Infraestructura alojada en proveedores cloud con certificaciones de seguridad internacionales reconocidas.</li>
                        <li>Monitoreo continuo de disponibilidad y detección de anomalías.</li>
                        <li>Aplicación sistemática de parches y actualizaciones de seguridad.</li>
                        <li>Revisión periódica de la configuración de seguridad de los sistemas.</li>
                    </ul>
                </Section>

                <Section title="Desarrollo seguro">
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Revisión de código orientada a la detección de vulnerabilidades (OWASP Top 10 como referencia).</li>
                        <li>Gestión de dependencias con revisión de vulnerabilidades conocidas.</li>
                        <li>Control de versiones y auditoría de cambios en el código fuente.</li>
                        <li>Variables de entorno y secretos gestionados de forma segura, nunca expuestos en el código.</li>
                    </ul>
                </Section>

                <Section title="Capacitación del equipo">
                    Todo el personal de NativeCode recibe formación en buenas prácticas de seguridad y está sujeto a
                    acuerdos de confidencialidad. La seguridad es responsabilidad de todos, no solo del área técnica.
                </Section>

                <Section title="Gestión de incidentes">
                    Contamos con un protocolo documentado de respuesta ante incidentes de seguridad:
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>Detección y contención del incidente.</li>
                        <li>Evaluación del alcance e impacto sobre los datos afectados.</li>
                        <li>Notificación al cliente dentro de las 72 horas de detectar el incidente.</li>
                        <li>Implementación de medidas correctivas y preventivas.</li>
                        <li>Documentación y lecciones aprendidas.</li>
                    </ul>
                </Section>

                <Section title="Datos clínicos: protección reforzada">
                    Los datos clínicos de pacientes gestionados a través de AgendaClinica reciben protección
                    adicional: ningún integrante del equipo accede a ellos salvo en casos de soporte técnico
                    estrictamente necesario, con registro de la acción y conocimiento del cliente.
                </Section>

                <Section title="Reporte de vulnerabilidades">
                    Si encuentras una vulnerabilidad de seguridad en alguno de nuestros productos o en el sitio web, te
                    pedimos que nos lo comuniques de forma responsable antes de hacerlo público:
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300 marker:text-zinc-500">
                        <li>
                            Correo:{" "}
                            <a
                                href="mailto:ingenieria.software@nativecode.cl"
                                className="text-white underline underline-offset-4 hover:text-zinc-300"
                            >
                                ingenieria.software@nativecode.cl
                            </a>
                        </li>
                        <li>Asunto: &quot;Reporte de Seguridad – [nombre del producto]&quot;</li>
                    </ul>
                    <p className="mt-3 text-zinc-300">
                        Respondemos dentro de 24 horas hábiles y tomamos todos los reportes en serio.
                    </p>
                </Section>

                <Section title="Revisión de esta política">
                    Esta política se revisa y actualiza al menos una vez al año, o ante cambios relevantes en los
                    sistemas o en las amenazas del entorno.
                    <p className="mt-3 text-sm text-zinc-500">Última actualización: Julio 2026.</p>
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
