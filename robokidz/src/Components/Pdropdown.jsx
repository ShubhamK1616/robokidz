import React from 'react'
import form from 'react-router-dom'

function Pdrop (props) {
return(
    <form>
    <select className='outline-none bg-transparent'>
    {props.options.map((item,index)=>(
              <option className='flex flex-row p-4 font-bold gap-x-4 text-[#00000080]'>{item.label}</option>
            ))}
    </select>
  </form>
)
}

export default Pdrop