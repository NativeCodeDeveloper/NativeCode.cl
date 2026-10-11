import SobreNosotrosContent from "./SobreNosotrosContent";

export const metadata = {
    title: "Sobre Nosotros",
    description:
        "Somos NativeCode: desarrollo de software a medida para comercio, servicios y salud. Creamos plataformas e integraciones y productos por suscripción como Agenda Clínica y LeveyQC.",
    alternates: {
        canonical: "/sobre-nosotros",
    },
    openGraph: {
        title: "Sobre Nosotros | NativeCode",
        description:
            "Desarrollo de software a medida para comercio, servicios y salud. Conoce al equipo detrás de NativeCode, Agenda Clínica y LeveyQC.",
        url: "/sobre-nosotros",
    },
    twitter: {
        title: "Sobre Nosotros | NativeCode",
        description:
            "Desarrollo de software a medida para comercio, servicios y salud. Conoce al equipo detrás de NativeCode, Agenda Clínica y LeveyQC.",
    },
};

export default function SobreNosotrosPage() {
    return <SobreNosotrosContent />;
}
