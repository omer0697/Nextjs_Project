import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ankara Jeneratör',
  description: "Ankara Jeneratör, çeşitli sektörlere güvenilir güç çözümleri sunan lider bir jeneratör firmasıdır. Kaliteli jeneratörlerimiz ve üstün hizmet anlayışımızla işletmelere ve bireylere kesintisiz enerji tedariği sağlıyoruz. Tüm jeneratör ihtiyaçlarınız için bugün bizimle iletişime geçin."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className=''>
        <div className='border-b-2 border-zinc-400 bg-black'>
          <Navbar/>
        </div>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
