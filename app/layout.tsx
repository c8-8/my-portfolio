import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s - ACME',
    default: 'ACME',
  },
  description: 'A playground to explore new Next.js app router features.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [
    {
      name: 'Acme',
      url: 'https://acme.com',
    },
  ],
  creator: 'Acme',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('antialiased', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
