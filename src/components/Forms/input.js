import React from 'react'

const Input = ({leftIcon}) => {
  return (
    <div className='flex items-center space-x-2 border-2 border-vencru-stroke w-full px-2 py-6 h-3/4 border rounded-lg'>
        {leftIcon}
        <input type='search'className='outline-none text-vencru-darkgray text-sm ' placeholder='Search' />
    </div>
  )
}

export default Input
