import { Injectable } from "@angular/core";
import { User } from "./user";
import { BehaviorSubject, Subject } from "rxjs";
import { tokenService } from "../token/token.service";
 

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<User>({});
    private userName!:any;

    constructor(private tokenService: tokenService) {

        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    setToken(token: any) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const jwt_decode = require('jwt-decode');
        const token:any  = this.tokenService.getToken();
        const user:User  = jwt_decode(token) as User;  
        this.userName = user.login;
        this.userSubject.next(user);
    }


    logout(){
        this.tokenService.removeToken;
        this.userSubject.next; //next.(null);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }

    
getUseName(){
    return this.userName
  }
}

 