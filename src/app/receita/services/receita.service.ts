import { Injectable } from '@angular/core';
import { Receita } from '../model/receita';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const BASE_PATH = '/data/data.json';

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Receita[]>(BASE_PATH);
  }

  getId(id: number) : Observable<Receita | undefined> {
    return this.http.get<Receita[]>(BASE_PATH).pipe(map((receitas) => receitas.find((receita) => receita.id === id)));
  }
}
