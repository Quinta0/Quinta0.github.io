/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other Next.js configuration options
    output: 'export',
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            // Add other pages here if needed
        };
    },
}

export default nextConfig;
