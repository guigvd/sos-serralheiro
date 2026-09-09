export type ResultadoPlano = {
  perfis: {
    cod: string
    descricao: string
    tamanho: number
    qtd: number
    referencia: string
  }[]
  vidro: {
    largura: number
    altura: number
    qtd: number
  }
}

export function calcularJanela2Folhas(
  largura: number,
  altura: number
): ResultadoPlano {
  const marco    = largura - 26
  const folha_h  = altura - 50
  const travessa = Math.round((marco - 106) / 2)

  return {
    perfis: [
      { cod: 'SU-001', descricao: 'Trilho superior',   tamanho: marco,         qtd: 1, referencia: 'Largura' },
      { cod: 'SU-002', descricao: 'Trilho inferior',   tamanho: marco,         qtd: 1, referencia: 'Largura' },
      { cod: 'SU-003', descricao: 'Marco lateral',     tamanho: altura,        qtd: 2, referencia: 'Altura'  },
      { cod: 'SU-039', descricao: 'Montante lateral',  tamanho: folha_h,       qtd: 2, referencia: 'Altura'  },
      { cod: 'SU-040', descricao: 'Mão amigo interno', tamanho: folha_h,       qtd: 1, referencia: 'Altura'  },
      { cod: 'SU-041', descricao: 'Mão amigo externo', tamanho: folha_h,       qtd: 1, referencia: 'Altura'  },
      { cod: 'SU-053', descricao: 'Travessa da folha', tamanho: travessa,      qtd: 4, referencia: 'Largura' },
      { cod: 'SU-102', descricao: 'Baguete altura',    tamanho: folha_h - 102, qtd: 4, referencia: 'Altura'  },
      { cod: 'SU-102', descricao: 'Baguete largura',   tamanho: travessa - 1,  qtd: 4, referencia: 'Largura' },
    ],
    vidro: {
      largura: travessa - 5,
      altura:  folha_h - 83,
      qtd: 2,
    },
  }
}