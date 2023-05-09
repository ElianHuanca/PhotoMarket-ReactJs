import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { startCreatingUserWithEmailPasswordLaravel } from "../../store/auth";
import { SelectOption } from "./SelectOption";



export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { name, email, password, onInputChange } = useForm({
    name: "",
    email: "",
    password: "",
    idRol:""
  });
  const [error, setError] = useState(null);

  const options = [
    { value: '3', label: 'Organizador' },
    { value: '2', label: 'Fotografo' },
  ];

  const [selectedOption, setSelectedOption] = useState('3');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const isAuthenticating = false;

  const onSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      //LARAVEL REGISTER
      dispatch(
        startCreatingUserWithEmailPasswordLaravel({
          name,
          email,
          password,
          idRol: selectedOption
        })
      );
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      setError("Name is required");
      return false;
    } else if (!validator.isEmail(email)) {
      setError("Email is not valid");

      return false;
    } else if (/* password !== password2 || */ password.length < 5) {
      setError("La contraseña está mal");

      return false;
    }
    setError(null);
    return true;
  };

  return (
    <div className="bg-slate-100 flex flex-col h-screen my-auto items-center">
      <div className="bg-white border-solid border border-slate-500 rounded-md m-auto w-96 p-5">
        <h3
          className="text-center mb-2
                       text-2xl font-semibold text-slate-600"
        >
          Register
        </h3>
        <form onSubmit={onSubmit}>
          <div className="relative z-0 mb-6 w-full group">
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
            <input
              type="text"
              placeholder=""
              name="name"
              value={name}
              onChange={onInputChange}
              autoComplete="off"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
            <input
              type="text"
              placeholder=" "
              name="email"
              value={email}
              onChange={onInputChange}
              autoComplete="off"
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
              value={password}
              onChange={onInputChange}
              required
              id="floating_password"
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>

          <div className="my-3">
            <SelectOption
              options={options}
              value={selectedOption}
              onChange={handleOptionChange}
            />
          </div>

          <div>{error && <p className="text-red-500 text-sm">{error}</p>}</div>

          <button
            disabled={isAuthenticating}
            type="submit"
            className="w-full bg-sky-500 mb-2 p-1
                         text-white text-xl font-semibold
                           border-solid border rounded-md"
          >
            Registrarse
          </button>

          <Link to="/auth/login" className="text-center block">
            <span className="hover:text-slate-600">Iniciar Sesión</span>
          </Link>
        </form>
      </div>
    </div>
  );
};
