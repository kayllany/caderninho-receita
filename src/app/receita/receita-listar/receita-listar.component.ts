import { Component } from '@angular/core';
import { ReceitaService } from '../services/receita.service';
import { Receita } from '../model/receita';

@Component({
  selector: 'app-receita-listar',
  standalone: false,
  templateUrl: './receita-listar.component.html',
  styleUrl: './receita-listar.component.scss',
})
export class ReceitaListarComponent {
  public receitas: Receita[] = [];
  public receitas_filtradas: Receita[] = [];
  visible: boolean = false;
  filter: string = '';

  constructor(private service: ReceitaService) {}

  ngOnInit(): void {
    this.getReceitas();
  }

  getReceitas() {
    this.service.getAll().subscribe((res) => {
      this.receitas = res.sort((a, b) => a.titulo.localeCompare(b.titulo));
      this.receitas_filtradas = this.receitas;
    });
  }

  filtrar() {
    if (!this.filter) {
      this.receitas_filtradas = this.receitas;
    } else {
      this.receitas_filtradas = this.receitas.filter((r) =>
        r.titulo.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
      );
    }
  }
}
