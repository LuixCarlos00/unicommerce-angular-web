import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "../../produto/produto";
 
  @Component({
    selector: 'ap-produto',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.css']
  })
  export class ProdutoComponet implements OnInit {

    @Input() produtoComponet: Produto[] = [];
  rows: any[] = [];
    
  constructor(private route: Router) {}
  
  
  Menu(){
    this.route.navigate(['Dashboard'])
      }
  
      ngOnInit(): void {
        
      }
   
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['produtoComponet']) {
      this.rows = this.groupColumns(this.produtoComponet);
    }
  }
  
  groupColumns(produtos: Produto[]) {
    const newRows = [];

    for (let index = 0; index < produtos.length; index += 3) {
      newRows.push(produtos.slice(index, index + 3));
    }
    return newRows;
  }
}
  


  