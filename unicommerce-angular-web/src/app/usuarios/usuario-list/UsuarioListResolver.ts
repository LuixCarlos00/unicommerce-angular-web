import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioService } from "../usuario/usuario.service";
import { Usuario } from "../usuario/usuario";
 
@Injectable({providedIn:'root'})
export class UsuarioListResolver implements Resolve<Observable<Usuario[]>>{


constructor(private service : UsuarioService){}



    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuario[]> | Observable<Observable<Usuario[]>> | Promise<Observable<Usuario[]>> {
       return this.service.getLit();
    }



}