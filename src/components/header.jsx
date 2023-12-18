import React from 'react'

import logo from '../images/logo.svg'
import chevDown from '../images/icon-arrow-down.svg'
import chevUp from '../images/icon-arrow-up.svg'
import menuOpen from '../images/icon-menu.svg'
import menuClose from '../images/icon-close-menu.svg'
import todolist from '../images/icon-todo.svg'
import calendar from '../images/icon-calendar.svg'
import reminders from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'
import { useState } from 'react'

const header = () => {

    const [dropdownFeatures, setDropdownFeatures] = useState(false)
    const [dropdownCompany, setDropdownCompany] = useState(false)
  
  
    const openMenu = () => {
      const navbar = document.querySelector('.navbar')
      const menuBtn = document.querySelector('.menu-btn')
      const navBackdrop = document.querySelector('.navbar-backdrop')
  
      navbar.classList.toggle('open')
  
      if(navbar.classList.contains('open')) {
        menuBtn.src = menuClose
        navBackdrop.classList.remove('hidden')
      }
      else {
        menuBtn.src = menuOpen
        navBackdrop.classList.add('hidden')
  
      }
    }

  return (
    <>
        <div class="navbar-backdrop hidden fixed inset-0 bg-black opacity-50 -z-10"></div>

        <header className='p-5 flex items-center justify-between'>
          <div className='lg:flex lg:justify-start lg:items-start'>
              <img src={logo} alt="" className='lg:mr-5'/>
              <nav className='navbar lg:ml-10'>
              <div>
                  <button 
                  onClick={()=>{setDropdownFeatures(!dropdownFeatures)}} 
                  className='flex items-center justify-start mb-4 lg:mb-0'
                  >
                  Features {dropdownFeatures ? <img src={chevUp} alt="" className='ml-2'/> : <img src={chevDown} alt="" className='ml-2'/>}
                  </button>
                  {dropdownFeatures && <ul className='mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow lg:rounded-lg lg:bg-white'>
                  <li className='flex items-center justify-start text-sm mb-4'><img src={todolist} alt="" className='mr-2'/>Todo List</li>
                  <li className='flex items-center justify-start text-sm mb-4'><img src={calendar} alt="" className='mr-2'/>Calendar</li>
                  <li className='flex items-center justify-start text-sm mb-4'><img src={reminders} alt="" className='mr-2'/>Reminders</li>
                  <li className='flex items-center justify-start text-sm mb-4'><img src={planning} alt="" className='mr-2'/>Planning</li>
                  </ul>}
              </div>

              <div>
                  <button 
                  onClick={()=>{setDropdownCompany(!dropdownCompany)}} 
                  className='flex items-center justify-start mb-4 lg:mb-0'
                  >
                  Company {dropdownCompany ? <img src={chevUp} alt="" className='ml-2'/> : <img src={chevDown} alt="" className='ml-2'/>}
                  </button>
                  {dropdownCompany && <ul className='mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow lg:rounded-lg lg:bg-white'>
                  <li className='flex items-center justify-start text-sm mb-4'>History</li>
                  <li className='flex items-center justify-start text-sm mb-4'>Our Team</li>
                  <li className='flex items-center justify-start text-sm mb-4'>Blog</li>
                  </ul>}
              </div>

              <div className='mb-4 lg:mb-0'><button>Careers</button></div>
              <div><button>About</button></div>
              
              <div className="lg:hidden flex flex-col mt-16 lg:mt-0">
                  <button className='mb-5'>Login</button>
                  <button className='border-2 border-black py-2 px-6 rounded-2xl'>Register</button>
              </div>
              </nav>
          </div>

          <div className='lg:hidden'>
              <button onClick={openMenu} className='opacity-100'>
              <img src={menuOpen} alt="" className='menu-btn'/>
              </button>
          </div>

          <div className="hidden lg:block">
              <button className='mr-10'>Login</button>
              <button className='border-2 border-black py-2 px-6 rounded-2xl'>Register</button>
          </div>
        </header>
    </>
  )
}

export default header