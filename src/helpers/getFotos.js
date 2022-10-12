import { baseUrl } from "../const/const";

export const getfotos = async (idUser, idEvento) => {
  const resp = await fetch(`${baseUrl}/getFotos/${idUser}/${idEvento}`);
  const fotos = await resp.json();
  return fotos;
};
