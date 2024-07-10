'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SideNavbar } from './sidebar'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang='en'>
      <body className={`${inter.className} flex`}>
        <div className='w-1/3'>
          <SideNavbar currentPath={pathname} />
        </div>
        <main className='w-2/3'>{children}</main>
      </body>
    </html>
  )
}
