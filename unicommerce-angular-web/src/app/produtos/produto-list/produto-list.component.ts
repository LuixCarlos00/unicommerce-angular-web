import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
})
export class ProdutoListComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ProdutoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.produtos = this.activatedRoute.snapshot.data['produtos'];
  }

  load() {
    this.ProdutoService.getList().subscribe((produtos) => {
      this.produtos = this.produtos.concat(produtos);
    });
  }
}
