import { NgModule } from "@angular/core";
import { CategoriaFormComponent } from "./categoria-form.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
 



@NgModule({
declarations: [CategoriaFormComponent],

imports:[
  CommonModule,
  HttpClientModule,
  FormsModule,
],

exports:[CategoriaFormComponent]

})
export class CategoriaFormModule{


}