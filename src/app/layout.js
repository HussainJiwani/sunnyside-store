import { Inter } from 'next/font/google'
import './globals.css'

import Head from 'next/head'

// Load Product Sans
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sunnyside Country Store',
  description: 'Your neighborhood convenience store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Add Product Sans from Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Product+Sans&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
