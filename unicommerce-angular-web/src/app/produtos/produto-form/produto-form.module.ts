import { NgModule } from '@angular/core';
import { ProdutoFormComponent } from './produto-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProdutoFormComponent],

  imports: [FormsModule, CommonModule, HttpClientModule],

  exports: [ProdutoFormComponent],
})
export class ProdutoFormModules {}
