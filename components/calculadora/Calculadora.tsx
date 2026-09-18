'use client'

import { useState } from 'react'
import type { Cor, ItemLista, Linha, Perfil, TipoCompra } from '@/types'
import { calcularTotais } from '@/lib/calculos'
import SeletorPerfil from './SeletorPerfil'
import FormularioItem from './FormularioItem'
import ListaItens from './ListaItens'
import Resumo from './Resumo'

export default function Calculadora() {
  const [linha, setLinha] = useState<Linha>('Perfis Padronizados')
  const [perfil, setPerfil] = useState<Perfil | null>(null)
  const [cor, setCor] = useState<Cor>('branco')
  const [tipo, setTipo] = useState<TipoCompra>('barra')
  const [qtd, setQtd] = useState(1)
  const [lista, setLista] = useState<ItemLista[]>([])

  function handleLinhaChange(novaLinha: Linha) {
    setLinha(novaLinha)
    setPerfil(null)
  }

  function adicionarItem() {
    if (!perfil) return
    setLista((atual) => [...atual, {
      id: crypto.randomUUID(),
      perfil, cor, tipo, qtd,
    }])
    setQtd(1)
  }

  function removerItem(id: string) {
    setLista((atual) => atual.filter((item) => item.id !== id))
  }

  const totais = calcularTotais(lista)

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] p-5">
        <h2 className="mb-5 text-sm font-medium text-[#f5f5f5]">
          Selecionar perfil
        </h2>
        <SeletorPerfil
          linha={linha}
          perfil={perfil}
          onLinhaChange={handleLinhaChange}
          onPerfilChange={setPerfil}
        />
      </div>

      <div className="rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] p-5">
        <h2 className="mb-5 text-sm font-medium text-[#f5f5f5]">
          Adicionar material
        </h2>
        <FormularioItem
          perfil={perfil}
          cor={cor}
          tipo={tipo}
          qtd={qtd}
          onCorChange={setCor}
          onTipoChange={setTipo}
          onQtdChange={setQtd}
          onAdicionar={adicionarItem}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-medium text-[#f5f5f5]">Materiais</h2>
        <ListaItens lista={lista} onRemover={removerItem} />
      </div>

      {totais.pecas > 0 && (
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-[#f5f5f5]">Resumo</h2>
          <Resumo pecas={totais.pecas} peso={totais.peso} custo={totais.custo} />
        </div>
      )}
    </div>
  )
}