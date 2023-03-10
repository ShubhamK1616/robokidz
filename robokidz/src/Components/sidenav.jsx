import React from 'react';
import DashboardIcon from 'remixicon-react/Dashboard3LineIcon';
import LabelIcon from 'remixicon-react/PrinterLineIcon';
import AddKitIcon from 'remixicon-react/LineChartLineIcon';
import {Link} from 'react-router-dom';
import HambIcon from 'remixicon-react/MenuLineIcon';
import logoi from '../assets/images/Adjlogo1.png';



function Sidenav () {

  const [sideMenuOpenCloseState,setSideMenuOpenCloseState] = React.useState(false)
    const b2cArray = [
        {label : "Dashboard",
        icon : <DashboardIcon color='white'/>,
        icont: <DashboardIcon className=' mx-12 h-8 w-7' color='white'/>,
        link : "/dashboard" 
      },
      {
        label : "Add Kit",
        icon : <AddKitIcon color='white'/>,
        icont : <AddKitIcon className=' mx-12 h-8 w-7' color='white'/>,
        link : "/addkit" 
      }
      ]
      const b2bArray = [
        {label : "Dashboard",
        icon : <DashboardIcon color='white'/>,
        icont : <DashboardIcon className=' mx-12 h-8 w-7' color='white'/>,
        link : "/dashboard"
      }
      ]
      const adminArray = [
        {label : "Label Printing",
        icon : <LabelIcon color='white'/>,
        icont : <LabelIcon className=' mx-12 h-8 w-7' color='white'/>,
        link : "/labelprinting"
      }
      ]

return(<>
         <div className={`md:hidden`}>

          <button className='mx-2 my-4 p-2 border rounded-full text-[#4e73df]'><HambIcon onClick={()=>setSideMenuOpenCloseState(true)}/></button>
         </div>
        <div className='bg-[#4e73df] hidden md:flex md:flex-col w-[15%] h-[100%]'>
          <img className=' h-[10%] w-full lg:w-[85%] object-cover mx-auto' src={logoi} alt='logo' />
          <hr className='sidebar-divider' />
          <div className='sidebar-heading text-left'>B2C</div>  
          <div className='flex flex-col'>
            {b2cArray.map((item,index)=>(
              <Link className='flex lg:flex-row md:flex-col md:text-xs lg:text-sm xl:text-base p-4 md:p-2 lg:p-2 xl:p-4 text-white font-bold gap-x-4'to={item.link}>{item.icon}{item.label}</Link>
            ))}
            </div>
            <hr className='sidebar-divider' />
            <div className='sidebar-heading text-left'>B2B</div>  
          <div className='flex flex-col'>
            {b2bArray.map((item,index)=>(
              <Link className='flex lg:flex-row md:flex-col md:text-xs lg:text-sm xl:text-base p-4 md:p-2 lg:p-2 xl:p-4 text-white font-bold gap-x-4' to={item.link}>{item.icon}{item.label}</Link>
            ))}
            </div>
            <hr className='sidebar-divider' />
            <div className='sidebar-heading text-left'>ADMIN</div>  
          <div className='flex flex-col'>
            {adminArray.map((item,index)=>(
              <Link className='flex lg:flex-row md:flex-col md:text-xs lg:text-sm xl:text-base p-4 md:p-2 lg:p-2 xl:p-4  text-white font-bold gap-x-4' to={item.link}>{item.icon}{item.label}</Link>
            ))}
            </div>
          </div>
          {
            sideMenuOpenCloseState && <div className='bg-[#4e73df] absolute z-[20]' style={{width : "35%", height : "100%"}}>
              <div className='flex flex-row w-full'>
              <img className='flex w-4/5 h-[80px] ' src={logoi} alt='logo' />
              {/* <img className=' h-[10%] w-full lg:w-[85%] object-cover mx-auto' src={logoi} alt='logo' /> */}
              <div className='flex w-1/5 text-white'><HambIcon onClick={()=>setSideMenuOpenCloseState(false)}/></div>
              </div>
        
          <hr className='sidebar-divider' />
          <div className='sidebar-heading text-center'>B2C</div>  
          <div className='flex flex-col text-center'>
            {b2cArray.map((item,index)=>(
              <Link className=' px-2 text-white mb-2'to={item.link}>{item.icont}{item.label}</Link>
            ))}
            </div>
            <hr className='sidebar-divider' />
            <div className='sidebar-heading text-center'>B2B</div>  
          <div className='flex flex-col text-center'>
            {b2bArray.map((item,index)=>(
              <Link className='px-2 text-white mb-2' to={item.link}>{item.icont}{item.label}</Link>
            ))}
            </div>
            <hr className='sidebar-divider' />
            <div className='sidebar-heading text-center'>ADMIN</div>  
          <div className='flex flex-col text-center'>
            {adminArray.map((item,index)=>(
              <Link className='px-2 text-white mb-2' to={item.link}>{item.icont}{item.label}</Link>
            ))}
            </div>
            </div>
          }
          </>
)
}

export default Sidenav