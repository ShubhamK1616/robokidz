import React from 'react'
import Pdrop from './Pdropdown'
import Pagination from './Pagination'
import { useState } from 'react'

function Table (props) {
  const [currentPageNumber, setCurrentPageNumber] = useState(1)

    const printArray = [
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
      const dataArray = [
        {sr : "1",
        date : "ten",
        category : "Heavy Vehicle",
        class : "Heavy",
        quantity : "1",
        printby : "printer"
      },
      {
        sr : "2",
        date : "twenty",
        category : "Heavy Vehicle",
        class : "Heavy",
        quantity : "1",
        printby : "printer"
      },
      {sr : "3",
      date : "thirty",
      category : "Heavy Vehicle",
      class : "Heavy",
      quantity : "1",
      printby : "printer"
      },
      {
        sr : "4",
        date : "forty",
        category : "Heavy Vehicle",
        class : "Heavy",
        quantity : "1",
        printby : "printer"
      },
      {
        sr : "5",
        date : "fifty",
        category : "Heavy Vehicle",
        class : "Heavy",
        quantity : "1",
        printby : "printer"
      }
      ]
return(
    <div className='container border rounded shadow'>
    <div className='flex flex-col'>
      <div className='flex flex-row border py-3'><h1 className='text-[#4e73df] px-3 text-base font-bold'>Data Tables Example</h1></div>
      <div className='flex flex-row py-5 px-3'>
        <div className='flex' style={{width : "75%"}}><p className=' px-2'>Show</p>  <Pdrop className='' options={printArray}/> <p className=' px-2'>entries</p> </div>
        <div className='' style={{width : "25%"}}>
        <label>Search: </label>
        <input className='border-2 rounded focus:border-blue-300 outline-none focus:shadow-md' type="search" placeholder="" aria-label="Search"></input></div>
        
           

        </div>
      <div className='flex flex-row px-3'>
      <table class="table align-middle mb-0 bg-white w-full border text-[#00000080]">
    <thead class="bg-light">
    <tr>
     <th className='border py-3'>Sr.No</th>
     <th className='border py-3'>Date</th>
     <th className='border py-3'>Category</th>
     <th className='border py-3'>Class</th>
     <th className='border py-3'>Quantity</th>
     <th className='border py-3'>Print By</th>
    </tr>
 </thead>
<tbody>
{/* {props?.tableData?.map(data => (<tr><td>{data?.sr}</td><td>{data?.date}</td><td>{data?.category}</td><td>{data?.quantity}</td><td>{data?.printby}</td>
 <td>
</td></tr>))} */}
    {dataArray.slice((currentPageNumber - 1) *1, (currentPageNumber * 1)).map((item,index)=>( (<tr ><td className=' text-center'>{item?.sr}</td><td className=' text-center'>{item?.date}</td><td className=' text-center'>{item?.category}</td><td className=' text-center'>{item?.class}</td><td className=' text-center'>{item?.quantity}</td><td className=' text-center'>{item?.printby}</td>
              <td>
             </td></tr>)
            ))}
    
</tbody>
<thead class="bg-light">
    <tr>
     <th className='border py-3'>Sr.No</th>
     <th className='border py-3'>Date</th>
     <th className='border py-3'>Category</th>
     <th className='border py-3'>Class</th>
     <th className='border py-3'>Quantity</th>
     <th className='border py-3'>Print By</th>
    </tr>
 </thead>
</table>

      </div>
      <div className='flex flex-row p-4'>
        {/* <div style={{width : "80%"}}>Showing 0 to 0 of 0 entries</div>

        <div className='flex flex-wrap' style={{width : "20%"}}>
        <a className=' px-4 py-3 border' href="#">Previous</a>
        <a className=' px-4 py-3 border' href="#">1</a>
        <a className=' px-4 py-3 border' href="#">2</a>
        <a className=' px-4 py-3 border' href="#">Next</a>
</div> */}
           <Pagination tableData={dataArray} currentPageNumber={currentPageNumber} setCurrentPageNumber={(pageNumber) => setCurrentPageNumber(pageNumber)}/>
     </div>
    </div>
    </div>
)
}

export default Table