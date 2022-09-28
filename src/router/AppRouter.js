import { Route, Routes, Navigate } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import PrincipalPage from "../pages/PrincipalPage";
import { LoginScreen } from "../auth/pages/LoginScreen";
import { RegisterScreen } from "../pages/RegisterScreen";
import { HomeScreen } from "../pages/HomeScreen";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <h1>checking credentials</h1>;
  }

  const PrivateRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomeScreen />} />
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
