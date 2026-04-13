import { ServeiApiResponse, ServeiCataleg } from '../models/servei.model';

/**
 * Adaptar un sol servei de l'API al model intern
 */
export function adaptarServeiApi(api: ServeiApiResponse): ServeiCataleg {
  return {
    id: Number(api.id),
    serveiSolicitat: api.serveiSolicitat,
    descripcio: api.descripcio,
    categoriaSolicitada: api.categoriaSolicitada,
    serveiOfert: api.serveiOfert,
    categoriaOfertada: api.categoriaOfertada,
    autor: api.autor,
    dataCreació: new Date(api.dataCreació), // 🔥 conversió important
    esActiu: api.esActiu, // 🔥 canvi de nom
    ubicacio: api.ubicacio,
    popular: api.popular,
  };
}

/**
 * Adaptar un array de serveis de l'API al model intern
 */
export function adaptarServeisApi(
  apiResponses: ServeiApiResponse[],
): ServeiCataleg[] {
  return apiResponses.map(adaptarServeiApi);
}
