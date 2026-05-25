import type { Metadata } from 'next'
import { Cairo, Amiri } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: '--font-cairo',
  weight: ['300', '400', '600', '700']
});

const amiri = Amiri({ 
  subsets: ["arabic", "latin"],
  variable: '--font-amiri',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'دعوة زفاف محمد ومريم',
  description: 'نتشرف بدعوتكم لحضور حفل زفافنا',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${amiri.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
