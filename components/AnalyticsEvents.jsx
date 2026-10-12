"use client";

import { useEffect } from "react";

// Registra en Google Analytics los clicks que generan contactos o visitas a productos.
// Se escucha a nivel de documento para cubrir todos los links sin modificar cada componente.
const reglas = [
    { coincide: (href) => href.includes("wa.me/"), evento: "generate_lead", metodo: "whatsapp" },
    { coincide: (href) => href.startsWith("mailto:"), evento: "generate_lead", metodo: "email" },
    { coincide: (href) => href.startsWith("tel:"), evento: "generate_lead", metodo: "telefono" },
    { coincide: (href) => href.includes("nc-ecommerce-demo"), evento: "ver_demo_tienda" },
    { coincide: (href) => href.includes("agendaclinicas.cl"), evento: "ir_agenda_clinica" },
];

export default function AnalyticsEvents() {
    useEffect(() => {
        const onClick = (event) => {
            const link = event.target.closest?.("a[href]");
            if (!link || typeof window.gtag !== "function") return;

            const href = link.getAttribute("href");
            const regla = reglas.find(({ coincide }) => coincide(href));
            if (!regla) return;

            window.gtag("event", regla.evento, {
                ...(regla.metodo && { method: regla.metodo }),
                link_text: link.textContent.trim().slice(0, 100),
                section: link.closest("section[id]")?.id ?? "otra",
                page_path: window.location.pathname,
            });
        };

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    return null;
}
