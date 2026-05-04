import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://artigianale.ro'),
  title: 'ARTIGIANALE — Pizza Artizanală la Evenimentul Tău',
  description: 'Horsebox pizza truck cu cuptor cu flacără lungă. Aluat dospit 72h, ingrediente selecționate, pizza coaptă pe loc. Catering pentru nunți, corporate și evenimente private în toată România.',
  keywords: ['pizza catering', 'pizza truck', 'horsebox pizza', 'catering nunta', 'pizza artizanala', 'eveniment catering', 'Romania'],
  openGraph: {
    title: 'ARTIGIANALE — Pizza Artizanală la Evenimentul Tău',
    description: 'Horsebox pizza truck cu cuptor cu flacără lungă. Aluat dospit 72h, pizza coaptă pe loc la evenimentul tău.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'ARTIGIANALE',
    images: [
      {
        url: '/images/pizza-oven-event.png',
        width: 1200,
        height: 630,
        alt: 'ARTIGIANALE - Live Pizza Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARTIGIANALE — Pizza Artizanală la Evenimentul Tău',
    description: 'Horsebox pizza truck cu cuptor cu flacără lungă. Pizza napoletană coaptă pe loc la evenimentul tău.',
    images: ['/images/pizza-oven-event.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'ARTIGIANALE',
  description: 'Horsebox pizza truck cu cuptor cu flacără lungă. Catering pizza napoletană pentru nunți, corporate și evenimente private.',
  url: 'https://artigianale.ro',
  telephone: '+40732116589',
  email: 'lucivatamanu@gmail.com',
  image: 'https://artigianale.ro/images/pizza-oven-event.png',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RO',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Romania',
  },
  priceRange: '€€',
  servesCuisine: 'Pizza Napoletană',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '100',
    bestRating: '5',
  },
  sameAs: [
    'https://instagram.com/vatamanuluci',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
