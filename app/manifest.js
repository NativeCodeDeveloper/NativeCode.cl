export default function manifest() {
    return {
        name: 'NativeCode',
        short_name: 'NativeCode',
        description:
            'Sitios web a medida, webs corporativas y tiendas online, junto a software para clínicas y laboratorios: Agenda Clínica y LeveyQC. Calidad premium en Chile.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        lang: 'es-CL',
        icons: [
            { src: '/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
            { src: '/brand/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
    };
}
