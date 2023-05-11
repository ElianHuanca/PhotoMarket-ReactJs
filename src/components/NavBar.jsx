import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { startLogout2 } from "../store/auth";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout2());
  };

  return (
    <div className="w-screen h-[75px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">PhotoMarket</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/portafolio" smooth={true} duration={500}>
                Portafolio
              </Link>
            </li>
            <li>
              <Link to="/eventos" smooth={true} offset={-200} duration={500}>
                Eventos
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Fotografos
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button
            className="border-none bg-transparent text-black mr-4"
            onClick={onLogout}
          >
            Cerrar Seccion
          </button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>      
    </div>
  );
};
