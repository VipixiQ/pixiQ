import type { Metadata, Viewport } from 'next'
import { Inter, Sen } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

// Body font - Inter
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

// Heading font - Sen (Google Font)
const sen = Sen({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sen',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'pixiQ | Visual Impact. Measurable Results.',
    template: '%s | pixiQ',
  },
  description: 'pixiQ connects hardware, software, content and data into one measurable digital experience. Digital signage, AV integration, content intelligence and strategic consultancy.',
  keywords: ['digital signage', 'AV integration', 'digital experience', 'content intelligence', 'data-driven', 'B2B solutions'],
  authors: [{ name: 'pixiQ' }],
  creator: 'pixiQ',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'pixiQ',
    title: 'pixiQ | Visual Impact. Measurable Results.',
    description: 'We connect hardware, software, content and data into one measurable digital experience.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'pixiQ | Visual Impact. Measurable Results.',
    description: 'We connect hardware, software, content and data into one measurable digital experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#2c4d98',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sen.variable}`}>
      <body className={`${inter.variable} ${sen.variable} font-sans bg-white text-[#000000] antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
