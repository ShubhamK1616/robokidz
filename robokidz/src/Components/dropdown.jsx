import { useState, Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropDownIcon from 'remixicon-react/ArrowDropDownLineIcon';
// import Logo from '../assets/images/th.png'
import ProfileIcon from 'remixicon-react/User3FillIcon';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




export default function Dropdown() {

  const[ showProfileMenu, setshowProfileMenu ] = useState(false)

  const clickHandler = (e) => {
    setshowProfileMenu(!showProfileMenu)
};

  return (
    // <Menu as="div" className="relative inline-block text-left">
    //   <div>
    //     <Menu.Button className="flex w-full justify-center bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
    //       Sagar S

    //       <DropDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
    //     </Menu.Button>
    //   </div>

    //   <Transition
    //     as={Fragment}
    //     enter="transition ease-out duration-100"
    //     enterFrom="transform opacity-0 scale-95"
    //     enterTo="transform opacity-100 scale-100"
    //     leave="transition ease-in duration-75"
    //     leaveFrom="transform opacity-100 scale-100"
    //     leaveTo="transform opacity-0 scale-95"
    //   >
    //     <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //       <div className="py-1 flex flex-col">
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm'
    //               )}
    //             >
    //               Account settings
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm'
    //               )}
    //             >
    //               Support
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm'
    //               )}
    //             >
    //               License
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <form method="POST" action="#">
    //           <Menu.Item>
    //             {({ active }) => (
    //               <button
    //                 type="submit"
    //                 className={classNames(
    //                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                   'block w-full px-4 py-2 text-left text-sm'
    //                 )}
    //               >
    //                 Sign out
    //               </button>
    //             )}
    //           </Menu.Item>
    //         </form>
    //       </div>
    //     </Menu.Items>
    //   </Transition>
    // </Menu>
  // <select name="cars" id="cars">
  // <option value="volvo">Sagar S</option>
  // <option value="profile"><ProfileIcon />Profile</option>
  // <option value="settings">Settings</option>
  // <option value="activity">Activity Log</option>
  // <option value="logout">Logout</option>
  //  </select>
  <div  className='relative inline-block text-left'>
    <h3 onClick={clickHandler} className="flex flex-row cursor-pointer justify-center items-center rounded-full bg-vryno-theme-blue-secondary w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12">Sagar S</h3>
{ showProfileMenu &&   <div className='origin-top-right absolute right-0 mt-1 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
    <div className=''>Profile</div>
    <div className=''>Settings</div>
    <div className=''>Activity Log</div>
    <hr className='sidebar-divider' />
    <div className=''>Logout</div>
    </div>}
  </div>
  )
}