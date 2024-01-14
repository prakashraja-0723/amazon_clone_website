import React from 'react'
import amazon from '/src/assets/svg/amazon-white.svg';
import location from '/src/assets/svg/location.svg';


const NavTopLeft = () => {
  return (
    <>
      <div className='flex-shrink flex items-center justify-center gap-[24px]'>
        <div className={`pt-[6px]`}>
          <img src={amazon} alt='' />
        </div>
        <div className={`flex items-end gap-1`}>
          <div className={`h-[15px] pb-[18px]`}>
            <img src={location} alt='location_icon' />
          </div>
          <div className={`flex flex-col`}>
            <span className={`text-[12px] leading-[14px] text-neutral-300`}>
              Delivering to Salem 636007
            </span>
            <span className={`font-bold text-[14px] leading-[15px] text-white`}>
              Update location
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavTopLeft