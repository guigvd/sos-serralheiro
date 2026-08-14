import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}