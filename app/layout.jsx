import { Geist, Geist_Mono, Archivo, Michroma } from 'next/font/google';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

// ==========================
// SEO Metadata (App Router)
// ==========================

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nativecode.cl';

const siteTitle = 'NativeCode | Desarrollo Web, Tiendas Online y Software de Salud';
const siteDescription =
    'Sitios web a medida, webs corporativas y tiendas online, junto a software para clínicas y laboratorios: Agenda Clínica y LeveyQC. Calidad premium en Chile.';

export const metadata = {
    metadataBase: new URL(siteUrl),
    applicationName: 'NativeCode',
    title: {
        default: siteTitle,
        template: '%s | NativeCode',
    },
    description: siteDescription,
    keywords: [
        'NativeCode',
        'desarrollo web',
        'diseño web',
        'páginas web',
        'paginas web',
        'crear página web',
        'sitio web a medida',
        'sitios web profesionales',
        'web corporativa',
        'página web para empresas',
        'tienda online',
        'ecommerce',
        'e-commerce',
        'crear tienda online',
        'landing page',
        'agencia de desarrollo web',
        'desarrollo de software',
        'software a medida',
        'aplicaciones web',
        'software para clínicas',
        'agendamiento médico',
        'ficha clínica digital',
        'software de salud',
        'software para centros médicos',
        'software para laboratorio clínico',
        'reglas de Westgard',
        'gráficos Levey-Jennings',
        'control de calidad laboratorio',
        'Agenda Clínica',
        'LeveyQC',
        'Chile',
        'Santiago de Chile',
        'Valdivia',
        'Concepción',
        'Temuco',
        'Puerto Montt',
        'Rancagua',
        'Chillán',
        'Antofagasta',
    ],
    authors: [{ name: 'NativeCode', url: siteUrl }],
    creator: 'NativeCode',
    publisher: 'NativeCode',
    category: 'technology',
    alternates: {
        canonical: '/',
    },
    formatDetection: {
        telephone: false,
        email: false,
        address: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    appleWebApp: {
        title: 'NativeCode',
        statusBarStyle: 'black-translucent',
    },
    openGraph: {
        type: 'website',
        locale: 'es_CL',
        url: '/',
        siteName: 'NativeCode',
        title: siteTitle,
        description: siteDescription,
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
    },
};

export const viewport = {
    themeColor: '#000000',
    colorScheme: 'dark',
};

const servicio = (name, description) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name, description, provider: { '@id': `${siteUrl}/#organization` } },
});

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': ['Organization', 'ProfessionalService'],
            '@id': `${siteUrl}/#organization`,
            name: 'NativeCode',
            alternateName: ['NativeCode.cl', 'NativeCode SpA'],
            url: siteUrl,
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/brand/icon-512.png`,
                width: 512,
                height: 512,
            },
            image: `${siteUrl}/opengraph-image`,
            description: siteDescription,
            email: 'ingenieria.software@nativecode.cl',
            telephone: '+56932912943',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Santiago',
                addressRegion: 'Región Metropolitana',
                addressCountry: 'CL',
            },
            areaServed: { '@type': 'Country', name: 'Chile' },
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                telephone: '+56932912943',
                email: 'ingenieria.software@nativecode.cl',
                areaServed: 'CL',
                availableLanguage: ['Spanish'],
            },
            knowsAbout: [
                'Desarrollo web a medida',
                'Diseño web',
                'Comercio electrónico',
                'Desarrollo de software',
                'Software para clínicas',
                'Agendamiento médico',
                'Control de calidad de laboratorio clínico',
            ],
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Servicios de NativeCode',
                itemListElement: [
                    servicio('Web a Medida', 'Diseño y desarrollo de sitios web exclusivos, sin plantillas.'),
                    servicio('Web Corporativa', 'Sitios corporativos sólidos y preparados para crecer.'),
                    servicio('Tienda Online', 'E-commerce con catálogo, variantes, ofertas, carrito y checkout.'),
                    servicio('Agenda Clínica', 'Plataforma de gestión clínica y agendamiento para centros de salud.'),
                    servicio('LeveyQC', 'Control de calidad interno para laboratorios clínicos.'),
                ],
            },
        },
        {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'NativeCode',
            description: siteDescription,
            inLanguage: 'es-CL',
            publisher: { '@id': `${siteUrl}/#organization` },
        },
    ],
};

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const archivo = Archivo({
    variable: '--font-archivo',
    subsets: ['latin'],
    weight: ['500', '600', '700', '800'],
});

const michroma = Michroma({
    variable: '--font-michroma-solo',
    subsets: ['latin'],
    weight: '400',
});

const sawah = localFont({
    src: '../public/fonts/Sawah.ttf',
    variable: '--font-sawah',
    display: 'swap',
});

export default function RootLayout({
    children,
}) {
    return (
        <html lang="es-CL" className="dark scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${michroma.variable} ${sawah.variable} antialiased bg-black text-white selection:bg-white selection:text-black`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
