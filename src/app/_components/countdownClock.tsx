'use client';

import React from 'react'
import Countdown from 'react-countdown';

const endingDate = new Date("2024-02-15");

const CountdownClock = () => {
  return (
    <Countdown date={endingDate} className='font-bold text-yellow-300 text-5xl'/>
  )
}

export default CountdownClock