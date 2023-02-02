import React from 'react'

function Header() {
  return (
    // <div className='w-screen h-screen grid grid-cols-12 '>    
    //     <div className='col-span-2 bg-[#4e73df]'>1</div>
    //     <div className='col-span-10 grid grid-rows-6'>
    //         <div className='row-span-1 bg-red-300'>2</div>
    //         <div className='row-span-5 bg-green-300'>3</div>
    //     </div>
    // </div>
    <div className='w-screen h-screen flex'>
        <div className='bg-[#4e73df]' style={{width : "15%", height : "100%"}}><img style={{height : "15%", width : "100%"}} src='https://intranet.cyret.com/LMSDemo/img/small_logo.png' alt='logo' /></div>
        <div className='flex flex-col' style={{width : "85%"}}>
            <div className='' style={{height : "10%"}}></div>
            <div className='bg-[#f8f9fc]' style={{height : "90%"}}></div>
        </div>
    </div>
  )
}

export default Header