import {
  signInWithGoogle,
  registerUserWithEmailPassword,
  loginWithEmailAndPassword,
  logoutFirebase,
} from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if (!result.ok) {
      return dispatch(logout(result.errorMessage));
    }

    return dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  name,
  email,
  password,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, errorMessage } = await registerUserWithEmailPassword({
      name,
      email,
      password,
    });
    if (!ok) {
      return dispatch(logout({ errorMessage }));
    }
    return dispatch(login({ uid, email, displayName: name }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, displayName, errorMessage } =
      await loginWithEmailAndPassword({
        email,
        password,
      });
    if (!ok) {
      return dispatch(logout({ errorMessage }));
    }
    dispatch(login({ uid, email, displayName }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout({ errorMessage: null }));
  };
};
