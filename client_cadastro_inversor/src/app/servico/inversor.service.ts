import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inversor } from '../modelo/Inversor';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InversorService {
 //URL da API

 private url:string = 'http://localhost:8080'


  //Construtor
  constructor(private http: HttpClient) { }
  //Método para selecionar todos os clientes
selecionar():Observable<Inversor[]>{
  return this.http.get<Inversor[]>(this.url);
}
  //Método para cadastrar inversores
  cadastrar(obj:Inversor):Observable<Inversor>{
    return this.http.post<Inversor>(this.url,obj);
  }

   //Método para editar inversores
   editar(obj:Inversor):Observable<Inversor>{
    return this.http.put<Inversor>(this.url,obj);
  }
  
  //Método de remover inversor
  remover(codigo:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + codigo)
  }
}
