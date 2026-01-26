import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HMF Desen Yapı - Doğal Taş & Dekoratif Kaplamalar',
    short_name: 'HMF Desen Yapı',
    description: '1998\'den beri İzmir ve Türkiye genelinde kaliteli doğal taş uygulamaları, dekoratif kaplamalar ve peyzaj çözümleri.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
