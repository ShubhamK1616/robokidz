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


function Header() {
  
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
    <div className='w-screen h-screen flex'>
        <div className='bg-[#4e73df] w-[12%] h-[100%]'>
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
                <form className='form-inline inline-flex'>
               <input className='form-control mr-sm-2 border py-1 px-2 border-[#F1F5F9] rounded-l' type="search" placeholder="Search" aria-label="Search"></input>
               <button className='btn btn-primary border rounded bg-[#4e73df] py-1 px-2' type="submit"><SearchIcon className='text-white'/></button>
               </form>
               </div>
               <div className='flex justify-end navbar-divider' style={{width : "10%"}}>
                <Dropdown />
               </div>

              </div>
            <div className='bg-[#f8f9fc] px-10
            ' style={{height : "80%"}}>
               {/* <h1 className='flex px-8 text-3xl font-normal text-[#5a5c69]'>Videos</h1>
               <CardGrid /> */}
               <div className='flex flex-col'>
              <h1 className='flex text-3xl font-normal text-[#5a5c69] gap-y-2 my-4'>Videos</h1>
               {/* <div className="accordion">
                {accordionData.map(({ title, content }) => (
               <Accordion title={title} content={content} />
                ))}
             </div> */}
             <div className='flex flex-col gap-y-4 mt-10'>{accordionData.map(({ title, content }) => (
               <Accordion title={title} content={content} />
                ))}</div>
             </div>
            </div>
            <div className='flex flex-wrap items-center justify-center' style={{height : "10%"}}>
              <Footer />
            </div>
        </div>
    </div>
  )
}

export default Header