import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  bioUser = environment.bio
  cidadeUser = environment.cidade
  nomeUser = environment.nome
  anoUser = environment.ano
  idUser = environment.token //Quero deixar no alt da tag img o id do usuario
  foto = environment.foto


  constructor() { }

  ngOnInit(){
    let token = environment.token
    let nome = environment.nome
    let foto = environment.foto
    let cidade = environment.cidade
    let bio = environment.bio
  }

}
