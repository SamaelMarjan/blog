import React from 'react';

import Img from '../assets/Group.png';

const Hero = () => {
  return (
    <div className='mt-0 md:mt-[85px] w-[100%] h-[500px] md:h-[800px] lg:[900px]'>
      <div className='w-[90%] h-[100%] m-auto flex flex-col md:flex-row'>
        <div className='md:w-[50%] h-[100%]'>
          <p>Hi, i’m Dasteen <span className='block'>Front end dev</span></p>
          <p>
            On this blog I share tips and tricks, frameworks, projects, tutorials, etc
            Make sure you subscribe to get the latest updates
          </p>
          <input placeholder='text' />
          <button>submit</button>
        </div>
        <div className='md:w-[50%] h-[100%]'>
          <img src={Img} alt='img' />
        </div>
      </div>
    </div>
  );
}

export default Hero;