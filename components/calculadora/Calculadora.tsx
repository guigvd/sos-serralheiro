'use client'

import { useState } from 'react'
import Image from 'next/image'

import type {
  Cor,
  ItemLista,
  Linha,
  Perfil,
  TipoCompra,
} from '@/types'

import { calcularTotais } from '@/lib/calculos'

import SeletorPerfil from './SeletorPerfil'
import FormularioItem from './FormularioItem'
import ListaItens from './ListaItens'
import Resumo from './Resumo'

export default function Calculadora() {
  const [linha, setLinha] = useState<Linha>('Perfis Padronizados')

  const [perfil, setPerfil] = useState<Perfil | null>(null)

  const [cor, setCor] = useState<Cor>('brilho')

  const [tipo, setTipo] = useState<TipoCompra>('barra')

  const [qtd, setQtd] = useState(1)

  const [lista, setLista] = useState<ItemLista[]>([])

  function handleLinhaChange(novaLinha: Linha) {
    setLinha(novaLinha)

    // Ao trocar de linha, o perfil selecionado deixa de ser válido.
    setPerfil(null)
  }

  function adicionarItem() {
    if (!perfil) return

    const novoItem: ItemLista = {
      id: crypto.randomUUID(),
      perfil,
      cor,
      tipo,
      qtd,
    }

    setLista((atual) => [...atual, novoItem])

    // Volta a quantidade para 1 depois de adicionar.
    setQtd(1)
  }

  function removerItem(id: string) {
    setLista((atual) =>
      atual.filter((item) => item.id !== id)
    )
  }

  const totais = calcularTotais(lista)

  return (
    <div className="space-y-8">
      {/* Seleção do perfil */}
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          Selecionar perfil
        </h2>

        <SeletorPerfil
          linha={linha}
          perfil={perfil}
          onLinhaChange={handleLinhaChange}
          onPerfilChange={setPerfil}
        />
      </section>

      {/* Configuração do material */}
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          Adicionar material
        </h2>

        {perfil && (
          <div className="mb-6 rounded-lg bg-gray-50 p-4 flex justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Perfil selecionado
              </p>

              <p className="font-semibold">
                {perfil.cod}
              </p>

              <p className="text-sm text-gray-500">
                {perfil.peso.toFixed(3)} kg/m
              </p>
            </div>

            <Image
              // src={`/images/perfis/${perfil.cod}.png`}
              src="/perfis/176.png"
              alt={`Perfil ${perfil.cod}`}
              width={100}
              height={100}
              className="h-auto w-auto"
            />
          </div>
        )}

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
      </section>

      {/* Lista */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Materiais
        </h2>

        <ListaItens
          lista={lista}
          onRemover={removerItem}
        />
      </section>

      {/* Resumo */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Resumo
        </h2>

        <Resumo
          pecas={totais.pecas}
          peso={totais.peso}
          custo={totais.custo}
        />
      </section>
    </div>
  )
}