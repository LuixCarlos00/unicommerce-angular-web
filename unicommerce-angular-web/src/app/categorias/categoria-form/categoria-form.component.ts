import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria/categorai.service';
import { Categoria } from '../categoria/categoria';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css'],
})
export class CategoriaFormComponent implements OnInit {
  CategoriaForm!: FormGroup;
  @ViewChild('CategoriaNomeInput')
  CategoriaNomeInput!: ElementRef<HTMLInputElement>;
  categoria!: Categoria;

  constructor(
    private formBuilder: FormBuilder,
    private CategoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.CategoriaForm = this.formBuilder.group({});
  }

  cadastraCategoria() {
    console.log('Método cadastraCategoria chamado.');
    this.categoria = this.CategoriaForm.value;

    this.CategoriaService.CadastroCategoria(this.categoria).subscribe(
      (erro) => {
        console.log(erro);
        this.CategoriaForm.reset();
        this.CategoriaNomeInput.nativeElement.focus();
        alert('Dados invalidos para o categoria');
      }
    );
  }
}
