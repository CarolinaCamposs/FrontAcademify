export interface Aluno {
  id: number;
  nome: string;
  matricula: string;
  nascimento: string; // ou Date, dependendo do formato que sua API retorna
  dataCadastro: string; // ou Date, dependendo do formato que sua API retorna
}
