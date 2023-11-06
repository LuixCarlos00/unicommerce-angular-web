import { NgModule } from "@angular/core";
import { CategoriaListComponent } from "./categoria-list.component";

import { CategoriasComponent } from './categorias/categorias.component';

import { CardModule } from "src/app/shared/components/card/card.module";
import { DarkenOnHoverModule } from "src/app/shared/directives/darken-on-hover/darken-on-hover.module";
import { CommonModule } from "@angular/common";
import { CategoriaModule } from "../categoria/categoria.module";



@NgModule({
    declarations:[
        CategoriaListComponent,
        CategoriasComponent

        ],

    imports:[
        CategoriaModule, 
        CommonModule,
        CardModule,
        DarkenOnHoverModule
     ],

})
export class CategoriaListModule{}





 