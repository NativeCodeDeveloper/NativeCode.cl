import ServiciosContent from "./ServiciosContent";

export const metadata = {
    title: "Servicios de Software para Clínicas y Centros de Salud",
    description:
        "Plataformas clínicas a medida, agendamiento, infraestructura cloud, arquitectura de software y seguridad con cumplimiento GDPR & HIPAA. Ingeniería de software especializada en salud.",
    alternates: {
        canonical: "/servicios",
    },
    openGraph: {
        title: "Servicios de Software para Clínicas y Centros de Salud | NativeCode",
        description:
            "Plataformas clínicas a medida, agendamiento, infraestructura cloud, arquitectura de software y seguridad con cumplimiento GDPR & HIPAA.",
        url: "/servicios",
    },
    twitter: {
        title: "Servicios de Software para Clínicas y Centros de Salud | NativeCode",
        description:
            "Plataformas clínicas a medida, agendamiento, infraestructura cloud, arquitectura de software y seguridad con cumplimiento GDPR & HIPAA.",
    },
};

export default function ServiciosPage() {
    return <ServiciosContent />;
}
