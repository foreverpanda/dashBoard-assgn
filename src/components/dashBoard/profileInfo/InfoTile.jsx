import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
function InfoTile({data}) {

  var iconset = <FaArrowDown className='text-red-700 font-bold' />
  var fontCol = "text-red-700"
 

  if(data.loss === false)
  {
    iconset = <FaArrowUp className='text-green-700 font-bold'/>
    fontCol='text-green-700'
  }

  return (
      <div className='w-1/4 h-44 bg-white rounded-xl flex justify-center items-center gap-10'>
        
        <div className={` w-1/3 h-[12.5vh] ${data.bgCol} text-[4vw] flex justify-center items-center rounded-full `}>
          <p className={`${data.fontCol}`}>{data.icon}</p>
        </div>
        <div className='flex flex-col font-sans'>
          <p className='text-gray-500 '>{data.title}</p>
         <p className='text-[2vw] font-bold font-gilroy'> {data.amount}</p>
         <div className='flex gap-2 justify-center items-center'> 
         {iconset}
         <span className={`${fontCol} font-bold`}>{data.performance} </span>this month</div> 
        </div>

      </div>

  )
}

export default InfoTile