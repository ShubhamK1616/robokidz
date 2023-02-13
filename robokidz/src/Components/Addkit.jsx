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
import Topnav from './Topnav'


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
    <div className='w-screen h-screen flex'>
          <Sidenav />
        <div className='flex flex-col' style={{width : "88%"}}>
              <Topnav />
            <div className='bg-[#f8f9fc] px-10 overflow-scroll
            ' style={{height : "80%"}}>
               <div className='flex flex-col'>
              <h1 className='flex text-3xl font-normal justify-center text-[#5a5c69] gap-y-2 my-4'>Add Kit</h1>
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