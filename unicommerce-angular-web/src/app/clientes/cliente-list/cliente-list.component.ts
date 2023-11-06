import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clientes = this.activatedRoute.snapshot.data['clientes'];
  }

  load() {
    this.clienteService.getLit().subscribe((cliente) => {
      this.clientes = this.clientes.concat(cliente);
    });
  }
}
