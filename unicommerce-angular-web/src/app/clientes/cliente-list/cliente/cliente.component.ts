import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Cliente } from '../../cliente/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() clientes :Cliente[] =[];
  rows:any[]=[]
  
constructor(
private route : Router

){}


Menu(){
  this.route.navigate(['Dashboard'])
    }

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

ngOnChanges(changes:SimpleChanges){
  if(changes['clientes'])
  this.rows = this.groupColuns(this.clientes );
}


groupColuns(cliente:Cliente[]){

  const newRows =[];

  for(let index = 0; index <cliente.length; index+=3){
    newRows.push( cliente.slice(index,index+3));
  }
  return newRows;
}



}
