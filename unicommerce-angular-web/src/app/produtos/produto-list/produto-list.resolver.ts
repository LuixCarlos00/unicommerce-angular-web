import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';

@Injectable({ providedIn: 'root' })
export class ProdutoListResolver implements Resolve<Observable<Produto[]>> {
  constructor(private service: ProdutoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Produto[]> {
    return this.service.getList();
  }
}
