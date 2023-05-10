import React from "react";

export const FotoCard = ({ foto }) => {
  return (
    <div className="transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md">
      <img src={foto.url} alt="descripcion" className="object-cover object-center h-[33vh] w-[100vh]" />
      <div className="grid grid-rows-3 grid-flow-col gap-4 p-4">
        <div>
          <h2 className=" text-lg font-medium dark:text-white text-gray-900">Precio: {foto.precio}$us</h2>          
        </div>
        <div>
        <h2 className=" text-lg font-medium dark:text-white text-gray-900">Cantidad Vendida: 200</h2>          
        </div>
        <div>
        <h2 className=" text-lg font-medium dark:text-white text-gray-900">Total: 2000$us</h2>          
        </div>
      </div>
    </div>
  );
};
