import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {
  tema: Tema = new Tema()
  listaTemas:Tema[]
  idTema: number;
  

  constructor(
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAllTemas()
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
    cadastrar(){
      if(this.tema.descricao == null){
        alert ('Preencha o campo de nome corretamente')
      } else {
        this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
          this.tema = resp
          this.router.navigate(['/feed'])
          alert ('Tema cadastro com sucesso!')
        })
      }
    }
}
