'use client'

import { useState } from 'react'
import { calcularJanela2Folhas, type ResultadoPlano } from '@/lib/planos/suprema/janela2Folhas'

export default function Janela2Folhas() {
  const [largura, setLargura] = useState('')
  const [altura, setAltura]   = useState('')
  const [resultado, setResultado] = useState<ResultadoPlano | null>(null)
  const [erro, setErro] = useState('')

  function calcular() {
    const l = Number(largura)
    const a = Number(altura)

    if (!l || !a || l < 400 || a < 400) {
      setErro('Informe medidas válidas (mínimo 400mm em cada dimensão).')
      setResultado(null)
      return
    }

    setErro('')
    setResultado(calcularJanela2Folhas(l, a))
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">

      {/* Cabeçalho */}
      <div>
        <p className="text-xs text-[#6b7280] mb-1">Linha Suprema</p>
        <h1 className="text-2xl font-semibold text-[#f5f5f5]">
          Janela de Correr 2 Folhas
        </h1>
        <p className="mt-1 text-sm text-[#6b7280]">
          Informe as medidas do vão em milímetros.
        </p>
      </div>

      {/* Formulário */}
      <div className="rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] p-5">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#f5f5f5]">
              Largura (mm)
            </label>
            <input
              type="number"
              value={largura}
              onChange={(e) => setLargura(e.target.value)}
              placeholder="ex: 1200"
              className="w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2 text-sm text-[#f5f5f5] placeholder-[#6b7280] focus:border-[#f97316] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#f5f5f5]">
              Altura (mm)
            </label>
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="ex: 1200"
              className="w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2 text-sm text-[#f5f5f5] placeholder-[#6b7280] focus:border-[#f97316] focus:outline-none"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={calcular}
              className="w-full rounded-lg bg-[#f97316] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#ea6c0a]"
            >
              Calcular
            </button>
          </div>
        </div>

        {erro && (
          <p className="mt-3 text-sm text-red-400">{erro}</p>
        )}
      </div>

      {/* Resultado */}
      {resultado && (
        <div className="space-y-4">

          {/* Perfis */}
          <div className="overflow-hidden rounded-lg border border-[#2a2a2a]">
            <div className="border-b border-[#2a2a2a] bg-[#1c1c1c] px-5 py-3">
              <h2 className="text-sm font-medium text-[#f5f5f5]">
                Perfis de alumínio
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2a2a2a] bg-[#1c1c1c]">
                    <th className="px-5 py-3 text-left text-xs font-medium text-[#6b7280]">Perfil</th>
                    <th className="px-5 py-3 text-left text-xs font-medium text-[#6b7280]">Descrição</th>
                    <th className="px-5 py-3 text-right text-xs font-medium text-[#6b7280]">Tamanho</th>
                    <th className="px-5 py-3 text-right text-xs font-medium text-[#6b7280]">Qtd</th>
                    <th className="px-5 py-3 text-right text-xs font-medium text-[#6b7280]">Ref.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2a2a] bg-[#1c1c1c]">
                  {resultado.perfis.map((p, i) => (
                    <tr key={i} className="transition-colors hover:bg-[#2a2a2a]">
                      <td className="px-5 py-3 font-medium text-[#f97316]">{p.cod}</td>
                      <td className="px-5 py-3 text-[#f5f5f5]">{p.descricao}</td>
                      <td className="px-5 py-3 text-right font-mono text-[#f5f5f5]">
                        {p.tamanho} mm
                      </td>
                      <td className="px-5 py-3 text-right text-[#f5f5f5]">{p.qtd}x</td>
                      <td className="px-5 py-3 text-right text-[#6b7280]">{p.referencia}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Vidro */}
          <div className="overflow-hidden rounded-lg border border-[#2a2a2a]">
            <div className="border-b border-[#2a2a2a] bg-[#1c1c1c] px-5 py-3">
              <h2 className="text-sm font-medium text-[#f5f5f5]">Vidro</h2>
            </div>
            <table className="w-full text-sm bg-[#1c1c1c]">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="px-5 py-3 text-left text-xs font-medium text-[#6b7280]">Largura</th>
                  <th className="px-5 py-3 text-left text-xs font-medium text-[#6b7280]">Altura</th>
                  <th className="px-5 py-3 text-right text-xs font-medium text-[#6b7280]">Qtd</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-4 font-mono text-[#f5f5f5]">{resultado.vidro.largura} mm</td>
                  <td className="px-5 py-4 font-mono text-[#f5f5f5]">{resultado.vidro.altura} mm</td>
                  <td className="px-5 py-4 text-right text-[#f5f5f5]">{resultado.vidro.qtd}x</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      )}
    </div>
  )
}