import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';
import { plataformDetectorService } from 'src/app/core/plataform-decector/plataform-detector.service';
 

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
})
export class ProdutoFormComponent implements OnInit {
  produtoForm!: FormGroup;
  @ViewChild('produtoNomeInput')
  produtoNomeInput!: ElementRef<HTMLInputElement>;
  produto!: Produto;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private platformDetectorService: plataformDetectorService // Fix the typo in the service name
  ) {}

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required],
      estoque: ['', Validators.required],
      categoriaId: ['', Validators.required],
    });
  }

  cadastrarProduto() {
    this.produto = this.produtoForm.value;

    this.produtoService.adicionarProduto(this.produto).subscribe(
      () => {
        alert('Produto cadastrado com sucesso!');
        this.produtoForm.reset();
        this.platformDetectorService.isPlataforBrowser() &&
          this.produtoNomeInput.nativeElement.focus();
        
      },
      (error) => {
        console.error('Erro ao cadastrar produto:', error);
        alert('Ocorreu um erro ao cadastrar o produto. Verifique os dados e tente novamente.');
        this.produtoForm.reset();
      }
    );
  }

  Menu() {
    this.router.navigate(['Dashboard']);
  }
}
