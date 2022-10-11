import React from 'react'
import {
    AcademicCapIcon,
    PhotographIcon,
    CameraIcon,
    VideoCameraIcon
} from '@heroicons/react/solid'

const bgImg = 'https://www.a2hosting.com/blog/content/uploads/2018/07/man-holding-camera.png';
export const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1300px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Organiza y Contrata</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Eventos y Fotografos </h1>
                <p className='text-2xl'>Visualiza y compra las fotos que mas te gusta</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Empieza Ya</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Servicios</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CameraIcon className='h-6 text-indigo-600' />Subir Fotos</p>
                    <p className='flex px-4 py-2 text-slate-500'><VideoCameraIcon className='h-6 text-indigo-600' />Subir Videos</p>
                    <p className='flex px-4 py-2 text-slate-500'><AcademicCapIcon className='h-6 text-indigo-600' />Realizar Eventos</p>
                    <p className='flex px-4 py-2 text-slate-500'><PhotographIcon className='h-6 text-indigo-600' />Comprar Imagenes</p>                    
                </div>
            </div>
        </div>
    </div>

  )
}
