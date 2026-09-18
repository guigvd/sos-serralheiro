'use client'

import { linhas, perfis_por_linha } from '@/data/perfis'
import type { Linha, Perfil } from '@/types'

type Props = {
  linha: Linha
  perfil: Perfil | null
  onLinhaChange: (linha: Linha) => void
  onPerfilChange: (perfil: Perfil) => void
}

export default function SeletorPerfil({ linha, perfil, onLinhaChange, onPerfilChange }: Props) {
  const perfis = perfis_por_linha[linha] ?? []

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-sm font-medium text-[#f5f5f5]">Linha</p>
        <div className="flex flex-wrap gap-2">
          {linhas.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onLinhaChange(item)}
              className={`rounded-lg border px-4 py-1.5 text-sm font-medium transition ${
                linha === item
                  ? 'border-[#f97316] bg-[#f97316] text-white'
                  : 'border-[#2a2a2a] text-[#6b7280] hover:border-[#f97316] hover:text-[#f97316]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="perfil" className="mb-1.5 block text-sm font-medium text-[#f5f5f5]">
          Perfil
        </label>
        <select
          id="perfil"
          value={perfil?.cod ?? ''}
          onChange={(e) => {
            const selecionado = perfis.find((p) => p.cod === e.target.value)
            if (selecionado) onPerfilChange(selecionado)
          }}
          className="w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2.5 text-sm text-[#f5f5f5] focus:border-[#f97316] focus:outline-none"
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