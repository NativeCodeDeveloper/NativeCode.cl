"use client";

import { useEffect, useState } from "react";
import { FileText, Lock, Shield } from "lucide-react";

const tabs = [
    { id: "privacidad", label: "Política de Privacidad", icon: Shield },
    { id: "terminos", label: "Términos y Condiciones", icon: FileText },
    { id: "seguridad", label: "Política de Seguridad", icon: Lock },
];

export default function PoliticaPage() {
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

    return (
        <main className="min-h-screen bg-black pt-32 pb-24">
            <div className="mx-auto max-w-5xl px-6">
                <header className="mb-14 border-b border-[rgba(31,34,40)] pb-10">
                    <h1 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Privacidad, Términos y Seguridad.
                    </h1>
                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">
                        Transparencia contractual y prácticas de seguridad aplicadas por
                        NativeCode en sus servicios de desarrollo de software.
                    </p>
                </header>

                <div className="mb-10 flex flex-wrap gap-3">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-mono uppercase tracking-wide transition-all ${isActive
                                    ? "border-white bg-white text-black"
                                    : "border-[rgba(255,255,255,0.18)] bg-white/5 text-zinc-300 hover:border-white hover:text-white"
                                    }`}
                            >
                                <Icon className="h-4 w-4" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                <div className="rounded-2xl border border-[rgba(31,34,40)] bg-white/[0.03] p-6 md:p-10">
                    {activeTab === "privacidad" && <PrivacidadContent />}
                    {activeTab === "terminos" && <TerminosContent />}
                    {activeTab === "seguridad" && <SeguridadContent />}
                </div>
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
                En NativeCode respetamos y protegemos la información personal de
                nuestros clientes y usuarios. Esta política describe cómo recopilamos,
                utilizamos y protegemos los datos.
            </p>

            <div className="space-y-7">
                <Section title="1. Datos que recopilamos">
                    Podemos recopilar:
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300">
                        <li>Nombre y apellido.</li>
                        <li>Correo electrónico.</li>
                        <li>Número de teléfono.</li>
                        <li>Información entregada mediante formularios.</li>
                        <li>Datos necesarios para la prestación del servicio.</li>
                    </ul>
                </Section>

                <Section title="2. Finalidad del tratamiento">
                    Los datos se utilizan para:
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300">
                        <li>Responder consultas comerciales.</li>
                        <li>Gestionar proyectos contratados.</li>
                        <li>Brindar soporte técnico.</li>
                        <li>Enviar información relacionada con los servicios.</li>
                    </ul>
                </Section>

                <Section title="3. Datos sensibles">
                    En sistemas como Agenda Clínica, los datos de pacientes pertenecen
                    exclusivamente al cliente. NativeCode actúa como proveedor tecnológico
                    y no utiliza dichos datos para fines propios.
                </Section>

                <Section title="4. Almacenamiento y seguridad">
                    Los datos se almacenan en infraestructuras seguras y protegidas
                    mediante controles de acceso, cifrado en tránsito (HTTPS) y buenas
                    prácticas de desarrollo seguro.
                </Section>

                <Section title="5. Compartición de datos">
                    NativeCode no vende ni comercializa datos personales. Solo podrán
                    compartirse cuando sea necesario para la prestación del servicio (por
                    ejemplo, proveedores de hosting) bajo estándares de seguridad
                    adecuados.
                </Section>

                <Section title="6. Derechos del titular de los datos">
                    El usuario puede solicitar:
                    <ul className="ml-6 mt-2 list-disc space-y-2 text-zinc-300">
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

                <Section title="7. Conservación de los datos">
                    Los datos se conservarán únicamente durante el tiempo necesario para
                    cumplir con la finalidad para la cual fueron recopilados o mientras
                    exista una relación contractual.
                </Section>

                <Section title="8. Cookies">
                    El sitio puede utilizar cookies técnicas y analíticas para mejorar la
                    experiencia del usuario. No se utilizan para identificar
                    personalmente a los visitantes.
                </Section>

                <Section title="9. Modificaciones">
                    NativeCode podrá actualizar esta política para adaptarla a cambios
                    legales o tecnológicos.
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
                Los presentes términos regulan la contratación de servicios de
                desarrollo de software y soluciones digitales ofrecidas por NativeCode
                SpA.
            </p>

            <div className="space-y-7">
                <Section title="1. Alcance de los servicios">
                    El alcance de cada proyecto será definido en la cotización aceptada.
                    Cualquier funcionalidad no contemplada requerirá una nueva cotización
                    o un plan de mantenimiento.
                </Section>

                <Section title="2. Inicio del proyecto">
                    El proyecto inicia una vez aprobado el presupuesto, pagado el anticipo
                    y entregados los insumos necesarios. Los plazos comienzan desde ese
                    momento.
                </Section>

                <Section title="3. Responsabilidades del cliente">
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300">
                        <li>Entregar contenidos y accesos en los plazos acordados.</li>
                        <li>Validar avances dentro de los tiempos definidos.</li>
                        <li>No modificar el sistema sin autorización.</li>
                    </ul>
                </Section>

                <Section title="4. Condiciones de pago">
                    Los pagos se realizarán según la cotización. El incumplimiento puede
                    suspender temporalmente el servicio.
                </Section>

                <Section title="5. Propiedad intelectual">
                    El código fuente y componentes propietarios pertenecen a NativeCode.
                    El cliente obtiene una licencia de uso. Los datos son propiedad del
                    cliente.
                </Section>

                <Section title="6. Garantía">
                    NativeCode ofrece una garantía de 90 días que cubre errores de
                    software en funcionalidades entregadas. No incluye nuevas
                    funcionalidades ni cambios posteriores.
                </Section>

                <Section title="7. Soporte y mantenimiento">
                    Finalizada la garantía, el soporte estará disponible mediante la
                    contratación de un plan de mantenimiento.
                </Section>

                <Section title="8. Disponibilidad del sistema">
                    Objetivo de disponibilidad de 99.5% mensual en horario operativo,
                    excluyendo fallas de terceros o fuerza mayor.
                </Section>

                <Section title="9. Limitación de responsabilidad">
                    NativeCode no será responsable por daños indirectos o lucro cesante.
                    La responsabilidad máxima se limita al monto contratado.
                </Section>

                <Section title="10. Cancelación">
                    Cualquiera de las partes podrá cancelar el servicio con aviso previo
                    de 30 días.
                </Section>

                <Section title="11. Jurisdicción">
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
                NativeCode aplica prácticas de desarrollo seguro para proteger la
                información gestionada en las plataformas desarrolladas.
            </p>

            <div className="space-y-7">
                <Section title="1. Desarrollo seguro">
                    <ul className="ml-6 list-disc space-y-2 text-zinc-300">
                        <li>Validación de datos de entrada.</li>
                        <li>Control de accesos por roles.</li>
                        <li>Uso de HTTPS.</li>
                        <li>Manejo seguro de credenciales.</li>
                        <li>Protección contra inyección de código.</li>
                    </ul>
                </Section>

                <Section title="2. Almacenamiento de datos">
                    Los datos se almacenan en infraestructuras seguras con acceso
                    restringido mediante autenticación y permisos.
                </Section>

                <Section title="3. Copias de seguridad">
                    Los respaldos están garantizados solo cuando forman parte de un plan
                    de soporte contratado.
                </Section>

                <Section title="4. Incidentes de seguridad">
                    Ante un incidente se realizará diagnóstico técnico, notificación al
                    cliente y aplicación de medidas correctivas.
                </Section>

                <Section title="5. Responsabilidad compartida">
                    La seguridad también depende de la correcta gestión de accesos del
                    cliente y de la infraestructura de terceros utilizada.
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
