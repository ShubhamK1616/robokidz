import React, { Children } from 'react'
import Accordion from './Accordion'
import { accordionData } from './Accordioncontent'

function Dashboard (props) {
return(
    <div className='bg-[#f8f9fc] px-10' style={{height : "80%"}}>
        <div className='flex flex-col'>
      <h1 className='flex text-3xl font-normal text-[#5a5c69] gap-y-2 my-4'>Videos</h1>
     <div className='flex flex-col gap-y-4 mt-10'>{accordionData.map(({ title, content }) => (
       <Accordion title={title} content={content} />
        ))}</div>
        </div>
    </div>
)
}

export default Dashboard