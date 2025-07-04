import React from 'react';

const WhoWeAre = () => {
  return (
<div className='max-w-screen-xl m-auto'>
      <div className='flex flex-col md:flex-row justify-center items-end my-32 h-fit'>
      <div className='w-full md:w-[40%]  flex flex-col gap-[30px] p-6 md:p-12'>
        <h2 className='font-bold text-lg text-primary'>Who We Are</h2>
        <p className='text-md'>
          April Twins is a small group doing cool things together—from creative projects to daily discoveries. This space is where we document moments, share ideas, and keep track of what makes us us.
        </p>
      </div>
      <div className='w-full md:w-[60%]'>
        <img src="/6.jpg" className='w-full' alt="Who We Are" />
      </div>
    </div>
</div>
  );
}

export default WhoWeAre;
