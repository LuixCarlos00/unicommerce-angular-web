import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrosModules } from './erros/erros.modules';
import { CategoriasModule } from './categorias/categorias.module';
import { ClientesModules } from './clientes/clientes.modules';
import { ProdutosModules } from './produtos/produtos.modules';
 

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrosModules,

    CategoriasModule,
    ClientesModules,
    ProdutosModules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
