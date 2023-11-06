export interface Cliente {
  nome: string;
  cpf: number;
  telefone: number;
  endereco: {
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
}
