import { Router } from '@angular/router';
import { AlertasService } from './../service/alertas.service';
import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';
import { environment } from './../../environments/environment.prod';
import { MensagemService } from '../service/mensagem.service';
import { Mensagem } from '../model/Mensagem';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  bioUser = environment.bio
  cidadeUser = environment.cidade
  nomeUser = environment.nome
  anoUser = environment.ano
  idUser = environment.token //Quero deixar no alt da tag img o id do usuario
  foto = environment.foto

  key = 'data'
  reverse = true

  titulo: string

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  mensagem : Mensagem = new Mensagem()
  listaMensagem : Mensagem[]
  

  tema: Tema = new Tema()
  listaTemas: Tema[]
  
  idTema: number
  idPostagem : number
  nomeTema: string

  //teste : boolean

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private mensagemService: MensagemService,
    private alerta: AlertasService,
    private router: Router 
  ) { }

  ngOnInit(){

    window.scroll(0, 0)
    let token = environment.token
    let nome = environment.nome
    let foto = environment.foto
    let cidade = environment.cidade
    let bio = environment.bio
  
    this.findAllPostagens()
    this.findAllTemas()

    if(token == ''){
      this.router.navigate(['/login'])
      this.alerta.showAlertInfo('Para acessar faça login')
    }
  }

  deletar(){
    this.alerta.showConfirm()
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findAllMensagem() {
    this.mensagemService.getAllMensagem().subscribe((resp: Mensagem[]) => {
      this.listaMensagem = resp
    })
  }

  findByIdPostagem(id:number) {
    this.postagemService.getByIdPostagem(this.idPostagem).subscribe((resp: Postagem) => {
      this.postagem=resp
    })
  }
  
 findByIdTema() {
  this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
    this.tema = resp;
  })
}


  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }


 findByTituloPostagem() {
   if (this.titulo === ''){
     this.findAllPostagens()
   } else {
     this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[]) => {
       this.listaPostagens = resp
     })
   }
 }

 findByNomeTema() {
   if (this.nomeTema === ''){
     this.findAllTemas()
   } else {
     this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
       this.listaTemas = resp
     })
   }
 }

 deletarPost(id: number) {
  this.postagemService.deletePostagem(id).subscribe(() => {
    this.router.navigate(['/feed'])
    this.alerta.showAlertInfo('Postagem apagada com sucesso!')
  })
}

  publicar() {
    
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    
    if (this.postagem.titulo == null || this.postagem.mensagem == null || this.postagem.tema == null) {
      this.alerta.showAlertDanger('Preencha todos os campos antes de publicar!')
    } else if (this.postagem.mensagem.length < 10) {
      this.alerta.showAlertDanger('Digite no minimo 10 caracteres no campo texto!')
    } else{
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        this.alerta.showAlerSucess('Postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }

  public comentar(idp : number) {
    
    this.postagem.id = idp
    this.mensagem.postagem = this.postagem
    
    if (this.mensagem.textoDaMensagem == null ) {
      this.alerta.showAlertDanger('Preencha todos os campos antes de comentar!')
    } else if (this.mensagem.textoDaMensagem.length < 10 ) {
      this.alerta.showAlertDanger('Digite no minimo 10 caracteres no campo comentario!')
    } else{

      this.mensagemService.postMensagem(this.mensagem).subscribe((resp: Mensagem) => {
        this.mensagem = resp
        this.mensagem = new Mensagem()
        this.findAllMensagem()
      })
    }
  }
}