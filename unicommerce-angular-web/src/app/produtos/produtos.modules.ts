import { NgModule } from '@angular/core';
import { ProdutoFormModules } from './produto-form/produto-form.module';

import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { ProdutoModules } from './produto/produto.modules';
import { ProdutoListModule } from './produto-list/produto-list.module';

@NgModule({
  imports: [
    ProdutoModules,
    ProdutoFormModules,
    ProdutoListModule,
    DarkenOnHoverModule,
  ],
})
export class ProdutosModules {}
