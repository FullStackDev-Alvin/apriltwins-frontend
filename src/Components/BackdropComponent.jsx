import React from 'react'
import image from "/1.jpg";


const BackdropComponent = ({title:title}) => {
  return (
    <div style={{backgroundImage: `url(${image})`}} className='max-w-screen h-[300px] bg-cover bg-center '>
        <div className='w-full h-full bg-primary/30 flex flex-col justify-center items-center'>
            <h1 className='text-white font-bold text-3xl'>{title}</h1>
        </div>
    </div>
  )
}

export default BackdropComponent