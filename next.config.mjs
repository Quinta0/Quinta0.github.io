/** @type {import('next').NextConfig} */
export default {
    output: 'export',
    // Remove exportPathMap if it's present
    images: {
        unoptimized: true,
    }
};
