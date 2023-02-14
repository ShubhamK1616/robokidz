import { useState, Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropDownIcon from 'remixicon-react/ArrowDropDownLineIcon';
// import Logo from '../assets/images/th.png'
import ProfileIcon from 'remixicon-react/User3FillIcon';
import SettingsIcon from 'remixicon-react/Settings4LineIcon';
import LogtIcon from 'remixicon-react/LogoutBoxRLineIcon';
import ActivityIcon from 'remixicon-react/ListCheckIcon';
import logo from '../assets/images/th.png'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




export default function Dropdown() {

  const[ showProfileMenu, setshowProfileMenu ] = useState(false)

  const clickHandler = (e) => {
    setshowProfileMenu(!showProfileMenu)
};

  return (
  <div  className='relative inline-block text-left'>
    <h3 onClick={clickHandler} className="flex flex-row cursor-pointer justify-center items-center rounded-full w-full">Sagar S <img src={logo} alt="logo" style={{width : "40px", height : "30px"}}
     /></h3>
  
{ showProfileMenu &&   <div className='origin-top-right absolute right-0 mt-1 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
    <div className='p-2 text-[#5a5c69]'>
    <div className='flex py-1 px-2 gap-x-4'><ProfileIcon />Profile</div>
    <div className='flex py-1 px-2 gap-x-4'><SettingsIcon />Settings</div>
    <div className='flex py-1 px-2 gap-x-4'><ActivityIcon />Activity Log</div>
    <hr className='sidebar-divider' />
    <div className='flex py-1 px-2 gap-x-4'><LogtIcon />Logout</div>
    </div>
    </div>}
  </div>
  )
}