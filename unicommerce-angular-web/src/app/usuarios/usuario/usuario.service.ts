import { Injectable } from "@angular/core";
 
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { tokenService } from "../../core/token/token.service";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "src/app/usuarios/usuario/usuario";
 
const API = 'http://localhost:8080/api';


@Injectable({ providedIn: 'root' })
export class UsuarioService {
    isLogged() {
        throw new Error("Method not implemented.");
    }

   

    constructor(
        private http: HttpClient,
        private tokenService: tokenService) {

         
    }
 

   
    getLit(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${API}/usuario/lista`);
      }
    
   

 
 
}

 