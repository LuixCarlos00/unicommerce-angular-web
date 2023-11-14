import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categorias/categoria-list/categoria-list.component';
import { CategoriaListResolver } from './categorias/categoria-list/categoria-list.resolver';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ClientelistResolver } from './clientes/cliente-list/cliente-list.resouver';
import { NotFoudComponent } from './erros/not-foud/not-foud.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoListResolver } from './produtos/produto-list/produto-list.resolver';
 
import { DashboardFormsComponent } from './Dashboards/dashboard-forms/dashboard-forms.component';
import { UsuarioListResolver } from './usuarios/usuario-list/UsuarioListResolver';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
 
 
const routes: Routes = [


 
{
  path:'',
  pathMatch:'full',
  redirectTo:'home'
},
  {
    path:'home',
    loadChildren: () => import ('./logins/login.module').then(x =>x.LoginModule)
    
   // canActivate : [AuthGuard],//aqui imposibilita do usuario a quando estiver logado de volta o menu de login
    
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
  path:'usuario/lista',
  component:UsuarioListComponent,
  resolve:{
    usuarios:UsuarioListResolver,
  }

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
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
