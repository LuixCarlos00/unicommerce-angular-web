import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Produto } from '../../produto/produto';

@Component({
  selector: 'ap-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponet implements OnInit {
  @Input() produtos: Produto[] = [];
  rows: any[] = [];
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['produtos']) this.rows = this.groupColumns(this.produtos);
  }

  groupColumns(produtos: Produto[]) {
    const newRows = [];

    for (let index = 0; index < produtos.length; index += 3) {
      newRows.push(produtos.slice(index, index + 3));
    }
    return newRows;
  }
}
