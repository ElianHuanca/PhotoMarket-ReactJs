import { Route, Routes, Navigate } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { HomeScreen } from "../pages/HomeScreen";
import { LoginScreen, RegisterScreen } from "../auth/pages/";
import PrincipalPage from "../pages/PrincipalPage";
import { PortafolioPage } from "../pages/PortafolioPage";
import { EventosPage } from "../pages/EventosPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login, login2, logout2 } from "../store/auth";
import { FotosPage } from "../pages/FotosPage";

export const AppRouter = () => {
  //const status = useCheckAuth();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth2);
  const [a, setA] = useState(false);

  /* if (status === "checking") {
    return <h1>checking credentials</h1>;
  } */

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      dispatch(logout2());
    } else {
      dispatch(login2({ id: user.id, email: user.email }));
    }

    console.log("routes render");
    setA(!a);
  }, [status]);

  /* if (status === "not-authenticated") {
    return <h1>checking credentials</h1>;
  } */

  const PrivateRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/portafolio" element={<PortafolioPage />} />
        <Route path="/evento/:idEvento" element={<FotosPage />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  };

  const PublicRoutes = () => {
    return (
      <Routes>
        <Route path="/auth/register" element={<RegisterScreen />} />
        <Route path="/auth/*" element={<LoginScreen />} />
        <Route path="/*" element={<PrincipalPage />} />
      </Routes>
    );
  };

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        // <Route path="/auth/*" element={<AuthRoutkes />} />
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};
