import PoliticasContent from "./PoliticasContent";

export const metadata = {
    title: "Políticas",
    description:
        "Política de privacidad, términos y condiciones, y política de seguridad de NativeCode para el tratamiento de datos clínicos y operativos.",
    alternates: {
        canonical: "/politicas",
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function PoliticaPage() {
    return <PoliticasContent />;
}
