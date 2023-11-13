import { NgModule } from "@angular/core";
 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VmessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { CadastraLoginComponent } from "./Cadastra-Login/CadastraLogin.component";
import { LoginComopenent } from "./login/login.component";
 
 
@NgModule({
    declarations:[CadastraLoginComponent,LoginComopenent],
    imports:[ CommonModule ,ReactiveFormsModule,VmessageModule,RouterModule,FormsModule]
})
export class LoginModule{}