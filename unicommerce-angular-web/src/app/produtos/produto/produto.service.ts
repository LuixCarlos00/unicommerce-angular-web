import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { Categoria } from 'src/app/categorias/categoria/categoria';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  constructor(private Http: HttpClient) {}

  get(id: string) {
    console.log('get:id');
    return this.Http.get<Produto[]>(API + '/produto/' + id);
  }

  getList() {
    return this.Http.get<Produto[]>(API + '/produto/lista');
  }


  ProdutoCadastro(DadosProduto: Produto): Observable<any> {
    return this.Http.post<any>(API + '/produto', DadosProduto);
  }
}
