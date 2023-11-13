import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  
import { Categoria } from '../categoria/categoria';
import { Router } from '@angular/router';
import { CategoriaService } from '../categoria/categorai.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css'],
})
export class CategoriaFormComponent implements OnInit {
  categoriaForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.categoriaForm = this.formBuilder.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      status: [ ], // Valor padrão para o checkbox
    });
  }

  cadastraCategoria() {
    if (this.categoriaForm.valid) {
      const categoria: Categoria = {
        nome: this.categoriaForm.get('nome')?.value,
        status: this.categoriaForm.get('status')?.value === null 
          ? false 
          : this.categoriaForm.get('status')?.value,
      };
  
      this.categoriaService.CadastroCategoria(categoria).subscribe(
        (response) => {
          console.log(response);
          alert('Cadastro feito com sucesso');
          this.categoriaForm.reset();
        },
        (error) => {
          console.error(error);
          alert('Dados inválidos para a categoria');
        }
      );
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
  
  
  Menu() {
    this.router.navigate(['Dashboard']);
  }
}
