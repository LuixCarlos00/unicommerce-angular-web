import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { Categoria } from 'src/app/categorias/categoria/categoria';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

const API = 'http://localhost:8080/api';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  constructor(private Http: HttpClient) {}

  get(id: string) {
 
    return this.Http.get<Produto[]>(API + '/produto/' + id);
  }

  getList() {
    return this.Http.get<Produto[]>(API + '/produto/lista');
  }

  adicionarProduto(produto: Produto): Observable<any> {
    return this.Http
    .post<any>(API + '/produto', produto);
}

  ProdutoCadastro(DadosProduto: Produto): Observable<any> {
    return this.Http.post<any>(API + '/produto', DadosProduto)
      .pipe(
        catchError(error => {
          console.error('Error in ProdutoCadastro:', error);
          throw error; // rethrow the error for further handling
        })
      );
  }
  
}
