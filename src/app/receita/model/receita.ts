import { Comentario } from "./comentario";
import { ReceitaItem } from "./receita-item";

export interface Receita {
    id: number;
    titulo: string;
    ingredientes: ReceitaItem[];
    modo_preparo: ReceitaItem[];
    observacoes: string[];
    consideracoes: Comentario[];
}