import React from 'react';

const Category = () => {
  return (
    <div id='cat' className='w-[100%] h-[100%]'>
      <div className='w-[90%] h-[100%] m-auto flex flex-col gap-4 '>
        <div className='flex items-center justify-between mt-8'>
          <p>Browse The Categoory</p>
          <p>See All Category</p>
        </div>
        <div className='w-[100%] h-[100%] flex flex-wrap md:flex-row items-center gap-6 mb-8'>
          <div className='w-[100px] md:w-[220px] h-[150px] md:h-[280px] bg-[#fff] border-2 rounded-lg hover:bg-[#6246EA]'>
            <p>CSS</p>
          </div>
          <div className='w-[100px] md:w-[220px] h-[150px] md:h-[280px] bg-[#fff] border-2 rounded-lg hover:bg-[#6246EA]'>
            <p>CSS</p>
          </div>
          <div className='w-[100px] md:w-[220px] h-[150px] md:h-[280px] bg-[#fff] border-2 rounded-lg hover:bg-[#6246EA]'>
            <p>CSS</p>
          </div>
          <div className='w-[100px] md:w-[220px] h-[150px] md:h-[280px] bg-[#fff] border-2 rounded-lg hover:bg-[#6246EA]'>
            <p>CSS</p>
          </div>
          <div className='w-[100px] md:w-[220px] h-[150px] md:h-[280px] bg-[#fff] border-2 rounded-lg hover:bg-[#6246EA]'>
            <p>CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;