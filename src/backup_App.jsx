import mobile from './images/image-hero-mobile.png'
import desktop from './images/image-hero-desktop.png'
import audiophile from './images/client-audiophile.svg'
import databiz from './images/client-databiz.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'
import logo from './images/logo.svg'
import chevDown from './images/icon-arrow-down.svg'
import chevUp from './images/icon-arrow-up.svg'
import menuOpen from './images/icon-menu.svg'
import menuClose from './images/icon-close-menu.svg'
import todolist from './images/icon-todo.svg'
import calendar from './images/icon-calendar.svg'
import reminders from './images/icon-reminders.svg'
import planning from './images/icon-planning.svg'
import { useState } from 'react'


function App() {

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
    		<div class="navbar-backdrop hidden fixed inset-0 bg-gray-800 opacity-50 -z-10"></div>

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

        <section className='flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto '>
          <article className='text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0'>
            <h1 className='font-bold text-4xl lg:text-6xl xl:text-7xl mb-5 md:mb-16'>Make remote work</h1>
            <p className='mb-5 md:mb-16'>Get your team in sync, no matter your location. Streamline processes, 
                create team rituals, and watch productivity soar.
            </p>
            <button className='bg-black rounded-lg shadow text-white font-bold pt-3 pb-2 py-2 px-6 md:mb-16 cursor-pointer opacity-100 hover:text-black hover:border-2 hover:border-black hover:bg-transparent '>Learn more</button>
            <div className='grid grid-cols-4 mt-10 gap-1 place-items-center md:place-items-start opacity-100'>
              <div><img src={databiz} alt="" className='w-16 md:w-24' /></div>
              <div><img src={audiophile} alt="" className='w-16 md:w-24' /></div>
              <div><img src={meet} alt="" className='w-16 md:w-24' /></div>
              <div><img src={maker} alt="" className='w-16 md:w-24' /></div>
            </div>
          </article>

          <article>
            <picture>
              <source media='(min-width: 768px)' srcSet={desktop}/>
              <img src={mobile} className='w-full' />
            </picture>
          </article>
        </section>
    </>
  )
}

export default App
