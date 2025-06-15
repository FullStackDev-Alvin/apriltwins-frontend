import React from 'react'

const ReusableLeftToRight = ({paragraph,title,header,image}) => {
  return (
    <div className='max-w-screen-xl m-auto py-6'>
        <div className='flex flex-col justify-center items-center gap-[5px]'>
            <h2 className='font-bold  text-primary text-2xl text-center'>{title}</h2>
            <div className='w-[100px] h-[5px] bg-gradient-to-r from-primary to-bg'></div>
        </div>
        <div className='flex flex-col  md:flex-row justify-center items-end my-32 h-fit'>
            <div className='w-full md:w-[40%]  flex flex-col gap-[30px] p-6 md:p-12'>
                <h2 className='text-primary w-full text-xl'>{header}</h2>
                {paragraph.map((para)=>(
                    <p className='text-md'>
                        {para}    
                    </p>
                ))}
            </div>
            <div className='w-full md:w-[60%] '>
                <img src={image} className='w-full' alt="Who We Are" />
            </div>
        </div>
    </div>
  )
}

export default ReusableLeftToRight