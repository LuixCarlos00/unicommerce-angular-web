import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
 

@Injectable({
  providedIn: 'root',  
})
export class AuthService {
  
  constructor(private http: HttpClient,
            private UserService :UserService) {}

  autenticate(login: string, senha: string) {


    return this.http.post('/api/login', { "login":login , "senha": senha },{observe:'response'} )
    .pipe(tap(res =>{
      const authToken = res.headers.get('x-access-token');
      this.UserService.setToken(authToken);
      console.log(`User ${login} authenticated with token ${authToken}`)
    }));
  }
}
