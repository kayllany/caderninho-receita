import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitaRoutingModule } from './receita-routing.module';
import { ReceitaListarComponent } from './receita-listar/receita-listar.component';
import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReceitaListarComponent,
    ReceitaDetalheComponent
  ],
  imports: [
    CommonModule,
    ReceitaRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReceitaModule { }
