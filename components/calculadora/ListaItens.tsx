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
      <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-text-secondary">
        Nenhum material adicionado ainda.
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary">Perfil</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary">Cor</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-secondary">Tipo</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-text-secondary">Qtd</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-text-secondary">Metros</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-text-secondary">Peso</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-text-secondary">Custo</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-surface">
            {lista.map((item) => {
              const { metros, peso, custo } = calcularItem(item)
              return (
                <tr key={item.id} className="transition-colors hover:bg-surface-hover">
                  <td className="px-4 py-3">
                    <span className="font-medium text-accent">{item.perfil.cod}</span>
                    <span className="ml-2 text-xs text-text-secondary">{item.perfil.linha}</span>
                  </td>
                  <td className="px-4 py-3 text-text-primary">{nomesCores[item.cor]}</td>
                  <td className="px-4 py-3 text-text-primary">{nomesTipos[item.tipo]}</td>
                  <td className="px-4 py-3 text-right text-text-primary">{item.qtd}</td>
                  <td className="px-4 py-3 text-right text-text-secondary">{metros.toFixed(0)}m</td>
                  <td className="px-4 py-3 text-right text-text-secondary">{formatarPeso(peso)}</td>
                  <td className="px-4 py-3 text-right font-medium text-text-primary">{formatarMoeda(custo)}</td>
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