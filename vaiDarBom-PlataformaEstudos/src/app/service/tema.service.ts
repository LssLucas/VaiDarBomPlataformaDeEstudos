import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tema } from '../model/Tema';
@Injectable({
  providedIn: 'root'
})
export class TemaService {
  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getByNomeTema(nome: string){
    return this.http.get(`http://localhost:8080/tema/${nome}`, this.token)
  }

}