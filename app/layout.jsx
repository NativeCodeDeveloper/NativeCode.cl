import { Geist, Geist_Mono, Archivo, Michroma } from 'next/font/google';
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
        default: 'NativeCode | Desarrollo de Software a Medida',
        template: '%s | NativeCode',
    },
    description: 'Desarrollo de software a medida: e-commerce de alto rendimiento, landing pages, portales, plataformas de salud e integraciones SII, WhatsApp, Gmail, pagos y HL7. Conoce Agenda Clínica y LeveyQC, nuestras soluciones por suscripción.',
    keywords: [
        'e-commerce de alto rendimiento',
        'landing pages para captar prospectos',
        'integraciones SII',
        'interoperabilidad HL7',
        'portales a medida',
        'Agenda Clínica',
        'LeveyQC',
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
        icon: [
            { url: '/favicon.ico', sizes: '48x48' },
            { url: '/logos/nativecode-icon-512.png', type: 'image/png', sizes: '512x512' },
        ],
        shortcut: '/logos/nativecode-icon-512.png',
        apple: '/logos/nativecode-icon-512.png',
    },
    openGraph: {
        type: 'website',
        locale: 'es_CL',
        url: '/',
        siteName: 'NativeCode',
        title: 'NativeCode | Desarrollo de Software a Medida',
        description: 'E-commerce de alto rendimiento, landing pages, plataformas web e integraciones. Software a medida y soluciones por suscripción: Agenda Clínica y LeveyQC.',
        images: [
            {
                url: '/logos/logo-native-new.png',
                width: 1024,
                height: 1024,
                alt: 'NativeCode — Desarrollo de Software a Medida',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NativeCode | Desarrollo de Software a Medida',
        description: 'E-commerce de alto rendimiento, landing pages, plataformas web e integraciones. Software a medida y soluciones por suscripción: Agenda Clínica y LeveyQC.',
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
    logo: `${siteUrl}/logos/nativecode-icon-512.png`,
    description: 'Empresa de desarrollo de software a medida: e-commerce de alto rendimiento, landing pages, portales, plataformas para salud e integraciones. Creadora de Agenda Clínica y LeveyQC, soluciones especializadas por suscripción.',
    email: 'ingenieria.software@nativecode.cl',
    telephone: '+56932912943',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santiago',
        addressCountry: 'CL',
    },
    areaServed: 'CL',
    knowsAbout: [
        'Desarrollo de software a medida',
        'E-commerce de alto rendimiento',
        'Landing pages y captación de prospectos',
        'Portales y plataformas web',
        'Integraciones con SII, WhatsApp, Gmail y pasarelas de pago',
        'Interoperabilidad HL7',
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
        <html lang="es" className="dark scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${michroma.variable} ${sawah.variable} antialiased bg-black text-white selection:bg-white selection:text-black`}
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
