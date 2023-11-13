import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { Router } from '@angular/router';
import { lowerCaseValidator } from 'src/app/shared/validator/lower-case.validator';
import { CadastraLoginService } from './CadastraLogin.service';
import { ClienteService } from 'src/app/clientes/cliente/cliente.service';

@Component({
  templateUrl: './CadastraLogin.component.html',
})
export class CadastraLoginComponent implements OnInit {
CadastroCliente() {
throw new Error('Method not implemented.');
}
  signupForm!: FormGroup;
  clienteForm!: FormGroup<any>;

  constructor(
    private  clienteSevice : ClienteService,//////tentativa de cadastra cliente co ususario 
    private formBuilder: FormBuilder,
    private signupService: CadastraLoginService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      login: [
        '',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.pattern(/^[a-z0-9_-]+$/),
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(14),
        ],
      ],
    });
  }

 



  CadastraUsuarios() {
    if (this.signupForm.valid) {
      const user = {
        login: this.signupForm.get('login')?.value,
        senha: this.signupForm.get('senha')?.value,
      };
      
      this.signupService.CadastroUsuario(user).subscribe(
        (response) => {
          console.log(response);
  
          
          this.router.navigate(['']);
  
           
          alert('Cadastro feito com sucesso');
          alert('Redirecionando para a tela de login...');
        },
        (error) => {
          console.error(error);
  
          
          alert('Dados inválidos para o cadastro de usuários');
        }
      );
    } else {
      alert('Dados inválidos para o cadastro de usuários');
    }
  
    // Reset do formulário após a navegação ou alerta
    this.signupForm.reset();
  }
  
  Menu(){
    this.router.navigate([''])
  }

}
