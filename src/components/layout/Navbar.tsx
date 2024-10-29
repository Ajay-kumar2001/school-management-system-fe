import React from 'react';
import { FaSearch } from "react-icons/fa";
import { RiMessage3Line } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 border-b'>
      {/* search Bar  */}
      <div className='md:flex'>
        <div className='border border-gray-50-2 flex bg-white p-1 rounded-md'>
          <span className="flex items-center me-1">
            <FaSearch className="text-gray-200" />
          </span>
          <input type="text" placeholder="Search..." className='p-1' style={{border: "white"}} />
        </div>
       
      </div>
      {/* icons & User  */}
      <div className='flex items-center gap-4 '>
        <div className={`bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:text-orange-600`}>
          <RiMessage3Line className='text-3xl' />
        </div>
        <div className={`bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:text-orange-600`}>
          <GrAnnounce className='text-3xl' />
        </div>
        <div className='flex bg-white p-1 rounded items-center hover:cursor-pointer'>
          <div className='flex flex-col'>
            <span className='text-small leading-3 font-medium'>Kalyan</span>
            <span className='text-[12px] text-gray-500 text-right mt-1'>Admin</span>
          </div>
          <span className='ps-1 h-[32px] w-[32px]'><RxAvatar className='h-[35px] w-[35px] '/></span>
        </div>  
      </div>
    </div>
  );
};

export default Navbar;