import ProyectosContent from "./ProyectosContent";

export const metadata = {
    title: "Proyectos",
    description:
        "Plataformas de agendamiento clínico, fichas médicas y automatización de pagos que hemos construido para clínicas, centros de salud y profesionales en Chile.",
    alternates: {
        canonical: "/proyectos",
    },
    openGraph: {
        title: "Proyectos | NativeCode",
        description:
            "Plataformas de agendamiento clínico, fichas médicas y automatización de pagos que hemos construido para clínicas, centros de salud y profesionales en Chile.",
        url: "/proyectos",
    },
    twitter: {
        title: "Proyectos | NativeCode",
        description:
            "Plataformas de agendamiento clínico, fichas médicas y automatización de pagos que hemos construido para clínicas, centros de salud y profesionales en Chile.",
    },
};

export default function ProyectosPage() {
    return <ProyectosContent />;
}
