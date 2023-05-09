import { baseUrl } from "../const/const";

export const subirFotos = async (files, idUser, idEvento) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('fotos[]', file);
  });
  formData.append('idUser',idUser);
  formData.append('idEvento',idEvento);
  try {
    const resp = await fetch(`${baseUrl}/postFotoByEvento`, {
      method: "POST",
      body: formData
    });
    const r = await resp.json();
    console.log(r);
  } catch (error) {
    console.log('Error al enviar las fotos', error);
  }
};
