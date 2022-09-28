import { useDispatch } from "react-redux";
import { startLogout } from "../store/auth";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div>
      <h1>Home Screen</h1>
      <button onClick={onLogout}>cerrar sesión</button>
    </div>
  );
};
