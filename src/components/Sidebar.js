import React from 'react'
import 
{FaDiscourse,FaJava,FaPython,FaNetworkWired,FaAssistiveListeningSystems,FaReact}
 from 'react-icons/fa'
import {DiJavascript}from 'react-icons/di'
import {AiFillSetting,AiFillDatabase,AiFillProject}from 'react-icons/ai'
import './Sidebar.css';


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <FaDiscourse  className='icon_header'/> Courses
            </div>
            
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
            <a href="">
                <FaJava className='icon'/>
                </a>
                 Java 
                  
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <DiJavascript className='icon'/> JS
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <FaPython className='icon'/>Python 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaNetworkWired className='icon'/>Network
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaAssistiveListeningSystems className='icon'/> System Design
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <AiFillDatabase className='icon'/> Database
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaReact className='icon'/> React
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <AiFillProject className='icon'/> Project
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <AiFillSetting className='icon'/> Setting
                </a>
            </li>
        </ul>
        <div className='sidebar-content-filler'></div>
    </aside>
  )
}

export default Sidebar