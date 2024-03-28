import React, { useState } from 'react'
import Header from './header/Header'
import { UserData } from '../../Data'
import InfoContainer from './profileInfo/InfoContainer'
import MainChart from './chart/MainChart'
import GraphData from './chart/GraphData'

function Dashboard() {


  return (
    <div className='flex flex-col w-5/6'>
      <Header/>

      <InfoContainer/>

      <GraphData/>  
    </div>

  )
}

export default Dashboard