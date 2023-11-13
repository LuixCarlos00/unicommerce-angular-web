import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrosModules } from './erros/erros.modules';
import { CategoriasModule } from './categorias/categorias.module';
import { ClientesModules } from './clientes/clientes.modules';
import { ProdutosModules } from './produtos/produtos.modules';
 
import { CoreModele } from './core/core.mdule';
 import { DashboardModules } from './Dashboards/Dashboard.modules';
 import { LoginModule } from './logins/login.module';
 

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrosModules,

    LoginModule,
    CategoriasModule,
    ClientesModules,
    ProdutosModules,
    CoreModele,
    DashboardModules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
