import React from 'react'
// import Dropdown from './dropdown'
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
    <div className='w-screen h-screen flex'>
    <Sidenav />
  <div className='flex flex-col w-[85%]'>
        <Topnav />
      <div className='bg-[#f8f9fc] px-10 overflow-scroll h-[80]'>
         <div className='flex flex-col'>
       <div className='flex flex-col mt-10 justify-center'>
       <div className='bg-[#f8f9fc] px-10 h-[80%]'>
        <div className='flex flex-col'>
      <h1 className='flex text-xl lg:text-3xl font-normal text-[#5a5c69] gap-y-2 my-4'>Label Print</h1>
      <div className='flex flex-col lg:flex-row my-4 md:gap-x-5'>
      <div className='flex items-center p-0 lg:px-6 lg:w-1/3 w-full my-2 lg:my-0'>
      <div className=' lg:w-9/12 w-1/2'>
      <h3 className='text-xs lg:text-xl'>Category</h3></div>
       <div className='text-xs lg:text-xl text-[#00000080] lg:w-1/4 w-1/2'><Pdrop options={categoryArray}/></div>
      </div>
      <div className='flex items-center p-0 lg:px-6 lg:w-1/3 w-full  my-2 lg:my-0'>
      <div className=' lg:w-9/12 w-1/2'><h3 className='text-xs lg:text-xl'>Class</h3></div>
       <div className='text-xs lg:text-xl text-[#00000080] lg:w-1/4 w-1/2'><Pdrop options={classArray}/></div>
      </div>
      <div className='flex items-center p-0 lg:px-6 lg:w-1/3 w-full  my-2 lg:my-0'>
      <div className=' lg:w-9/12 w-1/2'><h3 className='text-xs lg:text-xl'>Print Qty</h3></div>
       <div className='text-xs lg:text-xl text-[#00000080] lg:w-1/4 w-1/2'><Pdrop options={printArray}/></div>
      </div>
      </div>
      <div className='flex flex-row justify-center py-4'><button className='flex bg-[#4e73df] py-2 px-12 text-white rounded text-xs lg:text-xl'>Print Label</button></div>
      <div><Table /></div>
        </div>
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

export default LabelPrinting