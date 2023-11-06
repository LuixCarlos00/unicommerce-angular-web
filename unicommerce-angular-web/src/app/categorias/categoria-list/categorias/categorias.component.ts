import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Categoria } from '../../categoria/categoria';

@Component({
  selector: 'ap-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {


  @Input() categorias: Categoria[] = [];
  rows: any[] = [];
  
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  ngOnChanges(changes: SimpleChanges) {

    if(changes['categorias']) 
      this.rows = this.groupColumns(this.categorias);
  }

  groupColumns(categorias: Categoria[]) {
    const newRows = [];

    for(let index = 0; index < categorias.length; index+=3) {
      newRows.push(categorias.slice(index, index + 3));
    }                            
    return newRows;
  }

}
