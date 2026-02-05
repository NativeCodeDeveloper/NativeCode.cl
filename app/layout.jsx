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
        default: 'NativeCode | Páginas web y desarrollo a medida',
        template: '%s | NativeCode',
    },
    description: 'Agencia NativeCode: páginas web profesionales, sitios dinámicos con agendamiento y aplicaciones web a medida. SEO técnico, rendimiento y despliegue en Chile.',
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
        'compliance',
        'seguridad',
        'landing page',
        'diseño web',
        'desarrollo web',
        'desarrollo a medida',
        'ecommerce',
        'Next.js',
        'Node.js',
        'SEO',
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
        icon: '/logos/logo-native-new.png',
        shortcut: '/logos/logo-native-new.png',
        apple: '/logos/logo-native-new.png',
    },
    openGraph: {
        type: 'website',
        locale: 'es_CL',
        siteName: 'NativeCode',
        title: 'NativeCode | Páginas web y desarrollo a medida',
        description: 'Agencia NativeCode: páginas web profesionales, sitios dinámicos con agendamiento y aplicaciones web a medida.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NativeCode | Páginas web y desarrollo a medida',
        description: 'Agencia NativeCode: páginas web profesionales, sitios dinámicos con agendamiento y aplicaciones web a medida.',
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
