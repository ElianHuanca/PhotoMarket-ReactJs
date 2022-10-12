import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserByEmail } from "../helpers/authHelper";
import { getEventos } from "../helpers/getEventos";
import { EventoCard } from "./EventoCard";

export const Eventos = () => {
  const { id } = useSelector((state) => state.auth2);
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function getEvts(id) {
      const ev = await getEventos(id);
      setEventos(ev);
    }
    getEvts(id);
  }, []);

  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col">
      <div className="w-full m-auto ">
        <div className="flex flex-col space-y-5 justify-center md:items-start w-full px-3">
          {eventos.map((evt) => (
            <EventoCard key={evt.id} evento={evt} />
          ))}
        </div>
      </div>
    </div>
  );
};
