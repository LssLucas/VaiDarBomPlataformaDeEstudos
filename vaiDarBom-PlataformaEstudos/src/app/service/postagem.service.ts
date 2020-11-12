import { HttpClient , HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

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
  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens', this.token)
  }
  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagens', postagem, this.token)
  }
token = {
  headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
}
getAllPostagens(){
  return this.http.get('http://localhost:8080/postagens', this.token)
}

getByIdPostagem(id: number) {
  return this.http.get(`http://localhost:8080/postagens/${id}`, this.token)
}

postPostagem (postagem:Postagem){
  return this.http.post('http://localhost:8080/postagens', postagem, this.token)
}

putPostagem(postagem: Postagem) {
  return this.http.put('http://localhost:8080/postagens', postagem, this.token)

}

deletePostagem(id: number) {
  return this.http.delete(`http://localhost:8080/postagens/${id}`, this.token)

}
  putPostagem(postagem: Postagem) {
    return this.http.put('http://localhost:8080/postagens', postagem, this.token)
  }

   getByIdPostagem(id: number) {
     return this.http.get(`http://localhost:8080//postagens/${id}`, this.token)
 }

   deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/postagens/${id}` , this.token)
  }
}
