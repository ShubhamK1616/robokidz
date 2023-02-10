import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DashboardIcon from 'remixicon-react/Dashboard3LineIcon'
import Dropdown from './dropdown'
import SearchIcon from 'remixicon-react/SearchLineIcon'
import LabelIcon from 'remixicon-react/PrinterLineIcon';
import AddKitIcon from 'remixicon-react/LineChartLineIcon';
import CardGrid from './Vcardgrid'
import Accordion from './Accordion'
import { accordionData } from './Accordioncontent'
import Footer from './footer'
import Sidenav from './sidenav'


function Addkit () {
  
const b2cArray = [
  {label : "Dashboard",
  icon : <DashboardIcon color='white'/>
},
{
  label : "Add Kit",
  icon : <AddKitIcon color='white'/>
}
]
const b2bArray = [
  {label : "Dashboard",
  icon : <DashboardIcon color='white'/>
}
]
const adminArray = [
  {label : "Label Printing",
  icon : <LabelIcon color='white'/>
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
        <div className='bg-[#4e73df]' style={{width : "12%", height : "100%"}}>
          <img style={{height : "10%", width : "100%", objectFit : "cover"}} src='https://intranet.cyret.com/LMSDemo/img/small_logo.png' alt='logo' />
          <hr className='sidebar-divider' />
          <div className='sidebar-heading'>B2C</div>  
          <div className='flex flex-col'>
            {b2cArray.map((item,index)=>(
              <div className='flex flex-row p-4 text-white font-bold gap-x-4'>{item.icon}{item.label}</div>
            ))}
            </div>
            <hr className='sidebar-divider' />
            <div className='sidebar-heading'>B2B</div>  
          <div className='flex flex-col'>
            {b2bArray.map((item,index)=>(
              <div className='flex flex-row p-4 text-white font-bold gap-x-4'>{item.icon}{item.label}</div>
            ))}
            </div>
            <hr className='sidebar-divider' />
            <div className='sidebar-heading'>ADMIN</div>  
          <div className='flex flex-col'>
            {adminArray.map((item,index)=>(
              <div className='flex flex-row p-4 text-white font-bold gap-x-4'>{item.icon}{item.label}</div>
            ))}
            </div>
          </div>
        <div className='flex flex-col' style={{width : "88%"}}>

            <div className='flex flex-wrap items-center px-9' style={{height : "10%"}}>
              <div className='flex' style={{width : "90%"}}>              
                <form className='inline-flex w-full max-w-md'>
               <input className='mr-sm-2 py-1 px-2 rounded-l focus:border-blue-300 w-full outline-none border-2 focus:shadow-md' type="search" placeholder="Search for..." aria-label="Search"></input>
               <button className='btn btn-primary border rounded bg-[#4e73df] py-1 px-2' type="submit"><SearchIcon className='text-white'/></button>
               </form>
               </div>
               <div className='flex justify-center navbar-divider' style={{width : "10%"}}>
                <Dropdown />
               </div>

              </div>
            <div className='bg-[#f8f9fc] px-10
            ' style={{height : "80%"}}>
               {/* <h1 className='flex px-8 text-3xl font-normal text-[#5a5c69]'>Videos</h1>
               <CardGrid /> */}
               <div className='flex flex-col'>
              <h1 className='flex text-3xl font-normal justify-center text-[#5a5c69] gap-y-2 my-4'>Add Kit</h1>
               {/* <div className="accordion">
                {accordionData.map(({ title, content }) => (
               <Accordion title={title} content={content} />
                ))}
             </div> */}
             <div className='flex flex-col mt-10 justify-center items-center'>
               <div className='flex flex-col gap-y-4 w-full max-w-md'>
                <input className='p-4 border-[#6e707e] rounded-[10rem] focus:border-blue-300 outline-none border-2 focus:shadow-md' type="search" placeholder="Enter Serial No" aria-label="Search"></input>
               <button className='btn btn-primary border bg-[#4e73df] p-4 rounded-[10rem] text-[#fff]' type="submit">Add</button>
               </div>
             </div>
             </div>
            </div>
            <div className='flex flex-wrap items-center' style={{height : "10%"}}>
              <Footer />
            </div>
        </div>
    </div>
  )
}

export default Addkit