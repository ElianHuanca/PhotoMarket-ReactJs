import React, { useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { getFotografos } from '../../helpers/getFotografos';
import { postEvento } from '../../helpers/postEvento';



export const FormCreateEvento = ({id}) => {
    const { titulo, descripcion, lugar, fecha, hora, onInputChange } = useForm({
        titulo: "",
        descripcion: "",
        lugar: "",
        fecha: "",
        hora: ""
    });
    const [bandera, setBandera] = useState(false);
    const [fotografos, setFotografos] = useState([]);
    const [select, setSelect] = useState([]);
    useEffect(() => {
        async function getFotografo() {
            const fot = await getFotografos();
            setFotografos(fot);
        }
        getFotografo();
        console.log(fotografos);
    }, []);


    const handleChange = () => {
        setBandera(!bandera);

    };
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelect([...select, value]);
        } else {
            setSelect(select.filter((o) => o !== value));
        }
    };

    const handleSubmit = async () => {
        await postEvento(titulo, descripcion, lugar, fecha, hora,id,select);
    };



    return (
        <>
            {!bandera &&
                <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                    <button className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
                        onClick={(_) => handleChange()}>
                        Crear Evento </button>
                </div>
            }
            {bandera &&
                <div className='bg-white rounded  my-3 p-3'>
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='grid grid-rows-4 gap-3'>
                            <div>
                                <label htmlFor="titulo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Titulo
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="titulo"
                                        name="titulo"
                                        type="text"
                                        onChange={onInputChange}
                                        value={titulo}
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
                                        onChange={onInputChange}
                                        value={lugar}
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
                                        onChange={onInputChange}
                                        value={fecha}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                    />
                                </div>
                            </div>
                            <div>
                                {fotografos.map(({ id, name }) => (
                                    <label key={id} className='mx-1'>
                                        <input
                                            type="checkbox"
                                            value={id}
                                            onChange={handleCheckboxChange}
                                            className='mx-1'
                                        />
                                        {name}
                                    </label>
                                ))}
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
                                        onChange={onInputChange}
                                        value={descripcion}
                                        required
                                        className="block w-full h-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
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
                                        onChange={onInputChange}
                                        value={hora}
                                        required
                                        className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-3 h-10'>
                                <button className="btn btn--primary " onClick={(_) => handleSubmit()}>Registrar</button>
                                <button className="btn btn--secondary" onClick={(_) => handleChange()}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
