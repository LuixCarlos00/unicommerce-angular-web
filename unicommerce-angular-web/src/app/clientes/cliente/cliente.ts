export interface Cliente {
  id?: number;
  nome: string;
  cpf: string;
  telefone: string;
  endereco: Endereco;
  usuario: Usuario;
}

export interface Endereco {
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface Usuario {
  id?: number;
  login: string;
  senha: string;
}
