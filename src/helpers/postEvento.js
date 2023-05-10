import { baseUrl } from "../const/const";

export const postEvento = async (titulo, descripcion, lugar, fecha, hora,idUser,select) => {
    const resp = await fetch(`${baseUrl}/postEvento`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            titulo, descripcion, lugar, fecha, hora,idUser,"fotografos":select
        }),
    });
    const response = await resp.json();
    console.log(response);
    return response;
};