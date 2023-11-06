import { NgModule } from "@angular/core";

import { ClieteFormMoules } from "./cliente-form/cliente-form.module";
import { ClienteModule } from "./cliente/cliente.module";
import { ClienteListModules } from "./cliente-list/cliente-list.module";
import { DarkenOnHoverModule } from "../shared/directives/darken-on-hover/darken-on-hover.module";
 



@NgModule({
 
imports:[
    ClienteModule,
    ClieteFormMoules,
    ClienteListModules,
    DarkenOnHoverModule
    
    ]


})
export class ClientesModules{}