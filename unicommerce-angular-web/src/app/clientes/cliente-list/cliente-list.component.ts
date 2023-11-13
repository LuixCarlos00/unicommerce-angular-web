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
  clienteListComponent: Cliente[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clienteListComponent = this.activatedRoute.snapshot.data['clientes'];
  }

  load() {
    this.clienteService.getLit().subscribe((cliente) => {
      this.clienteListComponent = this.clienteListComponent.concat(cliente);
    });
  }
}
