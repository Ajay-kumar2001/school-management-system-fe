import React, { useState } from 'react';
import SideBarMenu from '../../common/sideBarMenu';
import { GoHome } from "react-icons/go";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { PiExam } from "react-icons/pi";
import { MdAssignment } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const sideBarMenuItems = [
    { icon: GoHome, headline: "Home" },
    { icon: GiTeacher, headline: "Teacher" },
    {icon:PiStudent,headline:"Student"},
    {icon: RiParentLine, headline:"Parents"},
    {icon: GiNotebook, headline:"Subjects"},
    {icon: SiGoogleclassroom, headline:"Classes"},
    {icon: GiNotebook, headline:"Assignments"},
    {icon: PiExam, headline:"Exams"},
    {icon: MdAssignment, headline:"Results"},
    {icon: AiOutlineMessage, headline:"Massages"},
    {icon: GrAnnounce, headline:"Announcements"},
    {icon:null, headline:"OTHERS"},
    {icon: CgProfile, headline:"Profile"},
    {icon: AiOutlineSetting, headline:"Settings"},
    // {icon: RiLogoutCircleRLine,headline:"Logout"}
  ];

  return (
    <div className='flex flex-col ' style={{height: "92%"}}>
      <div className='flex-1 flex-col pl-4'>
        {sideBarMenuItems.map((item, index) => (
          <SideBarMenu
            key={index}
            headline={item.headline}
            Icon={item.icon}
            isActive={activeItem === item.headline}
            setActive={setActiveItem} />
        ))}
     </div>
      <div className='flex border-t'>
        <div
          className={`flex flex-row items-center py-1 pl-4 ${activeItem == "Logout" ? 'textColor font-semibold' : ''}`}
          onClick={() => setActiveItem("Logout")} // Only set active if clickable
        >  <Link to={"Logout"} className="flex flex-row items-center">
            <div className="pr-3">{<RiLogoutCircleRLine />}</div>
            {"Logout"}
          </Link>
        </div>        
       </div>
    </div>
  );
};

export default Sidebar;
