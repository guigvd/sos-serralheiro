'use client'

import { linhas, perfis_por_linha } from '@/data/perfis'
import type { Linha, Perfil } from '@/types'

type Props = {
  linha: Linha
  perfil: Perfil | null
  onLinhaChange: (linha: Linha) => void
  onPerfilChange: (perfil: Perfil) => void
}

export default function SeletorPerfil({
  linha,
  perfil,
  onLinhaChange,
  onPerfilChange,
}: Props) {
  const perfis = perfis_por_linha[linha] ?? []

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Linha</p>
        <div className="flex flex-wrap gap-2">
          {linhas.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onLinhaChange(item)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                linha === item
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="perfil"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Perfil
        </label>
        <select
          id="perfil"
          value={perfil?.cod ?? ''}
          onChange={(e) => {
            const selecionado = perfis.find((p) => p.cod === e.target.value)
            if (selecionado) onPerfilChange(selecionado)
          }}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Selecione um perfil...</option>
          {perfis.map((p) => (
            <option key={p.cod} value={p.cod}>
              {p.cod} — {p.peso.toFixed(3)} kg/m
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}