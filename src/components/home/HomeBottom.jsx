import React from 'react'
import {Link} from 'react-router-dom'
import Time from './Time'

const HeroBottom = () => {
  return (
    <>
      <div className='hidden 2xl:flex items-center justify-center gap-2 font-[font2] text-[2vh] sm:text-[2.5vh] fixed bottom-[1.3%] left-[0.7%]'>
        <span className='mr-3'><img src="/svgs/Globe.svg" alt="globe" /></span>
        <span className='flex items-center justify-center'>MONTREAL_
          <Time />
        </span>
      </div>
      <div className='font-[font2] items-center justify-center flex gap-5 bg -mb-2.5'>
          <div className='mb-[3vh] sm:mb-0 h-[16vw]  sm:h-[7vw] border-3 border-white hover:border-[rgb(211,253,80)] hover:text-[rgb(211,253,80)] rounded-full px-8 flex justify-center items-center'><Link to="/projects"className='text-[7vw] uppercase whitespace-nowrap sm:mt-3'>Work</Link></div>
          <div className='mb-[3vh] sm:mb-0 h-[16vw]  sm:h-[7vw]  border-3 border-white hover:border-[rgb(211,253,80)] hover:text-[rgb(211,253,80)] rounded-full px-8 flex justify-center items-center'><Link to="/agency"className='text-[7vw] uppercase whitespace-nowrap sm:mt-3'>Agency</Link></div>
      </div>
    </>
  )
}

export default HeroBottom