import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ClienteFormComponent } from "./cliente-form.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
    declarations:[ClienteFormComponent],

    imports:[
        CommonModule,
        HttpClientModule,
        FormsModule,
    ],
    exports:[ClienteFormComponent]
})
export class ClieteFormMoules{}
