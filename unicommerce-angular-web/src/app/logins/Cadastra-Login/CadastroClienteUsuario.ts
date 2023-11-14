export interface Usuario {
  id: number;
  login: string;
  senha: string;
}

export interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  endereco: Endereco;
  usuario: Usuario;
}

export interface Endereco {
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}
