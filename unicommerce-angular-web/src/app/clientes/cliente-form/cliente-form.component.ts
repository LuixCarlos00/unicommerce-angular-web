import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  clienteForm!: FormGroup;
  @ViewChild('clienteNomeInput')
  clienteNomeInput!: ElementRef<HTMLInputElement>;
  cliente!: Cliente;  

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
  ) {}

  ngOnInit(): void {
   
    this.clienteForm = this.formBuilder.group({
 
    });
  }



  CadastraCliente() {
    console.log('Método de cadastro de cliente chamado.');
  
    if (this.clienteForm.valid) {
      const clienteData = this.clienteForm.value;
      this.cliente = {
        nome: clienteData.nome,
        cpf: clienteData.cpf,
        telefone: clienteData.telefone,
        endereco: {
          rua: clienteData.rua,
          numero: clienteData.numero,
          complemento: clienteData.complemento,
          bairro: clienteData.bairro,
          cidade: clienteData.cidade,
          estado: clienteData.estado,
        }
      };
  
      this.clienteService.CadastroCliente(this.cliente).subscribe(
        (response) => {
          console.log(response); // Lidar com a resposta de sucesso
          this.clienteForm.reset();
          this.clienteNomeInput.nativeElement.focus();
          alert('Cliente cadastrado com sucesso');
        },
      );
    }
  }
  

}
