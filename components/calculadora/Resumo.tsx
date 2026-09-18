import { formatarMoeda, formatarPeso } from '@/lib/calculos'

type Props = {
  pecas: number
  peso: number
  custo: number
}

export default function Resumo({ pecas, peso, custo }: Props) {
  if (pecas === 0) return null

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        { label: 'Total de peças', valor: String(pecas) },
        { label: 'Peso total', valor: formatarPeso(peso) },
        { label: 'Custo estimado', valor: formatarMoeda(custo), destaque: true },
      ].map((card) => (
        <div key={card.label} className="rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] p-5">
          <p className="text-xs text-[#6b7280]">{card.label}</p>
          <p className={`mt-1 text-2xl font-semibold ${card.destaque ? 'text-[#f97316]' : 'text-[#f5f5f5]'}`}>
            {card.valor}
          </p>
        </div>
      ))}
    </div>
  )
}