import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginsComponent } from "./logins.component";
import { LoginComopenent } from "./login/login.component";
import { CadastraLoginComponent } from "./Cadastra-Login/CadastraLogin.component";

 
const routes: Routes = [
  {
    path:'',
    component: LoginsComponent,
    
    children:[
      {
        path: '',
        component: LoginComopenent
       },
       {
        path: 'criarLogin',
        component: CadastraLoginComponent
      
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class loginsRoutingModules {}
