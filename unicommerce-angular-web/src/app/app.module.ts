import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriasModule } from './categorias/categorias.module';
import { ClientesModules } from './clientes/clientes.modules';
import { ErrosModules } from './erros/erros.modules';
import { ProdutosModules } from './produtos/produtos.modules';
 
 
 import { DashboardModules } from './Dashboards/Dashboard.modules';
import { CoreModule } from './core/core.module';
import { UsuarioModule } from './usuarios/usuario.module';
 

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrosModules,


    CategoriasModule,
    ClientesModules,
    ProdutosModules,
    CoreModule,
    DashboardModules,
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
