import React from 'react'

function Table (props) {
return(
    <div className='container border'>
    <div className='flex flex-col'>
      <div className='flex flex-row border'><h1>Data Tables Example</h1></div>
      <div className='flex flex-row'>row</div>
      <div className='flex flex-row'>
      <table class="table align-middle mb-0 bg-white w-full border">
    <thead class="bg-light">
    <tr>
     <th className='border'>Sr.No</th>
     <th className='border'>Name</th>
     <th className='border'>Title</th>
     <th className='border'>Stock</th>
     <th className='border'>Category</th>
     <th className='border'>Rating</th>
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
   <button  type="button" class="btn btn-link btn-sm btn-rounded">
     Edit
   </button>
   <button
          type="button"
          class="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
          >
     Delete
   </button>
</td></tr>))}
</tbody>
</table>
      </div>
    </div>
    </div>
)
}

export default Table