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
      <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-sm text-gray-400">
        Nenhum material adicionado ainda.
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              <th className="px-4 py-3">Perfil</th>
              <th className="px-4 py-3">Cor</th>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3 text-right">Qtd</th>
              <th className="px-4 py-3 text-right">Metros</th>
              <th className="px-4 py-3 text-right">Peso</th>
              <th className="px-4 py-3 text-right">Custo</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {lista.map((item) => {
              const { metros, peso, custo } = calcularItem(item)
              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {item.perfil.cod}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{nomesCores[item.cor]}</td>
                  <td className="px-4 py-3 text-gray-600">{nomesTipos[item.tipo]}</td>
                  <td className="px-4 py-3 text-right">{item.qtd}</td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    {metros.toFixed(0)}m
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    {formatarPeso(peso)}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-gray-900">
                    {formatarMoeda(custo)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => onRemover(item.id)}
                      className="text-xs text-red-500 hover:text-red-700 hover:underline"
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