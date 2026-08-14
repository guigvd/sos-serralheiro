import type { Precos } from '@/types'

export const precos: Precos = {
  brilho:     { barra: 38.45, pedaco: 47.20 },
  branco:     { barra: 39.90, pedaco: 48.20 },
  preto:      { barra: 41.95, pedaco: 49.20 },
  amadeirado: { barra: 69.90, pedaco: 69.90 },
}

export const comprimentos: Record<string, number> = {
  barra:  6,
  pedaco: 3,
}

export const nomesCores: Record<string, string> = {
  brilho:     'Natural / Brilho',
  branco:     'Branco',
  preto:      'Preto',
  amadeirado: 'Amadeirado',
}

export const nomesTipos: Record<string, string> = {
  barra:  'Barra (6m)',
  pedaco: 'Pedaço (3m)',
}