import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/firebase-config";
import { login, login2, logout, logout2 } from "../store/auth";

export const useCheckAuth = () => {
  //const { status } = useSelector((state) => state.auth);
  const status = useSelector((state) => state.auth2);

  const dispatch = useDispatch();

  /* useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    });
  }, []); */

  useEffect(() => {
    //verificar el user en el localStorage
    const { id, email } = JSON.parse(localStorage.getItem("user"));
    if (!id) {
      return dispatch(logout2());
    }
    console.log("si hay el user");
    dispatch(login2({ id, email }));
  }, [status]);

  return status;
};
