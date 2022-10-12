import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserByEmail } from "../helpers/authHelper";

export const Eventos = () => {
  const user = useSelector((state) => state.auth);
  const [lara, setLara] = useState(null);

  useEffect(() => {
    async function getLara(email) {
      const userLaravel = await getUserByEmail(user.email);
      setLara(userLaravel);
    }
    getLara(user.email);
  }, []);

  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1300px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p>Mis Eventos</p>
        </div>
      </div>
    </div>
  );
};
