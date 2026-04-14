import { ServeiApiResponse, ServeiCataleg } from '../models/servei.model';

export function adaptarServeiApi(api: ServeiApiResponse): ServeiCataleg {
  return {
    id: Number(api.id),
    serveiSolicitat: api.serveiSolicitat,
    descripcio: api.descripcio,
    categoriaSolicitada: api.categoriaSolicitada,
    serveiOfert: api.serveiOfert,
    categoriaOfertada: api.categoriaOfertada,
    autor: api.autor,
    dataCreació: new Date(api.dataCreació),
    esActiu: api.esActiu,
    ubicacio: api.ubicacio,
    popular: api.popular,
    notes: api.notes,
  };
}

export function adaptarServeisApi(
  apiResponses: ServeiApiResponse[],
): ServeiCataleg[] {
  return apiResponses.map(adaptarServeiApi);
}
