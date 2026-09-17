import type { ResultadoPlano } from '@/lib/planos/suprema/janela2Folhas'

export function calcularJanela2FolhasGold(
  largura: number,
  altura: number
): ResultadoPlano {
  const marco    = largura - 28
  const folha_h  = altura - 48
  const travessa = Math.round((marco - 152) / 2)

  return {
    perfis: [
      { cod: 'LG-044', descricao: 'Marco superior',    tamanho: marco,         qtd: 1, referencia: 'Largura' },
      { cod: 'LG-024', descricao: 'Marco inferior',    tamanho: marco,         qtd: 1, referencia: 'Largura' },
      { cod: 'LG-124', descricao: 'Marco lateral',     tamanho: altura,        qtd: 2, referencia: 'Altura'  },
      { cod: 'LG-050', descricao: 'Montante lateral',  tamanho: folha_h,       qtd: 2, referencia: 'Altura'  },
      { cod: 'LG-048', descricao: 'Mão amigo interno', tamanho: folha_h,       qtd: 1, referencia: 'Altura'  },
      { cod: 'LG-049', descricao: 'Mão amigo externo', tamanho: folha_h,       qtd: 1, referencia: 'Altura'  },
      { cod: 'LG-006', descricao: 'Travessa sup/inf',  tamanho: travessa,      qtd: 4, referencia: 'Largura' },
      { cod: 'BG-057', descricao: 'Baguete largura',   tamanho: travessa - 1,  qtd: 4, referencia: 'Largura' },
      { cod: 'BG-057', descricao: 'Baguete altura',    tamanho: folha_h - 113, qtd: 4, referencia: 'Altura'  },
    ],
    vidro: {
      largura: travessa - 5,
      altura:  folha_h - 83,
      qtd: 2,
    },
  }
}