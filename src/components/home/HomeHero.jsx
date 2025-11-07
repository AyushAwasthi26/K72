import React from 'react'
import Video from './video'

const HomeHero = () => {
  return (
    <div className='mt-[8vh] sm:mt-[5vh] md:mt-[0vh] font-[font1] pt-5 text-center'>
        <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>The Spark For</div>
        <div className='text-[9.5vw] justify-center flex items-center align-center uppercase leading-[8vw] gap-2'>All 
            <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-4'>
                <Video />
            </div>
            Things</div>
        <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>Creative</div>
    </div>
  )
}

export default HomeHero