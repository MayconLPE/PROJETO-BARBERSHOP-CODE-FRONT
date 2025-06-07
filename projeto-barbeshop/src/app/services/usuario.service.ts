import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'https://localhost:7190'; // substitua pela URL real da sua API

  constructor(private http: HttpClient) {}

  obterTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Usuario/ObterTodosUsuarios`);
  }
}
