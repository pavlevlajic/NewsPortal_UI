/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        typedRoutes: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pavlevlajic.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "img.youtube.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "vumbnail.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
}

module.exports = nextConfig
