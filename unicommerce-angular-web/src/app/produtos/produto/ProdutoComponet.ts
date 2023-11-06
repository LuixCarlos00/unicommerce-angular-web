import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponet {
  @Input() id: number = 0;

  @Input() nome: string = '';

  @Input() preco: number = 0;

  @Input() descricao: string = '';

  @Input() quantidade: number = 0;

  @Input() Idcategoria: number = 0;
}
