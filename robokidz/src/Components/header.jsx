import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DashboardIcon from 'remixicon-react/Dashboard3LineIcon'

function Header() {
  
const b2cArray = [
  {label : "Dashboard",
  icon : <DashboardIcon color='white'/>
},
{
  label : "Add Kit",
  icon : <DashboardIcon color='white'/>
}
]
const b2bArray = [
  {label : "Dashboard",
  icon : <DashboardIcon color='white'/>
}
]
const adminArray = [
  {label : "Label Printing",
  icon : <DashboardIcon color='white'/>
}
]


  return (
    // <div className='w-screen h-screen grid grid-cols-12 '>    
    //     <div className='col-span-2 bg-[#4e73df]'>1</div>
    //     <div className='col-span-10 grid grid-rows-6'>
    //         <div className='row-span-1 bg-red-300'>2</div>
    //         <div className='row-span-5 bg-green-300'>3</div>
    //     </div>
    // </div>
    <div className='w-screen h-screen flex'>
        <div className='bg-[#4e73df]' style={{width : "15%", height : "100%"}}>
          <img style={{height : "15%", width : "100%"}} src='https://intranet.cyret.com/LMSDemo/img/small_logo.png' alt='logo' />
          <hr className='sidebar-divider' />
          <div className='sidebar-heading'>B2C</div>  
          <div className='flex flex-col'>
            {b2cArray.map((item,index)=>(
              <div className='flex flex-row px-4 py-1 text-white font-bold gap-x-4'>{item.icon}{item.label}</div>
            ))}
            </div>
            <div className='sidebar-heading'>B2B</div>  
          <div className='flex flex-col'>
            {b2bArray.map((item,index)=>(
              <div className='flex flex-row px-4 py-1 text-white font-bold gap-x-4'>{item.icon}{item.label}</div>
            ))}
            </div>
            <div className='sidebar-heading'>ADMIN</div>  
          <div className='flex flex-col'>
            {adminArray.map((item,index)=>(
              <div className='flex flex-row px-4 py-1 text-white font-bold gap-x-4'>{item.icon}{item.label}</div>
            ))}
            </div>
          </div>
        <div className='flex flex-col' style={{width : "85%"}}>
            <div className='' style={{height : "10%"}}></div>
            <div className='bg-[#f8f9fc]' style={{height : "90%"}}></div>
        </div>
    </div>
  )
}

export default Header