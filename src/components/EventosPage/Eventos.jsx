import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getEventosFotografo, getEventosOrganizador } from "../../helpers/getEventos";
import { EventoCard } from "./EventoCard";
import { FormCreateEvento } from "./FormCreateEvento";

export const Eventos = () => {
  const { id, idRol } = useSelector((state) => state.auth2);
  const [eventos, setEventos] = useState([]);
  
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
    const delay = 2000; // Retraso de 2 segundos (puedes ajustar este valor según tus necesidades)
    const timer = setTimeout(() => {
      getEvts(id);
    }, delay);

    // Limpiamos el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  },[]);

  return (
    <div className="container mx-auto px-20 py-20 bg-gray-100 hover:bg-gray-200">
      { idRol==3 && <FormCreateEvento id={id}/>}                  
      <div className='grid grid-cols-3 gap-3'>
        {eventos.map((evt) => (
          <EventoCard key={evt.id} evento={evt} />
        ))}
      </div>
    </div>
  );
};
