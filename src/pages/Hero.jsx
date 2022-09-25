import React from 'react';

import Img from '../assets/Group.png';

const Hero = () => {
  return (
    <div className='mt-[50px] md:mt-[85px] w-[100%] h-[750px] md:h-[600px] lg:[800px]'>
      <div className='w-[90%] h-[100%] m-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0'>
        <div className='md:w-[50%] h-[100%] flex flex-col justify-center gap-4'>
          <div className='flex flex-col gap-4'>
            <p className='w-[100%] h-[100%] text-[#2B2C34] text-6xl font-bold'>Hi, i’m samael <span className='block'>Front end dev</span></p>
            <p className='w-[100%] h-[100%] text-[#9A9494] text-xl font-normal border-l-4 border-[#2B2C34] px-2'>
              On this blog I share tips and tricks, frameworks, projects, tutorials, etc
              Make sure you subscribe to get the latest updates
            </p>
          </div>
          <div className='flex gap-4'>
            <input placeholder='Enter your email here....' className='bg-[#fff] p-4 w-[200px] md:w-[400px]' />
            <button className='w-[100px] md:w-[150px] h-[40px] md:h-[60px] bg-[#6246EA] rounded-lg text-[#fff]'>submit</button>
          </div>
        </div>
        <div className='md:w-[50%] h-[100%] flex items-center justify-center'>
          <img src={Img} alt='img' />
        </div>
      </div>
    </div>
  );
}

export default Hero;