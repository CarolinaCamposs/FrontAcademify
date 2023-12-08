import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';
import { format, parse } from 'date-fns';

@Component({
  selector: 'app-editaraluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css'],
})
export class EditarAlunoComponent implements OnInit {
  alunoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.obterDetalhesAluno();
  }

  inicializarFormulario(): void {
    this.alunoForm = this.fb.group({
      nome: ['', [Validators.required]],
      matricula: ['', [Validators.required]],
      nascimento: ['', [Validators.required]],
    });
  }

  obterDetalhesAluno(): void {
    const alunoId: number = +this.route.snapshot.paramMap.get('id')!;
    this.alunoService.obterAlunoPorId(alunoId).subscribe((aluno: Aluno) => {
     aluno.nascimento=this.formatarDataVisualizacao(aluno.nascimento.toString())
      // Não formate a data aqui, mantenha-a no formato original
      this.alunoForm.patchValue({ ...aluno });
    });
  }

  atualizarAluno(): void {
    const alunoId: number = +this.route.snapshot.paramMap.get('id')!;
    const aluno: Aluno = this.alunoForm.value;

    // Crie uma cópia do objeto aluno para não modificar o original
    const alunoAtualizado: Aluno = { ...aluno };

    this.alunoService.atualizarAluno(alunoId, alunoAtualizado).subscribe(() => {
      this.router.navigate(['/aluno-lista']);
    });
  }

  formatarDataVisualizacao(data: string): string {
    if (data == "" || data == null || data == undefined)
      return "";
    var dataSplit = data.toString().split('-').reverse();
    return dataSplit.join('/');
  }

  formatarDataEnvio(data: string): string {
    const parsedDate = parse(data, 'dd/MM/yyyy', new Date());
    return format(parsedDate, 'yyyy-MM-dd');
  }
}
