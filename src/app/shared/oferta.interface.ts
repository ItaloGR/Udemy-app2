export interface IOferta{
  id: number,
  categoria: string,
  titulo: string,
  descricao_oferta: string,
  anunciante: string,
  valor: number,
  destaque: boolean,
  imagens: Array<IUrl>
}

export interface IUrl{
  url: string
}