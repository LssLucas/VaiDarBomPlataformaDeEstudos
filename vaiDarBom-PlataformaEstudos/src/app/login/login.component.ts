import { environment } from './../../environments/environment.prod';

import { UserLogin } from './../model/UserLogin';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(){ }

  entrar() {
      this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      this.router.navigate(['/feed'])
      environment.token = this.userLogin.token
      environment.foto = this.userLogin.foto
      environment.bio = this.userLogin.bio
      environment.cidade = this.userLogin.cidade
      environment.nome = this.userLogin.nome
      environment.ano = this.userLogin.anoUser
    })
  }

}
