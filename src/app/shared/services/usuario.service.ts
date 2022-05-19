import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  BASE_URL = "http://localhost:3000/usuarios/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  listarTodos(): Observable<Usuario[]> {
      return this.httpClient.get<Usuario[]>(this.BASE_URL, this.httpOptions);
  }

  buscarPorId(id: number): Observable<Usuario>{
      return this.httpClient.get<Usuario>(this.BASE_URL + id, this.httpOptions);
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.BASE_URL, JSON.stringify(usuario), this.httpOptions);
  }

  remover(id: number): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(this.BASE_URL + id, this.httpOptions);
  }

  alterar(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(this.BASE_URL + usuario.id, JSON.stringify(usuario), this.httpOptions);
  }
}
