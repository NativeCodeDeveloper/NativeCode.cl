import Image from "next/image";
import { clsx } from "clsx";
import CarruselTienda from "@/components/CarruselTienda";

const ECOMMERCE_DEMO_URL = "https://nc-ecommerce-demo.vercel.app";

const whatsappUrl = (mensaje) =>
    `https://wa.me/56966091038?text=${encodeURIComponent(mensaje)}`;

const unsplash = (id) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2400&q=90`;

const servicios = [
    {
        titulo: "Web a Medida",
        descripcion:
            "Diseño y desarrollo exclusivo, sin plantillas. Cada sitio se construye desde cero para reflejar tu marca y convertir visitas en clientes.",
        imagen: unsplash("1581291518857-4e27b48ff24e"),
        alt: "Diseñadora bocetando la estructura de un sitio web",
        enlace: { texto: "Cotizar proyecto", href: whatsappUrl("Hola, quiero cotizar una Web a Medida.") },
        className: "lg:col-span-3 lg:rounded-tl-4xl max-lg:rounded-t-4xl",
        sizes: "(min-width: 1024px) 640px, 100vw",
    },
    {
        titulo: "Web Corporativa",
        descripcion:
            "Una presencia digital a la altura de tu empresa. Sólida, rápida y preparada para crecer junto a tu negocio.",
        imagen: unsplash("1486406146926-c627a92ad1ab"),
        alt: "Edificios corporativos de vidrio vistos desde abajo",
        enlace: { texto: "Cotizar proyecto", href: whatsappUrl("Hola, quiero cotizar una Web Corporativa.") },
        className: "lg:col-span-3 lg:rounded-tr-4xl",
        sizes: "(min-width: 1024px) 640px, 100vw",
    },
    {
        titulo: "Tienda Online",
        descripcion:
            "E-commerce de nivel internacional: catálogo con filtros, variantes de talla y color, ofertas, favoritos y un checkout pensado para cerrar cada venta.",
        galeria: [
            { src: "/ecommerce/portada.jpg", alt: "Portada de la tienda online demo desarrollada por NativeCode" },
            { src: "/ecommerce/catalogo.jpg", alt: "Catálogo con filtros por categoría y precio" },
            { src: "/ecommerce/producto.jpg", alt: "Ficha de producto con selección de color y talla" },
            { src: "/ecommerce/checkout.jpg", alt: "Checkout con resumen del pedido" },
        ],
        enlace: { texto: "Cotizar proyecto", href: whatsappUrl("Hola, quiero cotizar una Tienda Online.") },
        className: "lg:col-span-4 lg:rounded-bl-4xl",
        sizes: "(min-width: 1024px) 860px, 100vw",
    },
    {
        titulo: "Explora una tienda en funcionamiento",
        descripcion:
            "Recorre el catálogo, elige productos y llega hasta el checkout. Así se ve un e-commerce desarrollado por NativeCode.",
        imagen: unsplash("1607082348824-0a96f2a4b9da"),
        alt: "Bolsas de compras sobre fondo oscuro",
        enlace: { texto: "Ver la demo", href: ECOMMERCE_DEMO_URL },
        className: "lg:col-span-2 lg:rounded-br-4xl max-lg:rounded-b-4xl",
        sizes: "(min-width: 1024px) 420px, 100vw",
    },
];

function BentoCard({ titulo, descripcion, imagen, alt, galeria, enlace, className, imagenClassName, sizes }) {
    return (
        <div
            className={clsx(
                className,
                "group relative flex flex-col overflow-hidden rounded-lg bg-black ring-1 ring-white/10",
                "[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
            )}
        >
            {galeria ? (
                <div className="px-6 pt-6 sm:px-10 sm:pt-10">
                    <CarruselTienda imagenes={galeria} />
                </div>
            ) : (
                <>
                    <div className="absolute inset-0 overflow-hidden">
                        <Image
                            src={imagen}
                            alt={alt}
                            fill
                            sizes={sizes}
                            quality={90}
                            className={clsx(
                                "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
                                imagenClassName
                            )}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#000_0%,rgba(0,0,0,0.88)_32%,rgba(0,0,0,0.35)_58%,transparent_78%)]" />
                    </div>

                    <div aria-hidden="true" className="h-[15rem] shrink-0 sm:h-[19rem]" />
                </>
            )}

            <div className={clsx("relative z-20 flex flex-1 flex-col p-8 text-white sm:p-10", galeria ? "pt-6 sm:pt-6" : "min-h-[14rem]")}>
                <h3 className="relative font-sans text-2xl/8 font-normal tracking-tight text-white">
                    {titulo}
                </h3>
                <p className="relative mt-3 max-w-[600px] text-sm/6 text-gray-300">
                    {descripcion}
                </p>
                <a
                    href={enlace.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-auto self-start pt-6 text-sm font-medium text-white underline decoration-white/30 underline-offset-8 transition-colors hover:decoration-white"
                >
                    {enlace.texto}
                </a>
            </div>
        </div>
    );
}

export default function ServiciosDigitalesSection() {
    return (
        <section
            id="servicios-digitales"
            className="relative scroll-mt-24 overflow-hidden border-b border-white/10 bg-black"
        >
            <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
                <h2 className="font-sans text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                    Servicios digitales a medida
                </h2>
                <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-zinc-300 sm:text-[1.0625rem]">
                    Sitios y tiendas online de calidad premium, desarrollados a la medida de tu negocio.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
                    {servicios.map((servicio) => (
                        <BentoCard key={servicio.titulo} {...servicio} />
                    ))}
                </div>
            </div>
        </section>
    );
}
