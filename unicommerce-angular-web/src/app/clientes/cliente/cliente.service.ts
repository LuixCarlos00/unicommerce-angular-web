import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "./cliente";
import { Observable } from "rxjs";

const API ='http://localhost:8080/api';

@Injectable({providedIn:'root'})
export class ClienteService{


constructor(private Http:HttpClient){}



get(id:string){
    return this.Http.get<Cliente>(API + '/cliente/' + id);
}

getLit(){
    return this.Http.get<Cliente[]>(API + '/cliente/lista');
}



CadastroCliente(dadosCliente:Cliente):Observable<any>{
    return this.Http.post
    <any>(API+'/cliente',dadosCliente);

}

}