import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
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
  metadataBase: new URL('https://artigianale-events.ro'),
  title: 'ARTIGIANALE — Pizza Artizanală la Evenimentul Tău',
  description: 'Horsebox pizza truck cu cuptor cu flacără lungă. Aluat dospit lent, ingrediente selecționate, pizza coaptă pe loc. Catering pentru nunți, corporate și evenimente private în toată România.',
  keywords: ['pizza catering', 'pizza truck', 'horsebox pizza', 'catering nunta', 'pizza artizanala', 'eveniment catering', 'Romania'],
  openGraph: {
    title: 'ARTIGIANALE — Pizza Artizanală la Evenimentul Tău',
    description: 'Horsebox pizza truck cu cuptor cu flacără lungă. Aluat dospit lent, pizza coaptă pe loc la evenimentul tău.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'ARTIGIANALE',
    images: [
      {
        url: '/images/gozney-oven-flames.jpeg',
        width: 1200,
        height: 630,
        alt: 'ARTIGIANALE - Pizza artizanală coaptă în cuptor cu flacără lungă',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARTIGIANALE — Pizza Artizanală la Evenimentul Tău',
    description: 'Horsebox pizza truck cu cuptor cu flacără lungă. Pizza napoletană coaptă pe loc la evenimentul tău.',
    images: ['/images/gozney-oven-flames.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'ARTIGIANALE',
  description: 'Horsebox pizza truck cu cuptor cu flacără lungă. Catering pizza napoletană pentru nunți, corporate și evenimente private.',
  url: 'https://artigianale-events.ro',
  telephone: '+40732116589',
  email: 'lucivatamanu@gmail.com',
  image: 'https://artigianale-events.ro/images/gozney-oven-flames.jpeg',
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
  sameAs: [
    'https://instagram.com/vatamanuluci',
    'https://instagram.com/artigianale.events',
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
      </body>
    </html>
  )
}
