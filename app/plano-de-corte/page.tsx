import Link from 'next/link'

const planos = [
  {
    linha: 'Linha Suprema',
    items: [
      {
        href: '/plano-de-corte/suprema/janela-2-folhas',
        titulo: 'Janela 2 Folhas',
        descricao: 'Janela de correr com 2 folhas.',
      },
    ],
  },
]

export default function PaginaPlanoDeCorte() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-semibold text-[#f5f5f5]">Plano de Corte</h1>
        <p className="mt-1 text-sm text-[#6b7280]">
          Selecione a tipologia para gerar o plano de corte completo.
        </p>
      </div>

      {planos.map((grupo) => (
        <section key={grupo.linha}>
          <p className="mb-3 text-xs font-medium text-[#6b7280]">
            {grupo.linha}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {grupo.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] p-5 transition-colors hover:border-[#f97316]"
              >
                <h3 className="font-medium text-[#f5f5f5] group-hover:text-[#f97316] transition-colors">
                  {item.titulo}
                </h3>
                <p className="mt-1 text-sm text-[#6b7280]">{item.descricao}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}