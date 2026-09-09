import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Menu from '@/components/ui/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Serratech',
  description: 'Ferramentas para serralheiros de vidro e alumínio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#0f0f0f] text-[#f5f5f5]`}>
        <Menu />
        {/* Empurra o conteúdo para direita no desktop, e deixa espaço em baixo no mobile */}
        <div className="md:ml-56">
          <main className="min-h-screen p-4 pb-24 md:p-8 md:pb-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}