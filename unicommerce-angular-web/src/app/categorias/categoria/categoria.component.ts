import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  @Input() id: number = 0;

  @Input()  nome : string='' ;

  @Input()  ativo: boolean = false;


}
