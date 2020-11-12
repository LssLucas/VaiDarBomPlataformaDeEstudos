import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor() { }
    
    token = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    }
    
    getByTituloPostagem(titulo: string){
      return this.http.get(`http://localhost:8080/postagem/titulo/${titulo}`, this.token)
    }
    
}
