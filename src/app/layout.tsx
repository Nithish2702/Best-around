import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bestaround.in'),
  title: 'BestAround - Reviews and Recommendations',
  description: 'Find the best dishes around you, rated by real foodies. Discover, review, and share authentic food experiences with BestAround.',
  keywords: 'restaurants, food delivery, local food, dining, cafes, food recommendations, cuisine, takeout, food near me',
  authors: [{ name: 'Best Around Team' }],
  icons: {
    icon: '/BestAround - Primary Icon.png',
    shortcut: '/BestAround - Primary Icon.png',
    apple: '/BestAround - Primary Icon.png',
  },
  openGraph: {
    title: 'BestAround - Reviews and Recommendations',
    description: 'Find the best dishes around you, rated by real foodies. Discover, review, and share authentic food experiences with BestAround.',
    type: 'website',
    url: 'https://www.bestaround.in',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
