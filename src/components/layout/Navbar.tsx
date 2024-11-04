import React from 'react';
import { FaSearch } from "react-icons/fa";
import { RiMessage3Line } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { InputAdornment, TextField } from '@mui/material';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 border-b h-[50px]'>
      {/* search Bar  */}
      <div className='w-50'>
        <TextField
          id="outlined-start-adornment"
          placeholder="Search..."
          variant="outlined"
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              padding: 0,
              height: '35px', // Fixed height for consistency
              boxSizing: 'border-box', // Ensures padding doesn't affect size
              '& fieldset': {
                borderColor: '#c0c0c0', // Default border color
              },
              '&:hover fieldset': {
                borderColor: 'darkorange', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#ea580c', // Border color on focus
              },
            },
            '& .MuiInputAdornment-root': {
              color: 'gray',
              paddingLeft: '8px', // Adjusts spacing of the icon
            },
            '& input': {
              padding: '5px',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
        />

       
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
          <span className='ps-1 h-[32px] w-[32px]'><RxAvatar className='h-[35px] w-[35px]  hover:text-orange-600 '/></span>
        </div>  
      </div>
    </div>
  );
};

export default Navbar;