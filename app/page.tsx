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
    <div className="space-y-8 max-w-2xl mx-auto">

      {/* Cabeçalho */}
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">
          Bom dia, serralheiro
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          O que você precisa hoje?
        </p>
      </div>

      {/* Cards de funcionalidades */}
      <div className="grid gap-3 sm:grid-cols-2">
        {funcionalidades.map((f) => (
          <Link
            key={f.href}
            href={f.href}
            className="group flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <span className="text-3xl">{f.icone}</span>
            <div>
              <h2 className="font-medium text-text-primary group-hover:text-accent transition-colors">
                {f.titulo}
              </h2>
              <p className="mt-1 text-sm text-text-secondary">
                {f.descricao}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Sobre */}
      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-sm font-medium text-text-primary mb-2">Sobre o Serratech</h2>
        <p className="text-sm leading-relaxed text-text-secondary">
          Feito por serralheiro, para serralheiro. Calcule material,
          gere planos de corte e ganhe tempo no orçamento e na execução
          dos seus serviços.
        </p>
      </div>

    </div>
  )
}