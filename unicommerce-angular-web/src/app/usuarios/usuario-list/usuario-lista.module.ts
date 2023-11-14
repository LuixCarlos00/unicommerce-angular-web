import { NgModule } from "@angular/core";
import { UsuarioComponent } from "./usuario/usuario.component";
import { CardModule } from "src/app/shared/components/card/card.module";
import { UsuarioListComponent } from "./usuario-list.component";
import { CommonModule } from "@angular/common";
import { DarkenOnHoverModule } from "src/app/shared/directives/darken-on-hover/darken-on-hover.module";
 

@NgModule({
declarations:[UsuarioComponent,UsuarioListComponent],
imports:[CardModule,CommonModule, CardModule, DarkenOnHoverModule],
exports:[UsuarioComponent]
})
export class UsuarioListaModule{}