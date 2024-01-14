import React from 'react'

import './nav-top-center.css'
import search from '/src/assets/svg/search.svg';

const NavTopCenter = () => {


  return (
    <>
      <div className={`flex-1 min-w-[300px] h-full py-[10px]  `}>
        <div className={`flex items-center justify-center h-full search`}>
          <div
            className={`h-full flex items-center justify-center px-3 gap-2 pr-2 bg-[#e6e6e6] rounded-l-[3px] border-r-2 border-r-[#cdcdcd] border-solid hover:bg-[#d4d4d4] transition-all cursor-pointer text-[12px]`}
          >
            All<svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4">
            <path id="Polygon_3" data-name="Polygon 3" d="M4,0,8,4H0Z" transform="translate(8 4) rotate(180)" fill="#666"/>
          </svg>
          
          </div>
          <input
            type='text'
            placeholder='Search Amazon.in'
            className='h-full w-full focus:outline-none px-[7px]'
          />
          <div
            className={`h-full flex items-center justify-center px-3 bg-nav-btn rounded-r-[3px] cursor-pointer`}
          >
            <img src={search} alt='search_icon' />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavTopCenter