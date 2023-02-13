import React from 'react'
import Footer from './footer'
import Sidenav from './sidenav'
import Topnav from './Topnav'
import Dashboard from './Dashboard'
import LabelPrinting from './labelprinting'


function Pageoutlay (props) {
  
  return (
    <div className='w-screen h-screen flex'>

          <Sidenav />
        <div className='flex flex-col' style={{width : "88%"}}>
              <Topnav />
            <Dashboard />
            {/* <LabelPrinting /> */}
            <div className='flex flex-wrap items-center' style={{height : "10%"}}>
              <Footer />
            </div>
        </div>
    </div>
  )
}

export default Pageoutlay