import Link from 'next/link'

const funcionalidades = [
  {
    href: '/calculadora',
    titulo: 'Calculadora de Material',
    descricao: 'Calcule o custo de alumínio por perfil, cor e quantidade de barras.',
    icone: '🧮',
  },
  {
    href: '/plano-de-corte',
    titulo: 'Plano de Corte',
    descricao: 'Gere o plano de corte completo para janelas e portas.',
    icone: '📐',
  },
]

export default function Home() {
  return (
    <div className="space-y-10">

      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Serratech
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Ferramentas para serralheiros de vidro e alumínio
        </p>
      </section>

      {/* Cards de funcionalidades */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          O que você quer fazer?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {funcionalidades.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group rounded-xl border bg-white p-6 shadow-sm transition hover:border-blue-400 hover:shadow-md"
            >
              <div className="mb-3 text-4xl">{f.icone}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                {f.titulo}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{f.descricao}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-2 font-semibold text-gray-900">Sobre o Serratech</h2>
        <p className="text-sm leading-relaxed text-gray-600">
          O Serratech foi criado para facilitar o dia a dia de serralheiros e 
          instaladores de alumínio. Com ele você calcula o material necessário, 
          gera planos de corte precisos e economiza tempo na hora de orçar e 
          executar seus serviços.
        </p>
      </section>

    </div>
  )
}