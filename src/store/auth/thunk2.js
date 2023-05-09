import { loginLaravel, registerLaravel } from "../../helpers/authHelper";
import { checkingCredentials2, logout2, login2 } from "./";

export const checkingAuthentication2 = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials2());
  };
};

export const startCreatingUserWithEmailPasswordLaravel = ({
  name,
  email,
  password,
  idRol
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials2());
    const user = await registerLaravel(name, email, password, idRol);
    if (!user.email) {
      return dispatch(logout2());
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ id: user.id, email: user.email, idRol: user.idRol })
    );
    return dispatch(login2({ id: user.id, email: user.email, idRol: user.idRol }));
  };
};

export const startLoginWithEmailPasswordLaravel = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials2());
    const user = await loginLaravel(email, password);
    console.log(user);
    if (!user.id) {
      return dispatch(logout2());
    }
    localStorage.setItem(
      "user",
      JSON.stringify({ id: user.id, email: user.email, idRol: user.idRol })
    );
    dispatch(login2({ id: user.id, email: user.email, idRol: user.idRol }));
  };
};

export const startLogout2 = () => {
  return async (dispatch) => {
    localStorage.removeItem("user");
    dispatch(logout2());
  };
};
