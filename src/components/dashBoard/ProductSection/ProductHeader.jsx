import React from 'react'
import SearchBar from '../header/SearchBar'
import DropDown from '../chart/DropDown'

function ProductHeader() {
  return (
    <div className='flex justify-between'>
    <h1 className='text-2xl font-bold font-oswald'>Product Sell</h1>
    <div className='flex gap-4'>
        <SearchBar/>
        <DropDown title={"Last 30 Days"}/>
    </div>
    

    </div>
  )
}

export default ProductHeader