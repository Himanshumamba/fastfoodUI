"use client"

import React from 'react'
import Countdown from 'react-countdown'
const CountDown = () => {
    const endingDate = new Date("2023-08-25")
  return (
  <Countdown className='font-bold text-4xl text-yellow-300 ' date={endingDate}/>
  )
}

export default CountDown