import ServiciosContent from "./ServiciosContent";

export const metadata = {
    title: "Servicios de Software para Clínicas y Centros de Salud",
    description:
        "Agendamiento clínico, infraestructura cloud, arquitectura de software y seguridad alineada a la Ley 19.628. Ingeniería de software especializada en sistemas de salud.",
    alternates: {
        canonical: "/servicios",
    },
    openGraph: {
        title: "Servicios de Software para Clínicas y Centros de Salud | NativeCode",
        description:
            "Agendamiento clínico, infraestructura cloud, arquitectura de software y seguridad alineada a la Ley 19.628 de Protección de Datos Personales.",
        url: "/servicios",
    },
    twitter: {
        title: "Servicios de Software para Clínicas y Centros de Salud | NativeCode",
        description:
            "Agendamiento clínico, infraestructura cloud, arquitectura de software y seguridad alineada a la Ley 19.628 de Protección de Datos Personales.",
    },
};

export default function ServiciosPage() {
    return <ServiciosContent />;
}
