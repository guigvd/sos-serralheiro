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
        <div key={card.label} className="rounded-lg border border-border bg-surface p-5">
          <p className="text-xs text-text-secondary">{card.label}</p>
          <p className={`mt-1 text-2xl font-semibold ${card.destaque ? 'text-accent' : 'text-text-primary'}`}>
            {card.valor}
          </p>
        </div>
      ))}
    </div>
  )
}