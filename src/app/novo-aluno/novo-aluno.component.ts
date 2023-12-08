import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../aluno.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css'],
})
export class NovoAlunoComponent implements OnInit {
  alunoForm!: FormGroup;
  erro: string | null = null;
  cadastroSucesso = false;

  constructor(
    private formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef  // Adicione o ChangeDetectorRef como uma dependência
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.alunoForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      matricula: ['', Validators.required],
      nascimento: ['', Validators.required],
      dataCadastro: [{ value: '', disabled: true }],
    });
  }

  salvarAluno() {
    if (this.alunoForm.valid) {
      const alunoData = this.alunoForm.value;

      const dataNascimentoFormatada = this.formatarData(alunoData.nascimento);
      alunoData.nascimento = dataNascimentoFormatada;

      this.alunoService.criarAluno(alunoData).subscribe(
        (response: any) => {
          console.log('Aluno salvo com sucesso:', response);
          this.cadastroSucesso = true;

          // Limpar os dados no formulário
          this.alunoForm.reset();
        },
        (error: any) => {
          console.error('Erro ao salvar aluno:', error);
        }
      );
    }
  }

  formatarData(data: string): string {
    const partes = data.split('/');
    return `${partes[2]}-${partes[1]}-${partes[0]}`;
  }

  fecharMensagem() {
    this.cadastroSucesso = false;
  }
}
