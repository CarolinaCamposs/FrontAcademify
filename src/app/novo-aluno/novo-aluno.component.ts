import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css'],

})
export class NovoAlunoComponent implements OnInit {
  alunoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.alunoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      matricula: ['', Validators.required],
      nascimento: ['', Validators.required],
      dataCadastro: [{ value: '', disabled: true }],
    });
  }

  salvarAluno() {
    if (this.alunoForm.valid) {
      const alunoData = this.alunoForm.value;
      this.alunoService.criarAluno(alunoData).subscribe(
        (response: any) => {
          console.log('Aluno salvo com sucesso:', response);
        },
        (error: any) => {
          console.error('Erro ao salvar aluno:', error);
        }
      );
    }
  }
}
