import { useState } from 'react'
import React from 'react'
import Graph from '../components/Graph'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'


const Dashboard = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  
  return (
    <div className='grid-container'>
      
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Graph />
    </div>
    
    
    
  )
}

export default Dashboard
