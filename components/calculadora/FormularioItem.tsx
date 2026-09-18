'use client'

import { nomesCores, nomesTipos, precos } from '@/data/precos'
import type { Cor, Perfil, TipoCompra } from '@/types'

type Props = {
  perfil: Perfil | null
  cor: Cor
  tipo: TipoCompra
  qtd: number
  onCorChange: (cor: Cor) => void
  onTipoChange: (tipo: TipoCompra) => void
  onQtdChange: (qtd: number) => void
  onAdicionar: () => void
}

const cores: Cor[] = ['brilho', 'branco', 'preto', 'amadeirado']
const tipos: TipoCompra[] = ['barra', 'pedaco']

export default function FormularioItem({ perfil, cor, tipo, qtd, onCorChange, onTipoChange, onQtdChange, onAdicionar }: Props) {
  const precoAtual = precos[cor][tipo]

  return (
    <div className="space-y-4">
      {perfil && (
        <div className="rounded-lg border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-3 text-sm">
          <span className="font-semibold text-[#f97316]">{perfil.cod}</span>
          <span className="ml-2 text-[#f5f5f5]">{perfil.peso.toFixed(3)} kg/m</span>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div>
          <label htmlFor="cor" className="mb-1.5 block text-sm font-medium text-[#f5f5f5]">
            Cor
          </label>
          <select
            id="cor"
            value={cor}
            onChange={(e) => onCorChange(e.target.value as Cor)}
            className="w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2 text-sm text-[#f5f5f5] focus:border-[#f97316] focus:outline-none"
          >
            {cores.map((c) => (
              <option key={c} value={c}>{nomesCores[c]}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tipo" className="mb-1.5 block text-sm font-medium text-[#f5f5f5]">
            Tipo
          </label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => onTipoChange(e.target.value as TipoCompra)}
            className="w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2 text-sm text-[#f5f5f5] focus:border-[#f97316] focus:outline-none"
          >
            {tipos.map((t) => (
              <option key={t} value={t}>{nomesTipos[t]}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quantidade" className="mb-1.5 block text-sm font-medium text-[#f5f5f5]">
            Quantidade
          </label>
          <input
            id="quantidade"
            type="number"
            min={1}
            value={qtd}
            onChange={(e) => onQtdChange(Math.max(1, Number(e.target.value)))}
            className="w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2 text-sm text-[#f5f5f5] focus:border-[#f97316] focus:outline-none"
          />
        </div>

        <div className="flex items-end">
          <button
            type="button"
            disabled={!perfil}
            onClick={onAdicionar}
            className="w-full rounded-lg bg-[#f97316] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#ea6c0a] disabled:cursor-not-allowed disabled:opacity-40"
          >
            + Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}