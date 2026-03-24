import { Categoria } from './category.enum';

export interface Servei {
  id: number;
  serveiSolicitat: string;
  descripcio: string;
  categoriaSolicitada: Categoria[];
  serveiOfert: string;
  categoriaOfertada: Categoria[];
  autor: string;
  dataCreació: Date;
  esActiu: boolean;
  ubicacio?: string;
}
