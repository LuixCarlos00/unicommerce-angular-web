import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { Router } from '@angular/router';
import { lowerCaseValidator } from 'src/app/shared/validator/lower-case.validator';
import { CadastraLoginService } from './CadastraLogin.service';
import { ClienteService } from 'src/app/clientes/cliente/cliente.service';
import { Usuario } from './CadastroClienteUsuario';
import { Cliente } from 'src/app/clientes/cliente/cliente';
import { ClieteFormMoules } from 'src/app/clientes/cliente-form/cliente-form.module';
import { plataformDetectorService } from 'src/app/core/plataform-decector/plataform-detector.service';

@Component({
  templateUrl: './CadastraLogin.component.html',
})
export class CadastraLoginComponent implements OnInit {
 
  signupForm!: FormGroup;
  clienteForm!: FormGroup;
  plataformDetectorService!: plataformDetectorService;

  @ViewChild('CadastraloginInput')
  clienteNomeInput!: ElementRef<HTMLInputElement>;
  CadastraloginInput: any;

  constructor(
    private  clienteSevice : ClienteService,//////tentativa de cadastra cliente co ususario 
    private formBuilder: FormBuilder,
    private signupService: CadastraLoginService,
    private router  : Router
  ) {}

  ngOnInit(): void {
     
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: [''],
      endereco: this.formBuilder.group({
        rua: [''],
        numero: [''],
        complemento: [''],
        bairro: [''],
        cidade: [''],
        estado: [''],
      }),
      Login: this.formBuilder.group({
        login: ['', Validators.required],
        senha: ['', Validators.required],
      }),
    });
  }

 



  CadastroCliente() {
    if (this.clienteForm.valid) {
      const cliente: Cliente = {
        nome: this.clienteForm.get('nome')?.value,
        cpf: this.clienteForm.get('cpf')?.value,
        telefone: this.clienteForm.get('telefone')?.value,
        endereco: {
          rua: this.clienteForm.get('endereco.rua')?.value,
          numero: this.clienteForm.get('endereco.numero')?.value,
          complemento: this.clienteForm.get('endereco.complemento')?.value,
          bairro: this.clienteForm.get('endereco.bairro')?.value,
          cidade: this.clienteForm.get('endereco.cidade')?.value,
          estado: this.clienteForm.get('endereco.estado')?.value,
        },
        usuario: {
          login: this.clienteForm.get('Login.login')?.value,
          senha: this.clienteForm.get('Login.senha')?.value,
        }
      };
  
      this.clienteSevice.CadastroCliente(cliente).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['']);
          alert('Cadastro de cliente feito com sucesso');
          alert('Redirecionando para a tela de login...');
        },
        (error) => {
          console.error(error);
          this.signupForm.reset();
          this.plataformDetectorService.isPlataforBrowser()&&
            this.CadastraloginInput.nativeElement.focus();
          alert('Erro ao cadastrar cliente');
        }
      );
    } else {
      alert('Por favor, preencha corretamente todos os campos');
    }
  }
  


 

  Menu(){
    this.router.navigate([''])
  }



 


}
