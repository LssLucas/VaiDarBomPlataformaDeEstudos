import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  senha: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() {}

  cadastrar(){
    if( this.senha === this.user.senha ) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alerta.showAlerSucess('Usuário cadastrado com sucesso')
      })
    } else{
      this.alerta.showAlertDanger('Sua senha não confere')
    }
  }

  conferirSenha(event: any){
    this.senha = event.target.value
  }

}
