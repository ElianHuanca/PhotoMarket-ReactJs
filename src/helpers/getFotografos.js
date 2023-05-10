import { baseUrl } from "../const/const";

export const getFotografos = async () => {
  const resp = await fetch(`${baseUrl}/getFotografos`);
  const data = await resp.json();  
  return data;
};