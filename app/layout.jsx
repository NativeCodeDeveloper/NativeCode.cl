import { Geist, Geist_Mono, Michroma } from 'next/font/google';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

// ==========================
// SEO Metadata (App Router)
// ==========================

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nativecode.cl';

export const metadata = {
    metadataBase: new URL(siteUrl),
    applicationName: 'NativeCode',
    title: {
        default: 'NativeCode | Software para Sistemas de Salud',
        template: '%s | NativeCode',
    },
    description: 'Diseñamos y construimos la infraestructura de software que hace funcionar a clínicas y centros de salud: agendamiento, fichas clínicas, cobros y automatización de procesos, con estándares de ingeniería internacionales.',
    keywords: [
        'software para clínicas',
        'sistemas de salud digital',
        'automatización clínica',
        'ficha clínica digital',
        'agendamiento médico',
        'software para centros médicos',
        'NativeCode',
        'páginas web',
        'paginas web',
        'crear página web',
        'sitios web profesionales',
        'automatización de procesos',
        'fichas clínicas',
        'aplicaciones web',
        'desarrollo de software',
        'agendamiento',
        'clínicas',
        'software a medida',
        'ecommerce',
        'e - commerce',
        'landing page',
        'diseño web',
        'desarrollo web',
        'desarrollo a medida',
        'automatizacion',
        'wordpress',
        'shopify',
        'agencia web',
        'Valdivia',
        'Santiago de Chile',
        'Concepción',
        'Temuco',
        'Puerto Montt',
        'Rancagua',
        'Chillán',
        'Antofagasta',
        'Chile'
    ],
    authors: [{ name: 'NativeCode', url: siteUrl }],
    creator: 'NativeCode',
    publisher: 'NativeCode',
    alternates: {
        canonical: '/',
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
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/logos/ico2.png',
    },
    openGraph: {
        type: 'website',
        locale: 'es_CL',
        url: '/',
        siteName: 'NativeCode',
        title: 'NativeCode | Software para Sistemas de Salud',
        description: 'Diseñamos y construimos la infraestructura de software que hace funcionar a clínicas y centros de salud: agendamiento, fichas clínicas, cobros y automatización de procesos, con estándares de ingeniería internacionales.',
        images: [
            {
                url: '/logos/logo-native-new.png',
                width: 1024,
                height: 1024,
                alt: 'NativeCode — Ingeniería de Software para Sistemas de Salud',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NativeCode | Software para Sistemas de Salud',
        description: 'Diseñamos y construimos la infraestructura de software que hace funcionar a clínicas y centros de salud: agendamiento, fichas clínicas, cobros y automatización de procesos, con estándares de ingeniería internacionales.',
        images: ['/logos/logo-native-new.png'],
    },
};

export const viewport = {
    themeColor: '#000000',
};

const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NativeCode',
    alternateName: 'NativeCode.cl',
    url: siteUrl,
    logo: `${siteUrl}/logos/logo-native-new.png`,
    description: 'Empresa de ingeniería de software especializada en la automatización de sistemas de salud: agendamiento clínico, fichas médicas digitales y cobros para clínicas y centros de salud.',
    email: 'ingenieria.software@nativecode.cl',
    telephone: '+56932912943',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santiago',
        addressCountry: 'CL',
    },
    areaServed: 'CL',
    knowsAbout: [
        'Software para clínicas',
        'Automatización de sistemas de salud',
        'Agendamiento médico',
        'Fichas clínicas digitales',
        'Arquitectura de software',
        'Infraestructura cloud',
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

const michroma = Michroma({
    variable: '--font-michroma',
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
        <html lang="es" className="dark scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} ${sawah.variable} antialiased bg-black text-white selection:bg-white selection:text-black`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
