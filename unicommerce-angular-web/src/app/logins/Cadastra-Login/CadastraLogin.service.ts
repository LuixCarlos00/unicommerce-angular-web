import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';

const API = 'http://localhost:8080/api';

@Injectable({ providedIn: 'root' })
export class CadastraLoginService {

  constructor(private Http: HttpClient) {}

  CadastroUsuario(DadosUsuario: User): Observable<any> {
    return this.Http.post<any>(API + '/usuario', DadosUsuario);
  }
  

  
}
