import React from 'react';
import Dropdown from './dropdown';
import SearchIcon from 'remixicon-react/SearchLineIcon';
import ProfileIcon from 'remixicon-react/User3FillIcon';

function Topnav () {
return(
        <>
        <div className=' md:hidden flex flex-row items-center px-9 shadow-lg shadow-[#3a3b451a] z-10 gap-x-6' style={{height : "8%"}}>
             <div className=' flex w-5/6 '></div>
             <div className=' flex w-1/12'><SearchIcon className=''/></div>
             <div className=' flex w-1/12 '><Dropdown /></div>

        </div>


        <div className=' hidden md:flex md:flex-wrap items-center px-9 shadow-lg shadow-[#3a3b451a] z-10' style={{height : "10%"}}>

              <div className='flex' style={{width : "90%"}}>              
                <form className='flex w-full max-w-lg'>
               <input className='mr-sm-2 py-1 px-2 rounded-l focus:border-blue-300 w-full outline-none border-2 focus:shadow-md' type="search" placeholder="Search for..." aria-label="Search"></input>
               <button className='btn btn-primary border rounded bg-[#4e73df] py-1 px-2' type="submit"><SearchIcon className='text-white'/></button>
               </form>
               </div>
               <div className='flex justify-center navbar-divider' style={{width : "10%"}}>
                <Dropdown />
               </div>

        </div>
        </>
)
}

export default Topnav