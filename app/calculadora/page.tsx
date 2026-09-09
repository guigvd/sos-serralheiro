import Calculadora from '@/components/calculadora/Calculadora'

export default function PaginaCalculadora() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Calculadora de Material</h1>
        <p className="mt-1 text-sm text-gray-500">
          Selecione os perfis, cor e quantidade para calcular o custo do alumínio.
        </p>
      </div>
      <Calculadora />
    </div>
  )
}