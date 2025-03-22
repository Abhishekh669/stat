import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/nav-bar/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Writefully Yours',
  description: 'A next generation stationary',
  icons: {
    icon: 'favicon.ico', // or '/images/app-icon.png'
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
        <nav className="sticky top-0 z-50">
          <NavBar />
        </nav>
        {children}
      </body>
    </html>
  )
}