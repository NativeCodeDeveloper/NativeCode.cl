export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nativecode.cl';

    const routes = [
        { path: '', changeFrequency: 'weekly', priority: 1 },
        { path: '/servicios', changeFrequency: 'monthly', priority: 0.9 },
        { path: '/proyectos', changeFrequency: 'monthly', priority: 0.8 },
        { path: '/sobre-nosotros', changeFrequency: 'monthly', priority: 0.7 },
        { path: '/politicas', changeFrequency: 'yearly', priority: 0.3 },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
