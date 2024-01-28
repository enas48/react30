import React, { useState } from 'react'
import { useEffect } from 'react'
export default function Clock () {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    // Special magic when the toy is created!
    const timer =  setInterval(() => {
      setTime(new Date())
    }, 1000)
    return()=>clearInterval(timer)
  }, [time])
  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='bg-dark p-4 '>
        <h1 className='text-light text-center h-1 font-weight-bold mb-4'>
          Digital clock
        </h1>
        <div className='timer'>{time.toLocaleTimeString()}</div>
      </div>
    </div>
  )
}
