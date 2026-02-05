import { Geist, Geist_Mono, Michroma } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

// ==========================
// SEO Metadata (App Router)
// ==========================

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    applicationName: 'NativeCode',
    title: {
        default: 'NativeCode | Desarrollo de Software',
        template: '%s | NativeCode',
    },
    description: 'Agencia de Desarrollo de Software: Automatización de empresas, páginas web profesionales y aplicaciones web a medida.',
    keywords: [
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
        'ecommerce',
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
    icons: {
        icon: '/logos/nativecodeicon.png',
        shortcut: '/logos/nativecodeicon.png.png',
        apple: '/logos/nativecodeicon.png',
    },
    openGraph: {
        type: 'website',
        locale: 'es_CL',
        siteName: 'NativeCode',
        title: 'NativeCode | Agencia de Desarrollo de Software',
        description: 'Agencia de Desarrollo de Software: Automatización de empresas, páginas web profesionales y aplicaciones web a medida.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NativeCode | Agencia de Desarrollo de Software',
        description: 'Agencia de Desarrollo de Software: Automatización de empresas, páginas web profesionales y aplicaciones web a medida.',
    },
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

export default function RootLayout({
    children,
}) {
    return (
        <html lang="es" className="dark scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} antialiased bg-black text-white selection:bg-white selection:text-black`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
