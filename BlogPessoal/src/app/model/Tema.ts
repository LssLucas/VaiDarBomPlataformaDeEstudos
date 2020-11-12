import { Postagem } from './Postagem'

export class Tema{
    public id: number
    public disciplina: string
    public nivelEnsino: string
    public ativo: boolean
    public listPostagem: Postagem []
  descricao: any
}