import React from 'react'
import mobile from '../images/image-hero-mobile.png'
import desktop from '../images/image-hero-desktop.png'
import audiophile from '../images/client-audiophile.svg'
import databiz from '../images/client-databiz.svg'
import maker from '../images/client-maker.svg'
import meet from '../images/client-meet.svg'

const content = () => {
  return (
    <>
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

export default content