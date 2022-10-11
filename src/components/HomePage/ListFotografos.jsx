import React from 'react'

export const ListFotografos = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1300px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'> 
                <p>Lista De Fotografos</p>
            </div>
        </div>
    </div>
  )
}
