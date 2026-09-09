import Link from 'next/link'

const planos = [
  {
    linha: 'Linha Suprema',
    items: [
      {
        href: '/plano-de-corte/jan-2-folhas-sup',
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
        <h1 className="text-2xl font-bold text-gray-900">Plano de Corte</h1>
        <p className="mt-1 text-sm text-gray-500">
          Selecione a tipologia para gerar o plano de corte completo.
        </p>
      </div>

      {planos.map((grupo) => (
        <section key={grupo.linha}>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
            {grupo.linha}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {grupo.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border bg-white p-5 shadow-sm transition hover:border-blue-400 hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  {item.titulo}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.descricao}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}