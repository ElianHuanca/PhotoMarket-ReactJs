import React from 'react'
import { useForm } from '../../hooks/useForm';

export const FormCreateEvento = (bandera,setBandera) => {
    const { titulo, descripcion, lugar, fecha, hora, onInputChange } = useForm({
        titulo: "",
        descripcion: "",
        lugar: "",
        fecha: "",
        hora: ""
    });
    const handleChange = () => {
        setBandera(!bandera);
    };

    return (
        <div className='bg-white rounded  my-3 p-3'>
            <div className='grid grid-cols-2 gap-3'>
                <div className='grid grid-rows-3 gap-3'>
                    <div>
                        <label htmlFor="titulo" className="block text-sm font-medium leading-6 text-gray-900">
                            Titulo
                        </label>
                        <div className="mt-2">
                            <input
                                id="titulo"
                                name="titulo"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lugar" className="block text-sm font-medium leading-6 text-gray-900">
                            Lugar
                        </label>
                        <div className="mt-2">
                            <input
                                id="lugar"
                                name="lugar"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="fecha" className="block text-sm font-medium leading-6 text-gray-900">
                            Fecha
                        </label>
                        <div className="mt-2">
                            <input
                                id="fecha"
                                name="fecha"
                                type="date"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-2 gap-3'>
                    <div>
                        <label htmlFor="descripcion" className="block text-sm font-medium leading-6 text-gray-900">
                            Descripcion
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="descripcion"
                                name="descripcion"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="hora" className="block text-sm font-medium leading-6 text-gray-900">
                            Hora
                        </label>
                        <div className="mt-2">
                            <input
                                id="hora"
                                name="hora"
                                type="time"
                                required
                                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-3 h-10'>
                        <button className="btn btn--primary ">Registrar</button>
                        <button className="btn btn--secondary" onClick={(_) => handleChange()}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
