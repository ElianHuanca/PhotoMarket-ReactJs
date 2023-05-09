
import { baseUrl } from "../const/const";

export const getUserByEmail = async (email) => {
  var response;
  try {
    const resp = await fetch(`${baseUrl}/getUserByEmail/${email}`);
    console.log("pasa por el try");
    response = await resp.json();
  } catch (error) {
    console.log("para por el error");
    response = "error.message";
  }
  return response;
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
  const response = await resp.json();
  return response;
};

export const registerLaravel = async (name, email, password,idRol) => {
  const resp = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      idRol
    }),
  });
  const response = await resp.json();
  return response;
};
