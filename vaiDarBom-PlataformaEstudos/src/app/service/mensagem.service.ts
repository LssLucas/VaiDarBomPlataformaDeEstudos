import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mensagem } from '../model/Mensagem';


@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllMensagem() {
    return this.http.get('http://localhost:8080/mensagem', this.token)
  }

  getByIdMensagem(id: number) {
    return this.http.get(`http://localhost:8080/mensagem/${id}`, this.token)
  }

  postMensagem(mensagem: Mensagem) {
    return this.http.post('http://localhost:8080/mensagem', mensagem, this.token)
  }

  putMensagem(mensagem: Mensagem) {
    return this.http.put('http://localhost:8080/mensagem', mensagem, this.token)
  }

  deleteMensagem(id: number) {
    return this.http.delete(`http://localhost:8080/mensagem/${id}`, this.token)
  }
  
}
