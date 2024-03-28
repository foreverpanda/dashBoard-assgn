import React from 'react'
import TopContainer from './TopContainer'
import Profile from './Profile'

function SideBar() {
  return (
    <div className=' flex flex-col justify-between w-60 bg-blue-rgba text-sky-400 p-2 '>

      <TopContainer/>
      <Profile/>
    </div>
  )
}

export default SideBar