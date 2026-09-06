'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
    { href: '/', label: 'Home' },
    { href: '/calculadora', label: 'Calculadora' },
    { href: '/plano-de-corte', label: 'Plano de Corte' },
]

export default function Menu() {
    const pathname = usePathname()
    const [aberto, setAberto] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
            <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-gray-900">
                    Serratech
                </Link>

                {/* Menu desktop */}
                <nav className="hidden gap-1 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${pathname === link.href
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Botão hamburguer mobile */}
                <button
                    className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
                    onClick={() => setAberto(!aberto)}
                    aria-label="Menu"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {aberto ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu mobile expandido */}
            {aberto && (
                <nav className="border-t bg-white px-4 py-2 md:hidden">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setAberto(false)}
                            className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${pathname === link.href
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    )
}