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

export default function FormularioItem({
  perfil,
  cor,
  tipo,
  qtd,
  onCorChange,
  onTipoChange,
  onQtdChange,
  onAdicionar,
}: Props) {
  const precoAtual = precos[cor][tipo]

  return (
    <div className="space-y-4">

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div>
          <label htmlFor="cor" className="mb-1.5 block text-sm font-medium text-gray-700">
            Cor
          </label>
          <select
            id="cor"
            value={cor}
            onChange={(e) => onCorChange(e.target.value as Cor)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {cores.map((c) => (
              <option key={c} value={c}>{nomesCores[c]}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tipo" className="mb-1.5 block text-sm font-medium text-gray-700">
            Tipo
          </label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => onTipoChange(e.target.value as TipoCompra)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {tipos.map((t) => (
              <option key={t} value={t}>{nomesTipos[t]}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quantidade" className="mb-1.5 block text-sm font-medium text-gray-700">
            Quantidade
          </label>
          <input
            id="quantidade"
            type="number"
            min={1}
            value={qtd}
            onChange={(e) => onQtdChange(Math.max(1, Number(e.target.value)))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-end">
          <button
            type="button"
            disabled={!perfil}
            onClick={onAdicionar}
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            + Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}