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
      <body className={poppins.className + ' h-screen'}>
        <div className='bg-gray-100 min-h-full'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
