import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {


  @Input() nome: string =''

  @Input()  cpf: number=0

  @Input() telefone: number=0

  @Input() rua: string=''

  @Input() numero: number=0

  @Input() complemento: string=''

  @Input()  bairro: string=''

  @Input() cidade: string=''
  
  @Input() estado: string=''

}
