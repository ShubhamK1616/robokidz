import React from 'react'
import {Link} from 'react-router-dom';
import CMImage from "../assets/images/register.png";
function Createac () {
return(<>
<div className='flex items-center h-screen w-screen bg-[#4e73df]'>
<div className="container mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6  bg-white rounded h-3/5 w-4/5 mx-auto my-12">
    <div className="hidden md:flex justify-center p-6">
        <img className=' w-4/5 md:w-full object-cover' src={CMImage} alt='logo' />
    </div>
    <div className="flex justify-center p-6 items-center gap-y-2">
        <div className='cm-register-form block w-full ml-10 md:ml-0'>
        <h1 className='flex text-2xl font-normal mb-3 md:justify-center '>Create an Account!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 md:w-full mb-3 gap-x-4'>
                <input className='p-2 border-[#d1d3e2] rounded-[10rem] focus:border-blue-300 outline-none border-2 focus:shadow-md mb-2 md:mb-0 text-xs md:text-base' type="search" placeholder="First Name" aria-label="Search"></input>
                <input className='p-2 border-[#d1d3e2] rounded-[10rem] focus:border-blue-300 outline-none border-2 focus:shadow-md text-xs md:text-base' type="search" placeholder="Last Name" aria-label="Search"></input>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 md:w-full mb-3 gap-x-4'>
                <input className='p-2 border-[#d1d3e2] rounded-[10rem] focus:border-blue-300 outline-none border-2 focus:shadow-md mb-2 md:mb-0 text-xs md:text-base' type="search" placeholder="Email Address" aria-label="Search"></input>
                <input className='p-2 border-[#d1d3e2] rounded-[10rem] focus:border-blue-300 outline-none border-2 focus:shadow-md text-xs md:text-base' type="search" placeholder="Mobile" aria-label="Search"></input>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 md:w-full mb-3 gap-x-4'>
                <input className='p-2 border-[#d1d3e2] rounded-[10rem] focus:border-blue-300 outline-none border-2 focus:shadow-md mb-2 md:mb-0 text-xs md:text-base' type="search" placeholder="Password" aria-label="Search"></input>
                <input className='p-2 border-[#d1d3e2] rounded-[10rem] focus:border-blue-300 outline-none border-2 focus:shadow-md text-xs md:text-base' type="search" placeholder="Repeat Password" aria-label="Search"></input>
            </div>
            <button className='flex flex-row w-4/5 text-xs md:text-base md:w-full py-2 rounded-2xl bg-[#4e73df] text-white  justify-center'>Register Account</button>
            <div className=' flex w-full border-b p-1 border-[#d1d3e2]'></div>
            <Link className='flex flex-row text-xs text-[#4e73df] md:justify-center' type="link" to={"/forgotpw"}>Forgot Password?</Link>
            <Link className='flex flex-row text-xs text-[#4e73df] md:justify-center' type="link" to={"/login"}>Already have an account? Login!</Link>
        </div>
    </div>
  </div>
</div>
</div>
    </>
)
}

export default Createac