import { Postagem } from './Postagem'

export class Mensagem {
  public id: number
  public textoDaMensagem: string
  public postagem: Postagem
  public data: Date
  public usuario: string
}

