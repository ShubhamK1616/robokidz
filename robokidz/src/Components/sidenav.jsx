import React from 'react';
import DashboardIcon from 'remixicon-react/Dashboard3LineIcon';
import LabelIcon from 'remixicon-react/PrinterLineIcon';
import AddKitIcon from 'remixicon-react/LineChartLineIcon';
import {Link} from 'react-router-dom';

function Sidenav () {
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

return(
        <div className='bg-[#4e73df]' style={{width : "12%", height : "100%"}}>
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
)
}

export default Sidenav