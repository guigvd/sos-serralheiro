'use client'

import { calcularItem, formatarMoeda, formatarPeso } from '@/lib/calculos'
import { nomesCores, nomesTipos } from '@/data/precos'
import type { ItemLista } from '@/types'

type Props = {
  lista: ItemLista[]
  onRemover: (id: string) => void
}

export default function ListaItens({ lista, onRemover }: Props) {
  if (lista.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-[#2a2a2a] p-10 text-center text-sm text-[#6b7280]">
        Nenhum material adicionado ainda.
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg border border-[#2a2a2a]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-[#2a2a2a] bg-[#1c1c1c]">
              <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280]">Perfil</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280]">Cor</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280]">Tipo</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-[#6b7280]">Qtd</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-[#6b7280]">Metros</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-[#6b7280]">Peso</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-[#6b7280]">Custo</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2a2a2a] bg-[#1c1c1c]">
            {lista.map((item) => {
              const { metros, peso, custo } = calcularItem(item)
              return (
                <tr key={item.id} className="transition-colors hover:bg-[#2a2a2a]">
                  <td className="px-4 py-3">
                    <span className="font-medium text-[#f97316]">{item.perfil.cod}</span>
                    <span className="ml-2 text-xs text-[#6b7280]">{item.perfil.linha}</span>
                  </td>
                  <td className="px-4 py-3 text-[#f5f5f5]">{nomesCores[item.cor]}</td>
                  <td className="px-4 py-3 text-[#f5f5f5]">{nomesTipos[item.tipo]}</td>
                  <td className="px-4 py-3 text-right text-[#f5f5f5]">{item.qtd}</td>
                  <td className="px-4 py-3 text-right text-[#6b7280]">{metros.toFixed(0)}m</td>
                  <td className="px-4 py-3 text-right text-[#6b7280]">{formatarPeso(peso)}</td>
                  <td className="px-4 py-3 text-right font-medium text-[#f5f5f5]">{formatarMoeda(custo)}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => onRemover(item.id)}
                      className="text-xs text-red-400 hover:text-red-300"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}