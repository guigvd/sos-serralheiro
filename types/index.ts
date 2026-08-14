export type Linha = 'Perfis Padronizados' | 'Linha 28' | 'Linha Suprema' | 'Engenharia 8mm'

export type Cor = 'brilho' | 'branco' | 'preto' | 'amadeirado'

export type TipoCompra = 'barra' | 'pedaco'

export type Perfil = {
  cod: string
  peso: number
  linha: Linha
}

export type ItemLista = {
  id: string
  perfil: Perfil
  tipo: TipoCompra
  qtd: number
  cor: Cor
}

export type Precos = {
  [key in Cor]: {
    barra: number
    pedaco: number
  }
}