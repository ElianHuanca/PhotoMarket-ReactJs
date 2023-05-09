import React from "react";
import { Fotos } from "../components/FotosPage/Fotos";
import { Navbar } from "../components/HomePage";
export const FotosPage = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Fotos />
    </div>
  );
};
