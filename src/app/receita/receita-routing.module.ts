import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaListarComponent } from './receita-listar/receita-listar.component';
import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';

const routes: Routes = [
  {
    path:'',
    component: ReceitaListarComponent
  },
  {
    path:'detalhes/:id',
    component: ReceitaDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaRoutingModule { }
