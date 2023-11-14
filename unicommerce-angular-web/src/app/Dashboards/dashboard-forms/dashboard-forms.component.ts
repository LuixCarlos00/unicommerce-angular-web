import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-forms',
  templateUrl: './dashboard-forms.component.html',
  styleUrls: ['./dashboard-forms.component.css'],
})
export class DashboardFormsComponent {
  constructor(private router: Router) {}





  

  ListarCategoria() :void{
    this.router.navigate(['/categoria/lista']);
  }

  CadastraCategoria() :void{
    this.router.navigate(['/categoria']);
  }







  CadastraCLiente():void{
    this.router.navigate(['/cliente']);
  }

  ListarCliente():void {
    this.router.navigate(['/cliente/lista']);
  }







  ListarProdutos():void {
    this.router.navigate(['/produto/lista']);
  }

  CadastraProdutos() :void{
    this.router.navigate(['produto']);
  }




  ListarUsuario():void{
    this.router.navigate(['usuario/lista'])
  }


}
