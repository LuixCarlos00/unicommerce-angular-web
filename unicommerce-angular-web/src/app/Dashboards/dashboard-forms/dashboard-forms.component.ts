import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-forms',
  templateUrl: './dashboard-forms.component.html',
  styleUrls: ['./dashboard-forms.component.css'],
})
export class DashboardFormsComponent {
  constructor(private router: Router) {}





  

  ListarCategoria() {
    this.router.navigate(['/categoria/lista']);
  }

  CadastraCategoria() {
    this.router.navigate(['/categoria']);
  }







  CadastraCLiente() {
    this.router.navigate(['/cliente']);
  }

  ListarCliente() {
    this.router.navigate(['/cliente/lista']);
  }







  ListarProdutos() {
    this.router.navigate(['/produto/lista']);
  }

  CadastraProdutos() {
    this.router.navigate(['produto']);
  }
}
