import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {
  startLoginWithEmailPasswordLaravel,
} from "../../store/auth";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticating = false; 

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPasswordLaravel({ email, password }));
  };

  return (
    <div className="bg-slate-100 flex flex-col h-screen my-auto items-center">
      <div className="bg-white border-solid border border-slate-500 rounded-md m-auto w-96 p-5">
        <h3
          className="text-center mb-4
                       text-2xl font-semibold text-slate-600"
        >
          Login
        </h3>
        <form onSubmit={onSubmit}>
          <div className="relative z-0 mb-6 w-full group">
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Correo Electronico"
              autoComplete="off"
              value={email}
              onChange={onInputChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              id="floating_password"
              placeholder="Contraseña"
              value={password}
              onChange={onInputChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>          

          <button
            type="submit"
            className="w-full bg-sky-500 mb-4 p-2
                         text-white text-xl font-semibold
                           border-solid border rounded-md"
            disabled={isAuthenticating}
          >
            Iniciar Sesión
          </button>
          <Link to="/auth/register" className="text-center block ">
            <span className="hover:text-slate-600">Crear una nueva Cuenta</span>
          </Link>
        </form>
      </div>
    </div>
  );
};
