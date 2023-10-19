import React from 'react'
import 
{FaDiscourse,FaJava,FaPython,FaNetworkWired,FaAssistiveListeningSystems}
 from 'react-icons/fa'
import {DiJavascript1}from 'react-icons/di'
import {AiFillSetting,AiFillDatabase}from 'react-icons/ai'


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <FaDiscourse  className='icon_header'/> Courses
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaJava className='icon'/> Java
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <DiJavascript1 className='icon'/> JS
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaPython className='icon'/> Python
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
                    <AiFillSetting className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar