import { Categoria } from './category.enum';

export interface ServeiApiResponse {
  id: number;
  serveiSolicitat: string;
  descripcio: string;
  categoriaSolicitada: Categoria[];
  serveiOfert: string;
  categoriaOfertada: Categoria[];
  autor: string;
  dataCreació: string;
  esActiu: boolean;
  ubicacio?: string;
  popular: boolean;
  notes: string[];
}
export interface ServeiCataleg {
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
  popular: boolean;
  notes: string[];
}
