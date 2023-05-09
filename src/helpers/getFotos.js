import { baseUrl } from "../const/const";

export const getfotos = async (idUser,idRol, idEvento) => {
  const resp = await fetch(`${baseUrl}/getFotos/${idUser}/${idRol}/${idEvento}`);
  const fotos = await resp.json();
  return fotos;
};
