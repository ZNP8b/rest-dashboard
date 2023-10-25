import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const roboto = Roboto({ weight: ['100', '300', '400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Restaurant dashboard',
  description: 'Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className='bg-gray-100 h-[100dvh]'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
