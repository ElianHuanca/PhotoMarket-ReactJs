import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getfotos } from "../../helpers/getFotos";
import { subirFotos } from "../../helpers/subirFotos";
import { FotoCard } from "./FotoCard";

export const Fotos = () => {
  const { id, idRol } = useSelector((state) => state.auth2);
  const [fotos, setFotos] = useState([]);
  const { idEvento } = useParams();
  const [photos, setPhotos] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setPhotos(selectedFiles);

    const files = Array.from(event.target.files);
    setSelectedImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const delay = 2000; // Retraso de 2 segundos (puedes ajustar este valor según tus necesidades)
    const timer = setTimeout(async () => {
      if (photos.length > 0) {
        await subirFotos(photos, id, idEvento);
      }
      setSelectedImages([]);
      setPhotos([]);
    }, delay);

    // Limpiamos el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    async function getFts(id) {
      const fotos = await getfotos(id, idRol, idEvento);
      setFotos(fotos);
    }
    const delay = 2000; // Retraso de 2 segundos (puedes ajustar este valor según tus necesidades)
    const timer = setTimeout(() => {
      getFts(id);
    }, delay);

    // Limpiamos el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, [handleSubmit]);

  return (
    <div className="px-20 py-20">
      {idRol == 2 &&
        <div className="container h-min my-3 bg-white rounded">
          <input
            multiple
            type="file"
            name="files[]"
            accept="image/*"
            id="files[]"
            className=" my-2 px-2 py-1 outline-none"
            onChange={
              handleFileChange
            }
          />
          <button className="my-2 px-2 py-1 h-min" onClick={(e) => handleSubmit(e)}>
            Subir Fotos
          </button>
          <div className="transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md">
            <div className=" grid grid-cols-4 gap-3 rounded m-2">
              {selectedImages.map((image, index) => (
                <img key={index} src={image} alt={`Imagem ${index}`} className="rounded h-[37vh] w-[100vh]" />
              ))}
            </div>
          </div>
        </div>
      }

      <div className="grid grid-cols-4 gap-4 ">
        {fotos.map((foto) => (
          <FotoCard key={foto.id} foto={foto} />
        ))}
      </div>
    </div>
  );
};
