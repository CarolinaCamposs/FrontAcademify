import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private apiUrl = 'http://localhost:8080/api/aluno';

  constructor(private http: HttpClient) { }

  listarAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.apiUrl}/listar`);
  }

  criarAluno(alunoData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/incluir`, alunoData);
  }

  removerAluno(alunoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${alunoId}`);
  }

  atualizarAluno(alunoId: number, aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.apiUrl}/editar/${alunoId}`, aluno);
  }
  obterAlunoPorId(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/get/${id}`);
  }


}
