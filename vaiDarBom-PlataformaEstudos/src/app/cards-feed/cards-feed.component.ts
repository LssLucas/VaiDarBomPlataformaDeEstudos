import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-cards-feed',
  templateUrl: './cards-feed.component.html',
  styleUrls: ['./cards-feed.component.css']
})
export class CardsFeedComponent implements OnInit {



  randomNumber : number 

  mentalidadesTxt : string
  tituloMentalidade : string
  linkMentalidade : string

  dicasTxt : string
  tituloDicas : string
  linkDicas : string

  desafioTxt : string
  tituloDesafio : string
  desafioResp : string
  desafioAtual : number


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

    this.mentalidades()
    this. dicas()
    this.desafio()
  }
  resposta(){

    this.alerta.showAlerSucess(this.desafioResp)

    }

  

  desafio(){

    this.randomNumber = Math.floor(Math.random() * 10)

    if(this.randomNumber > 5) {
      this.desafioTxt = "Existem vários tipos de clima no mundo, que variam conforme as zonas climáticas da Terra. Portanto, apresente os aspectos que influenciam na caracterização do clima de um determinado local."
  
      this.tituloDesafio = "Geografia"
  
      this.desafioResp = "Para a caracterização do clima de um determinado local é necessária uma análise das condições atmosféricas durante um período de aproximadamente 30 anos. Os principais aspectos verificados são a temperatura, pressão, umidade, regime de ventos, atuação das massas de ar, relevo, influência das correntes marítimas, vegetação e as alterações provocadas pela ação do homem."
  
    }  

    if(this.randomNumber < 6) {
      this.desafioTxt = "Explique o que foi a Revolução Neolítica. Por que tal evento ficou conhecido como uma revolução?"
  
      this.tituloDesafio = "Historia"
  
      this.desafioResp = "Para a caracterização do clima de um determinado local é necessária uma análise das condições atmosféricas durante um período de aproximadamente 30 anos. Os principais aspectos verificados são a temperatura, pressão, umidade, regime de ventos, atuação das massas de ar, relevo, influência das correntes marítimas, vegetação e as alterações provocadas pela ação do homemA Revolução Neolítica consiste no desenvolvimento das primeiras técnicas agrícolas que se tem conhecimento. A descoberta da agricultura é colocada como uma revolução, na medida em que tal prática estabeleceu uma série de importantes transformações no cotidiano, nas relações sociais e no modo de vida dos homens pré-históricos."
  
    }  
    

  }

  dicas()
  {
    this.randomNumber = Math.floor(Math.random() * 10)
    console.log(this.randomNumber)

    /*if(this.randomNumber > 3 && 6 <this.randomNumber) {

      this.dicasTxt = "Em quarentena? 7 dicas para estudar em casa e não perder o ritmo Siga uma rotina. ... Defina um local de estudos. ... Tenha equilíbrio. ... Conecte-se com seus colegas. ... Peça ajuda da família. ..."
  
      this.tituloDicas = "ESTUDO NA QUARENTENA"
  
      this.linkDicas = "https://guiadoestudante.abril.com.br/estudo/coronavirus-7-dicas-para-estudar-em-casa-e-nao-perder-o-ritmo/"
  
    } */

      if(this.randomNumber > 5) {
      this.dicasTxt = "Em quarentena? 7 dicas para estudar em casa e não perder o ritmo Siga uma rotina. ... Defina um local de estudos. ... Tenha equilíbrio. ... Conecte-se com seus colegas. ... Peça ajuda da família. ..."
  
      this.tituloDicas = "Estudando na quarentena"
  
      this.linkDicas = ""
  
    }  
    
    if(this.randomNumber <6) {
      this.dicasTxt = "Estabeleça horários fixos. Desenvolva um cronograma de estudos. Mantenha o registro das suas obrigações. Estabeleça  metas a serem cumpridas. Mantenha-se motivado. Seja organizado. Segmente o conteúdo de estudo. Tenha cuidado com as distrações"
  
      this.tituloDicas = "Dicas para estudar em casa"
  
      this.linkDicas = "https://www.unibh.br/blog/10-dicas-para-quem-quer-estudar-em-casa/"
  
    }  
}  

  

  mentalidades() {

    this.randomNumber = Math.floor(Math.random() * 10)
    console.log("seraa" + this.randomNumber)

    if(this.randomNumber > -1 && 3  <this.randomNumber) {
    this.mentalidadesTxt = "Tudo que você precisa saber para desenvolver uma mentalidade de sucesso Comece a aceitar as mudanças. ... Comece a definir metas. ... Comece a se comprometer com as coisas. ... Comece a identificar o seu propósito. ... Comece a acreditar em você e seus objetivos. ... Comece a cultivar a paciência"

    this.tituloMentalidade = "Mentalidade de crescimento"

    this.linkMentalidade = "https://www.agendor.com.br/blog/mentalidade-de-sucesso/"

  }

  if(this.randomNumber > 5) {
    this.mentalidadesTxt = "Persistência é conseguir seguir em frente, estar focado em seus objetivos, sem se deixar intimidar pelos aparentes fracassos. Isso é o que chamamos de persistência."

    this.tituloMentalidade = "Mentalidade de Persistência"

    this.linkMentalidade = "https://marinabernardi.com.br/persistencia/"

  } 

  if(this.randomNumber < 6) {
    this.mentalidadesTxt = "Atenção aos detalhes: o segredo para brilhar em tempos mais desafiadores"

    this.tituloMentalidade = "Atenção aos detalhes"

    this.linkMentalidade = "https://cio.com.br/tendencias/atencao-aos-detalhes-o-segredo-para-brilhar-em-tempos-mais-desafiadores/"

  }   
  
}
}
