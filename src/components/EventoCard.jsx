import React from "react";
import { Link } from "react-router-dom";

export const EventoCard = ({ evento }) => {
  return (
    <Link
      to={`/evento/${evento.id}`}
      className="border rounded bg-zinc-50 cursor-pointer w-full p-0 flex flex-col space-y-4 px-2 py-2"
      onClick={() => console.log("onclick pa")}
    >
      <h1 className="text-[#454545] font-semibold text-2xl">{evento.titulo}</h1>
      <p className="text-[#999999] font-normal text-base">
        {evento.descripcion}
      </p>
      <p className="text-gray-500">
        Lugar: <span>{evento.lugar}</span>
      </p>

      <div className="flex space-x-5 text-[#424242] font-normal">
        <p className="">{evento.fecha}</p>
        <span className="text-black">{"|"}</span>
        <p className="">{evento.hora}</p>
      </div>
    </Link>
  );
};
