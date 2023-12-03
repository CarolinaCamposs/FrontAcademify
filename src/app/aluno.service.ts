// aluno.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private apiUrl = 'http://localhost:8080/api/aluno'; 

  constructor(private http: HttpClient) {}

  // LISTAR ALUNOS 
  listarAlunos(): Observable<Aluno[]> {
  return this.http.get<Aluno[]>(`${this.apiUrl}/listar`);
}
  // CADASTRAR NOVO ALUNO 
  criarAluno(alunoData: any): Observable<any> {
    // Lógica para enviar os dados do aluno para o servidor
    return this.http.post(`${this.apiUrl}/incluir`, alunoData);
  }

  // getAlunoById(id: number): Observable<Aluno> {
  //   return this.http.get<Aluno>(`${this.apiUrl}/api/aluno/get/${id}`);
  // }

  // incluirAluno(aluno: Aluno): Observable<Aluno> {
  //   return this.http.post<Aluno>(`${this.apiUrl}/api/aluno/incluir`, aluno);
  // }

  // editarAluno(aluno: Aluno): Observable<Aluno> {
  //   return this.http.put<Aluno>(`${this.apiUrl}/api/aluno/editar`, aluno);
  // }

  // removerAluno(aluno: Aluno): Observable<Aluno> {
  //   return this.http.post<Aluno>(`${this.apiUrl}/api/aluno/remover`, aluno);
  // }

  // getTotalAlunos(): Observable<number> {
  //   return this.http.get<number>(`${this.apiUrl}/api/aluno/getTotal`);
  // }
}
