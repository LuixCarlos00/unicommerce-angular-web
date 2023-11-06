import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Cliente } from '../../cliente/cliente';

@Component({
  selector: 'ap-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() clientes:Cliente[] =[];
  rows:any[]=[]
  
constructor(){}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

ngOnChanges(changes:SimpleChanges){
  if(changes['clientes'])
  this.rows = this.groupColuns(this.clientes);
}


groupColuns(cliente:Cliente[]){

  const newRows =[];

  for(let index = 0; index <cliente.length; index+=3){
    newRows.push( cliente.slice(index,index+3));
  }
  return newRows;
}



}
