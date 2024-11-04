import React from 'react'
import Navbar from './Navbar'
// import logo from '../../logo.svg'
import { Link, Outlet } from 'react-router-dom'; // Import Link component
import { GiSpellBook } from "react-icons/gi";
import Sidebar from './Sidebar';
import TeacherInfo from '../teacher/TeacherInfo';

const AdminLayout = () => {
  return (
    <div className='h-screen flex w-[102%]'>
      <div className="w-[15%] md:w-[8%] lg:w-[16%] xl:w-[14%]  border-e">
        <Link to="/" className={`flex items-center justify-center lg:justify-start gap-2 mt-1 textColor border-b h-[46px]`}>
          {/* <img src={logo} alt="logo" className='relative h-10 ' /> */}
          <GiSpellBook className='ms-2 text-2xl' />
          <span className='text-xl font-bold'>My School</span>
        </Link>
        <Sidebar />
      </div>
      <div className="w-[85%] md:w-[92%] lg:w-[84%]  xl:w-[86%] ">
        <Navbar />
        <TeacherInfo/>
        <Outlet  />
      </div>
    </div>
  )
}

export default AdminLayout