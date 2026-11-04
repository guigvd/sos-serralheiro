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
        <p className="mb-2 text-sm font-medium text-text-primary">Linha</p>
        <div className="flex flex-wrap gap-2">
          {linhas.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onLinhaChange(item)}
              className={`rounded-lg border px-4 py-1.5 text-sm font-medium transition ${
                linha === item
                  ? 'border-accent bg-accent text-white'
                  : 'border-border text-text-secondary hover:border-accent hover:text-accent'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="perfil" className="mb-1.5 block text-sm font-medium text-text-primary">
          Perfil
        </label>
        <select
          id="perfil"
          value={perfil?.cod ?? ''}
          onChange={(e) => {
            const selecionado = perfis.find((p) => p.cod === e.target.value)
            if (selecionado) onPerfilChange(selecionado)
          }}
          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text-primary focus:border-accent focus:outline-none"
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