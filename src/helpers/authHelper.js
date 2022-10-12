import { async } from "@firebase/util";
import { baseUrl } from "../const/const";

export const getUserByEmail = async (email) => {
  var respuesta;
  try {
    const resp = await fetch(`${baseUrl}/getUserByEmail/${email}`);
    console.log("pasa por el try");
    respuesta = await resp.json();
  } catch (error) {
    console.log("para por el error");
    respuesta = "error.message";
  }
  return respuesta;
};

export const loginLaravel = async (email, password) => {
  const resp = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const a = await resp.json();
  return a;
};

export const registerLaravel = async (name, email, password) => {
  const resp = await fetch(`http://localhost/sw-photo/public/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  const a = await resp.json();
  return a;
};
