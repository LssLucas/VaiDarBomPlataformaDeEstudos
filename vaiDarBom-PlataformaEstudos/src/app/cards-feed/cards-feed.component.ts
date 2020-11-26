import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-cards-feed',
  templateUrl: './cards-feed.component.html',
  styleUrls: ['./cards-feed.component.css']
})
export class CardsFeedComponent implements OnInit {

  bioUser = environment.bio
  cidadeUser = environment.cidade
  nomeUser = environment.nome
  anoUser = environment.ano
  idUser = environment.token //Quero deixar no alt da tag img o id do usuario
  foto = environment.foto

  constructor(
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
    let token = environment.token
    let nome = environment.nome
    let foto = environment.foto
    let cidade = environment.cidade
    let bio = environment.bio
  }
  resposta(){
    this.alerta.showAlertSuccess(' A resposta é 100')
   }

}
