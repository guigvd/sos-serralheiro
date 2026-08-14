import { formatarMoeda, formatarPeso } from '@/lib/calculos'

type Props = {
  pecas: number
  peso: number
  custo: number
}

export default function Resumo({ pecas, peso, custo }: Props) {
  if (pecas === 0) return null

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Total de peças</p>
        <p className="mt-1 text-3xl font-bold text-gray-900">{pecas}</p>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Peso total</p>
        <p className="mt-1 text-3xl font-bold text-gray-900">{formatarPeso(peso)}</p>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Custo estimado</p>
        <p className="mt-1 text-3xl font-bold text-green-600">{formatarMoeda(custo)}</p>
      </div>
    </div>
  )
}