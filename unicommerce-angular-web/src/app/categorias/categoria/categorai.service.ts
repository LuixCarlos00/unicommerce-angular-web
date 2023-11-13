import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Categoria } from "./categoria";
import { Observable } from "rxjs";


const API = 'http://localhost:8080/api';

@Injectable({providedIn : 'root'})
export class  CategoriaService{

constructor(private Http: HttpClient){}



get(id:string){
    return this.Http.get<Categoria>(API+  '/categoria/' + id );
}



getList(){
    return  this.Http.get<Categoria[]>(API+ '/categoria/lista');
}


CadastroCategoria(dadosCategoria:Categoria):Observable<any>{
    return this.Http.post<any>(API+'/categoria',dadosCategoria);

}


}