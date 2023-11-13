import { NgModule } from "@angular/core";
import { CategoriaFormComponent } from "./categoria-form.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from "src/app/shared/components/vmessage/vmessage.module";
 



@NgModule({
declarations: [CategoriaFormComponent],

imports:[
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  VmessageModule
  
],

exports:[CategoriaFormComponent]

})
export class CategoriaFormModule{


}