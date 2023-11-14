import { Injectable } from "@angular/core";
 
import { ActivatedRouteSnapshot, CanActivate , Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user/user.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private userService : UserService,
        private router : Router){}

    //essa classe imposibilita o usurio  volte para o menu de login quando estiver dentro da aplicacao  so  que nao esta funcionando
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean   | Observable<boolean>  | Promise<boolean> {
     
            if(this.userService.isLogged()){
               this.router.navigate(['Dashboard',this.userService.getUseName()])
               return false;
            }
               return true
        
           }
}