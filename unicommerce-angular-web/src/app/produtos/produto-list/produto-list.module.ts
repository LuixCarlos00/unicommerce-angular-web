import { NgModule } from '@angular/core';
import { ProdutoListComponent } from './produto-list.component';
import { ProdutoModules } from '../produto/produto.modules';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import { ProdutoComponet } from './produto/produto.component';

@NgModule({
  declarations: [ProdutoListComponent, ProdutoComponet ],
  imports: [ProdutoModules, CommonModule, CardModule, DarkenOnHoverModule],
 
})
export class ProdutoListModule {}
