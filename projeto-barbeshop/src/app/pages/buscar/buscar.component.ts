import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  usuarios: any[] = [];
  termo: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // deixa em branco
  }

  carregarUsuarios() {
    this.usuarioService.obterTodos().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Erro ao buscar usuários', err);
      }
    });
  }
}




