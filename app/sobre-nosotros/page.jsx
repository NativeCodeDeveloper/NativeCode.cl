import SobreNosotrosContent from "./SobreNosotrosContent";

export const metadata = {
    title: "Sobre Nosotros",
    description:
        "Empresa de ingeniería de software especializada en sistemas de salud. Democratizamos el acceso a tecnología de punta para clínicas, centros de salud y empresas.",
    alternates: {
        canonical: "/sobre-nosotros",
    },
    openGraph: {
        title: "Sobre Nosotros | NativeCode",
        description:
            "Empresa de ingeniería de software especializada en sistemas de salud. Democratizamos el acceso a tecnología de punta para clínicas, centros de salud y empresas.",
        url: "/sobre-nosotros",
    },
    twitter: {
        title: "Sobre Nosotros | NativeCode",
        description:
            "Empresa de ingeniería de software especializada en sistemas de salud. Democratizamos el acceso a tecnología de punta para clínicas, centros de salud y empresas.",
    },
};

export default function SobreNosotrosPage() {
    return <SobreNosotrosContent />;
}
