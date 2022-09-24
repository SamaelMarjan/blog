import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='static md:fixed w-[100%] h-[150px] md:h-[85px] top-0 shadow-sm z-50 flex items-center justify-center bg-[#EFF0F3]'>
      <div className='w-[90%] h-[100%] m-auto flex flex-col md:flex-row justify-between items-center '>
        <div className='w-[100%] md:w-[50%] h-[50px] m-auto md:m-0 flex items-center justify-center md:justify-start'>
          <p className='w-[145px] h-[45px] text-4xl text-[#001858] font-semibold'>Dasteen<span className='w-[48px] h-[27px] text-lg text-[#6246EA] font-bold'>.Blog</span></p>
        </div>
        <div className='w-[100%] md:w-[50%] flex gap-5 md:gap-2 text-[#2B2C34] font-bold text-xs md:text-xl items-center justify-center md:justify-end'>
          <Link to='/' className='w-[100%]'>Home</Link>
          <a href='#cat' className='w-[100%]'>Category</a>
          <Link to='/about' className='w-[100%]'>About</Link>
          <Link to='/contact' className='w-[100%]'>Contact</Link>
          <p className='w-[100%] md:w-[100%] h-[100%] bg-[#6246EA] p-2 md:p-3 rounded-lg text-[#FFFFFE] text-xs md:text-lg cursor-pointer flex items-center justify-center'>cofee?</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;