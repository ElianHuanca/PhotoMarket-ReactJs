import { baseUrl } from "../const/const";

export const getEventosFotografo = async (id) => {
  const resp = await fetch(`${baseUrl}/getEventoParticipante/${id}`);
  const data = await resp.json();
  return data;
};

export const getEventosOrganizador = async (id) => {
  const resp = await fetch(`${baseUrl}/getEventoOrganizador/${id}`);
  const data = await resp.json();
  return data;
};