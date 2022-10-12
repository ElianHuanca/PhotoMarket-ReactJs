import { baseUrl } from "../const/const";

export const subirFotos = async (files) => {
  const formData = new FormData();
  for (const file of files) {
    formData.append("files[]", file, file.name);
  }
  const resp = fetch(`${baseUrl}`, {
    method: "POST",
    body: formData,
  });
};
