import React from 'react'
import DropDown from './DropDown'
import MainChart from './MainChart'

function LeftGraph() {
  return (
    <div className='w-4/6 bg-white rounded-xl p-5 '>

    <div className='flex justify-between'>
    <div className='flex flex-col gap-1 '>
        <h1 className='font-bold text-2xl font-oswald tracking-wide'>Overview</h1>
        <p className='text-sm font-oswald tracking-wide text-gray-500'>Monthly Earning</p>
    </div>
    <DropDown title={"Quaterly"}/>


    </div>

    <MainChart/>


    </div>
  )
}

export default LeftGraph