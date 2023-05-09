import { Route, Routes, Navigate } from "react-router-dom";
import { LoginScreen, RegisterScreen } from "../auth/pages/index";
import { PortafolioPage,HomePage,EventosPage,PrincipalPage} from "../pages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login2, logout2 } from "../store/auth";
import { FotosPage } from "../pages/FotosPage";

export const AppRouter = () => {  
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth2);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      dispatch(logout2());
    } else {
      dispatch(login2({ id: user.id, email: user.email ,idRol:user.idRol}));
    }    
  }, [status]);

  const PrivateRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
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
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};
