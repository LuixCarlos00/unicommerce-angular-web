import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../cliente/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente/cliente';
import { error } from 'console';
import { plataformDetectorService } from 'src/app/core/plataform-decector/plataform-detector.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
})
export class ClienteFormComponent implements OnInit {
 
  clienteForm!: FormGroup;
  @ViewChild('clienteNomeInput')
  clienteNomeInput!: ElementRef<HTMLInputElement>;
  cliente!: Cliente;
  platformDetectorService!: plataformDetectorService;

  constructor(private router:Router,private formBuilder: FormBuilder, private clienteService: ClienteService) {}
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
    
        this.clienteService
        .CadastroCliente(cliente)
        .subscribe(
          (response) => {
            console.log(response);
            alert('Cadastro de cliente feito com sucesso');
            this.clienteForm.reset();
          },
          (err) => {
          console.log(err);
          this.clienteForm.reset();
          this.platformDetectorService.isPlataforBrowser() &&
          this.clienteNomeInput.nativeElement.focus();
          alert('Dados invalidos para o cliente')
          }
          );}


        }

















Menu(){
  this.router.navigate(['Dashboard'])
}

}
