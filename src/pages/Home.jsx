import React from 'react'
import Video from '../components/home/video'
import HomeHero from '../components/home/HomeHero'
import HomeBottom from '../components/home/HomeBottom'
import HomeMid from '../components/home/HomeMid'

export default function Home () {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 flex flex-col justify-between'>
        <HomeHero />
        <HomeMid />
        <HomeBottom />
      </div>
    </div>
  )
}


