import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent  implements OnInit{

  usuarioListComponent: Usuario[]=[];
  constructor(
    private activateRoute:ActivatedRoute,
    private usuarioService: UsuarioService
  ){}



  ngOnInit(): void {
    this.usuarioListComponent = this.activateRoute.snapshot.data['usuarios'];
  }


  load(){
    this.usuarioService.getLit().subscribe((usuario)=>{
      this.usuarioListComponent=this.usuarioListComponent.concat(usuario);
    })
  }
}
