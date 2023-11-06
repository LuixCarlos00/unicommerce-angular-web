import { NgModule } from '@angular/core';
 
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoComponet } from './ProdutoComponet';

@NgModule({
  declarations: [ProdutoComponet],

  imports: [CommonModule, HttpClientModule],

  exports: [ProdutoComponet],
})
export class ProdutoModules {}
