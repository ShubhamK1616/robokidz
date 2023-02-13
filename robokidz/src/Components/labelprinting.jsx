import React from 'react'
import Dropdown from './dropdown'
import Pdrop from './Pdropdown'
import Table from './Table'
import Footer from './footer'
import Sidenav from './sidenav'
import Topnav from './Topnav'

function LabelPrinting () {

    const categoryArray = [
        {label : "Dropdown",
        value : "dropdown"
      },
      {
        label : "Tractor",
        value : "tractor"
      },
      {
        label : "JCB",
        value : "jcb"
      },
      {
        label : "Crane",
        value : "crane"
      }
      ]
      const classArray = [
        {label : "Dropdown",
        value : "dropdown"
      },
        {label : "1st",
        value : "first"
      },
      {
        label : "2nd",
        value : "second"
      },
      {
        label : "3rd",
        value : "third"
      }
      ]
      const printArray = [
        {label : "Dropdown",
        value : "dropdown"
      },
        {label : "10",
        value : "ten"
      },
      {
        label : "20",
        value : "twenty"
      },
      {
        label : "50",
        value : "fifty"
      },
      {
        label : "100",
        value : "hundred"
      }
      ]
return(
    //To set page for labelprinting



    <div className='w-screen h-screen flex'>
    <Sidenav />
  <div className='flex flex-col' style={{width : "88%"}}>
        <Topnav />
      <div className='bg-[#f8f9fc] px-10 overflow-scroll
      ' style={{height : "80%"}}>
         <div className='flex flex-col'>
        <h1 className='flex text-3xl font-normal justify-center text-[#5a5c69] gap-y-2 my-4'>Add Kit</h1>
       <div className='flex flex-col mt-10 justify-center'>
       <div className='bg-[#f8f9fc] px-10' style={{height : "80%"}}>
        <div className='flex flex-col'>
      <h1 className='flex text-3xl font-normal text-[#5a5c69] gap-y-2 my-4'>Label Print</h1>
      <div className='flex flex-row my-4'>
      <div className='flex items-center px-6'  style={{width : "33%"}}>
      <div className='' style={{width : "70%"}}><h3 className='text-xl'>Category</h3></div>
       <div className='text-[#00000080]' style={{width : "30%"}}><Pdrop options={categoryArray}/></div>
      </div>
      <div className='flex items-center px-6'  style={{width : "33%"}}>
      <div className='' style={{width : "70%"}}><h3 className='text-xl'>Class</h3 ></div>
       <div className='text-[#00000080]' style={{width : "30%"}}><Pdrop options={classArray}/></div>
      </div>
      <div className='flex items-center px-6'  style={{width : "33%"}}>
      <div className='' style={{width : "70%"}}><h3 className='text-xl'>Print Qty</h3></div>
       <div className='text-[#00000080]' style={{width : "30%"}}><Pdrop options={printArray}/></div>
      </div>
      </div>
      <div className='flex flex-row justify-center py-4'><button className='flex bg-[#4e73df] py-2 px-12 text-white rounded'>Print Label</button></div>
      <div><Table /></div>
        </div>
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

export default LabelPrinting