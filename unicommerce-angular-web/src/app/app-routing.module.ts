import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaListResolver } from './categorias/categoria-list/categoria-list.resolver';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { NotFoudComponent } from './erros/not-foud/not-foud.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { CategoriaListComponent } from './categorias/categoria-list/categoria-list.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ClientelistResolver } from './clientes/cliente-list/cliente-list.resouver';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoListResolver } from './produtos/produto-list/produto-list.resolver';
 
import { DashboardFormsComponent } from './Dashboards/dashboard-forms/dashboard-forms.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComopenent } from './logins/login/login.component';
import { CadastraLoginComponent } from './logins/Cadastra-Login/CadastraLogin.component';
 
 
const routes: Routes = [
  {
    path: '',
    component: LoginComopenent,
    //canActivate : [AuthGuard] aqui imposibilita do usuario a quando estiver logado de volta o menu de login
  },
  {
    path: 'criarLogin',
    component: CadastraLoginComponent
  
  },






  {
    path: 'categoria',
    component: CategoriaFormComponent,
  },
  {
    path: 'categoria/lista',
    component: CategoriaListComponent,
    resolve: {
      categorias: CategoriaListResolver,
    },
  },






  {
    path: 'cliente',
    component: ClienteFormComponent,
  },
  {
    path: 'cliente/lista',
    component: ClienteListComponent,
    resolve: {
      clientes: ClientelistResolver,
    },
  },








  {
    path: 'produto',
    component: ProdutoFormComponent,
  },
  {
    path: 'produto/lista',
    component: ProdutoListComponent,
    resolve: {
      produtos: ProdutoListResolver,
    },
  },
  
  {
    path: 'Dashboard',
    component: DashboardFormsComponent,
  },

  {
    path: '**',
    component: NotFoudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
