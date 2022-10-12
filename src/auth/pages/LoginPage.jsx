import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { startLoginWithEmailPasswordLaravel } from "../../store/auth/thunk2";

const loginImg =
  "https://www.signupgenius.com/cms/socialMediaImages/appointment-scheduling-tips-photographers-article-1200x800.jpg";

export const Login = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    //FIREBASE LOGIN
    //dispatch(startLoginWithEmailPassword({ email, password }));

    //LARAVEL LOGIN
    dispatch(startLoginWithEmailPasswordLaravel({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt=""
      />
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={onSubmit}
          className="max-w-[400px] w-full mx-auto bg-white p-8"
        >
          <h2 className="text-4xl font-bold text-center py-4">PhotoMarket</h2>
          <div className="flex justify-between py-8">
            <button
              disabled={isAuthenticating}
              className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center"
            >
              <AiFillFacebook className="mr-2" /> Facebook
            </button>
            <button
              disabled={isAuthenticating}
              onClick={onGoogleSignIn}
              className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center"
            >
              <FcGoogle className="mr-2" /> Google
            </button>
          </div>
          <div className="flex flex-col mb-4">
            <label>Correo Electronico:</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col ">
            <label>Contraseña:</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
          </div>
          <button
            disabled={isAuthenticating}
            type="submit"
            className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
          >
            Ingresar
          </button>
          <p className="flex items-center mt-2">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>
          <div className="hover:text-slate-600 text-center block">
            <button className="border-none bg-transparent text-black mr-4">
              <Link to="/auth/register">Registrarse</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
