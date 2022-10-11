import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./firebase-config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    //const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, displayName, photoURL } = result.user;
    return {
      ok: true,
      uid,
      displayName,
      photoURL,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  name,
  email,
  password,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName: name });

    return {
      ok: true,
      uid,
      photoURL,
      name,
      email,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut(); // cierra sesión con cualquier método de autenticación
};
