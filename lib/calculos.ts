import { comprimentos, precos } from '@/data/precos'
import type { ItemLista } from '@/types'

export function calcularItem(item: ItemLista) {
  const comp   = comprimentos[item.tipo]
  const precoKg = precos[item.cor][item.tipo]
  const metros  = comp * item.qtd
  const peso    = item.perfil.peso * metros
  const custo   = peso * precoKg
  return { metros, peso, custo }
}

export function calcularTotais(lista: ItemLista[]) {
  return lista.reduce(
    (acc, item) => {
      const { peso, custo } = calcularItem(item)
      return {
        pecas: acc.pecas + item.qtd,
        peso:  acc.peso  + peso,
        custo: acc.custo + custo,
      }
    },
    { pecas: 0, peso: 0, custo: 0 }
  )
}

export function formatarMoeda(valor: number) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function formatarPeso(valor: number) {
  return `${valor.toFixed(2).replace('.', ',')} kg`
}