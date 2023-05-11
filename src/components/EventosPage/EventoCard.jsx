import React from 'react';
import { Link } from 'react-router-dom';

export const EventoCard= ({ evento }) => {
    return (
        <div className="py-6 px-4 sm:p-6 md:py-6 md:px-8 bg-white rounded my-2">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-1">
                <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                    <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">{evento.titulo}</h1>
                </div>
                <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                    <dt className="sr-only">Date</dt>
                    <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                        <img src="https://img.icons8.com/ios/50/null/calendar--v1.png" width={24} height={24} className='m-1' />
                        <span>{evento.fecha} <span className="text-slate-400 font-normal">({evento.hora})</span></span>
                    </dd>
                    <dt className="sr-only">Location</dt>
                    <dd className="flex items-center">
                        <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                            <circle cx="1" cy="1" r="1" />
                        </svg>
                        <img src="https://img.icons8.com/ios/50/null/marker--v1.png" width={24} height={24} className='m-1' />
                        {evento.lugar}
                    </dd>
                </dl>
                <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                    {evento.descripcion}
                </p>
                <Link to={`/evento/${evento.id}`}
                    className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"
                >
                    <button className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Ver Fotos</button>
                </Link>
            </div>
        </div>
    )
}
