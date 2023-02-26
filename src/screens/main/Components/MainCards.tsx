import React from 'react'
import MainCard from './MainCard'

const MainCards = () => {
  return (
    <div className='mt-20 grid grid-cols-4 grid-rows-2 gap-6'>
    <MainCard/>
    <MainCard/>
    <MainCard/>
    <MainCard/>
    </div>
  )
}

export default MainCards