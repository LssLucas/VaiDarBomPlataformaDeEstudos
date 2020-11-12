import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key: 'data'
  reverse: true

  tema: Tema = new Tema()
  listaTemas: Tema[]
  nomeTema: string

  listaPostagens: Postagem[]

  titulo: string

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit(): void {

  }

  findByTituloPostagem(){
    if(titulo === ''){
      this.findFindAllPostagens()
    } else {
      this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  findByNomeTema(){
    if(this.nomeTema === ''){
      this.findAllTemas()
    }else {
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }
  }

}
