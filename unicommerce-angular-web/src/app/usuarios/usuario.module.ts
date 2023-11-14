import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../shared/components/card/card.module';
import { UsuarioListaModule } from './usuario-list/usuario-lista.module';



@NgModule({
  declarations: [],
  imports: [
    UsuarioListaModule,
    CommonModule,
    
  ],
  exports:[UsuarioListaModule]
})
export class UsuarioModule { }
