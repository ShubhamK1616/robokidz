import React from 'react'
import Pdrop from './Pdropdown'

function Table (props) {
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
return(
    <div className='container border rounded shadow-[#3a3b451a] z-10'>
    <div className='flex flex-col'>
      <div className='flex flex-row border py-3'><h1 className='text-[#4e73df] px-3 text-base font-bold'>Data Tables Example</h1></div>
      <div className='flex flex-row py-5 px-3'>
        <div className='flex' style={{width : "75%"}}>Show<Pdrop options={printArray}/> entries</div>
        <div className='' style={{width : "25%"}}>
        <label>Search: </label>
        <input className='border rounded' type="search" placeholder="" aria-label="Search"></input></div>
        
           

        </div>
      <div className='flex flex-row px-3'>
      <table class="table align-middle mb-0 bg-white w-full border">
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
{props?.tableData?.map(data => (<tr><td><img
        src={data.thumbnail}
        alt=""
        style={{width: `45px`, height: `45px`}}
        class="rounded-circle"
        /></td><td>{data?.brand}</td><td>{data?.title}</td><td>{data?.stock}</td><td>{data?.category}</td><td>{data.rating}</td>
 <td>
</td></tr>))}
</tbody>
</table>
      </div>
    </div>
    </div>
)
}

export default Table