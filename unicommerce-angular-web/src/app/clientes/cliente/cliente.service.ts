import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';   
 
import { tokenService } from 'src/app/core/token/token.service';
import { AuthService } from 'src/app/core/auth/auth.service';
 

const API = 'http://localhost:8080/api';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  adicionarCliente(cliente: Cliente) {
    throw new Error('Method not implemented.');
  }
  jwtHelper: JwtHelperService;
  authService!: AuthService;  

  constructor(private http: HttpClient, private tokenService:tokenService ) {
    this.jwtHelper = new JwtHelperService();
    
  }

  get(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${API}/cliente/${id}`);
  }

  getLit(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API}/cliente/lista`);
  }


  CadastroCliente(dadosCliente: Cliente): Observable<any> {
    return this.http.post<any>(`${API}/cliente`, dadosCliente  );
  }


 

  

 

}
