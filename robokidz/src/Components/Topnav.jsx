import React from 'react';
import Dropdown from './dropdown';
import SearchIcon from 'remixicon-react/SearchLineIcon';


function Topnav () {
        const [searchBarOpenCloseState,setSearchBarOpenCloseState] = React.useState(false)
        console.log(searchBarOpenCloseState)
return(
        <>
          {/* <div className={`md:hidden`}>
           <button className=' p-7 border text-[#4e73df]'><SearchIcon className=' text-black' onClick={()=>setSearchBarOpenCloseState(true)}/></button>
           </div> */}


        <div className='flex flex-wrap items-center px-9 shadow-lg shadow-[#3a3b451a] z-10 h-[8%] lg:h-[10%]'
        //  style={{height : "10%"}}
         >

              <div className='flex' 
              style={{width : "90%"}}
              >              
                <form className='flex w-full max-w-lg'>
               <input className=' mr-sm-2 py-1 px-2 rounded-l focus:border-blue-300 w-full outline-none border-2 focus:shadow-md hidden  md:flex' type="search" placeholder="Search for..." aria-label="Search"></input>
               <button className='btn btn-primary border rounded bg-[#4e73df] py-1 px-2 items-end hidden  md:flex'><SearchIcon className='text-white'/></button>
               <button className='flex md:hidden btn btn-primary border rounded bg-[#4e73df] py-1 px-2 items-end ml-[70%] lg:ml-0' onClick={(e)=>{e.preventDefault();setSearchBarOpenCloseState(!searchBarOpenCloseState)}}><SearchIcon className='text-white'/></button>
               </form>
               </div>
               <div className='flex justify-center lg:navbar-divider' 
               style={{width : "10%"}}
               >
                <Dropdown />
               </div>

        </div>
        {
        searchBarOpenCloseState &&<div className='flex'
        >              
          <form className='flex w-full max-w-lg my-3'>
         <input className='flex mr-sm-2 py-1 px-2 rounded-l focus:border-blue-300 w-full outline-none border-2 focus:shadow-md' type="search" placeholder="Search for..." aria-label="Search"></input>
         <button className='flex btn btn-primary border rounded bg-[#4e73df] py-1 px-2 items-end' type="submit"><SearchIcon className='text-white'/></button>
         
         </form>
         </div>
        }
        </>
)
}

export default Topnav