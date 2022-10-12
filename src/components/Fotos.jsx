import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getfotos } from "../helpers/getFotos";
import { FotoCard } from "./FotoCard";

export const Fotos = () => {
  const { id } = useSelector((state) => state.auth2);
  const [fotos, setFotos] = useState([]);
  const { idEvento } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getFts(id) {
      const fotos = await getfotos(id, idEvento);
      setFotos(fotos);
    }
    getFts(id);
  }, []);

  const subirFotos = () => {
    console.log("seleccionar fotos");
  };

  return (
    <div className="w-full py-28 mx-2">
      <div className="flex space-x-3">
        <input
          multiple
          type="file"
          name="files[]"
          id="fotos"
          className=" my-2 px-2 py-1 outline-none"
          onChange={
            (e) => setPhotos(e.target.files) /* console.log(e.target.files) */
          }
        />
        <button className="my-2 px-2 py-1" onClick={() => subirFotos()}>
          Subir Fotos
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {fotos.map((foto) => (
          <FotoCard key={foto.id} foto={foto} />
        ))}
      </div>
    </div>
  );
};
