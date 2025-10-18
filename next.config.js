/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pinimg.com', // <-- Domain tempat gambar berasal
                port: '',
                pathname: '/**', // <-- Izinkan semua path di domain itu
            }
            // ...Anda bisa tambahkan domain lain di sini
            // {
            //   protocol: 'https',
            //   hostname: 'cdn.example.com',
            //   port: '',
            //   pathname: '/**',
            // },
        ],
    },
}

module.exports = nextConfig
