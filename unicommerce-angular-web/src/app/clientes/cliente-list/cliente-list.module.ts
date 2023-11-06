import { NgModule } from '@angular/core';
import { ClienteListComponent } from './cliente-list.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteModule } from '../cliente/cliente.module';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [ClienteListComponent, ClienteComponent],

  imports: [ClienteModule, CommonModule, CardModule, DarkenOnHoverModule],
})
export class ClienteListModules {}
