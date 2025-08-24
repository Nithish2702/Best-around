import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Best Around - Find the best around you',
  description: 'Find the best restaurants, cafes, food trucks, and local eateries in your area. Get personalized food recommendations based on your location, taste preferences, and dietary needs.',
  keywords: 'restaurants, food delivery, local food, dining, cafes, food recommendations, cuisine, takeout, food near me',
  authors: [{ name: 'Best Around Team' }],
  icons: {
    icon: '/BestAround - Primary Icon.png',
    shortcut: '/BestAround - Primary Icon.png',
    apple: '/BestAround - Primary Icon.png',
  },
  openGraph: {
    title: 'Best Around - Find the best around you',
    description: 'Find the best restaurants, cafes, and local eateries in your area with personalized food recommendations.',
    type: 'website',
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
