import { Inter } from 'next/font/google'
import { Julee } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const julee = Julee({ subsets: ['latin'], weight: ["400"]});

export const metadata = {
  title: 'Words of Westeros',
  description: 'Get a random quote from a random character house from Game of Thrones',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={julee.className}>{children}</body>
    </html>
  )
}
