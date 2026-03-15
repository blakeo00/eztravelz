import { MetadataRoute } from 'next';
import { posts } from '@/data/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://eztravelz.com';

    // Base routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/privacy-policy',
        '/terms-of-service'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // Niche routes
    const niches = [
        "/pet-travel", 
        "/haunted-tours", 
        "/wine-destinations", 
        "/sports-travel", 
        "/cinematic-travel", 
        "/culinary-quests"
    ];
    
    const nicheRoutes = niches.map((niche) => ({
        url: `${baseUrl}${niche}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Blog posts
    const postRoutes = (posts || []).map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...nicheRoutes, ...postRoutes];
}
