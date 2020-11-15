import { Tema } from './Tema'

export class Postagem {
  public id: number
  public titulo: string
  public mensagem: string
  public data: Date
  public tema: Tema
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