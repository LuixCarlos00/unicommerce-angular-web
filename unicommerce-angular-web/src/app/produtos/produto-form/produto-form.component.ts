import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
})
export class ProdutoFormComponent implements OnInit {
  ProdutoForm!: FormGroup;
  @ViewChild('ProdutoNomeInput')
  ProdutoNomeInput!: ElementRef<HTMLInputElement>;
  produto!: Produto;

  constructor(
    private formBuilder: FormBuilder,
    private ProdutoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.ProdutoForm = this.formBuilder.group({});
  }

  cadastraProduto() {
    console.log('Método cadastraProduto chamado.');
    this.produto = this.ProdutoForm.value;

    this.ProdutoService.ProdutoCadastro(this.produto).subscribe((erro) => {
      console.log(erro);
      this.ProdutoForm.reset();
      this.ProdutoNomeInput.nativeElement.focus();
      alert('Dados invalidos para o produto');
    });
  }
}
