import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getEventosFotografo, getEventosOrganizador } from "../../helpers/getEventos";
import { EventoCard2 } from "./EventoCard2";
import { FormCreateEvento } from "./FormCreateEvento";

export const Eventos = () => {
  const { id, idRol } = useSelector((state) => state.auth2);
  const [eventos, setEventos] = useState([]);
  const [bandera, setBandera] = useState(false);
  useEffect(() => {
    async function getEvts(id) {
      if (idRol == 2) {
        const ev = await getEventosFotografo(id);
        setEventos(ev);
      } else {
        const ev = await getEventosOrganizador(id);
        setEventos(ev);
      }
    }
    getEvts(id);
  }, []);

  const handleChange = () => {
    setBandera(!bandera);
  };

  return (
    <div className="container mx-auto px-20 py-20 bg-gray-100 hover:bg-gray-200">
      {idRol == 3 &&
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            onClick={(_) => handleChange()}>
            Crear Evento </button>
        </div>
      }
      {bandera &&
        <FormCreateEvento bandera={bandera} setBandera={setBandera} />
      }
      <div className='grid grid-cols-3 gap-3'>
        {eventos.map((evt) => (
          <EventoCard2 key={evt.id} evento={evt} />
        ))}
      </div>
    </div>
  );
};
