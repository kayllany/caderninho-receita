import { ActivatedRoute } from '@angular/router';
import { ReceitaService } from './../services/receita.service';
import { Component, OnInit } from '@angular/core';
import { Receita } from '../model/receita';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ReceitaItem } from '../model/receita-item';

@Component({
  selector: 'app-receita-detalhe',
  standalone: false,
  templateUrl: './receita-detalhe.component.html',
  styleUrl: './receita-detalhe.component.scss'
})
export class ReceitaDetalheComponent implements OnInit {
  public receita_id: number = 0;
  public receita = {} as Receita;
  public exibir_consideracoes: boolean = false;
  public label_consideracoes: string = "Considerações";
  public icone_consideracoes: string = "pi pi-heart-fill";
  
  constructor(
    private service: ReceitaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.receita_id = Number(this.route.snapshot.paramMap.get('id'));

    if(this.receita_id)
      this.get()
  }

  get(){
    this.service.getId(this.receita_id).subscribe({
      next: (receita) => {
        if(receita)
        this.receita = receita
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  riscar(item: ReceitaItem){
    item.finalizado = !item.finalizado;
  }

  toogleConsideracoes(){
    this.exibir_consideracoes = !this.exibir_consideracoes;
    this.label_consideracoes = this.exibir_consideracoes? "Voltar para receita" : "Considerações"
    this.icone_consideracoes = this.exibir_consideracoes? "pi pi-book" : "pi pi-heart-fill"
  }

}
