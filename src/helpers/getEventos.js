import { baseUrl } from "../const/const";

export const getEventos = async (id) => {
  const resp = await fetch(`${baseUrl}/getEventoFotografo/${id}`);
  const data = await resp.json();
  return data;
};
