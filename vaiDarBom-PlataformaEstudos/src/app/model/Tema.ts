import { Postagem } from './Postagem'

export class Tema{
    public id: number
    private disciplina: string
    private nivelEnsino: string
    private ativo: boolean
    private listPostagem: Postagem []
}