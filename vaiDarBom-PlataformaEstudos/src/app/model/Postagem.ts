import { Tema } from './Tema'

export class Postagem {
  public id: number
  public ativo: boolean
  public tema: Tema // SEM TEMA
  public imagem: string
  public link: string
  public euLi: number
  public mensagem: string
  public data: Date
  public titulo: string // SEM TITULO
}

/*
   {   
      "ativo": true,
      "data": "2020-11-12T11:17:37.356Z",   
      "euLi": 0,   
      "id": 0,  
      "imagem": "string",   
      "link": "string",   
      "mensagem": "string"
    }
 */