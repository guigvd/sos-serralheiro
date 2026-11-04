'use client'

import { useState } from 'react'
import { calcularJanela2FolhasGold } from '@/lib/planos/gold/janela2Folhas'
import type { ResultadoPlano } from '@/lib/planos/suprema/janela2Folhas'

export default function Janela2FolhasGold() {
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
    setResultado(calcularJanela2FolhasGold(l, a))
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <p className="text-xs text-text-secondary mb-1">Linha Gold</p>
        <h1 className="text-2xl font-semibold text-text-primary">
          Janela de Correr 2 Folhas
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          Informe as medidas do vão em milímetros.
        </p>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-text-primary">
              Largura (mm)
            </label>
            <input
              type="number"
              value={largura}
              onChange={(e) => setLargura(e.target.value)}
              placeholder="ex: 1200"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-text-primary placeholder-[#6b7280] focus:border-[#f97316] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-text-primary">
              Altura (mm)
            </label>
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="ex: 1200"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-text-primary placeholder-[#6b7280] focus:border-[#f97316] focus:outline-none"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={calcular}
              className="w-full rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-hover"
            >
              Calcular
            </button>
          </div>
        </div>
        {erro && <p className="mt-3 text-sm text-red-400">{erro}</p>}
      </div>

      {resultado && (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="border-b border-border bg-surface px-5 py-3">
              <h2 className="text-sm font-medium text-text-primary">Perfis de alumínio</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-3 text-left text-xs font-medium text-text-secondary">Perfil</th>
                    <th className="px-5 py-3 text-left text-xs font-medium text-text-secondary">Descrição</th>
                    <th className="px-5 py-3 text-right text-xs font-medium text-text-secondary">Tamanho</th>
                    <th className="px-5 py-3 text-right text-xs font-medium text-text-secondary">Qtd</th>
                    <th className="px-5 py-3 text-right text-xs font-medium text-text-secondary">Ref.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2a2a] bg-surface">
                  {resultado.perfis.map((p, i) => (
                    <tr key={i} className="transition-colors hover:bg-surface-hover">
                      <td className="px-5 py-3 font-medium text-accent">{p.cod}</td>
                      <td className="px-5 py-3 text-text-primary">{p.descricao}</td>
                      <td className="px-5 py-3 text-right font-mono text-text-primary">{p.tamanho} mm</td>
                      <td className="px-5 py-3 text-right text-text-primary">{p.qtd}x</td>
                      <td className="px-5 py-3 text-right text-text-secondary">{p.referencia}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border">
            <div className="border-b border-border bg-surface px-5 py-3">
              <h2 className="text-sm font-medium text-text-primary">Vidro</h2>
            </div>
            <table className="w-full text-sm bg-surface">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3 text-left text-xs font-medium text-text-secondary">Largura</th>
                  <th className="px-5 py-3 text-left text-xs font-medium text-text-secondary">Altura</th>
                  <th className="px-5 py-3 text-right text-xs font-medium text-text-secondary">Qtd</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-4 font-mono text-text-primary">{resultado.vidro.largura} mm</td>
                  <td className="px-5 py-4 font-mono text-text-primary">{resultado.vidro.altura} mm</td>
                  <td className="px-5 py-4 text-right text-text-primary">{resultado.vidro.qtd}x</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}