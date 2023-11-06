import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core'
import { Observable } from "rxjs";
import { ClienteService } from "../cliente/cliente.service";
import { Cliente } from "../cliente/cliente";


 

@Injectable({ providedIn: 'root'})
export class ClientelistResolver implements Resolve<Observable<Cliente[]>>{

    constructor(private service: ClienteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente[]> {
 
        return this.service.getLit();
    }
}