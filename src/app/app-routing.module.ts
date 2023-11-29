import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component';

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'home', component: HomeComponent},
   {path: 'aluno-lista', component: AlunoListaComponent},
   {path: 'novo-aluno', component: NovoAlunoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
