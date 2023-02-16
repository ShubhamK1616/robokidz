import React from 'react'
import Footer from './footer'
import Sidenav from './sidenav'
import Topnav from './Topnav'


function Addkit () {
  
  return (
    <div className='w-screen h-screen flex'>
          <Sidenav />
        <div className='flex flex-col w-[88%]'>
              <Topnav />
            <div className='bg-[#f8f9fc] px-10 h-[80%]'>
               <div className='flex flex-col'>
              <h1 className='flex text-xl md:text-3xl font-normal justify-center text-[#5a5c69] gap-y-2 my-4'>Add Kit</h1>
             <div className='flex flex-col mt-10 justify-center items-center'>
               <div className='flex flex-col gap-y-4 w-full max-w-md'>
                <input className='p-2 md:p-4 text-xs md:text-base border-[#6e707e] rounded-[10rem] focus:border-blue-300 outline-none border-2 focus:shadow-md' type="search" placeholder="Enter Serial No" aria-label="Search"></input>
               <button className='btn btn-primary border text-xs md:text-base bg-[#4e73df] p-2 md:p-4 rounded-[10rem] text-[#fff]' type="submit">Add</button>
               </div>
             </div>
             </div>
            </div>
            <div className='flex flex-wrap items-center h-[10%]'>
              <Footer />
            </div>
        </div>
    </div>
  )
}

export default Addkit