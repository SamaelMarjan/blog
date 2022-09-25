import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='static md:fixed w-[100%] h-[150px] md:h-[85px] top-0 shadow-sm z-50 flex items-center justify-center bg-[#EFF0F3]'>
      <div className='w-[90%] h-[100%] m-auto flex flex-col md:flex-row justify-between items-center '>
        <div className='w-[100%] md:w-[50%] h-[50px] m-auto md:m-0 flex items-center justify-center md:justify-start'>
          <p className='w-[145px] h-[45px] text-4xl text-[#001858] font-semibold'>samael<span className='w-[48px] h-[27px] text-lg text-[#6246EA] font-bold'>.Blog</span></p>
        </div>
        <div className='w-[100%] md:w-[50%] h-[100px] flex gap-3 md:gap-10 text-[#2B2C34] font-bold text-xs md:text-xl items-center justify-center md:justify-end'>
          <Link to='/' >Home</Link>
          <a href='#cat' >Category</a>
          <Link to='/about' >About</Link>
          <Link to='/contact' >Contact</Link>
          <button className='w-[100px] md:w-[150px] h-[40px] md:h-[60px] bg-[#6246EA] rounded-lg text-[#FFFFFE] text-xs md:text-lg cursor-pointer flex items-center justify-center'>cofee?</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;