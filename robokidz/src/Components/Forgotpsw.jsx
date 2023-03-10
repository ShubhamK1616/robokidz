import React from 'react'
import {Link} from 'react-router-dom';
import Logimg from '../assets/images/logi.png'

function Forgotpw () {
return(
    <div className='flex h-screen w-screen bg-[#4e73df]'>
    <div className="container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  bg-white rounded h-3/5 w-4/5  lg:w-3/5 mx-auto my-12">
        <div className="hidden md:flex justify-center p-6">
            <img className=' w-4/5 md:w-full object-cover' src={Logimg} alt='logo' />
        </div>
        <div className="flex justify-center p-6 items-center gap-y-2">
            <div className='cm-register-form block w-full ml-10 md:ml-0'>
            <h1 className='flex text-xl md:text-2xl font-normal mb-3 md:justify-center px-1 md:px-0'>Forgot Your Password?</h1>
            <p className='flex md:w-3/4 w-full  md:justify-center mb-2 md:text-center md:mx-auto md:mb-6 text-base'>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                <div className='grid grid-cols-1  w-4/5 mb-2 md:mb-3 gap-x-4 md:mx-auto'>
                    <input className='p-2 border-[#d1d3e2] rounded-[10rem] focus:border-blue-300 outline-none border-2 focus:shadow-md mb-2 md:mb-0 text-xs md:text-base'type="search" placeholder="Enter Email Address..." aria-label="Search"></input>
                </div>
                <button className='flex flex-row w-4/5 py-2 text-xs md:text-base rounded-2xl bg-[#4e73df] text-white  justify-center md:mx-auto'>Register Account</button>
                <div className=' flex w-full border-b p-1 border-[#d1d3e2]'></div>
                <Link className='flex flex-row text-xs text-[#4e73df] lg:justify-center md:px-5' type="link" to={"/register"}>Create an Account!</Link>
                <Link className='flex flex-row text-xs text-[#4e73df] lg:justify-center md:px-5' type="link" to={"/login"}>Already have an account? Login!</Link>
            </div>
        </div>
      </div>
    </div>
    </div>
)
}

export default Forgotpw