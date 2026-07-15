export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nativecode.cl';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
