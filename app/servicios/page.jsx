import ServiciosContent from "./ServiciosContent";

export const metadata = {
    title: "Desarrollo a Medida e Integraciones",
    description:
        "E-commerce de alto rendimiento, landing pages, portales y plataformas para salud. Integraciones con SII, WhatsApp, Gmail, pasarelas de pago e interoperabilidad HL7.",
    alternates: {
        canonical: "/servicios",
    },
    openGraph: {
        title: "Desarrollo a Medida e Integraciones | NativeCode",
        description:
            "E-commerce, landing pages y plataformas especializadas. Conectamos tu operación con SII, WhatsApp, Gmail, pagos e interoperabilidad HL7.",
        url: "/servicios",
    },
    twitter: {
        title: "Desarrollo a Medida e Integraciones | NativeCode",
        description:
            "E-commerce, landing pages y plataformas especializadas. Conectamos tu operación con SII, WhatsApp, Gmail, pagos e interoperabilidad HL7.",
    },
};

export default function ServiciosPage() {
    return <ServiciosContent />;
}
