import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Usuario } from '../../usuario/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private route : Router
    
    ){}

@Input() user : Usuario[]=[];
rows:any[]=[]



Menu(){
  this.route.navigate(['Dashboard'])
    }


ngOnInit(): void {
  throw new Error('Method not implemented.');
}



ngOnChanges(changes:SimpleChanges){
  if(changes['usuarios'])
  this.rows = this.groupColuns(this.user );
}

 


groupColuns(user:Usuario[]){ 

  const newRows=[];

  for(let index = 0 ; index <this.user.length; index+=3){
    newRows.push(user.slice(index,index+3));
  }
  return newRows;

}


}
