import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  constructor(
    private router: Router,
    private alerta: AlertasService
    ) { }

  ngOnInit(){
  }

  enviarFormContato(){
    this.router.navigate(['/feed'])
    this.alerta.showAlertSuccess('Mensagem enviada com sucesso')
  }

}
