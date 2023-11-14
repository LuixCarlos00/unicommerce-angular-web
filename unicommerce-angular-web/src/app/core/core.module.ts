import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./auth/request.Inteceptor";
import { FooterComponent } from "./footer/footer.component";


@NgModule({

    declarations:[ FooterComponent,HeaderComponent],

    exports:[HeaderComponent,FooterComponent],

    imports:[CommonModule,RouterModule],
    
    providers:[
        {
            provide:HTTP_INTERCEPTORS,
            useClass:RequestInterceptor,
            multi:true
        }
    ]
})
export class CoreModule{}