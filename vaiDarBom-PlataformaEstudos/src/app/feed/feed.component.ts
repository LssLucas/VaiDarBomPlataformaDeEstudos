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

  ngOnInit() {
    window.scroll(0,0)

    this.findAllPostagens()
    this.findAllTemas()
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


  findAllPostagens(){
    this.temaService.getAllTemas().subscribe((resp: Postagem[])=>{
      this.listaPostagens= resp
    })
    }
  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if(this.postagem.titulo == null || this.postagem.mensagem == null || this.postagem.tema == null){
      alert ('Preencha todos os campos corretamente')
    }else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
        this.postagem = resp
        this.postagem = new Postagem()
        alert ('postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }
  findAllTemas(){
      this.temaService.getAllTemas().subscribe((resp:Tema[]) =>{
        this.listaTemas = resp
      })
      }
  fidByIdTema(){
        this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
          this.tema = resp
        })
      }
}
