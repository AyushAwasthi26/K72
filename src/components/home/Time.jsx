import React, { useState, useEffect } from 'react'

const Time = () => {
  const [, setTick] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 1000)
    return () => clearInterval(interval)
  }, []) 

  return <span>{new Date().toLocaleTimeString('en-US', { hour12: false })}</span>
}

export default Time