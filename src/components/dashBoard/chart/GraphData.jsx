import React from 'react'
import LeftGraph from './LeftGraph'
import RightGraph from './RightGraph'

function GraphData() {
  return (
    <div className='w-full  p-5 flex justify-between h-[50vh] gap-10'>
    <LeftGraph />
    <RightGraph/>
      
    </div>
  )
}

export default GraphData