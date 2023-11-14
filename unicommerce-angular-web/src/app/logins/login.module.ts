import { NgModule } from "@angular/core";
 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VmessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { CadastraLoginComponent } from "./Cadastra-Login/CadastraLogin.component";
import { LoginComopenent } from "./login/login.component";
import { LoginsComponent } from "./logins.component";
import { loginsRoutingModules } from "./logins.routing.module";
 
 
@NgModule({
    declarations:[CadastraLoginComponent,LoginComopenent,LoginsComponent],
    imports:[ CommonModule ,ReactiveFormsModule,VmessageModule,RouterModule,FormsModule,loginsRoutingModules]
})
export class LoginModule{}