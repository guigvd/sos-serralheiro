import type { Metadata } from 'next'
import './globals.css'
import Menu from '@/components/ui/Menu'

export const metadata: Metadata = {
  title: 'Serratech',
  description: 'Ferramentas para serralheiros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50">
        <Menu />
        <main className="mx-auto max-w-4xl px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}