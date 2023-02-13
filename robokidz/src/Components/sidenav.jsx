import React from 'react';
import DashboardIcon from 'remixicon-react/Dashboard3LineIcon';
import LabelIcon from 'remixicon-react/PrinterLineIcon';
import AddKitIcon from 'remixicon-react/LineChartLineIcon';
import {Link} from 'react-router-dom';
import HambIcon from 'remixicon-react/MenuLineIcon';
import CloseIcon from 'remixicon-react/CloseLineIcon';

function Sidenav () {

  const [sideMenuOpenCloseState,setSideMenuOpenCloseState] = React.useState(false)
    const b2cArray = [
        {label : "Dashboard",
        icon : <DashboardIcon color='white'/>,
        link : "/dashboard" 
      },
      {
        label : "Add Kit",
        icon : <AddKitIcon color='white'/>,
        link : "/addkit" 
      }
      ]
      const b2bArray = [
        {label : "Dashboard",
        icon : <DashboardIcon color='white'/>,
        link : "/dashboard"
      }
      ]
      const adminArray = [
        {label : "Label Printing",
        icon : <LabelIcon color='white'/>,
        link : "/labelprinting"
      }
      ]

return(<>
         <div className={`md:hidden`}>
          <button><HambIcon onClick={()=>setSideMenuOpenCloseState(true)}/></button>
         </div>
        <div className='bg-[#4e73df] hidden md:flex md:flex-col' style={{width : "12%", height : "100%"}}>
          <img style={{height : "10%", width : "100%", objectFit : "cover"}} src='https://intranet.cyret.com/LMSDemo/img/small_logo.png' alt='logo' />
          <hr className='sidebar-divider' />
          <div className='sidebar-heading'>B2C</div>  
          <div className='flex flex-col'>
            {b2cArray.map((item,index)=>(
              <Link className='flex flex-row p-4 text-white font-bold gap-x-4'to={item.link}>{item.icon}{item.label}</Link>
            ))}
            </div>
            <hr className='sidebar-divider' />
            <div className='sidebar-heading'>B2B</div>  
          <div className='flex flex-col'>
            {b2bArray.map((item,index)=>(
              <Link className='flex flex-row p-4 text-white font-bold gap-x-4' to={item.link}>{item.icon}{item.label}</Link>
            ))}
            </div>
            <hr className='sidebar-divider' />
            <div className='sidebar-heading'>ADMIN</div>  
          <div className='flex flex-col'>
            {adminArray.map((item,index)=>(
              <Link className='flex flex-row p-4 text-white font-bold gap-x-4' to={item.link}>{item.icon}{item.label}</Link>
            ))}
            </div>
          </div>
          {
            sideMenuOpenCloseState && <div className='bg-blue-200 absolute z-[20]' style={{width : "50%", height : "100%"}}>
              <div className='flex flex-row w-full'>
              <img className='flex w-4/5' style={{ height : "130px", objectFit : "cover"}} src='https://intranet.cyret.com/LMSDemo/img/small_logo.png' alt='logo' />
              <div className='flex w-1/5'><CloseIcon onClick={()=>setSideMenuOpenCloseState(false)}/></div>
              </div>
              
          <hr className='sidebar-divider' />
          <div className='sidebar-heading'>B2C</div>  
          <div className='flex flex-col'>
            {b2cArray.map((item,index)=>(
              <Link className='flex flex-row p-4 text-white font-bold gap-x-4'to={item.link}>{item.icon}{item.label}</Link>
            ))}
            </div>
            <hr className='sidebar-divider' />
            <div className='sidebar-heading'>B2B</div>  
          <div className='flex flex-col'>
            {b2bArray.map((item,index)=>(
              <Link className='flex flex-row p-4 text-white font-bold gap-x-4' to={item.link}>{item.icon}{item.label}</Link>
            ))}
            </div>
            <hr className='sidebar-divider' />
            <div className='sidebar-heading'>ADMIN</div>  
          <div className='flex flex-col'>
            {adminArray.map((item,index)=>(
              <Link className='flex flex-row p-4 text-white font-bold gap-x-4' to={item.link}>{item.icon}{item.label}</Link>
            ))}
            </div>
            </div>
          }
          </>
)
}

export default Sidenav