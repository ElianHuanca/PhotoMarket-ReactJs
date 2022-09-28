import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';
import { Link } from 'react-scroll';

export const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Precios</h2>
          <h3 className='text-5xl font-bold text-white py-8'>El precio adecuado para ambos roles.</h3>
          <p className='text-3xl'>
            Si eres cliente solo <Link to="home" smooth={true} offset={-50} duration={500}>Registrate</Link> y mira las fotos de los eventos a los que asistes
          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Fotografo</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>50Bs<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Comprar este plan consta de los siguientes beneficios:</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Subir N cantidades de fotos.</p>            
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Crear tu portafolio.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Ser contratado para varios eventos</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Obtener Ganancias por las fotos vendidas</p>      
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Organizador</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>100Bs<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Comprar este plan consta de los siguientes beneficios:</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Crear N cantidades de eventos</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Obtener un QR en tu invitacion</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Diseñar tu propia invitacion digital</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Cotizar en la variedad precios de fotografos</p>      
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

