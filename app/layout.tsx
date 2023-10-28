import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const poppins = Poppins({ weight: ['100', '300', '400', '700'], subsets: ['latin'] })

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
      <body className={poppins.className + ' h-screen box-border'}>
        <div className='bg-gray-200 min-h-full relative'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
