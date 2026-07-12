import React, { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Agency from './pages/Agency'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'

import './index.css'
// 1. Import Lenis CSS to prevent weird layout jumps
import 'lenis/dist/lenis.css' 

// 2. Register ScrollTrigger at the top level
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const lenisRef = useRef()

  useEffect(() => {
    // 3. Sync Lenis's RAF with GSAP's ticker
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    // 4. Wrap the app. root={true} hijacks the native scroll. autoRaf={false} lets GSAP control the timing.
    <ReactLenis root options={{ lerp: 0.08, syncTouch: true }} ref={lenisRef} autoRaf={false}>
      <div className="text-6xl">
        <Navbar />
        <FullScreenNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/agency" element={<Agency />} />
        </Routes>
      </div>
    </ReactLenis>
  )
}

export default App