import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from "./cliente-form.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
    declarations:[ClienteFormComponent],

    imports:[
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    exports:[ClienteFormComponent]
})
export class ClieteFormMoules{}
