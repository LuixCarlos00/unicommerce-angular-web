import { NgModule } from "@angular/core";
 
import { CategoriaFormModule } from "./categoria-form/categoria-form.module";
import { CategoriaListModule } from "./categoria-list/categoria-list.module";
import { DarkenOnHoverModule } from "../shared/directives/darken-on-hover/darken-on-hover.module";
import { CategoriaModule } from "./categoria/categoria.module";
import { CategoriaComponent } from "./categoria/categoria.component";



@NgModule({

 
     
    imports:[CategoriaModule,
             CategoriaFormModule,
             CategoriaListModule,
             DarkenOnHoverModule
         ],

 
    
  

})
export class CategoriasModule{


}