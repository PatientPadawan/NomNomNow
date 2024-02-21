'use client';

import React from 'react'
import Countdown from 'react-countdown';

const currentDate = new Date().getTime();
const endingDate = new Date(currentDate + 48 * 60 * 60 * 1000);

const CountdownClock = () => {
  return (
    <Countdown date={endingDate} className='font-bold text-yellow-300 text-5xl'/>
  )
}

export default CountdownClock