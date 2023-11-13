import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { plataformDetectorService } from 'src/app/core/plataform-decector/plataform-detector.service';

@Component({
  templateUrl: './login.component.html',

})
export class LoginComopenent implements OnInit {
  CadastroUsuario(user: { login: any; senha: any; }) {
    throw new Error('Method not implemented.');
  }
  loginForm!: FormGroup;

  @ViewChild('userNameInput')
  userNameInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private router: Router,
    private plataformDetectorService: plataformDetectorService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  login() {
    const login = this.loginForm.get('login')?.value;
    const senha = this.loginForm.get('senha')?.value;

    this.AuthService.autenticate(login, senha).subscribe(
      () => this.router.navigate(['Dashboard']),
      (err) => {
        console.log(err);
        this.loginForm.reset();
        this.plataformDetectorService.isPlataforBrowser() &&
          this.userNameInput.nativeElement.focus();
        alert('Login nao encontrado');
      }
    );
  }


  
}

