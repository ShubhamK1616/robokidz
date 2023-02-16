import React from 'react'
import Footer from './footer'
import Sidenav from './sidenav'
import Topnav from './Topnav'
import Dashboard from './Dashboard'


function Pageoutlay (props) {
  
  return (
    <div className='w-screen h-screen flex'>

          <Sidenav />
        <div className='flex flex-col w-[85%]'>
              <Topnav />
            <Dashboard />
            <div className='flex flex-wrap items-center h-[10%]'>
              <Footer />
            </div>
        </div>
    </div>
  )
}

export default Pageoutlay