'use client'

import { useState } from 'react'
import Link from 'next/link'

type Linha = 'Linha Suprema' | 'Linha Gold'

const planos: Record<Linha, { href: string; titulo: string; descricao: string }[]> = {
  'Linha Suprema': [
    {
      href: '/plano-de-corte/suprema/janela-2-folhas',
      titulo: 'Janela 2 Folhas',
      descricao: 'Janela de correr com 2 folhas.',
    },
  ],
  'Linha Gold': [
    {
      href: '/plano-de-corte/gold/janela-2-folhas',
      titulo: 'Janela 2 Folhas',
      descricao: 'Janela de correr com 2 folhas.',
    },
  ],
}

const linhas = Object.keys(planos) as Linha[]

export default function PaginaPlanoDeCorte() {
  const [linhaAtiva, setLinhaAtiva] = useState<Linha>('Linha Suprema')

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-semibold text-[#f5f5f5]">Plano de Corte</h1>
        <p className="mt-1 text-sm text-[#6b7280]">
          Selecione a linha e a tipologia para gerar o plano de corte.
        </p>
      </div>

      {/* Abas por linha */}
      <div className="flex flex-wrap gap-2">
        {linhas.map((linha) => (
          <button
            key={linha}
            type="button"
            onClick={() => setLinhaAtiva(linha)}
            className={`rounded-lg border px-4 py-1.5 text-sm font-medium transition ${
              linhaAtiva === linha
                ? 'border-[#f97316] bg-[#f97316] text-white'
                : 'border-[#2a2a2a] text-[#6b7280] hover:border-[#f97316] hover:text-[#f97316]'
            }`}
          >
            {linha}
          </button>
        ))}
      </div>

      {/* Cards dos planos */}
      <div className="grid gap-3 sm:grid-cols-2">
        {planos[linhaAtiva].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] p-5 transition-colors hover:border-[#f97316]"
          >
            <h3 className="font-medium text-[#f5f5f5] group-hover:text-[#f97316] transition-colors">
              {item.titulo}
            </h3>
            <p className="mt-1 text-sm text-[#6b7280]">{item.descricao}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}