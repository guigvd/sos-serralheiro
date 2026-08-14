import Calculadora from '@/components/calculadora/Calculadora'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-bold text-gray-900">Serratech</h1>
          <p className="text-sm text-gray-500">Calculadora de materiais</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <Calculadora />
      </div>
    </main>
  )
}