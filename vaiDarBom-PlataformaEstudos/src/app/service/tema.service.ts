import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tema } from '../model/Tema';
@Injectable({
  providedIn: 'root'
})
export class TemaService {
  constructor(private http: HttpClient) { }
}